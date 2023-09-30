import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className="home" id='home'>
        <main>
            <h1>PeerCodeX</h1>
            <p>Solution to all your problems.</p>
        </main>

    </div>

    <div className="home2" >
      <img src={vg} alt="Graphics" />

      <div>
        <p>
          We are your one and only solution to the tech problems you face
          every day. We are leading tech company whose aim is to 
          increase the problem solving ability in children.
        </p>
      </div>
    </div>

    <div className="home3" id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>
        Welcome to PeerCodeX! We are  dedicated to provide top-notch services in Front-End Development and Peer-to-Peer support.<br></br>

        <br></br>Our team consists of highly skilled professionals who are experienced in the latest technologies and frameworks. We understand that every project is unique, and we tailor our services to meet the specific needs of our clients.<br></br>

        <br></br> Whether you are looking for assistance with front-end development or need help with a technical issue, we are here to provide expert support. Our team is committed to delivering the best possible results for every project we undertake.<br></br>

        <br></br>Thank you for considering our React web app for your development and support needs. We look forward to working with you!

        </p>
      </div>
    </div>

    <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>

            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>

          </article>
        </div>
      </div>

    </>
  );
  
};

export default Home