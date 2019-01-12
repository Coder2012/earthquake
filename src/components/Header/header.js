import React from "react";
import Search from "../Search/search";
import Styles from './header.module.scss';

const Header = ({ magnitudeFilterHandler, magnitudeTypeFilterHandler }) => {
  return (
    <header className={Styles.filters}>
      <Search title={`magnitude`} filterHandler={magnitudeFilterHandler} />
      <Search title={`type`} filterHandler={magnitudeTypeFilterHandler} />
    </header>
  );
};

export default Header;
