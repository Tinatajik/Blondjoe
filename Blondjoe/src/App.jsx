import "./App.css";
import Header from "./component/header/Header";
import Main from "./component/main/Main";
import Navbar from "./component/navbar/Navbar";
import Sidebar from "./component/sidebar/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
