// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';

const Header = (props: { showSearch: boolean, handleSearchTermChange: Function, searchTerm: string }) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search Video" />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">
          Back
        </Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">
          Video Search
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

const mapStateToProps = state => ({
  showSearch: state.searchTerm
});

const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange: event => {
    dispatch(setSearchTerm(event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
