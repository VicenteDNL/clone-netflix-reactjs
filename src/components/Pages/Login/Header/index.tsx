import './index.css';

import * as React from 'react';

import { ReactComponent as LogoSVG } from '../../../../assets/svg/logo_netflix.svg';

const Header: React.FC = () => (
  <div className="header-login">
    <div className="container-logo">
      <LogoSVG />
    </div>
  </div>
);

export default Header;
