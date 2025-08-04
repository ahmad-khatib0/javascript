import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom'
import ErrorPage from './pages/Error'

import HomePage from './pages/Home'
import ProductDetailPage from './pages/ProductDetail'
import ProductsPage from './pages/Products'
import RootLayout from './pages/Root'

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // set this to true. This turns this route into a so-called index route, which simply means it's
      // the default route that should be displayed if the parent route's path is currently active.
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
    ],
  },
])

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />
}

export default App
