import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { useNavigate } from 'react-router-dom'; // <-- Import this!

const Home = () => {
  const navigate = useNavigate(); // <-- Use navigate

  return (
    <div>
      <div className='HomePage'>
        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Abdullah Al RAFI</b></h1>
          <Typed/>   
        </div>
        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I turn wild ideas into websites, dashboards, and delightfully automated chaos. My happy place? Somewhere between breaking things (on purpose!), wrangling data, and tricking AIs into being helpful.<br /><br />
            My daily toolkit: <b>Python</b>, <b>Java</b>, <b>SQL</b>, and enough coffee to power a datacenter. Love QA, adore data, and I'm making friends with prompt engineering—because someone’s got to keep the robots in line.<br /><br />
            🐛 <b>QA Analyst</b> &mdash; breaking stuff before users do.<br />
            📊 <b>Data Analyst</b> &mdash; turning raw numbers into juicy stories.<br />
            🤖 <b>SQA Engineer</b> &mdash; automating so I can go for more coffee.<br />
            ✍️ <b>Prompt Engineer in Training</b> &mdash; getting robots to say “wow!”<br /><br />
            I break things, fix things, and always find a story in the numbers. Powered by ☕.
          </p>
          {/* Add View CV button here */}
          <button
            className='downloadCV'
            style={{
              marginTop: "1.7rem",
              padding: "0.8rem 2.1rem",
              background: "#9067C6",
              color: "#fff",
              border: "none",
              borderRadius: "2rem",
              fontWeight: 600,
              fontSize: "1.1rem",
              cursor: "pointer"
            }}
            onClick={() => navigate("/Resume")}
          >
            View CV
          </button>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home;
