import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navbar = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="favorites">
        <Link to="/favorites">Favorites</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
