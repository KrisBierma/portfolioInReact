import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Firebase, { FirebaseContext } from './components/Firebase';
// import { FirebaseDatabaseProvider } from '@react-firebase/database';

ReactDOM.render(
  // <FirebaseContext.Provider value={new Firebase()}>
  // <FirebaseDatabaseProvider firebase={Firebase}>
    // <App />
  // </FirebaseDatabaseProvider>,
    <App />,
  // </FirebaseContext.Provider>, 
  document.getElementById('root')
);
