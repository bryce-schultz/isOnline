import { useEffect } from 'react';
import './App.css';
import { useOnlineStatus } from './IsOnline';

function App() {

  const isOnline = useOnlineStatus();

  useEffect(() =>
  {
    if (isOnline) 
    {
      document.title = 'Online';
    } 
    else 
    {
      document.title = 'Offline';
    }
  }, [isOnline]);

  return (
    <>
      <div style=
      {{
        width: '100%',
        height: '100vh',

        justifyContent: 'center',
        alignItems: 'center',

        display: 'flex',
        flexDirection: 'column',

        backgroundColor: isOnline ? '#2ecc71' : '#e74c3c',
      }}>
        {isOnline ? <h1>Online</h1> : <h1>Offline</h1> }
      </div>
    </>
  );
}

export default App;
