import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.css';

import SearchForm from './components/SearchForm';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { fetchChars } from './store/actions';

function App(props) {
  const { fetchChars } = props;
  const [url, setUrl] = useState(
    'https://www.breakingbadapi.com/api/characters'
  );

  useEffect(() => {
    fetchChars(url);
  }, [fetchChars, url]);

  return (
    <>
      <div className='App'>
        <h1>Breaking Bad</h1>
        <div className='character-cards'>
          <SearchForm setUrl={setUrl} />
          {props.chars.map((char) => (
            <>
              <h1 key={char.id}>{`Name: ${char.name}`}</h1>
              <h3 key={char.id}>{`Nickname: ${char.nickname}`}</h3>
              <h3 key={char.id}>{`Character ID: ${char.char_id}`}</h3>
              <img width='200px' key={char.id} src={char.img} />
              <br></br>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

//searchForm '' ?  {props.chars.map((char) => (<h1 key={char.id}>{char.name}</h1> : {props.chars.filter((char) => if char.name.includes searchTerm return true)}

const mapStateToProps = (state) => {
  return {
    chars: state.chars,
  };
};

export default connect(mapStateToProps, { fetchChars })(App);
