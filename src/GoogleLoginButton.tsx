import React, { useState } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLoginResponse } from 'react-google-login';

// Type for the user data you'll receive after successful login
interface UserProfile {
  name: string;
  email: string;
  imageUrl: string;
}

const GoogleLoginButton: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);

  // Success handler
  const handleLoginSuccess = (response: any) => {
    // In a real-world scenario, send the response.tokenId to your backend for authentication.
    const decodedUser = decodeGoogleResponse(response);
    setUser(decodedUser);
  };

  // Failure handler
  const handleLoginFailure = () => {
    console.error('Login Failure:');
  };

  // Decode the Google response to extract profile details
  const decodeGoogleResponse = (response: any): UserProfile => {
    // You can use a library like `jwt-decode` to decode the Google token if needed
    const userObj = response.credential;
    const decoded = JSON.parse(atob(userObj.split('.')[1])); // Decoding the token's payload
    return {
      name: decoded.name,
      email: decoded.email,
      imageUrl: decoded.picture,
    };
  };

  return (
  <GoogleOAuthProvider clientId='977857299843-s206voafmruptadejot90os2krjc2q2r.apps.googleusercontent.com'>
    <div>
      <h1>React OAuth with Google (TypeScript)</h1>

      {!user ? (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      ) : (
        <div>
          <h2>Welcome, {user.name}</h2>
          <img src={user.imageUrl} alt="Profile" />
        </div>
      )}
    </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
