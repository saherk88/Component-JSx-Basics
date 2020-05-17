import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePhoto from './profile/ProfilPhoto';
import FullName from './profile/FullName';
import Adress from './profile/Address';

const Profile = () => {
    return (
      <div className="App">
        <ProfilePhoto/>
        <FullName/>
        <Adress/>
      </div>
    );
   };

export default Profile;
