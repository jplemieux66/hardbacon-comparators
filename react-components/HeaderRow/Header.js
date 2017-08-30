import React, { Component } from 'react';
import TooltipButton from './../TooltipButton/TooltipButton';
import PropTypes from 'prop-types';

const Header = ({label, description}) => (
  <th>
    {label}
    <br/>
    {
      description != undefined ? <TooltipButton content={description} isMobile={false}/> : undefined
    }
  </th>
);

Header.propTypes = {
  description: PropTypes.string,
  label: PropTypes.string
}

export default Header;