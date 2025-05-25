// import React from 'react';
// import { FaBriefcase, FaTrophy } from "react-icons/fa";
// import Lottie from "lottie-react";
// import Tilt from "react-parallax-tilt";
// import ExperienceLottie from '../LottieFiles/experience.json';   // SWAPPED: animation on left
// import AwardsLottie from '../LottieFiles/award.json';            // SWAPPED: animation on right

// const Experience = () => {
//   return (
//     <div
//       className="AboutPage"
//       style={{
//         maxWidth: '1500px',
//         margin: '10em auto 4rem auto',
//         padding: '0 2rem',
//         fontFamily: "'Raleway', sans-serif",
//         fontWeight: 500,
//         color: '#f0f0f0',
//         lineHeight: 1.7,
//         display: 'block',
//       }}
//     >
//       <div style={{ height: '8rem' }}></div>

//       {/* Experience title with icon on left, centered */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: '2rem',
//         gap: '1.2rem'
//       }}>
//         <FaBriefcase size={40} color="#9067C6" />
//         <h1 style={{
//           fontSize: '2.5rem',
//           color: '#fff',
//           fontWeight: 'bold',  // BOLD TITLE ONLY
//           margin: 0,
//           lineHeight: 1.2,
//           letterSpacing: "0.5px",
//         }}>
//           Experience
//         </h1>
//       </div>
//       <div style={{ height: '4rem' }}></div>

//       {/* Experience Section with Animation on LEFT */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '3rem',
//         marginBottom: '4rem' 
//       }}>
//         {/* Lottie Animation on Left */}
//         <div style={{ flex: '0 0 600px' }}>
//           <Tilt>
//             <Lottie
//               className="illustration"
//               animationData={ExperienceLottie}
//               loop={true}
//               style={{ width: '400px', height: '400px' }}
//             />
//           </Tilt>
//         </div>
//         {/* Experience Info */}
//         <div style={{ flex: 1 }}>
//           {/* First Experience */}
//           <article
//             style={{
//               marginBottom: '2.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 0.6s ease forwards',
//               opacity: 0,
//             }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 color: '#9067C6',
//                 fontWeight: 500,
//                 margin: 0
//               }}>
//                 Software Data QA Engineer
//               </h2>
//               <span style={{
//                 color: '#bbb',
//                 fontWeight: 400,
//                 fontSize: '1rem',
//                 marginLeft: '1rem'
//               }}>
//                  Jan 2025 – Apr 2025
//               </span>
//             </div>
//             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
//               W3 Engineers Ltd,<br />
//               Banani, Dhaka, Bangladesh.<br />
//               Internship
//             </div>
//             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
//               <li>Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.</li>
//               <li>Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.</li>
//               <li>Used Python for data analysis, addressed recurring system issues using Jira &amp; Loop, and regularly executed API requests via Postman.</li>
//             </ul>
//             <div style={{
//               marginTop: "1rem",
//               fontStyle: "italic",
//               color: "#b9a8d3",
//               fontWeight: 400,
//               fontSize: "1rem",
//               letterSpacing: ".3px"
//             }}>
//               Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman
//             </div>
//           </article>

//           {/* Second Experience */}
//           <article
//             style={{
//               marginBottom: '2.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 0.7s ease forwards',
//               opacity: 0,
//             }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 color: '#9067C6',
//                 fontWeight: 500,
//                 margin: 0
//               }}>
//                 Research &amp; Teaching Assistant
//               </h2>
//               <span style={{
//                 color: '#bbb',
//                 fontWeight: 400,
//                 fontSize: '1rem',
//                 marginLeft: '1rem'
//               }}>
//                 Jan 2024 – Jan 2025
//               </span>
//             </div>
//             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
//               East West University<br />
//               Dhaka, Bangladesh.<br />
//               Contact
//             </div>
//             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
//               <li>Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.</li>
//               <li>Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance.</li>
//             </ul>
//             <div style={{
//               marginTop: "1rem",
//               fontStyle: "italic",
//               color: "#b9a8d3",
//               fontWeight: 400,
//               fontSize: "1rem",
//               letterSpacing: ".3px"
//             }}>
//               Skills: Research, Teaching, Leadership, Data Science
//             </div>
//           </article>

