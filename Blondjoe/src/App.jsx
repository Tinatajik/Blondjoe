import "./App.css";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Navbar from "./component/navbar/Navbar";
import Products from "./component/products/Products";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="fixed top-0 bg-[#202124] w-full z-20">
        <Header />
        <Navbar />
      </div>
      <Sidebar />
      <div className="mt-36 z-0">
        <Main />
        <Products />
      </div>
    </>
  );
}

export default App;
