import React from "react";
import Search from "../Search/search";
import Styles from './header.module.scss';

const Header = ({ searchTermHandler, magnitudeFilterHandler, magnitudeTypeFilterHandler }) => {
  return (
    <header className={Styles.filters}>
      <Search searchTermHandler={searchTermHandler} title={`magnitude`} filterHandler={magnitudeFilterHandler} />
      <Search searchTermHandler={searchTermHandler} title={`type`} filterHandler={magnitudeTypeFilterHandler} />
    </header>
  );
};

export default Header;
