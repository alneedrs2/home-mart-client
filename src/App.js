import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Header from "./Shared/Header/Header";
import NotFound from "./Shared/NotFound/NotFound";
import "react-toastify/dist/ReactToastify.css";
import ToolDetails from "./Pages/ToolDetails/ToolDetails";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/tool/:toolId"
          element={<ToolDetails></ToolDetails>}
        ></Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyOrders></MyOrders>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
