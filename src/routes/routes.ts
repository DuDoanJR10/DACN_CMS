import React from 'react';
import configs from 'configs';

const Home = React.lazy(() => import('pages/Home/views/Home'));
const Category = React.lazy(() => import('pages/Category/views/Category'));
const Bill = React.lazy(() => import('pages/Bill/views/Bill'));
const NotFound = React.lazy(() => import('pages/NotFound/NotFound'));

const routes = [
  {
    path: configs.routes.notFound,
    element: NotFound,
    name: 'Not Found',
  },
  {
    path: configs.routes.home,
    element: Home,
    name: 'Trang chủ',
  },
  {
    path: configs.routes.category,
    element: Category,
    name: 'Danh mục',
  },
  {
    path: configs.routes.bill,
    element: Bill,
    name: 'Hoá đơn',
  },
];

export default routes;
