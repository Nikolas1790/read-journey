import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { selectToken } from '../../redux/auth/selectorAuth';

export default function Layout() {
  const token = useSelector(selectToken);

  return (
    <div>
     {token ? <Header /> : null }
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />  
        </Suspense>
      </main> 
    </div>
  );
};
