import './index.css';

import React from 'react';

// import { useNavigate } from 'react-router-dom';
import backgroundlogin from '../../../assets/img/background_notfound.jpg';
// import { Button } from '@mui/material'
import Header from '../../Shared/NavBar';

const NotFound: React.FC = () => {
  // const navigate = useNavigate();
  const stylebackground = {
    backgroundImage: `url(${backgroundlogin})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#111',
  };

  return (
    <section className="login-section" style={stylebackground}>
      <Header />
      <div className="container-notfound">
        <h1>Você se perdeu?</h1>
        <span>Infelizmente, não localizamos essa página.</span>
        <span> Você encontra muitos outros títulos na página inicial.</span>
        {/* <Button
                     variant='text'
                     size="large"
                     color="primary"
                     className='button-notfound'
                     onClick={() => {
                        navigate('/')
                      }}
                >
                    Página incial da Netflix
                </Button> */}
      </div>
    </section>
  );
};

export default NotFound;
