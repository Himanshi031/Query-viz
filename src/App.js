import React, { Suspense, lazy} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import Loader from "./components/loader/loader";
// import Home from "./pages/home/Home";
import { WorkDesk } from "./pages/workDesk";

const Home = lazy(() => import("./pages/home/Home"));
const Navbar = lazy(() => import("./components/navbar/navbar"));

function App() {
  return (
    <div className='App'>
      <Suspense
        fallback={
          <Loader />
        }
      >
        <Router>
            <Navbar/>
            {/* <Home/> */}
            <Routes>
               <Route exact path='/' element={<Home />} />
            {/* <Route path='/navbar' exact component={Navbar} /> */}
            {/* <Route path='/editor' exact component={WorkDesk} /> */}
               <Route exact path="/workspace" element={<WorkDesk/>} />
            </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;