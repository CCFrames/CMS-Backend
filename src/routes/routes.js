import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

const routes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import('../Demo/Welcome/Welcome'),
      loading: () => <Spin />,
    }),
    exact: true,
    meta: {
      title: 'Welcome to used Demmo',
    },
  },
  {
    path: '/demo',
    component: Loadable({
      loader: () => import('../Demo/Demo/Demo'),
      loading: () => <Spin />,
    }),
    exact: true,
    meta: {
      title: 'Demo',
    },
  },
  {
    path: '/one',
    component: Loadable({
      loader: () => import('../Demo/Demo/One'),
      loading: () => <Spin />,
    }),
    exact: true,
    meta: {
      title: 'Demo',
    },
  },
  {
    path: '/two',
    component: Loadable({
      loader: () => import('../Demo/Demo/Two'),
      loading: () => <Spin />,
    }),
    exact: true,
    meta: {
      title: 'Demo',
    },
  },
  {
    path: '/three',
    component: Loadable({
      loader: () => import('../Demo/Demo/Three'),
      loading: () => <Spin />,
    }),
    exact: true,
    meta: {
      title: 'Demo',
    },
  },
  {
    path: '/four',
    component: Loadable({
      loader: () => import('../Demo/Demo/Four'),
      loading: () => <Spin />,
    }),
    exact: true,
    meta: {
      title: 'Demo',
    },
  },
  {
    path: '/count',
    component: Loadable({
      loader: () => import('../Demo/Demo/Count'),
      loading: () => <Spin />,
    }),
    exact: true,
    meta: {
      title: 'Count',
    },
  },
];

export default routes;
