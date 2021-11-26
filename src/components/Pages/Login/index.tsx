import './index.css';

import React from 'react';

import backgroundlogin from '../../../assets/img/background_login.jpg';
import Body from './Body';
import Header from './Header';

const Login: React.FC = () => {
  const stylebackground = {
    backgroundImage: `url(${backgroundlogin})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#111',
  };
  return (
    <section className="login-section" style={stylebackground}>
      <div className="login-body">
        <Header />
        <Body />
      </div>
    </section>
  );
};

export default Login;
