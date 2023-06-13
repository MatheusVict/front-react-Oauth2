import './App.css'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import  axios from 'axios'
import { useStore } from './hooks/useStore';
import { Profile } from './Profile';

function App() {
  const setAuthData = useStore((state: any) => state.setAuthData)
  const clientID: string = import.meta.env.GOOGLE_ID_CLIENT
  console.log(clientID, 'oi')

  return (
   <>
    <GoogleOAuthProvider clientId=''>
      <div>
        hello
        <GoogleLogin
        /*Use one tap */
          useOneTap
          onSuccess={async (credentialResponse) => {
            const {data} = await axios.post('http://localhost:3001/login', {
              token: credentialResponse.credential
            })
            console.log(JSON.stringify(data))
            
            localStorage.setItem('authData', JSON.stringify(data))

            setAuthData(data)
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />;  
      </div>
      <Profile/>
    </GoogleOAuthProvider>
   </>
  )
}

export default App