//           {/* Third Experience */}
//           <article
//             style={{
//               marginBottom: '2.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 0.8s ease forwards',
//               opacity: 0,
//             }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 color: '#9067C6',
//                 fontWeight: 500,
//                 margin: 0
//               }}>
//                 Software &amp; ICT Trainee
//               </h2>
//               <span style={{
//                 color: '#bbb',
//                 fontWeight: 400,
//                 fontSize: '1rem',
//                 marginLeft: '1rem'
//               }}>
//                 June 2023 – Sept 2023
//               </span>
//             </div>
//             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
//               BASIS Institute of Technology & Management (BITM)<br />
//               Dhanmondi, Dhaka, Bangladesh.<br />
//               Training
//             </div>
//             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
//               <li>Participated in intensive hands-on software and ICT training under the Ministry of ICT project.</li>
//               <li>Worked on practical projects involving web development and database systems.</li>
//               <li>Developed soft skills for teamwork and communication.</li>
//             </ul>
//             <div style={{
//               marginTop: "1rem",
//               fontStyle: "italic",
//               color: "#b9a8d3",
//               fontWeight: 400,
//               fontSize: "1rem",
//               letterSpacing: ".3px"
//             }}>
//               Skills: Web Development, Teamwork, Communication, Database Systems
//             </div>
//           </article>
//         </div>
//       </div>

//       <div style={{ height: '4rem' }}></div>

//       {/* Awards title with icon on right, centered */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: '2rem',
//         gap: '1.2rem'
//       }}>
//         <h1 style={{
//           fontSize: '2.5rem',
//           color: '#fff',
//           fontWeight: 'bold',  // BOLD TITLE ONLY
//           margin: 0,
//           lineHeight: 1.2,
//           letterSpacing: "0.5px"
//         }}>
//           Awards
//         </h1>
//         <FaTrophy size={40} color="#9067C6" />
//       </div>

//       {/* Awards Section with Animation on RIGHT */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '3rem',
//         marginBottom: '4rem'
//       }}>
//         {/* Awards Info */}
//         <div style={{ flex: 1 }}>
//           <article
//             style={{
//               marginBottom: '2.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 0.9s ease forwards',
//               opacity: 0,
//             }}
//           >
//             <h2 style={{
//               fontSize: '1.3rem',
//               color: '#9067C6',
//               marginBottom: '0.75rem',
//               fontWeight: 500,
//             }}>
//               First Runners Up, Project Showcasing, CSE Festival 2024 – East West University
//             </h2>
//             <ul style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
//               <li>Demonstrated a blockchain-based application, competing among 28 teams.</li>
//             </ul>
//           </article>
//           <article
//             style={{
//               marginBottom: '2.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 1.0s ease forwards',
//               opacity: 0,
//             }}
//           >
//             <h2 style={{
//               fontSize: '1.3rem',
//               color: '#9067C6',
//               marginBottom: '0.75rem',
//               fontWeight: 500,
//             }}>
//               Medha Lalon Scholarship, East West University
//             </h2>
//             <ul style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
//               <li>A merit-based scholarship of 45,000 BDT annually.</li>
//             </ul>
//           </article>
//         </div>
//         {/* Lottie Animation on Right */}
//         <div style={{ flex: '0 0 600px', justifyContent: 'right', display: 'flex' }}>
//           <Tilt>
//             <Lottie
//               className="illustration"
//               animationData={AwardsLottie}
//               loop={true}
//               style={{ width: '400px', height: '400px', alignContent: 'right' }}
//             />
//           </Tilt>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Experience;
// import React from 'react';
// import { FaBriefcase, FaTrophy } from "react-icons/fa";
// import Lottie from "lottie-react";
// import Tilt from "react-parallax-tilt";
// import ExperienceLottie from '../LottieFiles/experience.json';   // Animation on left
// import AwardsLottie from '../LottieFiles/award.json';            // Animation on right

// const Experience = () => {
//   return (
//     <div
//       className="AboutPage"
//       style={{
//         maxWidth: '1500px',
//         margin: '10em auto 4rem auto',
//         padding: '0 2rem',
//         fontFamily: "'Raleway', sans-serif",
//         fontWeight: 500,
//         color: '#f0f0f0',
//         lineHeight: 1.7,
//         display: 'block',
//       }}
//     >
//       <div style={{ height: '8rem' }}></div>

