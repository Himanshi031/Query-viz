import Navbar from "../../components/navbar/navbar";
import { WorkDesk } from "../workDesk";
import "./button.css"
import "./home.css";
import { Link} from "react-router-dom";
// import { WorkDesk } from "../workDesk";
// import Navbar from '../../components/navbar/navbar'

const Home = () => {
  return (
    <div className="home-background">
      {/* <Navbar/> */}
      <div className='home-container'>
        <div className='home-heading-container'>
          {/* <Navbar/> */}
          <h1 className='home-heading'>My SQL Editor{<br/>}</h1>
          <h2 className='blue'>
          Write, Execute, and Dominate SQL with Ease.
          </h2>
          <Link to="/workspace">
            <button style={{ margin: "20px" }} className="custom-btn btn-3"><span>
              Start Coding Now
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

// https://atlan-front-end-assignment.vercel.app/editor