import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Welcome to default React App Page</p>
      </header>
    </div>
  );
}

export default withAuthenticator(App, true);
