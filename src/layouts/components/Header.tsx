import React from 'react';
import '../styles/Header.scss';
import { Layout } from 'antd';

const Header = () => {
  return (
    <Layout.Header className="flex fixed right-0 left-[245px] z-[99] shadow-md bg-white h-[60px] py-0 px-4">
      Header
    </Layout.Header>
  );
};

export default Header;
