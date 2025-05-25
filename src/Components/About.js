import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import Coder from '../LottieFiles/coder.json';
import Contact from '../LottieFiles/Contact.json';

// SKILL ICONS
import { FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { DiNodejs, DiJavascript1, DiJava } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiJira, SiJupyter, SiMysql, SiSelenium, SiTableau, SiMicrosoftexcel, SiOrcid } from "react-icons/si";

// CONTACT ICONS
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiKaggle, SiLeetcode, SiHackerrank } from "react-icons/si";

import { useLocation } from 'react-router-dom';

const skillList = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <DiJava /> },
  { name: 'C++', icon: <CgCPlusPlus /> },
  { name: 'SQL', icon: <SiMysql /> },
  { name: 'Excel', icon: <SiMicrosoftexcel /> },
  { name: 'Jira', icon: <SiJira /> },
  { name: 'Jupyter', icon: <SiJupyter /> },
  { name: 'React', icon: <FaGithub /> }, // or use FaReact if available
  { name: 'Javascript', icon: <DiJavascript1 /> },
  { name: 'Node', icon: <DiNodejs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Github', icon: <FaGithub /> },
  { name: 'Npm', icon: <FaNpm /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Vercel', icon: <SiVercel /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Selenium', icon: <SiSelenium /> },
  { name: 'Tableau', icon: <SiTableau /> },
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            Hey! I'm <b>Abdullah Al Rafi</b> – QA Analyst, Data Analyst, and SQA Engineer with a twist: <br />
            I turn bugs into features, data into insights, and caffeine into code.<br /><br />

            I live for that sweet spot where <b>automation meets intuition</b> and code makes real-world magic.
            I thrive in environments where breaking things (and then fixing them) is highly encouraged.<br /><br />

            Fluent in <b>Python</b>, <b>Java</b>, <b>C++</b>, <b>SQL/PostgreSQL</b>, and a proud explorer of <b>React</b>, <b>Node.js</b>, <b>Jira</b>, <b>Selenium</b>, <b>Tableau</b>, and way too many dashboards and testing tools. <br />
            I'm currently leveling up my prompt engineering skills and loving every bit of the challenge.<br /><br />

            Whether it’s data wrangling, software testing, or getting creative with automation, I’m always up for a new puzzle to solve (preferably with a strong cup of coffee ☕).<br /><br />

            Open to <b>collaborations</b>, bug bounties, and adventures in AI & QA! <br />
            If you want someone who brings <b>precision, curiosity, and a bit of fun</b> to every project—let's connect!
          </p>
        </div>
        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills' style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2.2rem',
        justifyContent: 'center',
        marginBottom: '3rem'
      }}>
        {skillList.map(skill => (
          <div
            key={skill.name}
            className='SkillBox'
            style={{
              background: '#212121',
              borderRadius: '1.2rem',
              boxShadow: '0 4px 18px 0 rgba(40,10,90,.13)',
              width: '80px',
              height: '90px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.15rem',
              color: '#fff',
              position: 'relative',
            }}
          >
            <div>{skill.icon}</div>
            <span style={{
              marginTop: '0.45rem',
              fontSize: '0.98rem',
              color: '#e2e2e2',
              fontWeight: 500,
              letterSpacing: ".01em",
              textAlign: "center",
            }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <div style={{ height: '8rem' }}></div>

      {/* Contact section container */}
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto 4rem auto',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        padding: '0',
        color: '#ddd'
      }}>
        {/* Animation left */}
        <div style={{ flex: '0 0 180px' }}>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Contact}
              loop={true}
            />
          </Tilt>
        </div>

        {/* Spacer div */}
        <div style={{ width: '6rem' }}></div>

        {/* Right side: heading + icons, centered */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 id="contact" className='SkillsHeading' style={{ marginBottom: '2rem', fontSize: '2rem', color: '#ddd' }}>Contact Me!</h1>
          <div
            className='skills'
            style={{
              justifyContent: 'center',
              gap: '2rem',
              fontSize: '3.1rem',
              cursor: 'pointer',
              flexWrap: 'wrap',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            <a href="https://github.com/bytecraft-rafi" target="_blank" rel="noreferrer" title="GitHub" className="contactIcon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rafeeabd" target="_blank" rel="noreferrer" title="LinkedIn" className="contactIcon">
              <FaLinkedin />
            </a>
            <a href="mailto:rafee.zabir@gmail.com" target="_blank" rel="noreferrer" title="Email" className="contactIcon">
              <GrMail />
            </a>
            <a href="https://www.facebook.com/abdullahal.rafi.9678" target="_blank" rel="noreferrer" title="Facebook" className="contactIcon">
              <FaFacebook />
            </a>
            <a href="" target="_blank" rel="noreferrer" title="Twitter" className="contactIcon">
              <FaTwitter />
            </a>
            <a href="https://www.kaggle.com/abdullahalrafiz" target="_blank" rel="noreferrer" title="Kaggle" className="contactIcon">
              <SiKaggle />
            </a>
            <a href="https://leetcode.com/u/radRafi33/" target="_blank" rel="noreferrer" title="Leetcode" className="contactIcon">
              <SiLeetcode />
            </a>
            <a href="https://www.hackerrank.com/profile/rafiabdps" target="_blank" rel="noreferrer" title="Hackerrank" className="contactIcon">
              <SiHackerrank />
            </a>
            <a href="https://orcid.org/0009-0003-8079-6693" target="_blank" rel="noreferrer" title="Orcid" className="contactIcon" style={{ color: "#fff" }}>
              <SiOrcid />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .contactIcon {
          color: inherit;
          transition: transform 0.3s ease, color 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .contactIcon[title="Orcid"] {
          color: #fff !important;
        }
        .contactIcon:hover {
          color: #9067C6;
          transform: scale(1.2);
        }
      `}</style>
    </>
  )
}

export default About;
 