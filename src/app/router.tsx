import {createBrowserRouter} from 'react-router-dom';
import AppLayout from './AppLayout';
import HomePage from '../pages/HomePage';
import ProductDetails from '../pages/ProductDetails';
import NotFoundPage from '../pages/NotFoundPage';
import ProductPage from './../pages/ProductPage';
// import TermsAndConditonPage from './../pages/TermsAndConditonPage';s

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
            path: 'products-details',
            Component: ProductDetails,
         },
         // {
         //    path: 'terms-and-condition',
         //    Component: TermsAndConditonPage,
         // },
         {
            path: '*',
            Component: NotFoundPage,
         },
      ],
   },
]);
