import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;

  