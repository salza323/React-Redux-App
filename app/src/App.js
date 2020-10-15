import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import './App.css';

import SearchForm from './components/SearchForm';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { fetchChars } from './store/actions';

function App(props) {
  const { fetchChars } = props;
  const [url, setUrl] = useState(
    'https://www.breakingbadapi.com/api/characters'
  );

  const [filteredChars, setFilteredChars] = useState(props.chars);

  const renderLoader = () => {
    return (
      <div>
        <Loader
          type='Puff'
          color='#00BFFF'
          height={15}
          width={115}
          timeout={30000} //3 secs
        />
      </div>
    );
  };

  useEffect(() => {
    fetchChars(url);
  }, [fetchChars, url]);

  useEffect(() => {
    let newArray = props.chars.filter((specificChar) => {
      return specificChar.name
        .toLowerCase()
        .includes(props.searchTerm.toLowerCase());
    });
    setFilteredChars(newArray);
  }, [props.chars, props.searchTerm]);

  return (
    <>
      <div className='App'>
        <h1>Breaking Bad</h1>
        <div className='character-cards'>
          <SearchForm setUrl={setUrl} />
          {props.isLoading
            ? renderLoader()
            : filteredChars.map((char, idx) => (
                <div className='character-info' key={idx}>
                  <h1>{`Name: ${char.name}`}</h1>
                  <h3>{`Nickname: ${char.nickname}`}</h3>
                  <h3>{`Character ID: ${char.char_id}`}</h3>
                  <h3>{`Portrayed by: ${char.portrayed}`}</h3>
                  <img width='200px' src={char.img} alt='character snapshot' />
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    chars: state.chars,
    searchTerm: state.searchTerm,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchChars })(App);