//       {/* Experience title with icon on left, centered */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: '2rem',
//         gap: '1.2rem'
//       }}>
//         <FaBriefcase size={40} color="#9067C6" />
//         <h1 style={{
//           fontSize: '2.5rem',
//           color: '#fff',
//           fontWeight: 'bold',
//           margin: 0,
//           lineHeight: 1.2,
//           letterSpacing: "0.5px",
//         }}>
//           Experience
//         </h1>
//       </div>
//       <div style={{ height: '4rem' }}></div>

//       {/* Experience Section with Animation on LEFT */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '3rem',
//         marginBottom: '4rem' 
//       }}>
//         {/* Lottie Animation on Left */}
//         <div style={{ flex: '0 0 600px' }}>
//           <Tilt>
//             <Lottie
//               className="illustration"
//               animationData={ExperienceLottie}
//               loop={true}
//               style={{ width: '400px', height: '400px' }}
//             />
//           </Tilt>
//         </div>
//         {/* Experience Info */}
//         <div style={{ flex: 1 }}>
//           {/* First Experience */}
//           <article
//             style={{
//               marginBottom: '2.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 0.6s ease forwards',
//               opacity: 0,
//             }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 color: '#9067C6',
//                 fontWeight: 500,
//                 margin: 0
//               }}>
//                 Software Data QA Engineer
//               </h2>
//               <span style={{
//                 color: '#bbb',
//                 fontWeight: 400,
//                 fontSize: '1rem',
//                 marginLeft: '1rem'
//               }}>
//                  Jan 2025 – Apr 2025
//               </span>
//             </div>
//             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
//               W3 Engineers Ltd,<br />
//               Banani, Dhaka, Bangladesh.<br />
//               Internship
//             </div>
//             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
//               <li>Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.</li>
//               <li>Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.</li>
//               <li>Used Python for data analysis, addressed recurring system issues using Jira &amp; Loop, and regularly executed API requests via Postman.</li>
//             </ul>
//             <div style={{
//               marginTop: "1rem",
//               fontStyle: "italic",
//               color: "#b9a8d3",
//               fontWeight: 400,
//               fontSize: "1rem",
//               letterSpacing: ".3px"
//             }}>
//               Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman
//             </div>
//           </article>

//           {/* Second Experience */}
//           <article
//             style={{
//               marginBottom: '2.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 0.7s ease forwards',
//               opacity: 0,
//             }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 color: '#9067C6',
//                 fontWeight: 500,
//                 margin: 0
//               }}>
//                 Research &amp; Teaching Assistant
//               </h2>
//               <span style={{
//                 color: '#bbb',
//                 fontWeight: 400,
//                 fontSize: '1rem',
//                 marginLeft: '1rem'
//               }}>
//                 Jan 2024 – Jan 2025
//               </span>
//             </div>
//             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
//               East West University<br />
//               Dhaka, Bangladesh.<br />
//               Contact
//             </div>
//             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
//               <li>Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.</li>
//               <li>Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance.</li>
//             </ul>
//             <div style={{
//               marginTop: "1rem",
//               fontStyle: "italic",
//               color: "#b9a8d3",
//               fontWeight: 400,
//               fontSize: "1rem",
//               letterSpacing: ".3px"
//             }}>
//               Skills: Research, Teaching, Leadership, Data Science
//             </div>
//           </article>

