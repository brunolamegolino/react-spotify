import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import backgroundImage from '../../assets/images/app-intro-1.jpg';

import Loading from '../../components/Loading/Loading';

const AuthorizeRoute = () => {
  const isLogged = useSelector(state => state.user.status);


  if (isLogged === 'success') {
    return (<Redirect to={{ pathname: '/dashboard' }} />);
  }

  return (
    <div
      className="callback"
      data-testid="callback"
      style={{backgroundImage: `url(${backgroundImage})`}}
    >
      <div className="container">
        <Loading text="Autenticando..." />
      </div>
    </div>
  );
}

export default AuthorizeRoute;

