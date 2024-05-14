import ErrorPage from '@/pages/ErrorPage';
import AppLayout from '@/layout/AppLayout';
import { lazy } from 'react';

// 快速导入工具函数
const lazyLoad = (moduleName) =>
  lazy(() => import(`@/pages/${moduleName}/index.jsx`));

const Home = lazyLoad('Home');
const ReduxToolkitDemo = lazyLoad('ReduxToolkitDemo');
const ReactQueryDemo = lazyLoad('ReactQueryDemo');
const ClassName = lazyLoad('ClassName');

console.log(ClassName, 'ClassName');

const routers = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    meta: {
      title: '',
    },
    children: [
      {
        path: 'home',
        element: <Home />,
        meta: {
          title: 'Home',
        },
      },
      {
        path: 'className',
        element: <ClassName />,
        meta: {
          title: 'Class Name',
        },
      },
      {
        path: 'toolkit',
        element: <ReduxToolkitDemo />,
        meta: {
          title: 'React Toolkit',
        },
      },
      {
        path: 'query',
        element: <ReactQueryDemo />,
        meta: {
          title: 'React Query',
        },
      },
    ],
  },
];

export default routers;
