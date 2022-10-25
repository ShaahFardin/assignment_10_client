import { RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Components/Layout/Main";
import { router } from "./Components/Routes/Routes";

function App() {
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
