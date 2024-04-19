import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (

    <div>
      <Navbar />
      <hr />
      <div className="app-containt">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
