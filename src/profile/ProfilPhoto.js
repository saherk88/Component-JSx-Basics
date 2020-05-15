import React from 'react';
import Light from "../Light.jpg";

const ProfilePhoto = () => {
    return (
        <div>
            <div className = "profile" style ={{backgroundColor: 'pink',
        width : '300px', margin : ' 3px auto'}}>
            <p>Profile Photo</p>
            </div>
            <img src={Light} style ={{width : '300px'}} />
            
        </div>
    )
}
export default ProfilePhoto;