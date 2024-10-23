import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Public from "./routes/Public";
import Home from "./pages/Home";
import MyProfile from "./pages";
import BlogCatGrid from "./components/BlogCategoryGrid";
import SinglePostRight from "./components/SinglePostRight/Index";

import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgotpass from "./pages/Forgotpassword";
import ResetPass from "./pages/Resetpass";
import PageNoTFound from "./pages/Resetpass";
function App() {
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route path="/myprofile" element={<Public element={<MyProfile />} />} />
      <Route path="/BlogCategoryGrid" element={<Public element={<BlogCatGrid/>} />} />
      <Route path="/SinglePostRight" element={<Public element={<SinglePostRight/>} />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Public element={<Home />} />} />
      <Route path="/contact" element={<Public element={<Contact></Contact>} />} />
      <Route path="/login" element={<Public element={<Login></Login>} />} />
      <Route path="/register" element={<Public element={<Register></Register>} />} />
      <Route path="/forgotpass" element={<Public element={<Forgotpass></Forgotpass>} />} />
      <Route path="/resetpass" element={<Public element={<ResetPass></ResetPass>} />} />
      <Route path="*" element={<Public element={<PageNoTFound></PageNoTFound>} />} />
    </Routes>
  );
}
export default App;
