


import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="overlay">
        <h1>Welcome to Plantique </h1>


   <p className="shop-description">
  Welcome to GreenNest — your destination for vibrant, easy-care houseplants and stylish pots. 
  Whether you're a beginner or a seasoned plant lover, we offer handpicked greenery and expert care tips to help you grow your indoor oasis.
</p>

     
        <Link to="/products">
          <button className="btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

