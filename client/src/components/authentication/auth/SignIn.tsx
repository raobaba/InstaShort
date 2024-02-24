import React from 'react';
import MetaData from '../../shared/MetaData';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png'

const SignIn: React.FC = () => {
  return (
    <>
      <MetaData title={'InstaShort | Sign-In'} />
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="w-1/3 h-5/6 justify-center rounded-xl max-h-full border shadow-md">
        <img src={Logo} alt="" className="w-8 h-8 rounded-full" />
          <Link to={'/sign-up'}>SignIn</Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
