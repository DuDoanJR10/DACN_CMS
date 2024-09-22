import React, { Suspense, useEffect } from 'react';
import { Layout, Spin } from 'antd';
import routes from 'routes/routes';
import SidebarAdmin from './components/SidebarAdmin';
import { isLogin } from 'utils/jwt';
import { Navigate, useNavigate } from 'react-router-dom';
const Header = React.lazy(() => import('./components/Header'));
const PermissionContent = React.lazy(() => import('middleware/PermissionContent'));

const { Content } = Layout;

const DefaultLayout = () => {
  const navigate = useNavigate();
  const authLogged = isLogin();

  // useEffect(() => {
  //   if (!authLogged) {
  //     navigate('login');
  //   }
  // }, [authLogged, navigate]);
  return true || authLogged ? (
    <Layout className="min-h-screen flex-row">
      <Suspense fallback={<Spin />}>
        <SidebarAdmin />
      </Suspense>
      <Layout className="ml-[245px]">
        <Header />
        <Content className="mt-[60px] p-6">
          <Suspense fallback={<Spin />}>
            <PermissionContent routes={routes} />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  ) : (
    <Navigate to="login" />
  );
};

export default DefaultLayout;
