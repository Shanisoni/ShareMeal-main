import AppRoutes from './AppRoutes';

import Header from './components/Header/Header';

import Loading from './components/Loading/Loading';

import { useLoading } from './hooks/useLoading';

// import { setErrorInterceptor } from './interceptors/errorInterceptor';
// import { setLoadingInterceptor } from './interceptors/loadingInterceptor';
import { useEffect } from 'react';
import './App.css';
// import Contact from './components/contact';

function App() {
  const { showLoading, hideLoading } = useLoading();

  useEffect(() => {
    showLoading();
    hideLoading();
  }, [showLoading, hideLoading]);
  

  return (
    <div className='appContainer'>
      <Loading />
      <Header />
      <AppRoutes />
     
   </div>
  );
}

export default App;