//           {/* Third Experience */}
//           <article
//             style={{
//               marginBottom: '2.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 0.8s ease forwards',
//               opacity: 0,
//             }}
//           >
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//               <h2 style={{
//                 fontSize: '1.5rem',
//                 color: '#9067C6',
//                 fontWeight: 500,
//                 margin: 0
//               }}>
//                 Software &amp; ICT Trainee
//               </h2>
//               <span style={{
//                 color: '#bbb',
//                 fontWeight: 400,
//                 fontSize: '1rem',
//                 marginLeft: '1rem'
//               }}>
//                 June 2023 – Sept 2023
//               </span>
//             </div>
//             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
//               BASIS Institute of Technology & Management (BITM)<br />
//               Dhanmondi, Dhaka, Bangladesh.<br />
//               Training
//             </div>
//             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
//               <li>Participated in intensive hands-on software and ICT training under the Ministry of ICT project.</li>
//               <li>Worked on practical projects involving web development and database systems.</li>
//               <li>Developed soft skills for teamwork and communication.</li>
//             </ul>
//             <div style={{
//               marginTop: "1rem",
//               fontStyle: "italic",
//               color: "#b9a8d3",
//               fontWeight: 400,
//               fontSize: "1rem",
//               letterSpacing: ".3px"
//             }}>
//               Skills: Web Development, Teamwork, Communication, Database Systems
//             </div>
//           </article>
//         </div>
//       </div>

//       <div style={{ height: '4rem' }}></div>

//       {/* Awards title with icon on right, centered */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginBottom: '2rem',
//         gap: '1.2rem'
//       }}>
//         <h1 style={{
//           fontSize: '2.5rem',
//           color: '#fff',
//           fontWeight: 'bold',
//           margin: 0,
//           lineHeight: 1.2,
//           letterSpacing: "0.5px"
//         }}>
//           Awards
//         </h1>
//         <FaTrophy size={40} color="#9067C6" />
//       </div>
// <div style={{ height: '5rem' }}></div>
//       {/* Awards Section with Animation on RIGHT */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '3rem',
//         marginBottom: '4rem'
//       }}>
//         {/* Awards Info */}
//         <div style={{ flex: 1 }}>
//           {/* First Award */}
//           <article style={{
//             marginBottom: '3rem',
//             padding: '2rem',
//             backgroundColor: 'rgba(144, 103, 198, 0.1)',
//             borderRadius: '12px',
//             color: '#ddd',
//           }}>
//             <h2 style={{ fontSize: '1.6rem', color: '#9067C6', marginBottom: '0.5rem', fontWeight: 600 }}>
//               Project Showcasing, CSE Festival 2024<br />
//               <span style={{ fontWeight: 400, fontSize: '1.2rem' }}>East West University</span><br />
//               <span style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '0.2rem', display: 'block' }}>First Runners Up</span>
//             </h2>
//             <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.5', color: '#ccc' }}>
//               <li>Demonstrated a blockchain-based application</li>
//               <li>Competed against 32 teams</li>
//               <li>Gave Poster Presentation</li>
//             </ul>
//             {/* Placeholder for team image */}
//             <div style={{
//               marginTop: '2rem',
//               width: '100%',
//               height: '200px',
//               backgroundColor: 'rgba(144, 103, 198, 0.2)',
//               borderRadius: '8px',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center',
//               color: '#9067C6',
//               fontStyle: 'italic',
//               fontSize: '1.1rem'
//             }}>
//               Team Picture (to be added)
//             </div>
//           </article>

//           {/* Second Award */}
//           <article style={{
//             marginBottom: '0',
//             padding: '2rem',
//             backgroundColor: 'rgba(144, 103, 198, 0.1)',
//             borderRadius: '12px',
//             color: '#ddd',
//           }}>
//             <h2 style={{ fontSize: '1.6rem', color: '#9067C6', marginBottom: '0.5rem', fontWeight: 600 }}>
//               Medha Lalon Scholarship<br />
//               <span style={{ fontWeight: 400, fontSize: '1.2rem' }}>East West University</span>
//             </h2>
//             <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.5', color: '#ccc' }}>
//               <li>A merit-based scholarship</li>
//               <li>45K per year</li>
//               <li>Got awarded 3 Times in a row</li>
//             </ul>
//           </article>
//         </div>

//         {/* Lottie Animation on Right */}
//         <div style={{ flex: '0 0 600px', justifyContent: 'right', display: 'flex' }}>
//           <Tilt>
//             <Lottie
//               className="illustration"
//               animationData={AwardsLottie}
//               loop={true}
//               style={{ width: '400px', height: '400px', alignContent: 'right' }}
//             />
//           </Tilt>
//         </div>
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Experience;

