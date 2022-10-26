import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import './UserDetails.css'

const UserDetails = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
      <div style={{ marginTop: "150px" }} className="border p-5 pt-2 info">
        <h3 className="mb-5">User Details</h3>
        {user?.photoURL ? (
          <Image
            style={{ height: "150px" , color:"red"}}
            roundedCircle
            src={user?.photoURL}
            
          ></Image>
        ) : (
          <FaUser style={{ fontSize: "100px" }}></FaUser>
        )}
        <div className="mt-4 info" >
          <p>Name: {user?.displayName}</p>
          <p>Email address : {user?.email}</p>
          <p>Phone Number: {user?.phoneNumber}</p>
          <p>Email Verified: {user?.emailVerified}</p>
        </div>
      </div>
    );
};

export default UserDetails;