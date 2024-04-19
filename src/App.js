import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from 'react-router-dom'
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Orders/Order";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (

    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-containt">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
