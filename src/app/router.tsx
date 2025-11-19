import {createBrowserRouter} from 'react-router-dom';
import AppLayout from './AppLayout';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductPage from './../pages/ProductPage';

export const router = createBrowserRouter([
   {
      path: '/',
      Component: AppLayout,
      children: [
         {
            index: true,
            Component: HomePage,
         },
           {
            path: 'products',
            Component: ProductPage,
         },
         {
            path: '*',
            Component: NotFoundPage,
         },
      ],
   },
]);