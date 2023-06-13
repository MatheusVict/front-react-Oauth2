import { ReactNode } from 'react';
import { useStore } from '../hooks/useStore';
import { googleLogout } from '@react-oauth/google';

export function Profile() {
  const {authData, setAuthData} = useStore()
  return (
    <>
      {authData && authData?.name &&(<>
        <h1>Profile</h1>
        <h3>{authData.name}</h3>
        <img src={authData.image} alt="" />
      </>)}
     <button onClick={() => {
        googleLogout()
        localStorage.setItem('authData', '{}')
        setAuthData({})
      }}>logout</button>
      
    </>
  );
}
