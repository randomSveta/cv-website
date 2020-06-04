import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import './styles/css/app.css';
import LoadingPage from './components/shared/LoadingPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    isLoading ? <LoadingPage /> : <Main />
  );
}

