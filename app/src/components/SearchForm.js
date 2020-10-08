import React, { useState } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('Search By ID');

  const handleChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setUrl(`https://www.breakingbadapi.com/api/characters/${searchTerm}`);
  };

  //store entire list &

  const renderLoader = () => {
    return (
      <>
        <Loader
          type='puff'
          color='#00BFFF'
          height={15}
          width={115}
          timeout={30000} //3 secs
        />
      </>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChanges} value={searchTerm} />
      <button>{props.isLoading ? renderLoader() : 'Search'}</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, {})(SearchForm);
