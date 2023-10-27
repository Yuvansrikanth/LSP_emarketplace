import React from "react";
import "./Firstimg.css";
import lawimg from './law.jpg';
function Firstimg() {
  return (
    <>
    <div className="First-img">
        <img className="img" alt = "img" src={lawimg}/>
        <div className="text-in-img">
            <h1>Welcome to Legal Eagle One</h1>
            <p>A Trusted Hub for Legal Services! 
                We understand that navigating the legal landscape can be challenging, and finding 
                the right legal expert for your needs is crucial. Our platform is here to simplify 
                your journey. We connect you with a network of experienced attorneys, paralegals, 
                and legal professionals, making it easy to find the legal expertise you require.</p>
        </div>
    </div>
    </>
  );
}
export default Firstimg;