import React from 'react';
import { FaBriefcase, FaTrophy } from "react-icons/fa";
import Lottie from "lottie-react";
import Tilt from "react-parallax-tilt";
import ExperienceLottie from '../LottieFiles/experience.json';   // Animation on left
import AwardsLottie from '../LottieFiles/award.json';            // Animation on right

const Experience = () => {
  return (
    <div
      className="AboutPage"
      style={{
        maxWidth: '1500px',
        margin: '10em auto 4rem auto',
        padding: '0 2rem',
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 500,
        color: '#f0f0f0',
        lineHeight: 1.7,
        display: 'block',
      }}
    >
      <div style={{ height: '8rem' }}></div>

      {/* Experience title with icon on left, centered */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        gap: '1.2rem'
      }}>
        <FaBriefcase size={40} color="#9067C6" />
        <h1 style={{
          fontSize: '2.5rem',
          color: '#fff',
          fontWeight: 'bold',
          margin: 0,
          lineHeight: 1.2,
          letterSpacing: "0.5px",
        }}>
          Experience
        </h1>
      </div>
      <div style={{ height: '4rem' }}></div>

      {/* Flex container with responsive */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        marginBottom: '4rem',
        flexWrap: 'wrap'
      }}>
        {/* Lottie Animation on Left */}
        <div style={{ flex: '0 0 600px', minWidth: '320px' }}>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={ExperienceLottie}
              loop={true}
              style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
            />
          </Tilt>
        </div>

        {/* Experience Info */}
        <div style={{ flex: '1 1 400px', minWidth: '320px' }}>
          {/* First Experience */}
          <article style={{
            marginBottom: '2.5rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(144, 103, 198, 0.1)',
            borderRadius: '8px',
            animation: 'fadeInUp 0.6s ease forwards',
            opacity: 0,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <h2 style={{
                fontSize: '1.5rem',
                color: '#9067C6',
                fontWeight: 500,
                margin: 0
              }}>
                Software Data QA Engineer
              </h2>
              <span style={{
                color: '#bbb',
                fontWeight: 400,
                fontSize: '1rem',
                marginLeft: '1rem'
              }}>
                Jan 2025 – Apr 2025
              </span>
            </div>
            <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
              W3 Engineers Ltd,<br />
              Banani, Dhaka, Bangladesh.<br />
              Internship
            </div>
            <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
              <li>Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.</li>
              <li>Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.</li>
              <li>Used Python for data analysis, addressed recurring system issues using Jira &amp; Loop, and regularly executed API requests via Postman.</li>
            </ul>
            <div style={{
              marginTop: "1rem",
              fontStyle: "italic",
              color: "#b9a8d3",
              fontWeight: 400,
              fontSize: "1rem",
              letterSpacing: ".3px"
            }}>
              Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman
            </div>
          </article>

          {/* Second Experience */}
          <article style={{
            marginBottom: '2.5rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(144, 103, 198, 0.1)',
            borderRadius: '8px',
            animation: 'fadeInUp 0.7s ease forwards',
            opacity: 0,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <h2 style={{
                fontSize: '1.5rem',
                color: '#9067C6',
                fontWeight: 500,
                margin: 0
              }}>
                Research &amp; Teaching Assistant
              </h2>
              <span style={{
                color: '#bbb',
                fontWeight: 400,
                fontSize: '1rem',
                marginLeft: '1rem'
              }}>
                Jan 2024 – Jan 2025
              </span>
            </div>
            <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
              East West University<br />
              Dhaka, Bangladesh.<br />
              Contact
            </div>
            <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
              <li>Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.</li>
              <li>Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance.</li>
            </ul>
            <div style={{
              marginTop: "1rem",
              fontStyle: "italic",
              color: "#b9a8d3",
              fontWeight: 400,
              fontSize: "1rem",
              letterSpacing: ".3px"
            }}>
              Skills: Research, Teaching, Leadership, Data Science
            </div>
          </article>

          {/* Third Experience */}
          <article style={{
            marginBottom: '2.5rem',
            padding: '1.5rem',
            backgroundColor: 'rgba(144, 103, 198, 0.1)',
            borderRadius: '8px',
            animation: 'fadeInUp 0.8s ease forwards',
            opacity: 0,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <h2 style={{
                fontSize: '1.5rem',
                color: '#9067C6',
                fontWeight: 500,
                margin: 0
              }}>
                Software &amp; ICT Trainee
              </h2>
              <span style={{
                color: '#bbb',
                fontWeight: 400,
                fontSize: '1rem',
                marginLeft: '1rem'
              }}>
                June 2023 – Sept 2023
              </span>
            </div>
            <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
              BASIS Institute of Technology & Management (BITM)<br />
              Dhanmondi, Dhaka, Bangladesh.<br />
              Training
            </div>
            <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
              <li>Participated in intensive hands-on software and ICT training under the Ministry of ICT project.</li>
              <li>Worked on practical projects involving web development and database systems.</li>
              <li>Developed soft skills for teamwork and communication.</li>
            </ul>
            <div style={{
              marginTop: "1rem",
              fontStyle: "italic",
              color: "#b9a8d3",
              fontWeight: 400,
              fontSize: "1rem",
              letterSpacing: ".3px"
            }}>
              Skills: Web Development, Teamwork, Communication, Database Systems
            </div>
          </article>
        </div>
      </div>

      <div style={{ height: '4rem' }}></div>

      {/* Awards title with icon */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '2rem',
        gap: '1.2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#fff',
          fontWeight: 'bold',
          margin: 0,
          lineHeight: 1.2,
          letterSpacing: "0.5px"
        }}>
          Awards
        </h1>
        <FaTrophy size={40} color="#9067C6" />
      </div>

      <div style={{ height: '5rem' }}></div>

      {/* Awards Section with Animation on RIGHT */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        marginBottom: '4rem',
        flexWrap: 'wrap'
      }}>
        {/* Awards Info */}
        <div style={{ flex: '1 1 400px', minWidth: '320px' }}>
          {/* First Award */}
          <article style={{
            marginBottom: '3rem',
            padding: '2rem',
            backgroundColor: 'rgba(144, 103, 198, 0.1)',
            borderRadius: '12px',
            color: '#ddd',
          }}>
            <h2 style={{ fontSize: '1.6rem', color: '#9067C6', marginBottom: '0.5rem', fontWeight: 600 }}>
              Project Showcasing, CSE Festival 2024<br />
              <span style={{ fontWeight: 400, fontSize: '1.2rem' }}>East West University</span><br />
              <span style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '0.2rem', display: 'block' }}>First Runners Up</span>
            </h2>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.5', color: '#ccc' }}>
              <li>Demonstrated a blockchain-based application</li>
              <li>Competed against 32 teams</li>
              <li>Gave Poster Presentation</li>
            </ul>
            {/* Placeholder for team image */}
            <div style={{
              marginTop: '2rem',
              width: '100%',
              height: '200px',
              backgroundColor: 'rgba(144, 103, 198, 0.2)',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: '#9067C6',
              fontStyle: 'italic',
              fontSize: '1.1rem'
            }}>
              Team Picture (to be added)
            </div>
          </article>

          {/* Second Award */}
          <article style={{
            marginBottom: '0',
            padding: '2rem',
            backgroundColor: 'rgba(144, 103, 198, 0.1)',
            borderRadius: '12px',
            color: '#ddd',
          }}>
            <h2 style={{ fontSize: '1.6rem', color: '#9067C6', marginBottom: '0.5rem', fontWeight: 600 }}>
              Medha Lalon Scholarship<br />
              <span style={{ fontWeight: 400, fontSize: '1.2rem' }}>East West University</span>
            </h2>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.5', color: '#ccc' }}>
              <li>A merit-based scholarship</li>
              <li>45K per year</li>
              <li>Got awarded 3 Times in a row</li>
            </ul>
          </article>
        </div>

        {/* Lottie Animation on Right */}
        <div style={{ flex: '0 0 600px', minWidth: '320px', justifyContent: 'right', display: 'flex' }}>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={AwardsLottie}
              loop={true}
              style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
            />
          </Tilt>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 900px) {
          /* Stack left-right flex containers vertically */
          .AboutPage > div[style*="flex"] {
            flex-direction: column !important;
            align-items: center !important;
          }
          .AboutPage > div[style*="flex"] > div {
            width: 100% !important;
            max-width: 600px;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
