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
import Reviews from "./Pages/Home/AllReview/Reviews";
import RequireAuth from "./Pages/Login/RequireAuth";
import Users from "./Pages/Dashboard/Users";
import AddTool from "./Pages/Dashboard/AddTool";
import MyProfile from "./Pages/Dashboard/MyProfile";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import ManageTool from "./Pages/Dashboard/ManageTool";
import AddReview from "./Pages/Dashboard/AddReview";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route
          path="/tool/:toolId"
          element={
            <RequireAuth>
              <ToolDetails></ToolDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="addTool" element={<AddTool></AddTool>}></Route>
          <Route path="manageOrder" element={<ManageOrder></ManageOrder>}></Route>
          <Route path="manageTool" element={<ManageTool></ManageTool>}></Route>
          <Route path="myProfile" element={<MyProfile></MyProfile>}></Route>
          <Route path="addTool" element={<AddTool></AddTool>}></Route>
          <Route path="addTool" element={<AddTool></AddTool>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
