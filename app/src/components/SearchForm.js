import React from 'react';
import { connect } from 'react-redux';

import { handleChanges } from '../store/actions';

const SearchForm = (props) => {
  return (
    <form>
      <input
        type='text'
        onChange={(e) => props.handleChanges(e)}
        value={props.searchTerm}
      />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
  };
};

export default connect(mapStateToProps, { handleChanges })(SearchForm);
