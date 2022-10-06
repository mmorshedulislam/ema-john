import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layouts/Main";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import { ProductsAndCartLoads } from "./loaders/ProductsAndCartLoads";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop />,
        },
        {
          path: "/orders",
          loader: ProductsAndCartLoads,
          element: <Orders />,
        },
        {
          path: "/inventory",
          element: <Inventory />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
