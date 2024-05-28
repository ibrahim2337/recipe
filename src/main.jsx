import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from './provider/AuthProvider.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </div>
);
