import React from 'react';

import loadingSpinner from '../../../assets/img/loading_spinner.gif';

// interface LoadingProps {}

const Loading: React.FC = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#000000',
    }}>
    <img src={loadingSpinner} alt="loading" style={{ height: '250px' }} />
  </div>
);

export default Loading;
