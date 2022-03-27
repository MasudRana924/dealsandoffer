import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './pages/shared/Header';
import Home from './pages/Home/Home';
import Footer from "./pages/shared/Footer/Footer";
import Lognin from './pages/login/Login';
import SignUp from './pages/login/SignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Lognin />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          

        </Routes>
        <Footer></Footer>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
