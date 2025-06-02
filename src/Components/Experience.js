// // // // // // // // // // import React from 'react';
// // // // // // // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";
// // // // // // // // // // import Lottie from "lottie-react";
// // // // // // // // // // import Tilt from "react-parallax-tilt";
// // // // // // // // // // import ExperienceLottie from '../LottieFiles/experience.json';   // SWAPPED: animation on left
// // // // // // // // // // import AwardsLottie from '../LottieFiles/award.json';            // SWAPPED: animation on right

// // // // // // // // // // const Experience = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <div
// // // // // // // // // //       className="AboutPage"
// // // // // // // // // //       style={{
// // // // // // // // // //         maxWidth: '1500px',
// // // // // // // // // //         margin: '10em auto 4rem auto',
// // // // // // // // // //         padding: '0 2rem',
// // // // // // // // // //         fontFamily: "'Raleway', sans-serif",
// // // // // // // // // //         fontWeight: 500,
// // // // // // // // // //         color: '#f0f0f0',
// // // // // // // // // //         lineHeight: 1.7,
// // // // // // // // // //         display: 'block',
// // // // // // // // // //       }}
// // // // // // // // // //     >
// // // // // // // // // //       <div style={{ height: '8rem' }}></div>

// // // // // // // // // //       {/* Experience title with icon on left, centered */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         justifyContent: 'center',
// // // // // // // // // //         marginBottom: '2rem',
// // // // // // // // // //         gap: '1.2rem'
// // // // // // // // // //       }}>
// // // // // // // // // //         <FaBriefcase size={40} color="#9067C6" />
// // // // // // // // // //         <h1 style={{
// // // // // // // // // //           fontSize: '2.5rem',
// // // // // // // // // //           color: '#fff',
// // // // // // // // // //           fontWeight: 'bold',  // BOLD TITLE ONLY
// // // // // // // // // //           margin: 0,
// // // // // // // // // //           lineHeight: 1.2,
// // // // // // // // // //           letterSpacing: "0.5px",
// // // // // // // // // //         }}>
// // // // // // // // // //           Experience
// // // // // // // // // //         </h1>
// // // // // // // // // //       </div>
// // // // // // // // // //       <div style={{ height: '4rem' }}></div>

// // // // // // // // // //       {/* Experience Section with Animation on LEFT */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         gap: '3rem',
// // // // // // // // // //         marginBottom: '4rem' 
// // // // // // // // // //       }}>
// // // // // // // // // //         {/* Lottie Animation on Left */}
// // // // // // // // // //         <div style={{ flex: '0 0 600px' }}>
// // // // // // // // // //           <Tilt>
// // // // // // // // // //             <Lottie
// // // // // // // // // //               className="illustration"
// // // // // // // // // //               animationData={ExperienceLottie}
// // // // // // // // // //               loop={true}
// // // // // // // // // //               style={{ width: '400px', height: '400px' }}
// // // // // // // // // //             />
// // // // // // // // // //           </Tilt>
// // // // // // // // // //         </div>
// // // // // // // // // //         {/* Experience Info */}
// // // // // // // // // //         <div style={{ flex: 1 }}>
// // // // // // // // // //           {/* First Experience */}
// // // // // // // // // //           <article
// // // // // // // // // //             style={{
// // // // // // // // // //               marginBottom: '2.5rem',
// // // // // // // // // //               padding: '1.5rem',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               animation: 'fadeInUp 0.6s ease forwards',
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // // // // // // //               <h2 style={{
// // // // // // // // // //                 fontSize: '1.5rem',
// // // // // // // // // //                 color: '#9067C6',
// // // // // // // // // //                 fontWeight: 500,
// // // // // // // // // //                 margin: 0
// // // // // // // // // //               }}>
// // // // // // // // // //                 Software Data QA Engineer
// // // // // // // // // //               </h2>
// // // // // // // // // //               <span style={{
// // // // // // // // // //                 color: '#bbb',
// // // // // // // // // //                 fontWeight: 400,
// // // // // // // // // //                 fontSize: '1rem',
// // // // // // // // // //                 marginLeft: '1rem'
// // // // // // // // // //               }}>
// // // // // // // // // //                  Jan 2025 – Apr 2025
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
// // // // // // // // // //               W3 Engineers Ltd,<br />
// // // // // // // // // //               Banani, Dhaka, Bangladesh.<br />
// // // // // // // // // //               Internship
// // // // // // // // // //             </div>
// // // // // // // // // //             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
// // // // // // // // // //               <li>Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.</li>
// // // // // // // // // //               <li>Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.</li>
// // // // // // // // // //               <li>Used Python for data analysis, addressed recurring system issues using Jira &amp; Loop, and regularly executed API requests via Postman.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: "1rem",
// // // // // // // // // //               fontStyle: "italic",
// // // // // // // // // //               color: "#b9a8d3",
// // // // // // // // // //               fontWeight: 400,
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               letterSpacing: ".3px"
// // // // // // // // // //             }}>
// // // // // // // // // //               Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>

// // // // // // // // // //           {/* Second Experience */}
// // // // // // // // // //           <article
// // // // // // // // // //             style={{
// // // // // // // // // //               marginBottom: '2.5rem',
// // // // // // // // // //               padding: '1.5rem',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               animation: 'fadeInUp 0.7s ease forwards',
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // // // // // // //               <h2 style={{
// // // // // // // // // //                 fontSize: '1.5rem',
// // // // // // // // // //                 color: '#9067C6',
// // // // // // // // // //                 fontWeight: 500,
// // // // // // // // // //                 margin: 0
// // // // // // // // // //               }}>
// // // // // // // // // //                 Research &amp; Teaching Assistant
// // // // // // // // // //               </h2>
// // // // // // // // // //               <span style={{
// // // // // // // // // //                 color: '#bbb',
// // // // // // // // // //                 fontWeight: 400,
// // // // // // // // // //                 fontSize: '1rem',
// // // // // // // // // //                 marginLeft: '1rem'
// // // // // // // // // //               }}>
// // // // // // // // // //                 Jan 2024 – Jan 2025
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
// // // // // // // // // //               East West University<br />
// // // // // // // // // //               Dhaka, Bangladesh.<br />
// // // // // // // // // //               Contact
// // // // // // // // // //             </div>
// // // // // // // // // //             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
// // // // // // // // // //               <li>Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.</li>
// // // // // // // // // //               <li>Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: "1rem",
// // // // // // // // // //               fontStyle: "italic",
// // // // // // // // // //               color: "#b9a8d3",
// // // // // // // // // //               fontWeight: 400,
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               letterSpacing: ".3px"
// // // // // // // // // //             }}>
// // // // // // // // // //               Skills: Research, Teaching, Leadership, Data Science
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>

// // // // // // // // // //           {/* Third Experience */}
// // // // // // // // // //           <article
// // // // // // // // // //             style={{
// // // // // // // // // //               marginBottom: '2.5rem',
// // // // // // // // // //               padding: '1.5rem',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               animation: 'fadeInUp 0.8s ease forwards',
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // // // // // // //               <h2 style={{
// // // // // // // // // //                 fontSize: '1.5rem',
// // // // // // // // // //                 color: '#9067C6',
// // // // // // // // // //                 fontWeight: 500,
// // // // // // // // // //                 margin: 0
// // // // // // // // // //               }}>
// // // // // // // // // //                 Software &amp; ICT Trainee
// // // // // // // // // //               </h2>
// // // // // // // // // //               <span style={{
// // // // // // // // // //                 color: '#bbb',
// // // // // // // // // //                 fontWeight: 400,
// // // // // // // // // //                 fontSize: '1rem',
// // // // // // // // // //                 marginLeft: '1rem'
// // // // // // // // // //               }}>
// // // // // // // // // //                 June 2023 – Sept 2023
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
// // // // // // // // // //               BASIS Institute of Technology & Management (BITM)<br />
// // // // // // // // // //               Dhanmondi, Dhaka, Bangladesh.<br />
// // // // // // // // // //               Training
// // // // // // // // // //             </div>
// // // // // // // // // //             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
// // // // // // // // // //               <li>Participated in intensive hands-on software and ICT training under the Ministry of ICT project.</li>
// // // // // // // // // //               <li>Worked on practical projects involving web development and database systems.</li>
// // // // // // // // // //               <li>Developed soft skills for teamwork and communication.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: "1rem",
// // // // // // // // // //               fontStyle: "italic",
// // // // // // // // // //               color: "#b9a8d3",
// // // // // // // // // //               fontWeight: 400,
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               letterSpacing: ".3px"
// // // // // // // // // //             }}>
// // // // // // // // // //               Skills: Web Development, Teamwork, Communication, Database Systems
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <div style={{ height: '4rem' }}></div>

// // // // // // // // // //       {/* Awards title with icon on right, centered */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         justifyContent: 'center',
// // // // // // // // // //         marginBottom: '2rem',
// // // // // // // // // //         gap: '1.2rem'
// // // // // // // // // //       }}>
// // // // // // // // // //         <h1 style={{
// // // // // // // // // //           fontSize: '2.5rem',
// // // // // // // // // //           color: '#fff',
// // // // // // // // // //           fontWeight: 'bold',  // BOLD TITLE ONLY
// // // // // // // // // //           margin: 0,
// // // // // // // // // //           lineHeight: 1.2,
// // // // // // // // // //           letterSpacing: "0.5px"
// // // // // // // // // //         }}>
// // // // // // // // // //           Awards
// // // // // // // // // //         </h1>
// // // // // // // // // //         <FaTrophy size={40} color="#9067C6" />
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Awards Section with Animation on RIGHT */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         gap: '3rem',
// // // // // // // // // //         marginBottom: '4rem'
// // // // // // // // // //       }}>
// // // // // // // // // //         {/* Awards Info */}
// // // // // // // // // //         <div style={{ flex: 1 }}>
// // // // // // // // // //           <article
// // // // // // // // // //             style={{
// // // // // // // // // //               marginBottom: '2.5rem',
// // // // // // // // // //               padding: '1.5rem',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               animation: 'fadeInUp 0.9s ease forwards',
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <h2 style={{
// // // // // // // // // //               fontSize: '1.3rem',
// // // // // // // // // //               color: '#9067C6',
// // // // // // // // // //               marginBottom: '0.75rem',
// // // // // // // // // //               fontWeight: 500,
// // // // // // // // // //             }}>
// // // // // // // // // //               First Runners Up, Project Showcasing, CSE Festival 2024 – East West University
// // // // // // // // // //             </h2>
// // // // // // // // // //             <ul style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
// // // // // // // // // //               <li>Demonstrated a blockchain-based application, competing among 28 teams.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //           </article>
// // // // // // // // // //           <article
// // // // // // // // // //             style={{
// // // // // // // // // //               marginBottom: '2.5rem',
// // // // // // // // // //               padding: '1.5rem',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               animation: 'fadeInUp 1.0s ease forwards',
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <h2 style={{
// // // // // // // // // //               fontSize: '1.3rem',
// // // // // // // // // //               color: '#9067C6',
// // // // // // // // // //               marginBottom: '0.75rem',
// // // // // // // // // //               fontWeight: 500,
// // // // // // // // // //             }}>
// // // // // // // // // //               Medha Lalon Scholarship, East West University
// // // // // // // // // //             </h2>
// // // // // // // // // //             <ul style={{ marginLeft: '1.5rem', marginBottom: 0 }}>
// // // // // // // // // //               <li>A merit-based scholarship of 45,000 BDT annually.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //           </article>
// // // // // // // // // //         </div>
// // // // // // // // // //         {/* Lottie Animation on Right */}
// // // // // // // // // //         <div style={{ flex: '0 0 600px', justifyContent: 'right', display: 'flex' }}>
// // // // // // // // // //           <Tilt>
// // // // // // // // // //             <Lottie
// // // // // // // // // //               className="illustration"
// // // // // // // // // //               animationData={AwardsLottie}
// // // // // // // // // //               loop={true}
// // // // // // // // // //               style={{ width: '400px', height: '400px', alignContent: 'right' }}
// // // // // // // // // //             />
// // // // // // // // // //           </Tilt>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <style>{`
// // // // // // // // // //         @keyframes fadeInUp {
// // // // // // // // // //           0% {
// // // // // // // // // //             opacity: 0;
// // // // // // // // // //             transform: translateY(20px);
// // // // // // // // // //           }
// // // // // // // // // //           100% {
// // // // // // // // // //             opacity: 1;
// // // // // // // // // //             transform: translateY(0);
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Experience;
// // // // // // // // // // import React from 'react';
// // // // // // // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";
// // // // // // // // // // import Lottie from "lottie-react";
// // // // // // // // // // import Tilt from "react-parallax-tilt";
// // // // // // // // // // import ExperienceLottie from '../LottieFiles/experience.json';   // Animation on left
// // // // // // // // // // import AwardsLottie from '../LottieFiles/award.json';            // Animation on right

// // // // // // // // // // const Experience = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <div
// // // // // // // // // //       className="AboutPage"
// // // // // // // // // //       style={{
// // // // // // // // // //         maxWidth: '1500px',
// // // // // // // // // //         margin: '10em auto 4rem auto',
// // // // // // // // // //         padding: '0 2rem',
// // // // // // // // // //         fontFamily: "'Raleway', sans-serif",
// // // // // // // // // //         fontWeight: 500,
// // // // // // // // // //         color: '#f0f0f0',
// // // // // // // // // //         lineHeight: 1.7,
// // // // // // // // // //         display: 'block',
// // // // // // // // // //       }}
// // // // // // // // // //     >
// // // // // // // // // //       <div style={{ height: '8rem' }}></div>

// // // // // // // // // //       {/* Experience title with icon on left, centered */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         justifyContent: 'center',
// // // // // // // // // //         marginBottom: '2rem',
// // // // // // // // // //         gap: '1.2rem'
// // // // // // // // // //       }}>
// // // // // // // // // //         <FaBriefcase size={40} color="#9067C6" />
// // // // // // // // // //         <h1 style={{
// // // // // // // // // //           fontSize: '2.5rem',
// // // // // // // // // //           color: '#fff',
// // // // // // // // // //           fontWeight: 'bold',
// // // // // // // // // //           margin: 0,
// // // // // // // // // //           lineHeight: 1.2,
// // // // // // // // // //           letterSpacing: "0.5px",
// // // // // // // // // //         }}>
// // // // // // // // // //           Experience
// // // // // // // // // //         </h1>
// // // // // // // // // //       </div>
// // // // // // // // // //       <div style={{ height: '4rem' }}></div>

// // // // // // // // // //       {/* Experience Section with Animation on LEFT */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         gap: '3rem',
// // // // // // // // // //         marginBottom: '4rem' 
// // // // // // // // // //       }}>
// // // // // // // // // //         {/* Lottie Animation on Left */}
// // // // // // // // // //         <div style={{ flex: '0 0 600px' }}>
// // // // // // // // // //           <Tilt>
// // // // // // // // // //             <Lottie
// // // // // // // // // //               className="illustration"
// // // // // // // // // //               animationData={ExperienceLottie}
// // // // // // // // // //               loop={true}
// // // // // // // // // //               style={{ width: '400px', height: '400px' }}
// // // // // // // // // //             />
// // // // // // // // // //           </Tilt>
// // // // // // // // // //         </div>
// // // // // // // // // //         {/* Experience Info */}
// // // // // // // // // //         <div style={{ flex: 1 }}>
// // // // // // // // // //           {/* First Experience */}
// // // // // // // // // //           <article
// // // // // // // // // //             style={{
// // // // // // // // // //               marginBottom: '2.5rem',
// // // // // // // // // //               padding: '1.5rem',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               animation: 'fadeInUp 0.6s ease forwards',
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // // // // // // //               <h2 style={{
// // // // // // // // // //                 fontSize: '1.5rem',
// // // // // // // // // //                 color: '#9067C6',
// // // // // // // // // //                 fontWeight: 500,
// // // // // // // // // //                 margin: 0
// // // // // // // // // //               }}>
// // // // // // // // // //                 Software Data QA Engineer
// // // // // // // // // //               </h2>
// // // // // // // // // //               <span style={{
// // // // // // // // // //                 color: '#bbb',
// // // // // // // // // //                 fontWeight: 400,
// // // // // // // // // //                 fontSize: '1rem',
// // // // // // // // // //                 marginLeft: '1rem'
// // // // // // // // // //               }}>
// // // // // // // // // //                  Jan 2025 – Apr 2025
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
// // // // // // // // // //               W3 Engineers Ltd,<br />
// // // // // // // // // //               Banani, Dhaka, Bangladesh.<br />
// // // // // // // // // //               Internship
// // // // // // // // // //             </div>
// // // // // // // // // //             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
// // // // // // // // // //               <li>Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.</li>
// // // // // // // // // //               <li>Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.</li>
// // // // // // // // // //               <li>Used Python for data analysis, addressed recurring system issues using Jira &amp; Loop, and regularly executed API requests via Postman.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: "1rem",
// // // // // // // // // //               fontStyle: "italic",
// // // // // // // // // //               color: "#b9a8d3",
// // // // // // // // // //               fontWeight: 400,
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               letterSpacing: ".3px"
// // // // // // // // // //             }}>
// // // // // // // // // //               Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>

// // // // // // // // // //           {/* Second Experience */}
// // // // // // // // // //           <article
// // // // // // // // // //             style={{
// // // // // // // // // //               marginBottom: '2.5rem',
// // // // // // // // // //               padding: '1.5rem',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               animation: 'fadeInUp 0.7s ease forwards',
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // // // // // // //               <h2 style={{
// // // // // // // // // //                 fontSize: '1.5rem',
// // // // // // // // // //                 color: '#9067C6',
// // // // // // // // // //                 fontWeight: 500,
// // // // // // // // // //                 margin: 0
// // // // // // // // // //               }}>
// // // // // // // // // //                 Research &amp; Teaching Assistant
// // // // // // // // // //               </h2>
// // // // // // // // // //               <span style={{
// // // // // // // // // //                 color: '#bbb',
// // // // // // // // // //                 fontWeight: 400,
// // // // // // // // // //                 fontSize: '1rem',
// // // // // // // // // //                 marginLeft: '1rem'
// // // // // // // // // //               }}>
// // // // // // // // // //                 Jan 2024 – Jan 2025
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
// // // // // // // // // //               East West University<br />
// // // // // // // // // //               Dhaka, Bangladesh.<br />
// // // // // // // // // //               Contact
// // // // // // // // // //             </div>
// // // // // // // // // //             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
// // // // // // // // // //               <li>Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.</li>
// // // // // // // // // //               <li>Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: "1rem",
// // // // // // // // // //               fontStyle: "italic",
// // // // // // // // // //               color: "#b9a8d3",
// // // // // // // // // //               fontWeight: 400,
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               letterSpacing: ".3px"
// // // // // // // // // //             }}>
// // // // // // // // // //               Skills: Research, Teaching, Leadership, Data Science
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>

// // // // // // // // // //           {/* Third Experience */}
// // // // // // // // // //           <article
// // // // // // // // // //             style={{
// // // // // // // // // //               marginBottom: '2.5rem',
// // // // // // // // // //               padding: '1.5rem',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               animation: 'fadeInUp 0.8s ease forwards',
// // // // // // // // // //               opacity: 0,
// // // // // // // // // //             }}
// // // // // // // // // //           >
// // // // // // // // // //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // // // // // // //               <h2 style={{
// // // // // // // // // //                 fontSize: '1.5rem',
// // // // // // // // // //                 color: '#9067C6',
// // // // // // // // // //                 fontWeight: 500,
// // // // // // // // // //                 margin: 0
// // // // // // // // // //               }}>
// // // // // // // // // //                 Software &amp; ICT Trainee
// // // // // // // // // //               </h2>
// // // // // // // // // //               <span style={{
// // // // // // // // // //                 color: '#bbb',
// // // // // // // // // //                 fontWeight: 400,
// // // // // // // // // //                 fontSize: '1rem',
// // // // // // // // // //                 marginLeft: '1rem'
// // // // // // // // // //               }}>
// // // // // // // // // //                 June 2023 – Sept 2023
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
// // // // // // // // // //               BASIS Institute of Technology & Management (BITM)<br />
// // // // // // // // // //               Dhanmondi, Dhaka, Bangladesh.<br />
// // // // // // // // // //               Training
// // // // // // // // // //             </div>
// // // // // // // // // //             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
// // // // // // // // // //               <li>Participated in intensive hands-on software and ICT training under the Ministry of ICT project.</li>
// // // // // // // // // //               <li>Worked on practical projects involving web development and database systems.</li>
// // // // // // // // // //               <li>Developed soft skills for teamwork and communication.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: "1rem",
// // // // // // // // // //               fontStyle: "italic",
// // // // // // // // // //               color: "#b9a8d3",
// // // // // // // // // //               fontWeight: 400,
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               letterSpacing: ".3px"
// // // // // // // // // //             }}>
// // // // // // // // // //               Skills: Web Development, Teamwork, Communication, Database Systems
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <div style={{ height: '4rem' }}></div>

// // // // // // // // // //       {/* Awards title with icon on right, centered */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         justifyContent: 'center',
// // // // // // // // // //         marginBottom: '2rem',
// // // // // // // // // //         gap: '1.2rem'
// // // // // // // // // //       }}>
// // // // // // // // // //         <h1 style={{
// // // // // // // // // //           fontSize: '2.5rem',
// // // // // // // // // //           color: '#fff',
// // // // // // // // // //           fontWeight: 'bold',
// // // // // // // // // //           margin: 0,
// // // // // // // // // //           lineHeight: 1.2,
// // // // // // // // // //           letterSpacing: "0.5px"
// // // // // // // // // //         }}>
// // // // // // // // // //           Awards
// // // // // // // // // //         </h1>
// // // // // // // // // //         <FaTrophy size={40} color="#9067C6" />
// // // // // // // // // //       </div>
// // // // // // // // // // <div style={{ height: '5rem' }}></div>
// // // // // // // // // //       {/* Awards Section with Animation on RIGHT */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         gap: '3rem',
// // // // // // // // // //         marginBottom: '4rem'
// // // // // // // // // //       }}>
// // // // // // // // // //         {/* Awards Info */}
// // // // // // // // // //         <div style={{ flex: 1 }}>
// // // // // // // // // //           {/* First Award */}
// // // // // // // // // //           <article style={{
// // // // // // // // // //             marginBottom: '3rem',
// // // // // // // // // //             padding: '2rem',
// // // // // // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //             borderRadius: '12px',
// // // // // // // // // //             color: '#ddd',
// // // // // // // // // //           }}>
// // // // // // // // // //             <h2 style={{ fontSize: '1.6rem', color: '#9067C6', marginBottom: '0.5rem', fontWeight: 600 }}>
// // // // // // // // // //               Project Showcasing, CSE Festival 2024<br />
// // // // // // // // // //               <span style={{ fontWeight: 400, fontSize: '1.2rem' }}>East West University</span><br />
// // // // // // // // // //               <span style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '0.2rem', display: 'block' }}>First Runners Up</span>
// // // // // // // // // //             </h2>
// // // // // // // // // //             <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.5', color: '#ccc' }}>
// // // // // // // // // //               <li>Demonstrated a blockchain-based application</li>
// // // // // // // // // //               <li>Competed against 32 teams</li>
// // // // // // // // // //               <li>Gave Poster Presentation</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             {/* Placeholder for team image */}
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: '2rem',
// // // // // // // // // //               width: '100%',
// // // // // // // // // //               height: '200px',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.2)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               display: 'flex',
// // // // // // // // // //               justifyContent: 'center',
// // // // // // // // // //               alignItems: 'center',
// // // // // // // // // //               color: '#9067C6',
// // // // // // // // // //               fontStyle: 'italic',
// // // // // // // // // //               fontSize: '1.1rem'
// // // // // // // // // //             }}>
// // // // // // // // // //               Team Picture (to be added)
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>

// // // // // // // // // //           {/* Second Award */}
// // // // // // // // // //           <article style={{
// // // // // // // // // //             marginBottom: '0',
// // // // // // // // // //             padding: '2rem',
// // // // // // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //             borderRadius: '12px',
// // // // // // // // // //             color: '#ddd',
// // // // // // // // // //           }}>
// // // // // // // // // //             <h2 style={{ fontSize: '1.6rem', color: '#9067C6', marginBottom: '0.5rem', fontWeight: 600 }}>
// // // // // // // // // //               Medha Lalon Scholarship<br />
// // // // // // // // // //               <span style={{ fontWeight: 400, fontSize: '1.2rem' }}>East West University</span>
// // // // // // // // // //             </h2>
// // // // // // // // // //             <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.5', color: '#ccc' }}>
// // // // // // // // // //               <li>A merit-based scholarship</li>
// // // // // // // // // //               <li>45K per year</li>
// // // // // // // // // //               <li>Got awarded 3 Times in a row</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //           </article>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Lottie Animation on Right */}
// // // // // // // // // //         <div style={{ flex: '0 0 600px', justifyContent: 'right', display: 'flex' }}>
// // // // // // // // // //           <Tilt>
// // // // // // // // // //             <Lottie
// // // // // // // // // //               className="illustration"
// // // // // // // // // //               animationData={AwardsLottie}
// // // // // // // // // //               loop={true}
// // // // // // // // // //               style={{ width: '400px', height: '400px', alignContent: 'right' }}
// // // // // // // // // //             />
// // // // // // // // // //           </Tilt>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <style>{`
// // // // // // // // // //         @keyframes fadeInUp {
// // // // // // // // // //           0% {
// // // // // // // // // //             opacity: 0;
// // // // // // // // // //             transform: translateY(20px);
// // // // // // // // // //           }
// // // // // // // // // //           100% {
// // // // // // // // // //             opacity: 1;
// // // // // // // // // //             transform: translateY(0);
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Experience;

// // // // // // // // // // import React from 'react';
// // // // // // // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";
// // // // // // // // // // import Lottie from "lottie-react";
// // // // // // // // // // import Tilt from "react-parallax-tilt";
// // // // // // // // // // import ExperienceLottie from '../LottieFiles/experience.json';   // Animation on left
// // // // // // // // // // import AwardsLottie from '../LottieFiles/award.json';            // Animation on right

// // // // // // // // // // const Experience = () => {
// // // // // // // // // //   return (
// // // // // // // // // //     <div
// // // // // // // // // //       className="AboutPage"
// // // // // // // // // //       style={{
// // // // // // // // // //         maxWidth: '1500px',
// // // // // // // // // //         margin: '10em auto 4rem auto',
// // // // // // // // // //         padding: '0 2rem',
// // // // // // // // // //         fontFamily: "'Raleway', sans-serif",
// // // // // // // // // //         fontWeight: 500,
// // // // // // // // // //         color: '#f0f0f0',
// // // // // // // // // //         lineHeight: 1.7,
// // // // // // // // // //         display: 'block',
// // // // // // // // // //       }}
// // // // // // // // // //     >
// // // // // // // // // //       <div style={{ height: '8rem' }}></div>

// // // // // // // // // //       {/* Experience title with icon on left, centered */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         justifyContent: 'center',
// // // // // // // // // //         marginBottom: '2rem',
// // // // // // // // // //         gap: '1.2rem'
// // // // // // // // // //       }}>
// // // // // // // // // //         <FaBriefcase size={40} color="#9067C6" />
// // // // // // // // // //         <h1 style={{
// // // // // // // // // //           fontSize: '2.5rem',
// // // // // // // // // //           color: '#fff',
// // // // // // // // // //           fontWeight: 'bold',
// // // // // // // // // //           margin: 0,
// // // // // // // // // //           lineHeight: 1.2,
// // // // // // // // // //           letterSpacing: "0.5px",
// // // // // // // // // //         }}>
// // // // // // // // // //           Experience
// // // // // // // // // //         </h1>
// // // // // // // // // //       </div>
// // // // // // // // // //       <div style={{ height: '4rem' }}></div>

// // // // // // // // // //       {/* Flex container with responsive */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         gap: '3rem',
// // // // // // // // // //         marginBottom: '4rem',
// // // // // // // // // //         flexWrap: 'wrap'
// // // // // // // // // //       }}>
// // // // // // // // // //         {/* Lottie Animation on Left */}
// // // // // // // // // //         <div style={{ flex: '0 0 600px', minWidth: '320px' }}>
// // // // // // // // // //           <Tilt>
// // // // // // // // // //             <Lottie
// // // // // // // // // //               className="illustration"
// // // // // // // // // //               animationData={ExperienceLottie}
// // // // // // // // // //               loop={true}
// // // // // // // // // //               style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
// // // // // // // // // //             />
// // // // // // // // // //           </Tilt>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Experience Info */}
// // // // // // // // // //         <div style={{ flex: '1 1 400px', minWidth: '320px' }}>
// // // // // // // // // //           {/* First Experience */}
// // // // // // // // // //           <article style={{
// // // // // // // // // //             marginBottom: '2.5rem',
// // // // // // // // // //             padding: '1.5rem',
// // // // // // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //             borderRadius: '8px',
// // // // // // // // // //             animation: 'fadeInUp 0.6s ease forwards',
// // // // // // // // // //             opacity: 0,
// // // // // // // // // //           }}>
// // // // // // // // // //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // // // // // // //               <h2 style={{
// // // // // // // // // //                 fontSize: '1.5rem',
// // // // // // // // // //                 color: '#9067C6',
// // // // // // // // // //                 fontWeight: 500,
// // // // // // // // // //                 margin: 0
// // // // // // // // // //               }}>
// // // // // // // // // //                 Software Data QA Engineer
// // // // // // // // // //               </h2>
// // // // // // // // // //               <span style={{
// // // // // // // // // //                 color: '#bbb',
// // // // // // // // // //                 fontWeight: 400,
// // // // // // // // // //                 fontSize: '1rem',
// // // // // // // // // //                 marginLeft: '1rem'
// // // // // // // // // //               }}>
// // // // // // // // // //                 Jan 2025 – Apr 2025
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
// // // // // // // // // //               W3 Engineers Ltd,<br />
// // // // // // // // // //               Banani, Dhaka, Bangladesh.<br />
// // // // // // // // // //               Internship
// // // // // // // // // //             </div>
// // // // // // // // // //             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
// // // // // // // // // //               <li>Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.</li>
// // // // // // // // // //               <li>Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.</li>
// // // // // // // // // //               <li>Used Python for data analysis, addressed recurring system issues using Jira &amp; Loop, and regularly executed API requests via Postman.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: "1rem",
// // // // // // // // // //               fontStyle: "italic",
// // // // // // // // // //               color: "#b9a8d3",
// // // // // // // // // //               fontWeight: 400,
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               letterSpacing: ".3px"
// // // // // // // // // //             }}>
// // // // // // // // // //               Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>

// // // // // // // // // //           {/* Second Experience */}
// // // // // // // // // //           <article style={{
// // // // // // // // // //             marginBottom: '2.5rem',
// // // // // // // // // //             padding: '1.5rem',
// // // // // // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //             borderRadius: '8px',
// // // // // // // // // //             animation: 'fadeInUp 0.7s ease forwards',
// // // // // // // // // //             opacity: 0,
// // // // // // // // // //           }}>
// // // // // // // // // //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // // // // // // //               <h2 style={{
// // // // // // // // // //                 fontSize: '1.5rem',
// // // // // // // // // //                 color: '#9067C6',
// // // // // // // // // //                 fontWeight: 500,
// // // // // // // // // //                 margin: 0
// // // // // // // // // //               }}>
// // // // // // // // // //                 Research &amp; Teaching Assistant
// // // // // // // // // //               </h2>
// // // // // // // // // //               <span style={{
// // // // // // // // // //                 color: '#bbb',
// // // // // // // // // //                 fontWeight: 400,
// // // // // // // // // //                 fontSize: '1rem',
// // // // // // // // // //                 marginLeft: '1rem'
// // // // // // // // // //               }}>
// // // // // // // // // //                 Jan 2024 – Jan 2025
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
// // // // // // // // // //               East West University<br />
// // // // // // // // // //               Dhaka, Bangladesh.<br />
// // // // // // // // // //               Contact
// // // // // // // // // //             </div>
// // // // // // // // // //             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
// // // // // // // // // //               <li>Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.</li>
// // // // // // // // // //               <li>Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: "1rem",
// // // // // // // // // //               fontStyle: "italic",
// // // // // // // // // //               color: "#b9a8d3",
// // // // // // // // // //               fontWeight: 400,
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               letterSpacing: ".3px"
// // // // // // // // // //             }}>
// // // // // // // // // //               Skills: Research, Teaching, Leadership, Data Science
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>

// // // // // // // // // //           {/* Third Experience */}
// // // // // // // // // //           <article style={{
// // // // // // // // // //             marginBottom: '2.5rem',
// // // // // // // // // //             padding: '1.5rem',
// // // // // // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //             borderRadius: '8px',
// // // // // // // // // //             animation: 'fadeInUp 0.8s ease forwards',
// // // // // // // // // //             opacity: 0,
// // // // // // // // // //           }}>
// // // // // // // // // //             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
// // // // // // // // // //               <h2 style={{
// // // // // // // // // //                 fontSize: '1.5rem',
// // // // // // // // // //                 color: '#9067C6',
// // // // // // // // // //                 fontWeight: 500,
// // // // // // // // // //                 margin: 0
// // // // // // // // // //               }}>
// // // // // // // // // //                 Software &amp; ICT Trainee
// // // // // // // // // //               </h2>
// // // // // // // // // //               <span style={{
// // // // // // // // // //                 color: '#bbb',
// // // // // // // // // //                 fontWeight: 400,
// // // // // // // // // //                 fontSize: '1rem',
// // // // // // // // // //                 marginLeft: '1rem'
// // // // // // // // // //               }}>
// // // // // // // // // //                 June 2023 – Sept 2023
// // // // // // // // // //               </span>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div style={{ fontWeight: 500, margin: "0.5rem 0 0 0", color: "#e0e0e0" }}>
// // // // // // // // // //               BASIS Institute of Technology & Management (BITM)<br />
// // // // // // // // // //               Dhanmondi, Dhaka, Bangladesh.<br />
// // // // // // // // // //               Training
// // // // // // // // // //             </div>
// // // // // // // // // //             <ul style={{ marginTop: "1.2rem", color: "#d1d1d1", paddingLeft: "1.5rem" }}>
// // // // // // // // // //               <li>Participated in intensive hands-on software and ICT training under the Ministry of ICT project.</li>
// // // // // // // // // //               <li>Worked on practical projects involving web development and database systems.</li>
// // // // // // // // // //               <li>Developed soft skills for teamwork and communication.</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: "1rem",
// // // // // // // // // //               fontStyle: "italic",
// // // // // // // // // //               color: "#b9a8d3",
// // // // // // // // // //               fontWeight: 400,
// // // // // // // // // //               fontSize: "1rem",
// // // // // // // // // //               letterSpacing: ".3px"
// // // // // // // // // //             }}>
// // // // // // // // // //               Skills: Web Development, Teamwork, Communication, Database Systems
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <div style={{ height: '4rem' }}></div>

// // // // // // // // // //       {/* Awards title with icon */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         justifyContent: 'center',
// // // // // // // // // //         marginBottom: '2rem',
// // // // // // // // // //         gap: '1.2rem'
// // // // // // // // // //       }}>
// // // // // // // // // //         <h1 style={{
// // // // // // // // // //           fontSize: '2.5rem',
// // // // // // // // // //           color: '#fff',
// // // // // // // // // //           fontWeight: 'bold',
// // // // // // // // // //           margin: 0,
// // // // // // // // // //           lineHeight: 1.2,
// // // // // // // // // //           letterSpacing: "0.5px"
// // // // // // // // // //         }}>
// // // // // // // // // //           Awards
// // // // // // // // // //         </h1>
// // // // // // // // // //         <FaTrophy size={40} color="#9067C6" />
// // // // // // // // // //       </div>

// // // // // // // // // //       <div style={{ height: '5rem' }}></div>

// // // // // // // // // //       {/* Awards Section with Animation on RIGHT */}
// // // // // // // // // //       <div style={{
// // // // // // // // // //         display: 'flex',
// // // // // // // // // //         alignItems: 'center',
// // // // // // // // // //         gap: '3rem',
// // // // // // // // // //         marginBottom: '4rem',
// // // // // // // // // //         flexWrap: 'wrap'
// // // // // // // // // //       }}>
// // // // // // // // // //         {/* Awards Info */}
// // // // // // // // // //         <div style={{ flex: '1 1 400px', minWidth: '320px' }}>
// // // // // // // // // //           {/* First Award */}
// // // // // // // // // //           <article style={{
// // // // // // // // // //             marginBottom: '3rem',
// // // // // // // // // //             padding: '2rem',
// // // // // // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //             borderRadius: '12px',
// // // // // // // // // //             color: '#ddd',
// // // // // // // // // //           }}>
// // // // // // // // // //             <h2 style={{ fontSize: '1.6rem', color: '#9067C6', marginBottom: '0.5rem', fontWeight: 600 }}>
// // // // // // // // // //               Project Showcasing, CSE Festival 2024<br />
// // // // // // // // // //               <span style={{ fontWeight: 400, fontSize: '1.2rem' }}>East West University</span><br />
// // // // // // // // // //               <span style={{ fontWeight: 700, fontSize: '1.3rem', marginTop: '0.2rem', display: 'block' }}>First Runners Up</span>
// // // // // // // // // //             </h2>
// // // // // // // // // //             <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.5', color: '#ccc' }}>
// // // // // // // // // //               <li>Demonstrated a blockchain-based application</li>
// // // // // // // // // //               <li>Competed against 32 teams</li>
// // // // // // // // // //               <li>Gave Poster Presentation</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //             {/* Placeholder for team image */}
// // // // // // // // // //             <div style={{
// // // // // // // // // //               marginTop: '2rem',
// // // // // // // // // //               width: '100%',
// // // // // // // // // //               height: '200px',
// // // // // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.2)',
// // // // // // // // // //               borderRadius: '8px',
// // // // // // // // // //               display: 'flex',
// // // // // // // // // //               justifyContent: 'center',
// // // // // // // // // //               alignItems: 'center',
// // // // // // // // // //               color: '#9067C6',
// // // // // // // // // //               fontStyle: 'italic',
// // // // // // // // // //               fontSize: '1.1rem'
// // // // // // // // // //             }}>
// // // // // // // // // //               Team Picture (to be added)
// // // // // // // // // //             </div>
// // // // // // // // // //           </article>

// // // // // // // // // //           {/* Second Award */}
// // // // // // // // // //           <article style={{
// // // // // // // // // //             marginBottom: '0',
// // // // // // // // // //             padding: '2rem',
// // // // // // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // // // // //             borderRadius: '12px',
// // // // // // // // // //             color: '#ddd',
// // // // // // // // // //           }}>
// // // // // // // // // //             <h2 style={{ fontSize: '1.6rem', color: '#9067C6', marginBottom: '0.5rem', fontWeight: 600 }}>
// // // // // // // // // //               Medha Lalon Scholarship<br />
// // // // // // // // // //               <span style={{ fontWeight: 400, fontSize: '1.2rem' }}>East West University</span>
// // // // // // // // // //             </h2>
// // // // // // // // // //             <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', lineHeight: '1.5', color: '#ccc' }}>
// // // // // // // // // //               <li>A merit-based scholarship</li>
// // // // // // // // // //               <li>45K per year</li>
// // // // // // // // // //               <li>Got awarded 3 Times in a row</li>
// // // // // // // // // //             </ul>
// // // // // // // // // //           </article>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Lottie Animation on Right */}
// // // // // // // // // //         <div style={{ flex: '0 0 600px', minWidth: '320px', justifyContent: 'right', display: 'flex' }}>
// // // // // // // // // //           <Tilt>
// // // // // // // // // //             <Lottie
// // // // // // // // // //               className="illustration"
// // // // // // // // // //               animationData={AwardsLottie}
// // // // // // // // // //               loop={true}
// // // // // // // // // //               style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
// // // // // // // // // //             />
// // // // // // // // // //           </Tilt>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       <style>{`
// // // // // // // // // //         @keyframes fadeInUp {
// // // // // // // // // //           0% {
// // // // // // // // // //             opacity: 0;
// // // // // // // // // //             transform: translateY(20px);
// // // // // // // // // //           }
// // // // // // // // // //           100% {
// // // // // // // // // //             opacity: 1;
// // // // // // // // // //             transform: translateY(0);
// // // // // // // // // //           }
// // // // // // // // // //         }

// // // // // // // // // //         @media (max-width: 900px) {
// // // // // // // // // //           /* Stack left-right flex containers vertically */
// // // // // // // // // //           .AboutPage > div[style*="flex"] {
// // // // // // // // // //             flex-direction: column !important;
// // // // // // // // // //             align-items: center !important;
// // // // // // // // // //           }
// // // // // // // // // //           .AboutPage > div[style*="flex"] > div {
// // // // // // // // // //             width: 100% !important;
// // // // // // // // // //             max-width: 600px;
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Experience;
// // // // // // // // // // import React, { useRef, useLayoutEffect } from "react";
// // // // // // // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // // // // // // // // // const experiences = [
// // // // // // // // // //   {
// // // // // // // // // //     title: "Software Data QA Engineer",
// // // // // // // // // //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// // // // // // // // // //     date: "Jan 2025 – Apr 2025",
// // // // // // // // // //     details: [
// // // // // // // // // //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// // // // // // // // // //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// // // // // // // // // //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// // // // // // // // // //     ],
// // // // // // // // // //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Research & Teaching Assistant",
// // // // // // // // // //     company: "East West University, Dhaka, Bangladesh. Contact",
// // // // // // // // // //     date: "Jan 2024 – Jan 2025",
// // // // // // // // // //     details: [
// // // // // // // // // //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// // // // // // // // // //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// // // // // // // // // //     ],
// // // // // // // // // //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Software & ICT Trainee",
// // // // // // // // // //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// // // // // // // // // //     date: "June 2023 – Sept 2023",
// // // // // // // // // //     details: [
// // // // // // // // // //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// // // // // // // // // //       "Worked on practical projects involving web development and database systems.",
// // // // // // // // // //       "Developed soft skills for teamwork and communication."
// // // // // // // // // //     ],
// // // // // // // // // //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// // // // // // // // // //   }
// // // // // // // // // // ];

// // // // // // // // // // const awards = [
// // // // // // // // // //   {
// // // // // // // // // //     title: "Project Showcasing, CSE Festival 2024",
// // // // // // // // // //     company: "East West University",
// // // // // // // // // //     date: "First Runners Up",
// // // // // // // // // //     details: [
// // // // // // // // // //       "Demonstrated a blockchain-based application",
// // // // // // // // // //       "Competed against 32 teams",
// // // // // // // // // //       "Gave Poster Presentation"
// // // // // // // // // //     ],
// // // // // // // // // //     special: "Team Picture (to be added)"
// // // // // // // // // //   },
// // // // // // // // // //   {
// // // // // // // // // //     title: "Medha Lalon Scholarship",
// // // // // // // // // //     company: "East West University",
// // // // // // // // // //     date: "",
// // // // // // // // // //     details: [
// // // // // // // // // //       "A merit-based scholarship",
// // // // // // // // // //       "45K per year",
// // // // // // // // // //       "Got awarded 3 Times in a row"
// // // // // // // // // //     ]
// // // // // // // // // //   }
// // // // // // // // // // ];

// // // // // // // // // // const TimelineCard = React.forwardRef(
// // // // // // // // // //   ({ title, company, date, details, stack, special, isLast }, ref) => (
// // // // // // // // // //     <div className="timeline-row">
// // // // // // // // // //       <div className="timeline-rail">
// // // // // // // // // //         <div className="timeline-dot" />
// // // // // // // // // //         <div
// // // // // // // // // //           className="timeline-line"
// // // // // // // // // //           style={isLast ? { background: "none", minHeight: 0, height: 0 } : {}}
// // // // // // // // // //         />
// // // // // // // // // //       </div>
// // // // // // // // // //       <div className="timeline-card exp-card-dark" ref={ref}>
// // // // // // // // // //         <div className="timeline-title">{title}</div>
// // // // // // // // // //         <div className="timeline-company">{company}</div>
// // // // // // // // // //         {date && <div className="timeline-date">{date}</div>}
// // // // // // // // // //         <ul className="timeline-details">
// // // // // // // // // //           {details.map((d, i) => (
// // // // // // // // // //             <li key={i}>{d}</li>
// // // // // // // // // //           ))}
// // // // // // // // // //         </ul>
// // // // // // // // // //         {stack && <div className="timeline-stack">{stack}</div>}
// // // // // // // // // //         {special && (
// // // // // // // // // //           <div className="timeline-special">{special}</div>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // );

// // // // // // // // // // const SectionHeader = ({ icon, children }) => (
// // // // // // // // // //   <div className="section-header">
// // // // // // // // // //     {icon}
// // // // // // // // // //     <span>{children}</span>
// // // // // // // // // //   </div>
// // // // // // // // // // );

// // // // // // // // // // const Experience = () => {
// // // // // // // // // //   // Set timeline line height to exactly match card height minus dot
// // // // // // // // // //   useLayoutEffect(() => {
// // // // // // // // // //     const rows = document.querySelectorAll(".timeline-row");
// // // // // // // // // //     rows.forEach((row, idx) => {
// // // // // // // // // //       const card = row.querySelector(".timeline-card");
// // // // // // // // // //       const line = row.querySelector(".timeline-line");
// // // // // // // // // //       if (card && line) {
// // // // // // // // // //         line.style.height = idx === rows.length - 1 ? "0px" : `${card.offsetHeight - 12}px`;
// // // // // // // // // //       }
// // // // // // // // // //     });
// // // // // // // // // //   });

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="exp-awards-root">
// // // // // // // // // //       {/* Experience */}
// // // // // // // // // //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />} >Experience</SectionHeader>
// // // // // // // // // //       <div className="timeline-list">
// // // // // // // // // //         {experiences.map((exp, idx) => (
// // // // // // // // // //           <TimelineCard
// // // // // // // // // //             {...exp}
// // // // // // // // // //             key={exp.title}
// // // // // // // // // //             isLast={idx === experiences.length - 1}
// // // // // // // // // //           />
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //       {/* Awards */}
// // // // // // // // // //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />} >Awards</SectionHeader>
// // // // // // // // // //       <div className="timeline-list">
// // // // // // // // // //         {awards.map((awd, idx) => (
// // // // // // // // // //           <TimelineCard
// // // // // // // // // //             {...awd}
// // // // // // // // // //             key={awd.title}
// // // // // // // // // //             isLast={idx === awards.length - 1}
// // // // // // // // // //           />
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>
// // // // // // // // // //       <style>{`
// // // // // // // // // //         .exp-awards-root {
// // // // // // // // // //           max-width: 1050px;
// // // // // // // // // //           margin: 6.5em auto 2em auto; /* Top margin same as Education */
// // // // // // // // // //           padding: 0 2.3rem;
// // // // // // // // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // // // // // // // //           color: #f0f0f0;
// // // // // // // // // //         }
// // // // // // // // // //         .section-header {
// // // // // // // // // //           display: flex;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           font-size: 2.4rem;
// // // // // // // // // //           font-weight: 700;
// // // // // // // // // //           color: #fff;
// // // // // // // // // //           letter-spacing: 0.5px;
// // // // // // // // // //           margin-bottom: 2.2rem;
// // // // // // // // // //           margin-top: 0;
// // // // // // // // // //           gap: 0.85rem;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-list {
// // // // // // // // // //           display: flex;
// // // // // // // // // //           flex-direction: column;
// // // // // // // // // //           gap: 2.2rem;
// // // // // // // // // //           margin-bottom: 0.6rem;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-row {
// // // // // // // // // //           display: flex;
// // // // // // // // // //           flex-direction: row;
// // // // // // // // // //           align-items: flex-start;
// // // // // // // // // //           position: relative;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-rail {
// // // // // // // // // //           position: relative;
// // // // // // // // // //           width: 54px;
// // // // // // // // // //           display: flex;
// // // // // // // // // //           flex-direction: column;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           flex-shrink: 0;
// // // // // // // // // //           min-height: 100%;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-dot {
// // // // // // // // // //           width: 17px;
// // // // // // // // // //           height: 17px;
// // // // // // // // // //           background: #9067C6;
// // // // // // // // // //           border-radius: 50%;
// // // // // // // // // //           border: 3px solid #232c38;
// // // // // // // // // //           margin-bottom: 0;
// // // // // // // // // //           position: relative;
// // // // // // // // // //           z-index: 2;
// // // // // // // // // //           box-shadow: 0 0 0 6px rgba(144,103,198,0.08);
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-line {
// // // // // // // // // //           width: 3px;
// // // // // // // // // //           min-height: 68px;
// // // // // // // // // //           background: linear-gradient(180deg, #9067C6 60%, #232e44 100%);
// // // // // // // // // //           border-radius: 8px;
// // // // // // // // // //           margin: 0 auto;
// // // // // // // // // //           margin-top: -1.5px;
// // // // // // // // // //           z-index: 1;
// // // // // // // // // //           transition: height 0.2s;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-row:last-child .timeline-line {
// // // // // // // // // //           background: none;
// // // // // // // // // //           min-height: 0;
// // // // // // // // // //         }
// // // // // // // // // //         .exp-card-dark {
// // // // // // // // // //           background: rgba(44, 49, 74, 0.98); /* Matches your Education card bg */
// // // // // // // // // //           color: #f0f0f0;
// // // // // // // // // //           border-radius: 13px;
// // // // // // // // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.17);
// // // // // // // // // //           padding: 1.1rem 2.1rem 1rem 2.1rem;
// // // // // // // // // //           margin-left: 2.2rem;
// // // // // // // // // //           min-width: 0;
// // // // // // // // // //           flex: 1;
// // // // // // // // // //           font-size: 1.08rem;
// // // // // // // // // //           position: relative;
// // // // // // // // // //           word-break: break-word;
// // // // // // // // // //           margin-bottom: 0;
// // // // // // // // // //           transition: box-shadow 0.18s;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-title {
// // // // // // // // // //           font-weight: 700;
// // // // // // // // // //           color: #a084f6;
// // // // // // // // // //           font-size: 1.14rem;
// // // // // // // // // //           margin-bottom: 0.13rem;
// // // // // // // // // //           line-height: 1.24;
// // // // // // // // // //           letter-spacing: 0.01em;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-company {
// // // // // // // // // //           color: #bfbde9;
// // // // // // // // // //           font-weight: 500;
// // // // // // // // // //           font-size: 1.01rem;
// // // // // // // // // //           margin-bottom: 0.07rem;
// // // // // // // // // //           line-height: 1.17;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-date {
// // // // // // // // // //           font-size: 0.98rem;
// // // // // // // // // //           color: #bdb4e0;
// // // // // // // // // //           font-weight: 400;
// // // // // // // // // //           margin-bottom: 0.53rem;
// // // // // // // // // //           margin-top: 2px;
// // // // // // // // // //           letter-spacing: .01em;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-details {
// // // // // // // // // //           margin-top: 0.18rem;
// // // // // // // // // //           color: #f0f0f0;
// // // // // // // // // //           font-size: 1rem;
// // // // // // // // // //           padding-left: 1.1rem;
// // // // // // // // // //           margin-bottom: 0.5rem;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-details li {
// // // // // // // // // //           margin-bottom: 0.13rem;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-stack {
// // // // // // // // // //           color: #b59df7;
// // // // // // // // // //           font-style: italic;
// // // // // // // // // //           font-weight: 400;
// // // // // // // // // //           font-size: .99rem;
// // // // // // // // // //           letter-spacing: .2px;
// // // // // // // // // //           margin-top: .12rem;
// // // // // // // // // //         }
// // // // // // // // // //         .timeline-special {
// // // // // // // // // //           margin-top: 1.1rem;
// // // // // // // // // //           width: 100%;
// // // // // // // // // //           height: 80px;
// // // // // // // // // //           background: rgba(144, 103, 198, 0.09);
// // // // // // // // // //           border-radius: 8px;
// // // // // // // // // //           display: flex;
// // // // // // // // // //           align-items: center;
// // // // // // // // // //           justify-content: center;
// // // // // // // // // //           color: #9067C6;
// // // // // // // // // //           font-style: italic;
// // // // // // // // // //           font-size: 1.01rem;
// // // // // // // // // //         }

// // // // // // // // // //         /* MOBILE */
// // // // // // // // // //         @media (max-width: 900px) {
// // // // // // // // // //           .exp-awards-root {
// // // // // // // // // //             padding: 0 1.1rem;
// // // // // // // // // //             max-width: 100vw;
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //         @media (max-width: 650px) {
// // // // // // // // // //           .exp-awards-root {
// // // // // // // // // //             padding: 0 0.5rem;
// // // // // // // // // //             max-width: 100vw;
// // // // // // // // // //           }
// // // // // // // // // //           .exp-card-dark {
// // // // // // // // // //             padding: 0.85rem 0.6rem 0.7rem 0.8rem;
// // // // // // // // // //             font-size: .98rem;
// // // // // // // // // //             border-radius: 10px;
// // // // // // // // // //             margin-left: .15rem;
// // // // // // // // // //           }
// // // // // // // // // //           .timeline-rail {
// // // // // // // // // //             width: 20px;
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //         @media (max-width: 400px) {
// // // // // // // // // //           .exp-awards-root {
// // // // // // // // // //             padding: 0 0.13rem;
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Experience;
// // // // // // // // // import React, { useEffect } from "react";
// // // // // // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // // // // // // // // // Experiences Data
// // // // // // // // // const experiences = [
// // // // // // // // //   {
// // // // // // // // //     title: "Software Data QA Engineer",
// // // // // // // // //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// // // // // // // // //     date: "Jan 2025 – Apr 2025",
// // // // // // // // //     details: [
// // // // // // // // //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// // // // // // // // //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// // // // // // // // //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// // // // // // // // //     ],
// // // // // // // // //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Research & Teaching Assistant",
// // // // // // // // //     company: "East West University, Dhaka, Bangladesh. Contact",
// // // // // // // // //     date: "Jan 2024 – Jan 2025",
// // // // // // // // //     details: [
// // // // // // // // //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// // // // // // // // //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// // // // // // // // //     ],
// // // // // // // // //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Software & ICT Trainee",
// // // // // // // // //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// // // // // // // // //     date: "June 2023 – Sept 2023",
// // // // // // // // //     details: [
// // // // // // // // //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// // // // // // // // //       "Worked on practical projects involving web development and database systems.",
// // // // // // // // //       "Developed soft skills for teamwork and communication."
// // // // // // // // //     ],
// // // // // // // // //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// // // // // // // // //   }
// // // // // // // // // ];

// // // // // // // // // // Awards Data
// // // // // // // // // const awards = [
// // // // // // // // //   {
// // // // // // // // //     title: "Project Showcasing, CSE Festival 2024",
// // // // // // // // //     company: "East West University",
// // // // // // // // //     date: "First Runners Up",
// // // // // // // // //     details: [
// // // // // // // // //       "Demonstrated a blockchain-based application",
// // // // // // // // //       "Competed against 32 teams",
// // // // // // // // //       "Gave Poster Presentation"
// // // // // // // // //     ]
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Medha Lalon Scholarship",
// // // // // // // // //     company: "East West University",
// // // // // // // // //     date: "",
// // // // // // // // //     details: [
// // // // // // // // //       "A merit-based scholarship",
// // // // // // // // //       "45K per year",
// // // // // // // // //       "Got awarded 3 Times in a row"
// // // // // // // // //     ]
// // // // // // // // //   }
// // // // // // // // // ];

// // // // // // // // // // TimelineCard component
// // // // // // // // // const TimelineCard = React.forwardRef(
// // // // // // // // //   ({ title, company, date, details, stack }, ref) => (
// // // // // // // // //     <div className="timeline-row">
// // // // // // // // //       <div className="timeline-rail">
// // // // // // // // //         <div className="timeline-dot" />
// // // // // // // // //         <div className="timeline-line" />
// // // // // // // // //       </div>
// // // // // // // // //       <div className="timeline-card exp-card-dark" ref={ref}>
// // // // // // // // //         <div className="timeline-title">{title}</div>
// // // // // // // // //         <div className="timeline-company">{company}</div>
// // // // // // // // //         {date && <div className="timeline-date">{date}</div>}
// // // // // // // // //         <ul className="timeline-details">
// // // // // // // // //           {details.map((d, i) => (
// // // // // // // // //             <li key={i}>{d}</li>
// // // // // // // // //           ))}
// // // // // // // // //         </ul>
// // // // // // // // //         {stack && <div className="timeline-stack">{stack}</div>}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // );

// // // // // // // // // const SectionHeader = ({ icon, children }) => (
// // // // // // // // //   <div className="section-header">
// // // // // // // // //     {icon}
// // // // // // // // //     <span>{children}</span>
// // // // // // // // //   </div>
// // // // // // // // // );

// // // // // // // // // const Experience = () => {
// // // // // // // // //   // Dynamically adjust timeline line height
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     function adjustLines() {
// // // // // // // // //       const rows = document.querySelectorAll(".timeline-row");
// // // // // // // // //       rows.forEach((row) => {
// // // // // // // // //         const card = row.querySelector(".timeline-card");
// // // // // // // // //         const line = row.querySelector(".timeline-line");
// // // // // // // // //         const dot = row.querySelector(".timeline-dot");
// // // // // // // // //         if (card && line && dot) {
// // // // // // // // //           line.style.height = `${card.offsetHeight - dot.offsetHeight / 2}px`;
// // // // // // // // //         }
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //     adjustLines();
// // // // // // // // //     window.addEventListener('resize', adjustLines);
// // // // // // // // //     return () => window.removeEventListener('resize', adjustLines);
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div className="exp-awards-root">
// // // // // // // // //       {/* Experience */}
// // // // // // // // //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />} >Experience</SectionHeader>
// // // // // // // // //       <div className="timeline-list">
// // // // // // // // //         {experiences.map((exp) => (
// // // // // // // // //           <TimelineCard
// // // // // // // // //             {...exp}
// // // // // // // // //             key={exp.title}
// // // // // // // // //           />
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //       {/* Awards */}
// // // // // // // // //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />} >Awards</SectionHeader>
// // // // // // // // //       <div className="timeline-list">
// // // // // // // // //         {awards.map((awd) => (
// // // // // // // // //           <TimelineCard
// // // // // // // // //             {...awd}
// // // // // // // // //             key={awd.title}
// // // // // // // // //           />
// // // // // // // // //         ))}
// // // // // // // // //       </div>
// // // // // // // // //       <style>{`
// // // // // // // // //         .exp-awards-root {
// // // // // // // // //           max-width: 1000px;
// // // // // // // // //           margin: 6.5em auto 2em auto;
// // // // // // // // //           padding: 0 2.5rem;
// // // // // // // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // // // // // // //           color: #f0f0f0;
// // // // // // // // //         }
// // // // // // // // //         .section-header {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           font-size: 2.1rem;
// // // // // // // // //           font-weight: 700;
// // // // // // // // //           color: #fff;
// // // // // // // // //           letter-spacing: 0.5px;
// // // // // // // // //           margin-bottom: 3.2rem; /* bigger gap between sections */
// // // // // // // // //           margin-top: 0;
// // // // // // // // //           gap: 0.85rem;
// // // // // // // // //         }
// // // // // // // // //         .timeline-list {
// // // // // // // // //           display: flex;
// // // // // // // // //           flex-direction: column;
// // // // // // // // //           gap: 3.4rem; /* bigger gap between cards */
// // // // // // // // //           margin-bottom: 0.6rem;
// // // // // // // // //         }
// // // // // // // // //         .timeline-row {
// // // // // // // // //           display: flex;
// // // // // // // // //           flex-direction: row;
// // // // // // // // //           align-items: flex-start;
// // // // // // // // //           position: relative;
// // // // // // // // //         }
// // // // // // // // //         .timeline-rail {
// // // // // // // // //           position: relative;
// // // // // // // // //           width: 56px;
// // // // // // // // //           display: flex;
// // // // // // // // //           flex-direction: column;
// // // // // // // // //           align-items: center;
// // // // // // // // //           flex-shrink: 0;
// // // // // // // // //           min-height: 100%;
// // // // // // // // //         }
// // // // // // // // //         .timeline-dot {
// // // // // // // // //           width: 19px;
// // // // // // // // //           height: 19px;
// // // // // // // // //           background: #fff; /* PURE WHITE */
// // // // // // // // //           border-radius: 50%;
// // // // // // // // //           border: 4px solid #9067C6; /* purple border for contrast on white */
// // // // // // // // //           margin-bottom: 0;
// // // // // // // // //           position: relative;
// // // // // // // // //           z-index: 2;
// // // // // // // // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // // // // // // // //         }
// // // // // // // // //         .timeline-line {
// // // // // // // // //           width: 4px;
// // // // // // // // //           min-height: 68px;
// // // // // // // // //           background: #fff; /* PURE WHITE */
// // // // // // // // //           border-radius: 8px;
// // // // // // // // //           margin: 0 auto;
// // // // // // // // //           margin-top: -2px;
// // // // // // // // //           z-index: 1;
// // // // // // // // //           transition: height 0.2s;
// // // // // // // // //         }
// // // // // // // // //         .exp-card-dark {
// // // // // // // // //           background: rgba(44, 49, 74, 0.97);
// // // // // // // // //           color: #f0f0f0;
// // // // // // // // //           border-radius: 13px;
// // // // // // // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // // // // // // // //           padding: 1.1rem 1.2rem 1rem 1.2rem;
// // // // // // // // //           margin-left: 3.7rem; /* Increased left margin for bullet spacing */
// // // // // // // // //           min-width: 0;
// // // // // // // // //           flex: 1;
// // // // // // // // //           font-size: 1.08rem;
// // // // // // // // //           position: relative;
// // // // // // // // //           word-break: break-word;
// // // // // // // // //           margin-bottom: 0;
// // // // // // // // //           transition: box-shadow 0.18s;
// // // // // // // // //           line-height: 1.4; /* better readability */
// // // // // // // // //         }
// // // // // // // // //         .timeline-title {
// // // // // // // // //           font-weight: 700;
// // // // // // // // //           color: #a084f6;
// // // // // // // // //           font-size: 1.14rem;
// // // // // // // // //           margin-bottom: 0.35rem; /* bigger gap after title */
// // // // // // // // //           line-height: 1.3;
// // // // // // // // //           letter-spacing: 0.01em;
// // // // // // // // //         }
// // // // // // // // //         .timeline-company,
// // // // // // // // //         .timeline-date,
// // // // // // // // //         .timeline-details,
// // // // // // // // //         .timeline-stack {
// // // // // // // // //           margin-bottom: 0.65rem; /* consistent spacing */
// // // // // // // // //         }
// // // // // // // // //         .timeline-details li {
// // // // // // // // //           margin-bottom: 0.3rem; /* spaced bullets */
// // // // // // // // //         }

// // // // // // // // //         /* MOBILE */
// // // // // // // // //         @media (max-width: 650px) {
// // // // // // // // //           .exp-awards-root {
// // // // // // // // //             padding: 0 1.5rem;
// // // // // // // // //           }
// // // // // // // // //           .exp-card-dark {
// // // // // // // // //             margin-left: 2.5rem; /* slightly less margin on mobile */
// // // // // // // // //             padding: 1rem 1rem 1rem 1.1rem;
// // // // // // // // //             font-size: 0.93rem;
// // // // // // // // //             border-radius: 10px;
// // // // // // // // //           }
// // // // // // // // //           .timeline-rail {
// // // // // // // // //             width: 29px;
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //         @media (max-width: 500px) {
// // // // // // // // //           .exp-awards-root {
// // // // // // // // //             padding: 0 0.7rem;
// // // // // // // // //           }
// // // // // // // // //           .section-header {
// // // // // // // // //             font-size: 1.18rem;
// // // // // // // // //             margin-bottom: 1.6rem;
// // // // // // // // //             gap: 0.4rem;
// // // // // // // // //           }
// // // // // // // // //           .exp-card-dark {
// // // // // // // // //             margin-left: 1.5rem;
// // // // // // // // //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// // // // // // // // //             font-size: 0.9rem;
// // // // // // // // //           }
// // // // // // // // //           .timeline-rail {
// // // // // // // // //             width: 17px;
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //         @media (max-width: 375px) {
// // // // // // // // //           .exp-awards-root {
// // // // // // // // //             padding: 0 0.12rem;
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Experience;
// // // // // // // // // import React, { useEffect } from "react";
// // // // // // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // // // // // // // // // Experiences Data
// // // // // // // // // const experiences = [
// // // // // // // // //   {
// // // // // // // // //     title: "Software Data QA Engineer",
// // // // // // // // //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// // // // // // // // //     date: "Jan 2025 – Apr 2025",
// // // // // // // // //     details: [
// // // // // // // // //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// // // // // // // // //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// // // // // // // // //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// // // // // // // // //     ],
// // // // // // // // //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Research & Teaching Assistant",
// // // // // // // // //     company: "East West University, Dhaka, Bangladesh. Contact",
// // // // // // // // //     date: "Jan 2024 – Jan 2025",
// // // // // // // // //     details: [
// // // // // // // // //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// // // // // // // // //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// // // // // // // // //     ],
// // // // // // // // //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Software & ICT Trainee",
// // // // // // // // //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// // // // // // // // //     date: "June 2023 – Sept 2023",
// // // // // // // // //     details: [
// // // // // // // // //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// // // // // // // // //       "Worked on practical projects involving web development and database systems.",
// // // // // // // // //       "Developed soft skills for teamwork and communication."
// // // // // // // // //     ],
// // // // // // // // //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// // // // // // // // //   }
// // // // // // // // // ];

// // // // // // // // // // Awards Data
// // // // // // // // // const awards = [
// // // // // // // // //   {
// // // // // // // // //     title: "Project Showcasing, CSE Festival 2024",
// // // // // // // // //     company: "East West University",
// // // // // // // // //     date: "First Runners Up",
// // // // // // // // //     details: [
// // // // // // // // //       "Demonstrated a blockchain-based application",
// // // // // // // // //       "Competed against 32 teams",
// // // // // // // // //       "Gave Poster Presentation"
// // // // // // // // //     ]
// // // // // // // // //   },
// // // // // // // // //   {
// // // // // // // // //     title: "Medha Lalon Scholarship",
// // // // // // // // //     company: "East West University",
// // // // // // // // //     date: "",
// // // // // // // // //     details: [
// // // // // // // // //       "A merit-based scholarship",
// // // // // // // // //       "45K per year",
// // // // // // // // //       "Got awarded 3 Times in a row"
// // // // // // // // //     ]
// // // // // // // // //   }
// // // // // // // // // ];

// // // // // // // // // // TimelineCard component
// // // // // // // // // const TimelineCard = React.forwardRef(
// // // // // // // // //   ({ title, company, date, details, stack }, ref) => (
// // // // // // // // //     <div className="timeline-row">
// // // // // // // // //       <div className="timeline-rail">
// // // // // // // // //         <div className="timeline-dot" />
// // // // // // // // //         <div className="timeline-line" />
// // // // // // // // //       </div>
// // // // // // // // //       <div className="timeline-card exp-card-dark" ref={ref}>
// // // // // // // // //         <div className="timeline-title">{title}</div>
// // // // // // // // //         <div className="timeline-company">{company}</div>
// // // // // // // // //         {date && <div className="timeline-date">{date}</div>}
// // // // // // // // //         <ul className="timeline-details">
// // // // // // // // //           {details.map((d, i) => (
// // // // // // // // //             <li key={i}>{d}</li>
// // // // // // // // //           ))}
// // // // // // // // //         </ul>
// // // // // // // // //         {stack && <div className="timeline-stack">{stack}</div>}
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // );

// // // // // // // // // const SectionHeader = ({ icon, children }) => (
// // // // // // // // //   <div className="section-header">
// // // // // // // // //     {icon}
// // // // // // // // //     <span>{children}</span>
// // // // // // // // //   </div>
// // // // // // // // // );

// // // // // // // // // const Experience = () => {
// // // // // // // // //   // Dynamically adjust timeline line height
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     function adjustLines() {
// // // // // // // // //       const rows = document.querySelectorAll(".timeline-row");
// // // // // // // // //       rows.forEach((row) => {
// // // // // // // // //         const card = row.querySelector(".timeline-card");
// // // // // // // // //         const line = row.querySelector(".timeline-line");
// // // // // // // // //         const dot = row.querySelector(".timeline-dot");
// // // // // // // // //         if (card && line && dot) {
// // // // // // // // //           line.style.height = `${card.offsetHeight - dot.offsetHeight / 2}px`;
// // // // // // // // //         }
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //     adjustLines();
// // // // // // // // //     window.addEventListener('resize', adjustLines);
// // // // // // // // //     return () => window.removeEventListener('resize', adjustLines);
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <div className="exp-awards-root">
// // // // // // // // //       {/* Experience */}
// // // // // // // // //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>Experience</SectionHeader>
// // // // // // // // //       <div className="timeline-list">
// // // // // // // // //         {experiences.map((exp) => (
// // // // // // // // //           <TimelineCard {...exp} key={exp.title} />
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Awards */}
// // // // // // // // //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
// // // // // // // // //       <div className="timeline-list">
// // // // // // // // //         {awards.map((awd) => (
// // // // // // // // //           <TimelineCard {...awd} key={awd.title} />
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       <style>{`
// // // // // // // // //         .exp-awards-root {
// // // // // // // // //           max-width: 1000px;
// // // // // // // // //           margin: 6.5em auto 2em auto;
// // // // // // // // //           padding: 0 2.5rem;
// // // // // // // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // // // // // // //           color: #f0f0f0;
// // // // // // // // //         }
// // // // // // // // //         .section-header {
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           font-size: 2.5rem; /* Increased size */
// // // // // // // // //           font-weight: 700;
// // // // // // // // //           color: #fff;
// // // // // // // // //           letter-spacing: 0.5px;
// // // // // // // // //           margin-bottom: 3.2rem;
// // // // // // // // //           margin-top: 0;
// // // // // // // // //           gap: 0.85rem;
// // // // // // // // //         }
// // // // // // // // //         .timeline-list {
// // // // // // // // //           display: flex;
// // // // // // // // //           flex-direction: column;
// // // // // // // // //           gap: 3.4rem;
// // // // // // // // //           margin-bottom: 0.6rem;
// // // // // // // // //         }
// // // // // // // // //         .timeline-row {
// // // // // // // // //           display: flex;
// // // // // // // // //           flex-direction: row;
// // // // // // // // //           align-items: flex-start;
// // // // // // // // //           position: relative;
// // // // // // // // //         }
// // // // // // // // //         .timeline-rail {
// // // // // // // // //           position: relative;
// // // // // // // // //           width: 56px;
// // // // // // // // //           display: flex;
// // // // // // // // //           flex-direction: column;
// // // // // // // // //           align-items: center;
// // // // // // // // //           flex-shrink: 0;
// // // // // // // // //           min-height: 100%;
// // // // // // // // //         }
// // // // // // // // //         .timeline-dot {
// // // // // // // // //           width: 19px;
// // // // // // // // //           height: 19px;
// // // // // // // // //           background: #fff;
// // // // // // // // //           border-radius: 50%;
// // // // // // // // //           border: 4px solid #9067C6;
// // // // // // // // //           margin-bottom: 0;
// // // // // // // // //           position: relative;
// // // // // // // // //           z-index: 2;
// // // // // // // // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // // // // // // // //         }
// // // // // // // // //         .timeline-line {
// // // // // // // // //           width: 4px;
// // // // // // // // //           min-height: 68px;
// // // // // // // // //           background: #fff;
// // // // // // // // //           border-radius: 8px;
// // // // // // // // //           margin: 0 auto;
// // // // // // // // //           margin-top: -2px;
// // // // // // // // //           z-index: 1;
// // // // // // // // //           transition: height 0.2s;
// // // // // // // // //         }
// // // // // // // // //         .exp-card-dark {
// // // // // // // // //           background: rgba(44, 49, 74, 0.97);
// // // // // // // // //           color: #f0f0f0;
// // // // // // // // //           border-radius: 13px;
// // // // // // // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // // // // // // // //           padding: 1.1rem 1.2rem 1rem 2.5rem; /* Increased left padding */
// // // // // // // // //           margin-left: 4.5rem; /* Increased left margin for timeline spacing */
// // // // // // // // //           min-width: 0;
// // // // // // // // //           flex: 1;
// // // // // // // // //           font-size: 1.08rem;
// // // // // // // // //           position: relative;
// // // // // // // // //           word-break: break-word;
// // // // // // // // //           margin-bottom: 0;
// // // // // // // // //           transition: box-shadow 0.18s;
// // // // // // // // //           line-height: 1.4;
// // // // // // // // //         }
// // // // // // // // //         .timeline-title {
// // // // // // // // //           font-weight: 700;
// // // // // // // // //           color: #a084f6;
// // // // // // // // //           font-size: 1.14rem;
// // // // // // // // //           margin-bottom: 0.35rem;
// // // // // // // // //           line-height: 1.3;
// // // // // // // // //           letter-spacing: 0.01em;
// // // // // // // // //         }
// // // // // // // // //         .timeline-company,
// // // // // // // // //         .timeline-date,
// // // // // // // // //         .timeline-details,
// // // // // // // // //         .timeline-stack {
// // // // // // // // //           margin-bottom: 0.65rem;
// // // // // // // // //         }
// // // // // // // // //         .timeline-details {
// // // // // // // // //           margin-top: 0.18rem;
// // // // // // // // //           color: #f0f0f0;
// // // // // // // // //           font-size: 1rem;
// // // // // // // // //           padding-left: 1.5rem; /* Increased bullet indent */
// // // // // // // // //           margin-bottom: 0.5rem;
// // // // // // // // //         }
// // // // // // // // //         .timeline-details li {
// // // // // // // // //           margin-bottom: 0.3rem;
// // // // // // // // //         }

// // // // // // // // //         /* MOBILE FIX */
// // // // // // // // //         @media (max-width: 650px) {
// // // // // // // // //           .exp-awards-root {
// // // // // // // // //             padding: 0 1.5rem;
// // // // // // // // //           }
// // // // // // // // //           .exp-card-dark {
// // // // // // // // //             margin-left: 3rem; /* Reduced left margin */
// // // // // // // // //             padding: 1rem 1rem 1rem 1.8rem; /* Reduced left padding */
// // // // // // // // //             font-size: 0.93rem;
// // // // // // // // //             border-radius: 10px;
// // // // // // // // //           }
// // // // // // // // //           .timeline-details {
// // // // // // // // //             padding-left: 1.3rem; /* Reduced bullet indent */
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @media (max-width: 500px) {
// // // // // // // // //           .exp-awards-root {
// // // // // // // // //             padding: 0 0.7rem;
// // // // // // // // //           }
// // // // // // // // //           .section-header {
// // // // // // // // //             font-size: 1.8rem; /* Slightly smaller on very small screens */
// // // // // // // // //             margin-bottom: 1.6rem;
// // // // // // // // //             gap: 0.4rem;
// // // // // // // // //           }
// // // // // // // // //           .exp-card-dark {
// // // // // // // // //             margin-left: 1.5rem;
// // // // // // // // //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// // // // // // // // //             font-size: 0.9rem;
// // // // // // // // //           }
// // // // // // // // //           .timeline-rail {
// // // // // // // // //             width: 17px;
// // // // // // // // //           }
// // // // // // // // //         }

// // // // // // // // //         @media (max-width: 375px) {
// // // // // // // // //           .exp-awards-root {
// // // // // // // // //             padding: 0 0.12rem;
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Experience;
// // // // // // // // import React, { useEffect } from "react";
// // // // // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // // // // // // // // Experiences Data
// // // // // // // // const experiences = [
// // // // // // // //   {
// // // // // // // //     title: "Software Data QA Engineer",
// // // // // // // //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// // // // // // // //     date: "Jan 2025 – Apr 2025",
// // // // // // // //     details: [
// // // // // // // //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// // // // // // // //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// // // // // // // //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// // // // // // // //     ],
// // // // // // // //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Research & Teaching Assistant",
// // // // // // // //     company: "East West University, Dhaka, Bangladesh. Contact",
// // // // // // // //     date: "Jan 2024 – Jan 2025",
// // // // // // // //     details: [
// // // // // // // //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// // // // // // // //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// // // // // // // //     ],
// // // // // // // //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Software & ICT Trainee",
// // // // // // // //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// // // // // // // //     date: "June 2023 – Sept 2023",
// // // // // // // //     details: [
// // // // // // // //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// // // // // // // //       "Worked on practical projects involving web development and database systems.",
// // // // // // // //       "Developed soft skills for teamwork and communication."
// // // // // // // //     ],
// // // // // // // //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// // // // // // // //   }
// // // // // // // // ];

// // // // // // // // // Awards Data
// // // // // // // // const awards = [
// // // // // // // //   {
// // // // // // // //     title: "Project Showcasing, CSE Festival 2024",
// // // // // // // //     company: "East West University",
// // // // // // // //     date: "First Runners Up",
// // // // // // // //     details: [
// // // // // // // //       "Demonstrated a blockchain-based application",
// // // // // // // //       "Competed against 32 teams",
// // // // // // // //       "Gave Poster Presentation"
// // // // // // // //     ]
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Medha Lalon Scholarship",
// // // // // // // //     company: "East West University",
// // // // // // // //     date: "",
// // // // // // // //     details: [
// // // // // // // //       "A merit-based scholarship",
// // // // // // // //       "45K per year",
// // // // // // // //       "Got awarded 3 Times in a row"
// // // // // // // //     ]
// // // // // // // //   }
// // // // // // // // ];

// // // // // // // // // TimelineCard component
// // // // // // // // const TimelineCard = React.forwardRef(
// // // // // // // //   ({ title, company, date, details, stack, isLast }, ref) => (
// // // // // // // //     <div className="timeline-row">
// // // // // // // //       <div className="timeline-rail">
// // // // // // // //         <div className="timeline-dot" />
// // // // // // // //         <div
// // // // // // // //           className="timeline-line"
// // // // // // // //           style={isLast ? { height: 0, background: "none" } : {}}
// // // // // // // //         />
// // // // // // // //       </div>
// // // // // // // //       <div className="timeline-card exp-card-dark" ref={ref}>
// // // // // // // //         <div className="timeline-title">{title}</div>
// // // // // // // //         <div className="timeline-company">{company}</div>
// // // // // // // //         {date && <div className="timeline-date">{date}</div>}
// // // // // // // //         <ul className="timeline-details">
// // // // // // // //           {details.map((d, i) => (
// // // // // // // //             <li key={i}>{d}</li>
// // // // // // // //           ))}
// // // // // // // //         </ul>
// // // // // // // //         {stack && <div className="timeline-stack">{stack}</div>}
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // );

// // // // // // // // const SectionHeader = ({ icon, children }) => (
// // // // // // // //   <div className="section-header">
// // // // // // // //     {icon}
// // // // // // // //     <span>{children}</span>
// // // // // // // //   </div>
// // // // // // // // );

// // // // // // // // const Experience = () => {
// // // // // // // //   // Dynamically adjust timeline line height
// // // // // // // //   useEffect(() => {
// // // // // // // //     function adjustLines() {
// // // // // // // //       const rows = document.querySelectorAll(".timeline-row");
// // // // // // // //       rows.forEach((row, idx) => {
// // // // // // // //         const card = row.querySelector(".timeline-card");
// // // // // // // //         const line = row.querySelector(".timeline-line");
// // // // // // // //         const dot = row.querySelector(".timeline-dot");
// // // // // // // //         if (card && line && dot) {
// // // // // // // //           if (idx === rows.length - 1) {
// // // // // // // //             line.style.height = "0px";
// // // // // // // //             line.style.background = "none";
// // // // // // // //           } else {
// // // // // // // //             // line height = card height - (dot radius * 2)
// // // // // // // //             // dot height = 19px, radius = 9.5px
// // // // // // // //             const dotRadius = 9.5;
// // // // // // // //             const lineHeight = card.offsetHeight - dotRadius * 2;
// // // // // // // //             line.style.height = `${lineHeight}px`;
// // // // // // // //             line.style.background = "#fff";
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       });
// // // // // // // //     }
// // // // // // // //     adjustLines();
// // // // // // // //     window.addEventListener('resize', adjustLines);
// // // // // // // //     return () => window.removeEventListener('resize', adjustLines);
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div className="exp-awards-root">
// // // // // // // //       {/* Experience */}
// // // // // // // //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>Experience</SectionHeader>
// // // // // // // //       <div className="timeline-list">
// // // // // // // //         {experiences.map((exp, idx) => (
// // // // // // // //           <TimelineCard {...exp} key={exp.title} isLast={idx === experiences.length - 1} />
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       {/* Awards */}
// // // // // // // //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
// // // // // // // //       <div className="timeline-list">
// // // // // // // //         {awards.map((awd, idx) => (
// // // // // // // //           <TimelineCard {...awd} key={awd.title} isLast={idx === awards.length - 1} />
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       <style>{`
// // // // // // // //         .exp-awards-root {
// // // // // // // //           max-width: 1000px;
// // // // // // // //           margin: 0 auto 2em auto;
// // // // // // // //           padding: 0 2.5rem;
// // // // // // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // // // // // //           color: #f0f0f0;
// // // // // // // //           padding-top: 8rem; /* Desktop top gap */
// // // // // // // //         }
// // // // // // // //         .section-header {
// // // // // // // //           display: flex;
// // // // // // // //           align-items: center;
// // // // // // // //           font-size: 2.5rem;
// // // // // // // //           font-weight: 700;
// // // // // // // //           color: #fff;
// // // // // // // //           letter-spacing: 0.5px;
// // // // // // // //           margin-top: 0;
// // // // // // // //           margin-bottom: 4rem; /* gap after title */
// // // // // // // //           gap: 0.85rem;
// // // // // // // //         }
// // // // // // // //         .timeline-list {
// // // // // // // //           display: flex;
// // // // // // // //           flex-direction: column;
// // // // // // // //           gap: 3.4rem;
// // // // // // // //           margin-bottom: 4rem; /* gap after last card */
// // // // // // // //         }
// // // // // // // //         /* Awards header bottom margin */
// // // // // // // //         .exp-awards-root > .section-header:nth-of-type(2) {
// // // // // // // //           margin-bottom: 4rem;
// // // // // // // //         }
// // // // // // // //         .timeline-row {
// // // // // // // //           display: flex;
// // // // // // // //           flex-direction: row;
// // // // // // // //           align-items: flex-start;
// // // // // // // //           position: relative;
// // // // // // // //         }
// // // // // // // //         .timeline-rail {
// // // // // // // //           position: relative;
// // // // // // // //           width: 56px;
// // // // // // // //           display: flex;
// // // // // // // //           flex-direction: column;
// // // // // // // //           align-items: center;
// // // // // // // //           flex-shrink: 0;
// // // // // // // //           min-height: 100%;
// // // // // // // //         }
// // // // // // // //         .timeline-dot {
// // // // // // // //           width: 19px;
// // // // // // // //           height: 19px;
// // // // // // // //           background: #fff;
// // // // // // // //           border-radius: 50%;
// // // // // // // //           border: 4px solid #9067C6;
// // // // // // // //           margin-bottom: 0;
// // // // // // // //           position: relative;
// // // // // // // //           z-index: 2;
// // // // // // // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // // // // // // //         }
// // // // // // // //         .timeline-line {
// // // // // // // //           width: 4px;
// // // // // // // //           min-height: 68px;
// // // // // // // //           background: #fff;
// // // // // // // //           border-radius: 8px;
// // // // // // // //           margin: 0 auto;
// // // // // // // //           margin-top: -2px;
// // // // // // // //           z-index: 1;
// // // // // // // //           transition: height 0.2s;
// // // // // // // //         }
// // // // // // // //         .exp-card-dark {
// // // // // // // //           background: rgba(44, 49, 74, 0.97);
// // // // // // // //           color: #f0f0f0;
// // // // // // // //           border-radius: 13px;
// // // // // // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // // // // // // //           padding: 1.1rem 1.2rem 1rem 2.5rem; /* Increased left padding */
// // // // // // // //           margin-left: 4.5rem; /* Increased left margin for timeline spacing */
// // // // // // // //           min-width: 0;
// // // // // // // //           flex: 1;
// // // // // // // //           font-size: 1.08rem;
// // // // // // // //           position: relative;
// // // // // // // //           word-break: break-word;
// // // // // // // //           margin-bottom: 0;
// // // // // // // //           transition: box-shadow 0.18s;
// // // // // // // //           line-height: 1.4;
// // // // // // // //         }
// // // // // // // //         .timeline-title {
// // // // // // // //           font-weight: 700;
// // // // // // // //           color: #a084f6;
// // // // // // // //           font-size: 1.14rem;
// // // // // // // //           margin-bottom: 0.35rem;
// // // // // // // //           line-height: 1.3;
// // // // // // // //           letter-spacing: 0.01em;
// // // // // // // //         }
// // // // // // // //         .timeline-company,
// // // // // // // //         .timeline-date,
// // // // // // // //         .timeline-details,
// // // // // // // //         .timeline-stack {
// // // // // // // //           margin-bottom: 0.65rem;
// // // // // // // //         }
// // // // // // // //         .timeline-details {
// // // // // // // //           margin-top: 0.18rem;
// // // // // // // //           color: #f0f0f0;
// // // // // // // //           font-size: 1rem;
// // // // // // // //           padding-left: 1.5rem; /* Increased bullet indent */
// // // // // // // //           margin-bottom: 0.5rem;
// // // // // // // //         }
// // // // // // // //         .timeline-details li {
// // // // // // // //           margin-bottom: 0.3rem;
// // // // // // // //         }

// // // // // // // //         /* MOBILE */
// // // // // // // //         @media (max-width: 650px) {
// // // // // // // //           .exp-awards-root {
// // // // // // // //             padding-top: 4rem; /* Reduced top gap */
// // // // // // // //           }
// // // // // // // //           .exp-card-dark {
// // // // // // // //             margin-left: 3rem; /* Reduced left margin */
// // // // // // // //             padding: 1rem 1rem 1rem 1.8rem; /* Reduced left padding */
// // // // // // // //             font-size: 0.93rem;
// // // // // // // //             border-radius: 10px;
// // // // // // // //           }
// // // // // // // //           .timeline-details {
// // // // // // // //             padding-left: 1.3rem; /* Reduced bullet indent */
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @media (max-width: 500px) {
// // // // // // // //           .exp-awards-root {
// // // // // // // //             padding: 0 0.7rem;
// // // // // // // //           }
// // // // // // // //           .section-header {
// // // // // // // //             font-size: 1.8rem; /* Slightly smaller on very small screens */
// // // // // // // //             margin-bottom: 1.6rem;
// // // // // // // //             gap: 0.4rem;
// // // // // // // //           }
// // // // // // // //           .exp-card-dark {
// // // // // // // //             margin-left: 1.5rem;
// // // // // // // //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// // // // // // // //             font-size: 0.9rem;
// // // // // // // //           }
// // // // // // // //           .timeline-rail {
// // // // // // // //             width: 17px;
// // // // // // // //           }
// // // // // // // //         }

// // // // // // // //         @media (max-width: 375px) {
// // // // // // // //           .exp-awards-root {
// // // // // // // //             padding: 0 0.12rem;
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Experience;
// // // // // // // import React, { useEffect } from "react";
// // // // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // // // // // // const experiences = [
// // // // // // //   {
// // // // // // //     title: "Software Data QA Engineer",
// // // // // // //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// // // // // // //     date: "Jan 2025 – Apr 2025",
// // // // // // //     details: [
// // // // // // //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// // // // // // //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// // // // // // //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// // // // // // //     ],
// // // // // // //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Research & Teaching Assistant",
// // // // // // //     company: "East West University, Dhaka, Bangladesh. Contact",
// // // // // // //     date: "Jan 2024 – Jan 2025",
// // // // // // //     details: [
// // // // // // //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// // // // // // //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// // // // // // //     ],
// // // // // // //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Software & ICT Trainee",
// // // // // // //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// // // // // // //     date: "June 2023 – Sept 2023",
// // // // // // //     details: [
// // // // // // //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// // // // // // //       "Worked on practical projects involving web development and database systems.",
// // // // // // //       "Developed soft skills for teamwork and communication."
// // // // // // //     ],
// // // // // // //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// // // // // // //   }
// // // // // // // ];

// // // // // // // const awards = [
// // // // // // //   {
// // // // // // //     title: "Project Showcasing, CSE Festival 2024",
// // // // // // //     company: "East West University",
// // // // // // //     date: "First Runners Up",
// // // // // // //     details: [
// // // // // // //       "Demonstrated a blockchain-based application",
// // // // // // //       "Competed against 32 teams",
// // // // // // //       "Gave Poster Presentation"
// // // // // // //     ]
// // // // // // //   },
// // // // // // //   {
// // // // // // //     title: "Medha Lalon Scholarship",
// // // // // // //     company: "East West University",
// // // // // // //     date: "",
// // // // // // //     details: [
// // // // // // //       "A merit-based scholarship",
// // // // // // //       "45K per year",
// // // // // // //       "Got awarded 3 Times in a row"
// // // // // // //     ]
// // // // // // //   }
// // // // // // // ];

// // // // // // // const TimelineCard = React.forwardRef(
// // // // // // //   ({ title, company, date, details, stack, isLast }, ref) => (
// // // // // // //     <div className="timeline-row">
// // // // // // //       <div className="timeline-rail">
// // // // // // //         <div className="timeline-dot" />
// // // // // // //         <div
// // // // // // //           className="timeline-line"
// // // // // // //           style={isLast ? { height: 0, background: "none" } : {}}
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //       <div className="timeline-card exp-card-dark" ref={ref}>
// // // // // // //         <div className="timeline-title">{title}</div>
// // // // // // //         <div className="timeline-company">{company}</div>
// // // // // // //         {date && <div className="timeline-date">{date}</div>}
// // // // // // //         <ul className="timeline-details">
// // // // // // //           {details.map((d, i) => (
// // // // // // //             <li key={i}>{d}</li>
// // // // // // //           ))}
// // // // // // //         </ul>
// // // // // // //         {stack && <div className="timeline-stack">{stack}</div>}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // );

// // // // // // // const SectionHeader = ({ icon, children }) => (
// // // // // // //   <div className="section-header">
// // // // // // //     {icon}
// // // // // // //     <span>{children}</span>
// // // // // // //   </div>
// // // // // // // );

// // // // // // // const Experience = () => {
// // // // // // //   useEffect(() => {
// // // // // // //     function adjustLines() {
// // // // // // //       const rows = document.querySelectorAll(".timeline-row");
// // // // // // //       rows.forEach((row, idx) => {
// // // // // // //         const card = row.querySelector(".timeline-card");
// // // // // // //         const line = row.querySelector(".timeline-line");
// // // // // // //         const dot = row.querySelector(".timeline-dot");
// // // // // // //         if (card && line && dot) {
// // // // // // //           if (idx === rows.length - 1) {
// // // // // // //             line.style.height = "0px";
// // // // // // //             line.style.background = "none";
// // // // // // //           } else {
// // // // // // //             const dotRadius = 9.5;
// // // // // // //             const lineHeight = card.offsetHeight - dotRadius * 2 - 0.32; // 0.02rem ~ 0.32px approx
// // // // // // //             line.style.height = `${lineHeight}px`;
// // // // // // //             line.style.background = "#fff";
// // // // // // //           }
// // // // // // //         }
// // // // // // //       });
// // // // // // //     }
// // // // // // //     adjustLines();
// // // // // // //     window.addEventListener("resize", adjustLines);
// // // // // // //     return () => window.removeEventListener("resize", adjustLines);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <div className="exp-awards-root">
// // // // // // //       {/* Experience */}
// // // // // // //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>
// // // // // // //         Experience
// // // // // // //       </SectionHeader>
// // // // // // //       <div className="timeline-list">
// // // // // // //         {experiences.map((exp, idx) => (
// // // // // // //           <TimelineCard {...exp} key={exp.title} isLast={idx === experiences.length - 1} />
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       {/* Awards */}
// // // // // // //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
// // // // // // //       <div className="timeline-list">
// // // // // // //         {awards.map((awd, idx) => (
// // // // // // //           <TimelineCard {...awd} key={awd.title} isLast={idx === awards.length - 1} />
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       <style>{`
// // // // // // //         .exp-awards-root {
// // // // // // //           max-width: 1000px;
// // // // // // //           margin: 0 auto 2em auto;
// // // // // // //           padding: 0 2.5rem;
// // // // // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // // // // //           color: #f0f0f0;
// // // // // // //           padding-top: 12rem; /* increased top gap */
// // // // // // //         }
// // // // // // //         .section-header {
// // // // // // //           display: flex;
// // // // // // //           align-items: center;
// // // // // // //           font-size: 2.5rem;
// // // // // // //           font-weight: 700;
// // // // // // //           color: #fff;
// // // // // // //           letter-spacing: 0.5px;
// // // // // // //           margin-top: 0;
// // // // // // //           margin-bottom: 4rem;
// // // // // // //           gap: 0.85rem;
// // // // // // //         }
// // // // // // //         .timeline-list {
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           gap: 3.4rem;
// // // // // // //           margin-bottom: 4rem;
// // // // // // //         }
// // // // // // //         .exp-awards-root > .section-header:nth-of-type(2) {
// // // // // // //           margin-bottom: 4rem;
// // // // // // //         }
// // // // // // //         .timeline-row {
// // // // // // //           display: flex;
// // // // // // //           flex-direction: row;
// // // // // // //           align-items: flex-start;
// // // // // // //           position: relative;
// // // // // // //         }
// // // // // // //         .timeline-rail {
// // // // // // //           position: relative;
// // // // // // //           width: 56px;
// // // // // // //           display: flex;
// // // // // // //           flex-direction: column;
// // // // // // //           align-items: center;
// // // // // // //           flex-shrink: 0;
// // // // // // //           min-height: 100%;
// // // // // // //         }
// // // // // // //         .timeline-dot {
// // // // // // //           width: 19px;
// // // // // // //           height: 19px;
// // // // // // //           background: #fff;
// // // // // // //           border-radius: 50%;
// // // // // // //           border: 4px solid #9067C6;
// // // // // // //           margin-bottom: 0;
// // // // // // //           position: relative;
// // // // // // //           z-index: 2;
// // // // // // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // // // // // //         }
// // // // // // //         .timeline-line {
// // // // // // //           width: 4px;
// // // // // // //           min-height: 68px;
// // // // // // //           background: #fff;
// // // // // // //           border-radius: 8px;
// // // // // // //           margin: 0 auto;
// // // // // // //           margin-top: -2px;
// // // // // // //           z-index: 1;
// // // // // // //           transition: height 0.2s;
// // // // // // //         }
// // // // // // //         .exp-card-dark {
// // // // // // //           background: rgba(44, 49, 74, 0.97);
// // // // // // //           color: #f0f0f0;
// // // // // // //           border-radius: 13px;
// // // // // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // // // // // //           padding: 1.1rem 1.2rem 1rem 2.5rem;
// // // // // // //           margin-left: 4.5rem;
// // // // // // //           min-width: 0;
// // // // // // //           flex: 1;
// // // // // // //           font-size: 1.08rem;
// // // // // // //           position: relative;
// // // // // // //           word-break: break-word;
// // // // // // //           margin-bottom: 0;
// // // // // // //           transition: box-shadow 0.18s;
// // // // // // //           line-height: 1.4;
// // // // // // //         }
// // // // // // //         .timeline-title {
// // // // // // //           font-weight: 700;
// // // // // // //           color: #a084f6;
// // // // // // //           font-size: 1.14rem;
// // // // // // //           margin-bottom: 0.35rem;
// // // // // // //           line-height: 1.3;
// // // // // // //           letter-spacing: 0.01em;
// // // // // // //         }
// // // // // // //         .timeline-company,
// // // // // // //         .timeline-date,
// // // // // // //         .timeline-details,
// // // // // // //         .timeline-stack {
// // // // // // //           margin-bottom: 0.65rem;
// // // // // // //         }
// // // // // // //         .timeline-details {
// // // // // // //           margin-top: 0.18rem;
// // // // // // //           color: #f0f0f0;
// // // // // // //           font-size: 1rem;
// // // // // // //           padding-left: 1.5rem;
// // // // // // //           margin-bottom: 0.5rem;
// // // // // // //         }
// // // // // // //         .timeline-details li {
// // // // // // //           margin-bottom: 0.3rem;
// // // // // // //         }

// // // // // // //         /* MOBILE */
// // // // // // //         @media (max-width: 650px) {
// // // // // // //           .exp-awards-root {
// // // // // // //             padding-top: 6rem;
// // // // // // //           }
// // // // // // //           .exp-card-dark {
// // // // // // //             margin-left: 3rem;
// // // // // // //             padding: 1rem 1rem 1rem 1.8rem;
// // // // // // //             font-size: 0.93rem;
// // // // // // //             border-radius: 10px;
// // // // // // //           }
// // // // // // //           .timeline-details {
// // // // // // //             padding-left: 1.3rem;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (max-width: 500px) {
// // // // // // //           .exp-awards-root {
// // // // // // //             padding: 0 0.7rem;
// // // // // // //           }
// // // // // // //           .section-header {
// // // // // // //             font-size: 1.8rem;
// // // // // // //             margin-bottom: 1.6rem;
// // // // // // //             gap: 0.4rem;
// // // // // // //           }
// // // // // // //           .exp-card-dark {
// // // // // // //             margin-left: 1.5rem;
// // // // // // //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// // // // // // //             font-size: 0.9rem;
// // // // // // //           }
// // // // // // //           .timeline-rail {
// // // // // // //             width: 17px;
// // // // // // //           }
// // // // // // //         }

// // // // // // //         @media (max-width: 375px) {
// // // // // // //           .exp-awards-root {
// // // // // // //             padding: 0 0.12rem;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Experience;
// // // // // // import React, { useEffect } from "react";
// // // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // // // // // const experiences = [
// // // // // //   {
// // // // // //     title: "Software Data QA Engineer",
// // // // // //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// // // // // //     date: "Jan 2025 – Apr 2025",
// // // // // //     details: [
// // // // // //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// // // // // //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// // // // // //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// // // // // //     ],
// // // // // //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Research & Teaching Assistant",
// // // // // //     company: "East West University, Dhaka, Bangladesh. Contact",
// // // // // //     date: "Jan 2024 – Jan 2025",
// // // // // //     details: [
// // // // // //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// // // // // //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// // // // // //     ],
// // // // // //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Software & ICT Trainee",
// // // // // //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// // // // // //     date: "June 2023 – Sept 2023",
// // // // // //     details: [
// // // // // //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// // // // // //       "Worked on practical projects involving web development and database systems.",
// // // // // //       "Developed soft skills for teamwork and communication."
// // // // // //     ],
// // // // // //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// // // // // //   }
// // // // // // ];

// // // // // // const awards = [
// // // // // //   {
// // // // // //     title: "Project Showcasing, CSE Festival 2024",
// // // // // //     company: "East West University",
// // // // // //     date: "First Runners Up",
// // // // // //     details: [
// // // // // //       "Demonstrated a blockchain-based application",
// // // // // //       "Competed against 32 teams",
// // // // // //       "Gave Poster Presentation"
// // // // // //     ]
// // // // // //   },
// // // // // //   {
// // // // // //     title: "Medha Lalon Scholarship",
// // // // // //     company: "East West University",
// // // // // //     date: "",
// // // // // //     details: [
// // // // // //       "A merit-based scholarship",
// // // // // //       "45K per year",
// // // // // //       "Got awarded 3 Times in a row"
// // // // // //     ]
// // // // // //   }
// // // // // // ];

// // // // // // const TimelineCard = React.forwardRef(
// // // // // //   ({ title, company, date, details, stack, isLast }, ref) => (
// // // // // //     <div className="timeline-row">
// // // // // //       <div className="timeline-rail">
// // // // // //         <div className="timeline-dot" />
// // // // // //         <div
// // // // // //           className="timeline-line"
// // // // // //           style={isLast ? { height: 0, background: "none" } : {}}
// // // // // //         />
// // // // // //       </div>
// // // // // //       <div className="timeline-card exp-card-dark" ref={ref}>
// // // // // //         <div className="timeline-title">{title}</div>
// // // // // //         <div className="timeline-company">{company}</div>
// // // // // //         {date && <div className="timeline-date">{date}</div>}
// // // // // //         <ul className="timeline-details">
// // // // // //           {details.map((d, i) => (
// // // // // //             <li key={i}>{d}</li>
// // // // // //           ))}
// // // // // //         </ul>
// // // // // //         {stack && <div className="timeline-stack">{stack}</div>}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // );

// // // // // // const SectionHeader = ({ icon, children }) => (
// // // // // //   <div className="section-header">
// // // // // //     {icon}
// // // // // //     <span>{children}</span>
// // // // // //   </div>
// // // // // // );

// // // // // // const Experience = () => {
// // // // // //   useEffect(() => {
// // // // // //     function adjustLines() {
// // // // // //       const rows = document.querySelectorAll(".timeline-row");
// // // // // //       rows.forEach((row, idx) => {
// // // // // //         const card = row.querySelector(".timeline-card");
// // // // // //         const line = row.querySelector(".timeline-line");
// // // // // //         const dot = row.querySelector(".timeline-dot");
// // // // // //         if (card && line && dot) {
// // // // // //           if (idx === rows.length - 1) {
// // // // // //             line.style.height = "0px";
// // // // // //             line.style.background = "none";
// // // // // //           } else {
// // // // // //             const dotRadius = 9.5;
// // // // // //             const lineHeight = card.offsetHeight - dotRadius * 2 - 0.32; // 0.02rem ~ 0.32px approx
// // // // // //             line.style.height = `${lineHeight}px`;
// // // // // //             line.style.background = "#fff";
// // // // // //           }
// // // // // //         }
// // // // // //       });
// // // // // //     }
// // // // // //     adjustLines();
// // // // // //     window.addEventListener("resize", adjustLines);
// // // // // //     return () => window.removeEventListener("resize", adjustLines);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <div className="exp-awards-root">
// // // // // //       {/* Experience */}
// // // // // //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>
// // // // // //         Experience
// // // // // //       </SectionHeader>
// // // // // //       <div className="timeline-list">
// // // // // //         {experiences.map((exp, idx) => (
// // // // // //           <TimelineCard {...exp} key={exp.title} isLast={idx === experiences.length - 1} />
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Awards */}
// // // // // //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
// // // // // //       <div className="timeline-list">
// // // // // //         {awards.map((awd, idx) => (
// // // // // //           <TimelineCard {...awd} key={awd.title} isLast={idx === awards.length - 1} />
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <style>{`
// // // // // //         .exp-awards-root {
// // // // // //           max-width: 1000px;
// // // // // //           margin: 0 auto 2em auto;
// // // // // //           padding: 0 2.5rem;
// // // // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // // // //           color: #f0f0f0;
// // // // // //           padding-top: 0; /* removed padding top */
// // // // // //         }
// // // // // //         .section-header {
// // // // // //           display: flex;
// // // // // //           align-items: center;
// // // // // //           font-size: 2.5rem;
// // // // // //           font-weight: 700;
// // // // // //           color: #fff;
// // // // // //           letter-spacing: 0.5px;
// // // // // //           margin-top: 0;
// // // // // //           margin-bottom: 4rem;
// // // // // //           gap: 0.85rem;
// // // // // //         }
// // // // // //         .section-header:first-of-type {
// // // // // //           margin-top: 12rem; /* large top margin before Experience title */
// // // // // //         }
// // // // // //         @media (max-width: 650px) {
// // // // // //           .section-header:first-of-type {
// // // // // //             margin-top: 6rem; /* smaller margin for mobile */
// // // // // //           }
// // // // // //           .exp-card-dark {
// // // // // //             margin-left: 3rem;
// // // // // //             padding: 1rem 1rem 1rem 1.8rem;
// // // // // //             font-size: 0.93rem;
// // // // // //             border-radius: 10px;
// // // // // //           }
// // // // // //           .timeline-details {
// // // // // //             padding-left: 1.3rem;
// // // // // //           }
// // // // // //         }
// // // // // //         .timeline-list {
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           gap: 3.4rem;
// // // // // //           margin-bottom: 4rem;
// // // // // //         }
// // // // // //         .timeline-row {
// // // // // //           display: flex;
// // // // // //           flex-direction: row;
// // // // // //           align-items: flex-start;
// // // // // //           position: relative;
// // // // // //         }
// // // // // //         .timeline-rail {
// // // // // //           position: relative;
// // // // // //           width: 56px;
// // // // // //           display: flex;
// // // // // //           flex-direction: column;
// // // // // //           align-items: center;
// // // // // //           flex-shrink: 0;
// // // // // //           min-height: 100%;
// // // // // //         }
// // // // // //         .timeline-dot {
// // // // // //           width: 19px;
// // // // // //           height: 19px;
// // // // // //           background: #fff;
// // // // // //           border-radius: 50%;
// // // // // //           border: 4px solid #9067C6;
// // // // // //           margin-bottom: 0;
// // // // // //           position: relative;
// // // // // //           z-index: 2;
// // // // // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // // // // //         }
// // // // // //         .timeline-line {
// // // // // //           width: 4px;
// // // // // //           min-height: 68px;
// // // // // //           background: #fff;
// // // // // //           border-radius: 8px;
// // // // // //           margin: 0 auto;
// // // // // //           margin-top: -2px;
// // // // // //           z-index: 1;
// // // // // //           transition: height 0.2s;
// // // // // //         }
// // // // // //         .exp-card-dark {
// // // // // //           background: rgba(44, 49, 74, 0.97);
// // // // // //           color: #f0f0f0;
// // // // // //           border-radius: 13px;
// // // // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // // // // //           padding: 1.1rem 1.2rem 1rem 2.5rem;
// // // // // //           margin-left: 4.5rem;
// // // // // //           min-width: 0;
// // // // // //           flex: 1;
// // // // // //           font-size: 1.08rem;
// // // // // //           position: relative;
// // // // // //           word-break: break-word;
// // // // // //           margin-bottom: 0;
// // // // // //           transition: box-shadow 0.18s;
// // // // // //           line-height: 1.4;
// // // // // //         }
// // // // // //         .timeline-title {
// // // // // //           font-weight: 700;
// // // // // //           color: #a084f6;
// // // // // //           font-size: 1.14rem;
// // // // // //           margin-bottom: 0.35rem;
// // // // // //           line-height: 1.3;
// // // // // //           letter-spacing: 0.01em;
// // // // // //         }
// // // // // //         .timeline-company,
// // // // // //         .timeline-date,
// // // // // //         .timeline-details,
// // // // // //         .timeline-stack {
// // // // // //           margin-bottom: 0.65rem;
// // // // // //         }
// // // // // //         .timeline-details {
// // // // // //           margin-top: 0.18rem;
// // // // // //           color: #f0f0f0;
// // // // // //           font-size: 1rem;
// // // // // //           padding-left: 1.5rem;
// // // // // //           margin-bottom: 0.5rem;
// // // // // //         }
// // // // // //         .timeline-details li {
// // // // // //           margin-bottom: 0.3rem;
// // // // // //         }

// // // // // //         @media (max-width: 500px) {
// // // // // //           .exp-awards-root {
// // // // // //             padding: 0 0.7rem;
// // // // // //           }
// // // // // //           .section-header {
// // // // // //             font-size: 1.8rem;
// // // // // //             margin-bottom: 1.6rem;
// // // // // //             gap: 0.4rem;
// // // // // //           }
// // // // // //           .exp-card-dark {
// // // // // //             margin-left: 1.5rem;
// // // // // //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// // // // // //             font-size: 0.9rem;
// // // // // //           }
// // // // // //           .timeline-rail {
// // // // // //             width: 17px;
// // // // // //           }
// // // // // //         }

// // // // // //         @media (max-width: 375px) {
// // // // // //           .exp-awards-root {
// // // // // //             padding: 0 0.12rem;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Experience;
// // // // // import React, { useEffect } from "react";
// // // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // // // // const experiences = [
// // // // //   {
// // // // //     title: "Software Data QA Engineer",
// // // // //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// // // // //     date: "Jan 2025 – Apr 2025",
// // // // //     details: [
// // // // //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// // // // //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// // // // //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// // // // //     ],
// // // // //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// // // // //   },
// // // // //   {
// // // // //     title: "Research & Teaching Assistant",
// // // // //     company: "East West University, Dhaka, Bangladesh. Contact",
// // // // //     date: "Jan 2024 – Jan 2025",
// // // // //     details: [
// // // // //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// // // // //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// // // // //     ],
// // // // //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// // // // //   },
// // // // //   {
// // // // //     title: "Software & ICT Trainee",
// // // // //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// // // // //     date: "June 2023 – Sept 2023",
// // // // //     details: [
// // // // //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// // // // //       "Worked on practical projects involving web development and database systems.",
// // // // //       "Developed soft skills for teamwork and communication."
// // // // //     ],
// // // // //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// // // // //   }
// // // // // ];

// // // // // const awards = [
// // // // //   {
// // // // //     title: "Project Showcasing, CSE Festival 2024",
// // // // //     company: "East West University",
// // // // //     date: "First Runners Up",
// // // // //     details: [
// // // // //       "Demonstrated a blockchain-based application",
// // // // //       "Competed against 32 teams",
// // // // //       "Gave Poster Presentation"
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     title: "Medha Lalon Scholarship",
// // // // //     company: "East West University",
// // // // //     date: "",
// // // // //     details: [
// // // // //       "A merit-based scholarship",
// // // // //       "45K per year",
// // // // //       "Got awarded 3 Times in a row"
// // // // //     ]
// // // // //   }
// // // // // ];

// // // // // const TimelineCard = React.forwardRef(
// // // // //   ({ title, company, date, details, stack, isLast }, ref) => (
// // // // //     <div className="timeline-row">
// // // // //       <div className="timeline-rail">
// // // // //         <div className="timeline-dot" />
// // // // //         <div
// // // // //           className="timeline-line"
// // // // //           style={isLast ? { height: 0, background: "none" } : {}}
// // // // //         />
// // // // //       </div>
// // // // //       <div className="timeline-card exp-card-dark" ref={ref}>
// // // // //         <div className="timeline-title">{title}</div>
// // // // //         <div className="timeline-company">{company}</div>
// // // // //         {date && <div className="timeline-date">{date}</div>}
// // // // //         <ul className="timeline-details">
// // // // //           {details.map((d, i) => (
// // // // //             <li key={i}>{d}</li>
// // // // //           ))}
// // // // //         </ul>
// // // // //         {stack && <div className="timeline-stack">{stack}</div>}
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // );

// // // // // const SectionHeader = ({ icon, children }) => (
// // // // //   <div className="section-header">
// // // // //     {icon}
// // // // //     <span>{children}</span>
// // // // //   </div>
// // // // // );

// // // // // const Experience = () => {
// // // // //   useEffect(() => {
// // // // //     function adjustLines() {
// // // // //       const rows = document.querySelectorAll(".timeline-row");
// // // // //       rows.forEach((row, idx) => {
// // // // //         const card = row.querySelector(".timeline-card");
// // // // //         const line = row.querySelector(".timeline-line");
// // // // //         const dot = row.querySelector(".timeline-dot");
// // // // //         if (card && line && dot) {
// // // // //           if (idx === rows.length - 1) {
// // // // //             line.style.height = "0px";
// // // // //             line.style.background = "none";
// // // // //           } else {
// // // // //             const dotRadius = 9.5; // half of 19px dot height
// // // // //             const cmToPx = 37.8; // approx px per cm (depends on screen dpi but ~38px)
// // // // //             const extraGapPx = 0.2 * cmToPx; // 0.2 cm in pixels
// // // // //             const lineHeight = card.offsetHeight - dotRadius * 2 - extraGapPx;
// // // // //             line.style.height = `${lineHeight}px`;
// // // // //             line.style.background = "#fff";
// // // // //           }
// // // // //         }
// // // // //       });
// // // // //     }
// // // // //     adjustLines();
// // // // //     window.addEventListener("resize", adjustLines);
// // // // //     return () => window.removeEventListener("resize", adjustLines);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="exp-awards-root">
// // // // //       {/* Experience */}
// // // // //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>
// // // // //         Experience
// // // // //       </SectionHeader>
// // // // //       <div className="timeline-list">
// // // // //         {experiences.map((exp, idx) => (
// // // // //           <TimelineCard {...exp} key={exp.title} isLast={idx === experiences.length - 1} />
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Awards */}
// // // // //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
// // // // //       <div className="timeline-list">
// // // // //         {awards.map((awd, idx) => (
// // // // //           <TimelineCard {...awd} key={awd.title} isLast={idx === awards.length - 1} />
// // // // //         ))}
// // // // //       </div>

// // // // //       <style>{`
// // // // //         .exp-awards-root {
// // // // //           max-width: 1000px;
// // // // //           margin: 0 auto 2em auto;
// // // // //           padding: 0 2.5rem;
// // // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // // //           color: #f0f0f0;
// // // // //           padding-top: 0;
// // // // //         }
// // // // //         .section-header {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           font-size: 2.5rem;
// // // // //           font-weight: 700;
// // // // //           color: #fff;
// // // // //           letter-spacing: 0.5px;
// // // // //           margin-top: 0;
// // // // //           margin-bottom: 4rem;
// // // // //           gap: 0.85rem;
// // // // //         }
// // // // //         .section-header:first-of-type {
// // // // //           margin-top: 12rem;
// // // // //         }
// // // // //         @media (max-width: 650px) {
// // // // //           .section-header:first-of-type {
// // // // //             margin-top: 9rem;
// // // // //           }
// // // // //           .exp-card-dark {
// // // // //             margin-left: 3rem;
// // // // //             padding: 1rem 1rem 1rem 1.8rem;
// // // // //             font-size: 0.93rem;
// // // // //             border-radius: 10px;
// // // // //           }
// // // // //           .timeline-details {
// // // // //             padding-left: 1.3rem;
// // // // //           }
// // // // //         }
// // // // //         .timeline-list {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           gap: 3.4rem;
// // // // //           margin-bottom: 4rem;
// // // // //         }
// // // // //         .timeline-row {
// // // // //           display: flex;
// // // // //           flex-direction: row;
// // // // //           align-items: flex-start;
// // // // //           position: relative;
// // // // //         }
// // // // //         .timeline-rail {
// // // // //           position: relative;
// // // // //           width: 56px;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           align-items: center;
// // // // //           flex-shrink: 0;
// // // // //           min-height: 100%;
// // // // //         }
// // // // //         .timeline-dot {
// // // // //           width: 19px;
// // // // //           height: 19px;
// // // // //           background: #fff;
// // // // //           border-radius: 50%;
// // // // //           border: 4px solid #9067C6;
// // // // //           margin-bottom: 0;
// // // // //           position: relative;
// // // // //           z-index: 2;
// // // // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // // // //         }
// // // // //         .timeline-line {
// // // // //           width: 4px;
// // // // //           min-height: 68px;
// // // // //           background: #fff;
// // // // //           border-radius: 8px;
// // // // //           margin: 0 auto;
// // // // //           margin-top: -2px;
// // // // //           z-index: 1;
// // // // //           transition: height 0.2s;
// // // // //         }
// // // // //         .exp-card-dark {
// // // // //           background: rgba(44, 49, 74, 0.97);
// // // // //           color: #f0f0f0;
// // // // //           border-radius: 13px;
// // // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // // // //           padding: 1.1rem 1.2rem 1rem 2.5rem;
// // // // //           margin-left: 4.5rem;
// // // // //           min-width: 0;
// // // // //           flex: 1;
// // // // //           font-size: 1.08rem;
// // // // //           position: relative;
// // // // //           word-break: break-word;
// // // // //           margin-bottom: 0;
// // // // //           transition: box-shadow 0.18s;
// // // // //           line-height: 1.4;
// // // // //         }
// // // // //         .timeline-title {
// // // // //           font-weight: 700;
// // // // //           color: #a084f6;
// // // // //           font-size: 1.14rem;
// // // // //           margin-bottom: 0.35rem;
// // // // //           line-height: 1.3;
// // // // //           letter-spacing: 0.01em;
// // // // //         }
// // // // //         .timeline-company,
// // // // //         .timeline-date,
// // // // //         .timeline-details,
// // // // //         .timeline-stack {
// // // // //           margin-bottom: 0.65rem;
// // // // //         }
// // // // //         .timeline-details {
// // // // //           margin-top: 0.18rem;
// // // // //           color: #f0f0f0;
// // // // //           font-size: 1rem;
// // // // //           padding-left: 1.5rem;
// // // // //           margin-bottom: 0.5rem;
// // // // //         }
// // // // //         .timeline-details li {
// // // // //           margin-bottom: 0.3rem;
// // // // //         }
// // // // //         @media (max-width: 500px) {
// // // // //           .exp-awards-root {
// // // // //             padding: 0 0.7rem;
// // // // //           }
// // // // //           .section-header {
// // // // //             font-size: 1.8rem;
// // // // //             margin-bottom: 1.6rem;
// // // // //             gap: 0.4rem;
// // // // //           }
// // // // //           .exp-card-dark {
// // // // //             margin-left: 1.5rem;
// // // // //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// // // // //             font-size: 0.9rem;
// // // // //           }
// // // // //           .timeline-rail {
// // // // //             width: 17px;
// // // // //           }
// // // // //         }
// // // // //         @media (max-width: 375px) {
// // // // //           .exp-awards-root {
// // // // //             padding: 0 0.12rem;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Experience;
// // // // import React, { useEffect } from "react";
// // // // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // // // const experiences = [
// // // //   {
// // // //     title: "Software Data QA Engineer",
// // // //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// // // //     date: "Jan 2025 – Apr 2025",
// // // //     details: [
// // // //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// // // //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// // // //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// // // //     ],
// // // //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// // // //   },
// // // //   {
// // // //     title: "Research & Teaching Assistant",
// // // //     company: "East West University, Dhaka, Bangladesh. Contact",
// // // //     date: "Jan 2024 – Jan 2025",
// // // //     details: [
// // // //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// // // //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// // // //     ],
// // // //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// // // //   },
// // // //   {
// // // //     title: "Software & ICT Trainee",
// // // //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// // // //     date: "June 2023 – Sept 2023",
// // // //     details: [
// // // //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// // // //       "Worked on practical projects involving web development and database systems.",
// // // //       "Developed soft skills for teamwork and communication."
// // // //     ],
// // // //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// // // //   }
// // // // ];

// // // // const awards = [
// // // //   {
// // // //     title: "Project Showcasing, CSE Festival 2024",
// // // //     company: "East West University",
// // // //     date: "First Runners Up",
// // // //     details: [
// // // //       "Demonstrated a blockchain-based application",
// // // //       "Competed against 32 teams",
// // // //       "Gave Poster Presentation"
// // // //     ]
// // // //   },
// // // //   {
// // // //     title: "Medha Lalon Scholarship",
// // // //     company: "East West University",
// // // //     date: "",
// // // //     details: [
// // // //       "A merit-based scholarship",
// // // //       "45K per year",
// // // //       "Got awarded 3 Times in a row"
// // // //     ]
// // // //   }
// // // // ];

// // // // const TimelineCard = React.forwardRef(
// // // //   ({ title, company, date, details, stack, isLast }, ref) => (
// // // //     <div className="timeline-row">
// // // //       <div className="timeline-rail">
// // // //         <div className="timeline-dot" />
// // // //         <div
// // // //           className="timeline-line"
// // // //           style={isLast ? { height: 0, background: "none" } : {}}
// // // //         />
// // // //       </div>
// // // //       <div className="timeline-card exp-card-dark" ref={ref}>
// // // //         <div className="timeline-title">{title}</div>
// // // //         <div className="timeline-company">{company}</div>
// // // //         {date && <div className="timeline-date">{date}</div>}
// // // //         <ul className="timeline-details">
// // // //           {details.map((d, i) => (
// // // //             <li key={i}>{d}</li>
// // // //           ))}
// // // //         </ul>
// // // //         {stack && <div className="timeline-stack">{stack}</div>}
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // );

// // // // const SectionHeader = ({ icon, children }) => (
// // // //   <div className="section-header">
// // // //     {icon}
// // // //     <span>{children}</span>
// // // //   </div>
// // // // );

// // // // const Experience = () => {
// // // //   useEffect(() => {
// // // //     function adjustLines() {
// // // //       const rows = document.querySelectorAll(".timeline-row");
// // // //       rows.forEach((row, idx) => {
// // // //         const card = row.querySelector(".timeline-card");
// // // //         const line = row.querySelector(".timeline-line");
// // // //         const dot = row.querySelector(".timeline-dot");
// // // //         if (card && line && dot) {
// // // //           if (idx === rows.length - 1) {
// // // //             line.style.height = "0px";
// // // //             line.style.background = "none";
// // // //           } else {
// // // //             const dotRadius = 9.5; // half of 19px dot height
// // // //             const cmToPx = 37.8;
// // // //             const extraGapPx = 0.2 * cmToPx;
// // // //             const lineHeight = card.offsetHeight - dotRadius * 2 - extraGapPx;
// // // //             line.style.height = `${lineHeight}px`;
// // // //             line.style.background = "#fff";
// // // //           }
// // // //         }
// // // //       });
// // // //     }
// // // //     adjustLines();
// // // //     window.addEventListener("resize", adjustLines);
// // // //     return () => window.removeEventListener("resize", adjustLines);
// // // //   }, []);

// // // //   return (
// // // //     <div className="exp-awards-root">
// // // //       {/* Experience */}
// // // //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>
// // // //         Experience
// // // //       </SectionHeader>
// // // //       <div className="timeline-list">
// // // //         {experiences.map((exp, idx) => (
// // // //           <TimelineCard {...exp} key={exp.title} isLast={idx === experiences.length - 1} />
// // // //         ))}
// // // //       </div>

// // // //       {/* Awards */}
// // // //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
// // // //       <div className="timeline-list">
// // // //         {awards.map((awd, idx) => (
// // // //           <TimelineCard {...awd} key={awd.title} isLast={idx === awards.length - 1} />
// // // //         ))}
// // // //       </div>

// // // //       <style>{`
// // // //         .exp-awards-root {
// // // //           max-width: 1000px;
// // // //           margin: 0 auto 2em auto;
// // // //           padding: 0 2.5rem;
// // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // //           color: #f0f0f0;
// // // //           padding-top: 0;
// // // //         }
// // // //         .section-header {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           font-size: 2.5rem;
// // // //           font-weight: 700;
// // // //           color: #fff;
// // // //           letter-spacing: 0.5px;
// // // //           margin-top: 0;
// // // //           margin-bottom: 4rem;
// // // //           gap: 0.85rem;
// // // //           padding-left: 56px; /* Shift right by dot container width */
// // // //         }
// // // //         .section-header:first-of-type {
// // // //           margin-top: 12rem;
// // // //         }
// // // //         @media (max-width: 650px) {
// // // //           .section-header:first-of-type {
// // // //             margin-top: 7rem; /* reduced from 9rem */
// // // //           }
// // // //           .exp-card-dark {
// // // //             margin-left: 3rem;
// // // //             padding: 1rem 1rem 1rem 1.8rem;
// // // //             font-size: 0.93rem;
// // // //             border-radius: 10px;
// // // //           }
// // // //           .timeline-details {
// // // //             padding-left: 1.3rem;
// // // //           }
// // // //         }
// // // //         .timeline-list {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           gap: 3.4rem;
// // // //           margin-bottom: 4rem;
// // // //         }
// // // //         .timeline-row {
// // // //           display: flex;
// // // //           flex-direction: row;
// // // //           align-items: flex-start;
// // // //           position: relative;
// // // //           animation: slideUpFadeIn 0.6s ease forwards;
// // // //           opacity: 0;
// // // //           transform: translateY(30px);
// // // //         }
// // // //         .timeline-row:nth-child(1) {
// // // //           animation-delay: 0.2s;
// // // //         }
// // // //         .timeline-row:nth-child(2) {
// // // //           animation-delay: 0.4s;
// // // //         }
// // // //         .timeline-row:nth-child(3) {
// // // //           animation-delay: 0.6s;
// // // //         }
// // // //         .timeline-rail {
// // // //           position: relative;
// // // //           width: 56px;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           align-items: center;
// // // //           flex-shrink: 0;
// // // //           min-height: 100%;
// // // //         }
// // // //         .timeline-dot {
// // // //           width: 19px;
// // // //           height: 19px;
// // // //           background: #fff;
// // // //           border-radius: 50%;
// // // //           border: 4px solid #9067C6;
// // // //           margin-bottom: 0;
// // // //           position: relative;
// // // //           z-index: 2;
// // // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // // //         }
// // // //         .timeline-line {
// // // //           width: 4px;
// // // //           min-height: 68px;
// // // //           background: #fff;
// // // //           border-radius: 8px;
// // // //           margin: 0 auto;
// // // //           margin-top: -2px;
// // // //           z-index: 1;
// // // //           transition: height 0.2s;
// // // //         }
// // // //         .exp-card-dark {
// // // //           background: rgba(44, 49, 74, 0.97);
// // // //           color: #f0f0f0;
// // // //           border-radius: 13px;
// // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // // //           padding: 1.1rem 1.2rem 1rem 2.5rem;
// // // //           margin-left: 4.5rem;
// // // //           min-width: 0;
// // // //           flex: 1;
// // // //           font-size: 1.08rem;
// // // //           position: relative;
// // // //           word-break: break-word;
// // // //           margin-bottom: 0;
// // // //           transition: box-shadow 0.18s;
// // // //           line-height: 1.4;
// // // //         }
// // // //         .timeline-title {
// // // //           font-weight: 700;
// // // //           color: #a084f6;
// // // //           font-size: 1.14rem;
// // // //           margin-bottom: 0.35rem;
// // // //           line-height: 1.3;
// // // //           letter-spacing: 0.01em;
// // // //         }
// // // //         .timeline-company,
// // // //         .timeline-date,
// // // //         .timeline-details,
// // // //         .timeline-stack {
// // // //           margin-bottom: 0.65rem;
// // // //         }
// // // //         .timeline-details {
// // // //           margin-top: 0.18rem;
// // // //           color: #f0f0f0;
// // // //           font-size: 1rem;
// // // //           padding-left: 1.5rem;
// // // //           margin-bottom: 0.5rem;
// // // //         }
// // // //         .timeline-details li {
// // // //           margin-bottom: 0.3rem;
// // // //         }
// // // //         @media (max-width: 500px) {
// // // //           .exp-awards-root {
// // // //             padding: 0 0.7rem;
// // // //           }
// // // //           .section-header {
// // // //             font-size: 1.8rem;
// // // //             gap: 0.4rem;
// // // //             padding-left: 17px; /* adjust for smaller dot width */
// // // //           }
// // // //           .exp-card-dark {
// // // //             margin-left: 1.5rem;
// // // //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// // // //             font-size: 0.9rem;
// // // //           }
// // // //           .timeline-rail {
// // // //             width: 17px;
// // // //           }
// // // //           .timeline-details {
// // // //             padding-left: 1rem;
// // // //           }
// // // //         }
// // // //         @media (max-width: 375px) {
// // // //           .exp-awards-root {
// // // //             padding: 0 0.12rem;
// // // //           }
// // // //         }
// // // //         @keyframes slideUpFadeIn {
// // // //           0% {
// // // //             opacity: 0;
// // // //             transform: translateY(30px);
// // // //           }
// // // //           100% {
// // // //             opacity: 1;
// // // //             transform: translateY(0);
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Experience;
// // // import React, { useEffect } from "react";
// // // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // // const experiences = [
// // //   {
// // //     title: "Software Data QA Engineer",
// // //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// // //     date: "Jan 2025 – Apr 2025",
// // //     details: [
// // //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// // //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// // //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// // //     ],
// // //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// // //   },
// // //   {
// // //     title: "Research & Teaching Assistant",
// // //     company: "East West University, Dhaka, Bangladesh. Contact",
// // //     date: "Jan 2024 – Jan 2025",
// // //     details: [
// // //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// // //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// // //     ],
// // //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// // //   },
// // //   {
// // //     title: "Software & ICT Trainee",
// // //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// // //     date: "June 2023 – Sept 2023",
// // //     details: [
// // //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// // //       "Worked on practical projects involving web development and database systems.",
// // //       "Developed soft skills for teamwork and communication."
// // //     ],
// // //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// // //   }
// // // ];

// // // const awards = [
// // //   {
// // //     title: "Project Showcasing, CSE Festival 2024",
// // //     company: "East West University",
// // //     date: "First Runners Up",
// // //     details: [
// // //       "Demonstrated a blockchain-based application",
// // //       "Competed against 32 teams",
// // //       "Gave Poster Presentation"
// // //     ]
// // //   },
// // //   {
// // //     title: "Medha Lalon Scholarship",
// // //     company: "East West University",
// // //     date: "",
// // //     details: [
// // //       "A merit-based scholarship",
// // //       "45K per year",
// // //       "Got awarded 3 Times in a row"
// // //     ]
// // //   }
// // // ];

// // // const TimelineCard = React.forwardRef(
// // //   ({ title, company, date, details, stack, isLast }, ref) => (
// // //     <div className="timeline-row">
// // //       <div className="timeline-rail">
// // //         <div className="timeline-dot" />
// // //         <div
// // //           className="timeline-line"
// // //           style={isLast ? { height: 0, background: "none" } : {}}
// // //         />
// // //       </div>
// // //       <div className="timeline-card exp-card-dark" ref={ref}>
// // //         <div className="timeline-title">{title}</div>
// // //         <div className="timeline-company">{company}</div>
// // //         {date && <div className="timeline-date">{date}</div>}
// // //         <ul className="timeline-details">
// // //           {details.map((d, i) => (
// // //             <li key={i}>{d}</li>
// // //           ))}
// // //         </ul>
// // //         {stack && <div className="timeline-stack">{stack}</div>}
// // //       </div>
// // //     </div>
// // //   )
// // // );

// // // const SectionHeader = ({ icon, children }) => (
// // //   <div className="section-header">
// // //     {icon}
// // //     <span>{children}</span>
// // //   </div>
// // // );

// // // const Experience = () => {
// // //   useEffect(() => {
// // //     function adjustLines() {
// // //       const rows = document.querySelectorAll(".timeline-row");
// // //       rows.forEach((row, idx) => {
// // //         const card = row.querySelector(".timeline-card");
// // //         const line = row.querySelector(".timeline-line");
// // //         const dot = row.querySelector(".timeline-dot");
// // //         if (card && line && dot) {
// // //           if (idx === rows.length - 1) {
// // //             line.style.height = "0px";
// // //             line.style.background = "none";
// // //           } else {
// // //             const dotRadius = 9.5; // half of 19px dot height
// // //             const cmToPx = 37.8; // px per cm approx
// // //             const extraGapPx = 0.2 * cmToPx; // 0.2cm in px
// // //             const lineHeight = card.offsetHeight - dotRadius * 2 - extraGapPx;
// // //             line.style.height = `${lineHeight}px`;
// // //             line.style.background = "#fff";
// // //           }
// // //         }
// // //       });
// // //     }
// // //     adjustLines();
// // //     window.addEventListener("resize", adjustLines);
// // //     return () => window.removeEventListener("resize", adjustLines);
// // //   }, []);

// // //   return (
// // //     <div className="exp-awards-root">
// // //       {/* Experience Section */}
// // //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>
// // //         Experience
// // //       </SectionHeader>
// // //       <div className="timeline-list">
// // //         {experiences.map((exp, idx) => (
// // //           <TimelineCard {...exp} key={exp.title} isLast={idx === experiences.length - 1} />
// // //         ))}
// // //       </div>

// // //       {/* Awards Section */}
// // //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
// // //       <div className="timeline-list">
// // //         {awards.map((awd, idx) => (
// // //           <TimelineCard {...awd} key={awd.title} isLast={idx === awards.length - 1} />
// // //         ))}
// // //       </div>

// // //       <style>{`
// // //         .exp-awards-root {
// // //           max-width: 1000px;
// // //           margin: 0 auto 2em auto;
// // //           padding: 0 2.5rem;
// // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // //           color: #f0f0f0;
// // //           padding-top: 0;
// // //         }
// // //         .section-header {
// // //           display: flex;
// // //           align-items: center;
// // //           font-size: 2.5rem;
// // //           font-weight: 700;
// // //           color: #fff;
// // //           letter-spacing: 0.5px;
// // //           margin-top: 0;
// // //           margin-bottom: 4rem;
// // //           gap: 0.85rem;
// // //           padding-left: 56px; /* align to right edge of dot */
// // //         }
// // //         .section-header:first-of-type {
// // //           margin-top: 12rem;
// // //         }
// // //         @media (max-width: 650px) {
// // //           .section-header:first-of-type {
// // //             margin-top: 7rem;
// // //           }
// // //           .exp-card-dark {
// // //             margin-left: 3rem;
// // //             padding: 1rem 1rem 1rem 1.8rem;
// // //             font-size: 0.93rem;
// // //             border-radius: 10px;
// // //           }
// // //           .timeline-details {
// // //             padding-left: 1.3rem;
// // //           }
// // //         }
// // //         .timeline-list {
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 3.4rem;
// // //           margin-bottom: 4rem;
// // //         }
// // //         .timeline-row {
// // //           display: flex;
// // //           flex-direction: row;
// // //           align-items: flex-start;
// // //           position: relative;
// // //           animation: slideUpFadeIn 0.6s ease forwards;
// // //           opacity: 0;
// // //           transform: translateY(30px);
// // //         }
// // //         .timeline-row:nth-child(1) {
// // //           animation-delay: 0.2s;
// // //         }
// // //         .timeline-row:nth-child(2) {
// // //           animation-delay: 0.4s;
// // //         }
// // //         .timeline-row:nth-child(3) {
// // //           animation-delay: 0.6s;
// // //         }
// // //         .timeline-rail {
// // //           position: relative;
// // //           width: 56px;
// // //           display: flex;
// // //           flex-direction: column;
// // //           align-items: center;
// // //           flex-shrink: 0;
// // //           min-height: 100%;
// // //         }
// // //         .timeline-dot {
// // //           width: 19px;
// // //           height: 19px;
// // //           background: #fff;
// // //           border-radius: 50%;
// // //           border: 4px solid #9067C6;
// // //           margin-bottom: 0; /* No margin */
// // //           position: relative;
// // //           z-index: 2;
// // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // //         }
// // //         .timeline-line {
// // //           width: 2px; /* thinner */
// // //           min-height: 68px;
// // //           background: #fff;
// // //           border-radius: 8px;
// // //           margin: 0 auto;
// // //           margin-top: -2px;
// // //           z-index: 1;
// // //           transition: height 0.2s;
// // //         }
// // //         .exp-card-dark {
// // //           background: rgba(44, 49, 74, 0.97);
// // //           color: #f0f0f0;
// // //           border-radius: 13px;
// // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // //           padding: 1.1rem 1.2rem 1rem 2.5rem;
// // //           margin-left: 4.5rem;
// // //           min-width: 0;
// // //           flex: 1;
// // //           font-size: 1.08rem;
// // //           position: relative;
// // //           word-break: break-word;
// // //           margin-bottom: 0;
// // //           transition: box-shadow 0.18s;
// // //           line-height: 1.4;
// // //         }
// // //         .timeline-title {
// // //           font-weight: 700;
// // //           color: #a084f6;
// // //           font-size: 1.14rem;
// // //           margin-bottom: 0.35rem;
// // //           line-height: 1.3;
// // //           letter-spacing: 0.01em;
// // //         }
// // //         .timeline-company,
// // //         .timeline-date,
// // //         .timeline-details,
// // //         .timeline-stack {
// // //           margin-bottom: 0.65rem;
// // //         }
// // //         .timeline-details {
// // //           margin-top: 0.18rem;
// // //           color: #f0f0f0;
// // //           font-size: 1rem;
// // //           padding-left: 1.5rem;
// // //           margin-bottom: 0.5rem;
// // //         }
// // //         .timeline-details li {
// // //           margin-bottom: 0.3rem;
// // //         }
// // //         @media (max-width: 500px) {
// // //           .exp-awards-root {
// // //             padding: 0 0.7rem;
// // //           }
// // //           .section-header {
// // //             font-size: 1.8rem;
// // //             gap: 0.4rem;
// // //             padding-left: 17px; /* smaller dot */
// // //           }
// // //           .exp-card-dark {
// // //             margin-left: 1.5rem;
// // //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// // //             font-size: 0.9rem;
// // //           }
// // //           .timeline-rail {
// // //             width: 17px;
// // //           }
// // //           .timeline-details {
// // //             padding-left: 1rem;
// // //           }
// // //         }
// // //         @media (max-width: 375px) {
// // //           .exp-awards-root {
// // //             padding: 0 0.12rem;
// // //           }
// // //         }
// // //         @keyframes slideUpFadeIn {
// // //           0% {
// // //             opacity: 0;
// // //             transform: translateY(30px);
// // //           }
// // //           100% {
// // //             opacity: 1;
// // //             transform: translateY(0);
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default Experience;
// // import React, { useEffect } from "react";
// // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // const experiences = [
// //   {
// //     title: "Software Data QA Engineer",
// //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// //     date: "Jan 2025 – Apr 2025",
// //     details: [
// //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// //     ],
// //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// //   },
// //   {
// //     title: "Research & Teaching Assistant",
// //     company: "East West University, Dhaka, Bangladesh. Contact",
// //     date: "Jan 2024 – Jan 2025",
// //     details: [
// //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// //     ],
// //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// //   },
// //   {
// //     title: "Software & ICT Trainee",
// //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// //     date: "June 2023 – Sept 2023",
// //     details: [
// //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// //       "Worked on practical projects involving web development and database systems.",
// //       "Developed soft skills for teamwork and communication."
// //     ],
// //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// //   }
// // ];

// // const awards = [
// //   {
// //     title: "Project Showcasing, CSE Festival 2024",
// //     company: "East West University",
// //     date: "First Runners Up",
// //     details: [
// //       "Demonstrated a blockchain-based application",
// //       "Competed against 32 teams",
// //       "Gave Poster Presentation"
// //     ]
// //   },
// //   {
// //     title: "Medha Lalon Scholarship",
// //     company: "East West University",
// //     date: "",
// //     details: [
// //       "A merit-based scholarship",
// //       "45K per year",
// //       "Got awarded 3 Times in a row"
// //     ]
// //   }
// // ];

// // const TimelineCard = React.forwardRef(
// //   ({ title, company, date, details, stack, isLast }, ref) => (
// //     <div className="timeline-row">
// //       <div className="timeline-rail">
// //         <div className="timeline-dot" />
// //         <div
// //           className="timeline-line"
// //           style={isLast ? { height: 0, background: "none" } : {}}
// //         />
// //       </div>
// //       <div className="timeline-card exp-card-dark" ref={ref}>
// //         <div className="timeline-title">{title}</div>
// //         <div className="timeline-company">{company}</div>
// //         {date && <div className="timeline-date">{date}</div>}
// //         <ul className="timeline-details">
// //           {details.map((d, i) => (
// //             <li key={i}>{d}</li>
// //           ))}
// //         </ul>
// //         {stack && <div className="timeline-stack">{stack}</div>}
// //       </div>
// //     </div>
// //   )
// // );

// // const SectionHeader = ({ icon, children }) => (
// //   <div className="section-header">
// //     {icon}
// //     <span>{children}</span>
// //   </div>
// // );

// // const Experience = () => {
// //   useEffect(() => {
// //     function adjustLines() {
// //       const rows = document.querySelectorAll(".timeline-row");
// //       rows.forEach((row, idx) => {
// //         const card = row.querySelector(".timeline-card");
// //         const line = row.querySelector(".timeline-line");
// //         const dot = row.querySelector(".timeline-dot");
// //         if (card && line && dot) {
// //           if (idx === rows.length - 1) {
// //             // Last card: no line
// //             line.style.height = "0px";
// //             line.style.background = "none";
// //           } else {
// //             const dotRadius = 9.5; // half dot size (19px / 2)
// //             const cmToPx = 37.8; // approx px per cm
// //             const extraGapPx = 0.2 * cmToPx; // 0.2 cm to px
// //             const lineHeight = card.offsetHeight - dotRadius * 2 - extraGapPx;
// //             line.style.height = `${lineHeight}px`;
// //             line.style.background = "#fff"; // ensure visible
// //             line.style.width = "2px"; // thinner line
// //           }
// //         }
// //       });
// //     }
// //     adjustLines();
// //     window.addEventListener("resize", adjustLines);
// //     return () => window.removeEventListener("resize", adjustLines);
// //   }, []);

// //   return (
// //     <div className="exp-awards-root">
// //       {/* Experience Section */}
// //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>
// //         Experience
// //       </SectionHeader>
// //       <div className="timeline-list">
// //         {experiences.map((exp, idx) => (
// //           <TimelineCard {...exp} key={exp.title} isLast={idx === experiences.length - 1} />
// //         ))}
// //       </div>

// //       {/* Awards Section */}
// //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
// //       <div className="timeline-list">
// //         {awards.map((awd, idx) => (
// //           <TimelineCard {...awd} key={awd.title} isLast={idx === awards.length - 1} />
// //         ))}
// //       </div>

// //       <style>{`
// //         .exp-awards-root {
// //           max-width: 1000px;
// //           margin: 0 auto 2em auto;
// //           padding: 0 2.5rem;
// //           font-family: 'Raleway', 'Poppins', sans-serif;
// //           color: #f0f0f0;
// //           padding-top: 0;
// //         }
// //         .section-header {
// //           display: flex;
// //           align-items: center;
// //           font-size: 2.5rem;
// //           font-weight: 700;
// //           color: #fff;
// //           letter-spacing: 0.5px;
// //           margin-top: 0;
// //           margin-bottom: 4rem;
// //           gap: 0.85rem;
// //           padding-left: 56px; /* align to right edge of dot */
// //         }
// //         .section-header:first-of-type {
// //           margin-top: 12rem;
// //         }
// //         @media (max-width: 650px) {
// //           .section-header:first-of-type {
// //             margin-top: 7rem;
// //           }
// //           .exp-card-dark {
// //             margin-left: 3rem;
// //             padding: 1rem 1rem 1rem 1.8rem;
// //             font-size: 0.93rem;
// //             border-radius: 10px;
// //           }
// //           .timeline-details {
// //             padding-left: 1.3rem;
// //           }
// //         }
// //         .timeline-list {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 3.4rem;
// //           margin-bottom: 4rem;
// //         }
// //         .timeline-row {
// //           display: flex;
// //           flex-direction: row;
// //           align-items: flex-start;
// //           position: relative;
// //           animation: slideUpFadeIn 0.6s ease forwards;
// //           opacity: 0;
// //           transform: translateY(30px);
// //         }
// //         .timeline-row:nth-child(1) {
// //           animation-delay: 0.2s;
// //         }
// //         .timeline-row:nth-child(2) {
// //           animation-delay: 0.4s;
// //         }
// //         .timeline-row:nth-child(3) {
// //           animation-delay: 0.6s;
// //         }
// //         .timeline-rail {
// //           position: relative;
// //           width: 56px;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           flex-shrink: 0;
// //           min-height: 100%;
// //         }
// //         .timeline-dot {
// //           width: 19px;
// //           height: 19px;
// //           background: #fff;
// //           border-radius: 50%;
// //           border: 4px solid #9067C6;
// //           margin-bottom: 0; /* No margin */
// //           position: relative;
// //           z-index: 2;
// //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// //         }
// //         .timeline-line {
// //           width: 2px; /* thinner line */
// //           background: #fff;
// //           border-radius: 8px;
// //           margin: 0 auto;
// //           margin-top: -2px;
// //           z-index: 1;
// //           transition: height 0.2s;
// //         }
// //         .exp-card-dark {
// //           background: rgba(44, 49, 74, 0.97);
// //           color: #f0f0f0;
// //           border-radius: 13px;
// //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// //           padding: 1.1rem 1.2rem 1rem 2.5rem;
// //           margin-left: 4.5rem;
// //           min-width: 0;
// //           flex: 1;
// //           font-size: 1.08rem;
// //           position: relative;
// //           word-break: break-word;
// //           margin-bottom: 0;
// //           transition: box-shadow 0.18s;
// //           line-height: 1.4;
// //         }
// //         .timeline-title {
// //           font-weight: 700;
// //           color: #a084f6;
// //           font-size: 1.14rem;
// //           margin-bottom: 0.35rem;
// //           line-height: 1.3;
// //           letter-spacing: 0.01em;
// //         }
// //         .timeline-company,
// //         .timeline-date,
// //         .timeline-details,
// //         .timeline-stack {
// //           margin-bottom: 0.65rem;
// //         }
// //         .timeline-details {
// //           margin-top: 0.18rem;
// //           color: #f0f0f0;
// //           font-size: 1rem;
// //           padding-left: 1.5rem;
// //           margin-bottom: 0.5rem;
// //         }
// //         .timeline-details li {
// //           margin-bottom: 0.3rem;
// //         }
// //         @media (max-width: 500px) {
// //           .exp-awards-root {
// //             padding: 0 0.7rem;
// //           }
// //           .section-header {
// //             font-size: 1.8rem;
// //             gap: 0.4rem;
// //             padding-left: 17px; /* smaller dot */
// //           }
// //           .exp-card-dark {
// //             margin-left: 1.5rem;
// //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// //             font-size: 0.9rem;
// //           }
// //           .timeline-rail {
// //             width: 17px;
// //           }
// //           .timeline-details {
// //             padding-left: 1rem;
// //           }
// //         }
// //         @media (max-width: 375px) {
// //           .exp-awards-root {
// //             padding: 0 0.12rem;
// //           }
// //         }
// //         @keyframes slideUpFadeIn {
// //           0% {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Experience;
// // import React, { useEffect } from "react";
// // import { FaBriefcase, FaTrophy } from "react-icons/fa";

// // const experiences = [
// //   {
// //     title: "Software Data QA Engineer",
// //     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
// //     date: "Jan 2025 – Apr 2025",
// //     details: [
// //       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
// //       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
// //       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
// //     ],
// //     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
// //   },
// //   {
// //     title: "Research & Teaching Assistant",
// //     company: "East West University, Dhaka, Bangladesh. Contact",
// //     date: "Jan 2024 – Jan 2025",
// //     details: [
// //       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
// //       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
// //     ],
// //     stack: "Skills: Research, Teaching, Leadership, Data Science"
// //   },
// //   {
// //     title: "Software & ICT Trainee",
// //     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
// //     date: "June 2023 – Sept 2023",
// //     details: [
// //       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
// //       "Worked on practical projects involving web development and database systems.",
// //       "Developed soft skills for teamwork and communication."
// //     ],
// //     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
// //   }
// // ];

// // const awards = [
// //   {
// //     title: "Project Showcasing, CSE Festival 2024",
// //     company: "East West University",
// //     date: "First Runners Up",
// //     details: [
// //       "Demonstrated a blockchain-based application",
// //       "Competed against 32 teams",
// //       "Gave Poster Presentation"
// //     ]
// //   },
// //   {
// //     title: "Medha Lalon Scholarship",
// //     company: "East West University",
// //     date: "",
// //     details: [
// //       "A merit-based scholarship",
// //       "45K per year",
// //       "Got awarded 3 Times in a row"
// //     ]
// //   }
// // ];

// // const TimelineCard = React.forwardRef(
// //   ({ title, company, date, details, stack }, ref) => (
// //     <div className="timeline-row">
// //       <div className="timeline-rail">
// //         <div className="timeline-dot" />
// //         <div className="timeline-line" />
// //       </div>
// //       <div className="timeline-card exp-card-dark" ref={ref}>
// //         <div className="timeline-title">{title}</div>
// //         <div className="timeline-company">{company}</div>
// //         {date && <div className="timeline-date">{date}</div>}
// //         <ul className="timeline-details">
// //           {details.map((d, i) => (
// //             <li key={i}>{d}</li>
// //           ))}
// //         </ul>
// //         {stack && <div className="timeline-stack">{stack}</div>}
// //       </div>
// //     </div>
// //   )
// // );

// // const SectionHeader = ({ icon, children }) => (
// //   <div className="section-header">
// //     {icon}
// //     <span>{children}</span>
// //   </div>
// // );

// // const Experience = () => {
// //   useEffect(() => {
// //     function adjustLines() {
// //       const rows = document.querySelectorAll(".timeline-row");
// //       rows.forEach((row) => {
// //         const card = row.querySelector(".timeline-card");
// //         const line = row.querySelector(".timeline-line");
// //         const dot = row.querySelector(".timeline-dot");
// //         if (card && line && dot) {
// //           const dotRadius = 9.5; // half dot size (19px / 2)
// //           const cmToPx = 37.8; // approx px per cm
// //           const extraGapPx = 0.2 * cmToPx; // 0.2 cm to px
// //           const lineHeight = card.offsetHeight - dotRadius * 2 - extraGapPx;
// //           line.style.height = `${lineHeight}px`;
// //           line.style.background = "#fff";
// //           line.style.width = "2px";
// //         }
// //       });
// //     }
// //     adjustLines();
// //     window.addEventListener("resize", adjustLines);
// //     return () => window.removeEventListener("resize", adjustLines);
// //   }, []);

// //   return (
// //     <div className="exp-awards-root">
// //       {/* Experience Section */}
// //       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>
// //         Experience
// //       </SectionHeader>
// //       <div className="timeline-list">
// //         {experiences.map((exp) => (
// //           <TimelineCard {...exp} key={exp.title} />
// //         ))}
// //       </div>

// //       {/* Awards Section */}
// //       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
// //       <div className="timeline-list">
// //         {awards.map((awd) => (
// //           <TimelineCard {...awd} key={awd.title} />
// //         ))}
// //       </div>

// //       <style>{`
// //         .exp-awards-root {
// //           max-width: 1000px;
// //           margin: 0 auto 2em auto;
// //           padding: 0 2.5rem;
// //           font-family: 'Raleway', 'Poppins', sans-serif;
// //           color: #f0f0f0;
// //           padding-top: 0;
// //         }
// //         .section-header {
// //           display: flex;
// //           align-items: center;
// //           font-size: 2.5rem;
// //           font-weight: 700;
// //           color: #fff;
// //           letter-spacing: 0.5px;
// //           margin-top: 12rem;
// //           margin-bottom: 4rem;
// //           gap: 0.85rem;
// //           padding-left: 56px; /* align to right edge of dot */
// //         }
// //         @media (max-width: 650px) {
// //           .section-header {
// //             margin-top: 7rem;
// //           }
// //           .exp-card-dark {
// //             margin-left: 3rem;
// //             padding: 1rem 1rem 1rem 1.8rem;
// //             font-size: 0.93rem;
// //             border-radius: 10px;
// //           }
// //           .timeline-details {
// //             padding-left: 1.3rem;
// //           }
// //         }
// //         .timeline-list {
// //           display: flex;
// //           flex-direction: column;
// //           gap: 3.4rem;
// //           margin-bottom: 4rem;
// //         }
// //         .timeline-row {
// //           display: flex;
// //           flex-direction: row;
// //           align-items: flex-start;
// //           position: relative;
// //           animation: slideUpFadeIn 0.6s ease forwards;
// //           opacity: 0;
// //           transform: translateY(30px);
// //         }
// //         .timeline-row:nth-child(1) {
// //           animation-delay: 0.2s;
// //         }
// //         .timeline-row:nth-child(2) {
// //           animation-delay: 0.4s;
// //         }
// //         .timeline-row:nth-child(3) {
// //           animation-delay: 0.6s;
// //         }
// //         .timeline-rail {
// //           position: relative;
// //           width: 56px;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           flex-shrink: 0;
// //           min-height: 100%;
// //         }
// //         .timeline-dot {
// //           width: 19px;
// //           height: 19px;
// //           background: #fff;
// //           border-radius: 50%;
// //           border: 4px solid #9067C6;
// //           margin-bottom: 0;
// //           position: relative;
// //           z-index: 2;
// //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// //         }
// //         .timeline-line {
// //           width: 2px;
// //           background: #fff;
// //           border-radius: 8px;
// //           margin: 0 auto;
// //           margin-top: -2px;
// //           z-index: 1;
// //           transition: height 0.2s;
// //         }
// //         .exp-card-dark {
// //           background: rgba(44, 49, 74, 0.97);
// //           color: #f0f0f0;
// //           border-radius: 13px;
// //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// //           padding: 1.1rem 1.2rem 1rem 2.5rem;
// //           margin-left: 4.5rem;
// //           min-width: 0;
// //           flex: 1;
// //           font-size: 1.08rem;
// //           position: relative;
// //           word-break: break-word;
// //           margin-bottom: 0;
// //           transition: box-shadow 0.18s;
// //           line-height: 1.4;
// //         }
// //         .timeline-title {
// //           font-weight: 700;
// //           color: #a084f6;
// //           font-size: 1.14rem;
// //           margin-bottom: 0.35rem;
// //           line-height: 1.3;
// //           letter-spacing: 0.01em;
// //         }
// //         .timeline-company,
// //         .timeline-date,
// //         .timeline-details,
// //         .timeline-stack {
// //           margin-bottom: 0.65rem;
// //         }
// //         .timeline-details {
// //           margin-top: 0.18rem;
// //           color: #f0f0f0;
// //           font-size: 1rem;
// //           padding-left: 1.5rem;
// //           margin-bottom: 0.5rem;
// //         }
// //         .timeline-details li {
// //           margin-bottom: 0.3rem;
// //         }
// //         @media (max-width: 500px) {
// //           .exp-awards-root {
// //             padding: 0 0.7rem;
// //           }
// //           .section-header {
// //             font-size: 1.8rem;
// //             gap: 0.4rem;
// //             padding-left: 17px;
// //           }
// //           .exp-card-dark {
// //             margin-left: 1.5rem;
// //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// //             font-size: 0.9rem;
// //           }
// //           .timeline-rail {
// //             width: 17px;
// //           }
// //           .timeline-details {
// //             padding-left: 1rem;
// //           }
// //         }
// //         @media (max-width: 375px) {
// //           .exp-awards-root {
// //             padding: 0 0.12rem;
// //           }
// //         }
// //         @keyframes slideUpFadeIn {
// //           0% {
// //             opacity: 0;
// //             transform: translateY(30px);
// //           }
// //           100% {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Experience;
// import React, { useEffect } from "react";
// import { FaBriefcase, FaTrophy } from "react-icons/fa";

// const experiences = [
//   {
//     title: "Software Data QA Engineer",
//     company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
//     date: "Jan 2025 – Apr 2025",
//     details: [
//       "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
//       "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
//       "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
//     ],
//     stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
//   },
//   {
//     title: "Research & Teaching Assistant",
//     company: "East West University, Dhaka, Bangladesh. Contact",
//     date: "Jan 2024 – Jan 2025",
//     details: [
//       "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
//       "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
//     ],
//     stack: "Skills: Research, Teaching, Leadership, Data Science"
//   },
//   {
//     title: "Software & ICT Trainee",
//     company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
//     date: "June 2023 – Sept 2023",
//     details: [
//       "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
//       "Worked on practical projects involving web development and database systems.",
//       "Developed soft skills for teamwork and communication."
//     ],
//     stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
//   }
// ];

// const awards = [
//   {
//     title: "Project Showcasing, CSE Festival 2024",
//     company: "East West University",
//     date: "First Runners Up",
//     details: [
//       "Demonstrated a blockchain-based application",
//       "Competed against 32 teams",
//       "Gave Poster Presentation"
//     ]
//   },
//   {
//     title: "Medha Lalon Scholarship",
//     company: "East West University",
//     date: "",
//     details: [
//       "A merit-based scholarship",
//       "45K per year",
//       "Got awarded 3 Times in a row"
//     ]
//   }
// ];

// const TimelineCard = React.forwardRef(
//   ({ title, company, date, details, stack }, ref) => (
//     <div className="timeline-row">
//       <div className="timeline-rail">
//         <div className="timeline-dot" />
//         <div className="timeline-line" />
//       </div>
//       <div className="timeline-card exp-card-dark" ref={ref}>
//         <div className="timeline-title">{title}</div>
//         <div className="timeline-company">{company}</div>
//         {date && <div className="timeline-date">{date}</div>}
//         <ul className="timeline-details">
//           {details.map((d, i) => (
//             <li key={i}>{d}</li>
//           ))}
//         </ul>
//         {stack && <div className="timeline-stack">{stack}</div>}
//       </div>
//     </div>
//   )
// );

// const SectionHeader = ({ icon, children }) => (
//   <div className="section-header">
//     {icon}
//     <span>{children}</span>
//   </div>
// );

// const Experience = () => {
//   useEffect(() => {
//     function adjustLines() {
//       const rows = document.querySelectorAll(".timeline-row");
//       rows.forEach((row) => {
//         const card = row.querySelector(".timeline-card");
//         const line = row.querySelector(".timeline-line");
//         const dot = row.querySelector(".timeline-dot");
//         if (card && line && dot) {
//           const dotRadius = 9.5; // half dot size (19px / 2)
//           const cmToPx = 37.8; // approx px per cm
//           const extraGapPx = 0.2 * cmToPx; // 0.2 cm to px
//           const lineHeight = card.offsetHeight - dotRadius * 2 - extraGapPx;
//           line.style.height = `${lineHeight}px`;
//           line.style.background = "#fff";
//           line.style.width = "2px";
//         }
//       });
//     }
//     adjustLines();
//     window.addEventListener("resize", adjustLines);
//     return () => window.removeEventListener("resize", adjustLines);
//   }, []);

//   return (
//     <div className="exp-awards-root">
//       {/* Experience Section */}
//       <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>
//         Experience
//       </SectionHeader>
//       <div className="timeline-list">
//         {experiences.map((exp) => (
//           <TimelineCard {...exp} key={exp.title} />
//         ))}
//       </div>

//       {/* Awards Section */}
//       <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
//       <div className="timeline-list">
//         {awards.map((awd) => (
//           <TimelineCard {...awd} key={awd.title} />
//         ))}
//       </div>

//       <style>{`
//         .exp-awards-root {
//           max-width: 1000px;
//           margin: 0 auto 2em auto;
//           padding: 0 2.5rem;
//           font-family: 'Raleway', 'Poppins', sans-serif;
//           color: #f0f0f0;
//           padding-top: 0;
//         }
//         .section-header {
//           display: flex;
//           align-items: center;
//           font-size: 4.2rem; /* Desktop size */
//           font-weight: 700;
//           color: #fff;
//           letter-spacing: 0.5px;
//           margin-top: 12rem;
//           margin-bottom: 4rem;
//           gap: 0.85rem;
//           padding-left: 56px; /* align to right edge of dot */
//         }
//         @media (max-width: 650px) {
//           .section-header {
//             margin-top: 7rem;
//           }
//           .exp-card-dark {
//             margin-left: 3rem;
//             padding: 1rem 1rem 1rem 1.8rem;
//             font-size: 0.93rem;
//             border-radius: 10px;
//           }
//           .timeline-details {
//             padding-left: 1.3rem;
//           }
//         }
//         .timeline-list {
//           display: flex;
//           flex-direction: column;
//           gap: 3.4rem;
//           margin-bottom: 4rem;
//         }
//         .timeline-row {
//           display: flex;
//           flex-direction: row;
//           align-items: flex-start;
//           position: relative;
//           animation: slideUpFadeIn 0.6s ease forwards;
//           opacity: 0;
//           transform: translateY(30px);
//         }
//         .timeline-row:nth-child(1) {
//           animation-delay: 0.2s;
//         }
//         .timeline-row:nth-child(2) {
//           animation-delay: 0.4s;
//         }
//         .timeline-row:nth-child(3) {
//           animation-delay: 0.6s;
//         }
//         .timeline-rail {
//           position: relative;
//           width: 56px;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           flex-shrink: 0;
//           min-height: 100%;
//         }
//         .timeline-dot {
//           width: 19px;
//           height: 19px;
//           background: #fff;
//           border-radius: 50%;
//           border: 4px solid #9067C6;
//           margin-bottom: 0;
//           position: relative;
//           z-index: 2;
//           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
//         }
//         .timeline-line {
//           width: 2px;
//           background: #fff;
//           border-radius: 8px;
//           margin: 0 auto;
//           margin-top: -2px;
//           z-index: 1;
//           transition: height 0.2s;
//         }
//         .exp-card-dark {
//           background: rgba(44, 49, 74, 0.97);
//           color: #f0f0f0;
//           border-radius: 13px;
//           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
//           padding: 1.1rem 1.2rem 1rem 2.5rem;
//           margin-left: 4.5rem;
//           min-width: 0;
//           flex: 1;
//           font-size: 1.08rem;
//           position: relative;
//           word-break: break-word;
//           margin-bottom: 0;
//           transition: box-shadow 0.18s;
//           line-height: 1.4;
//         }
//         .timeline-title {
//           font-weight: 700;
//           color: #a084f6;
//           font-size: 1.14rem;
//           margin-bottom: 0.35rem;
//           line-height: 1.3;
//           letter-spacing: 0.01em;
//         }
//         .timeline-company,
//         .timeline-date,
//         .timeline-details,
//         .timeline-stack {
//           margin-bottom: 0.65rem;
//         }
//         .timeline-details {
//           margin-top: 0.18rem;
//           color: #f0f0f0;
//           font-size: 1rem;
//           padding-left: 1.5rem;
//           margin-bottom: 0.5rem;
//         }
//         .timeline-details li {
//           margin-bottom: 0.3rem;
//         }
//         @media (max-width: 500px) {
//           .exp-awards-root {
//             padding: 0 0.7rem;
//           }
//           .section-header {
//             font-size: 3.4rem; /* Mobile size */
//             gap: 0.4rem;
//             padding-left: 17px;
//           }
//           .exp-card-dark {
//             margin-left: 1.5rem;
//             padding: 1rem 0.7rem 0.7rem 0.7rem;
//             font-size: 0.9rem;
//           }
//           .timeline-rail {
//             width: 17px;
//           }
//           .timeline-details {
//             padding-left: 1rem;
//           }
//         }
//         @media (max-width: 375px) {
//           .exp-awards-root {
//             padding: 0 0.12rem;
//           }
//         }
//         @keyframes slideUpFadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(30px);
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
import React, { useEffect } from "react";
import { FaBriefcase, FaTrophy } from "react-icons/fa";

const experiences = [
  {
    title: "Software Data QA Engineer",
    company: "W3 Engineers Ltd, Banani, Dhaka, Bangladesh. Internship",
    date: "Jan 2025 – Apr 2025",
    details: [
      "Developed and maintained 1000+ detailed test cases and a regression suite with 3000+ scenarios, achieving 98% test coverage.",
      "Performed complex queries in Elasticsearch via Kibana console and validated data with PostgreSQL to generate BI dashboards on Apache Superset.",
      "Used Python for data analysis, addressed recurring system issues using Jira & Loop, and regularly executed API requests via Postman."
    ],
    stack: "Tech Stack: DBGate, SQL, PostgreSQL, ElasticSearch, Kibana, BI Dashboard, Excel (Vlookup), Jira, Python, Postman"
  },
  {
    title: "Research & Teaching Assistant",
    company: "East West University, Dhaka, Bangladesh. Contact",
    date: "Jan 2024 – Jan 2025",
    details: [
      "Led and mentored lab sessions for Data Science Statistics and Structured Programming, providing hands-on instruction to 100+ students.",
      "Supervised 9+ research teams, facilitating Q1 journal publications and driving 20% increase in research performance."
    ],
    stack: "Skills: Research, Teaching, Leadership, Data Science"
  },
  {
    title: "Software & ICT Trainee",
    company: "BASIS Institute of Technology & Management (BITM), Dhanmondi, Dhaka, Bangladesh. Training",
    date: "June 2023 – Sept 2023",
    details: [
      "Participated in intensive hands-on software and ICT training under the Ministry of ICT project.",
      "Worked on practical projects involving web development and database systems.",
      "Developed soft skills for teamwork and communication."
    ],
    stack: "Skills: Web Development, Teamwork, Communication, Database Systems"
  }
];

const awards = [
  {
    title: "Project Showcasing, CSE Festival 2024",
    company: "East West University",
    date: "First Runners Up",
    details: [
      "Demonstrated a blockchain-based application",
      "Competed against 32 teams",
      "Gave Poster Presentation"
    ]
  },
  {
    title: "Medha Lalon Scholarship",
    company: "East West University",
    date: "",
    details: [
      "A merit-based scholarship",
      "45K per year",
      "Got awarded 3 Times in a row"
    ]
  }
];

const TimelineCard = React.forwardRef(
  ({ title, company, date, details, stack }, ref) => (
    <div className="timeline-row">
      <div className="timeline-rail">
        <div className="timeline-dot" />
        <div className="timeline-line" />
      </div>
      <div className="timeline-card exp-card-dark" ref={ref}>
        <div className="timeline-title">{title}</div>
        <div className="timeline-company">{company}</div>
        {date && <div className="timeline-date">{date}</div>}
        <ul className="timeline-details">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
        {stack && <div className="timeline-stack">{stack}</div>}
      </div>
    </div>
  )
);

const SectionHeader = ({ icon, children }) => (
  <div className="section-header">
    {icon}
    <span>{children}</span>
  </div>
);

const Experience = () => {
  useEffect(() => {
    function adjustLines() {
      const rows = document.querySelectorAll(".timeline-row");
      rows.forEach((row) => {
        const card = row.querySelector(".timeline-card");
        const line = row.querySelector(".timeline-line");
        const dot = row.querySelector(".timeline-dot");
        if (card && line && dot) {
          const dotRadius = 9.5; // half dot size (19px / 2)
          const cmToPx = 37.8; // approx px per cm
          const extraGapPx = 0.2 * cmToPx; // 0.2 cm to px
          const lineHeight = card.offsetHeight - dotRadius * 2 - extraGapPx;
          line.style.height = `${lineHeight}px`;
          line.style.background = "#9067C6";  /* Purple line */
          line.style.width = "2px";
        }
      });
    }
    adjustLines();
    window.addEventListener("resize", adjustLines);
    return () => window.removeEventListener("resize", adjustLines);
  }, []);

  return (
    <div className="exp-awards-root">
      {/* Experience Section */}
      <SectionHeader icon={<FaBriefcase size={30} color="#9067C6" />}>
        Experience
      </SectionHeader>
      <div className="timeline-list">
        {experiences.map((exp) => (
          <TimelineCard {...exp} key={exp.title} />
        ))}
      </div>

      {/* Awards Section */}
      <SectionHeader icon={<FaTrophy size={26} color="#9067C6" />}>Awards</SectionHeader>
      <div className="timeline-list">
        {awards.map((awd) => (
          <TimelineCard {...awd} key={awd.title} />
        ))}
      </div>

      <style>{`
        .exp-awards-root {
          max-width: 1000px;
          margin: 0 auto 2em auto;
          padding: 0 2.5rem;
          font-family: 'Raleway', 'Poppins', sans-serif;
          color: #f0f0f0;
          padding-top: 0;
        }
        .section-header {
          display: flex;
          align-items: center;
          justify-content: center; /* center horizontally */
          font-size: 4.2rem; /* Desktop size */
          font-weight: 700;
          color: #9067C6; /* Purple color for icon & text */
          letter-spacing: 0.5px;
          margin-top: 12rem;
          margin-bottom: 4rem;
          gap: 0.85rem;
          padding-left: 0; /* no left padding since centered */
          text-align: center;
        }
        @media (max-width: 650px) {
          .section-header {
            margin-top: 7rem;
          }
          .exp-card-dark {
            margin-left: 3rem;
            padding: 1rem 1rem 1rem 1.8rem;
            font-size: 0.93rem;
            border-radius: 10px;
          }
          .timeline-details {
            padding-left: 1.3rem;
          }
        }
        .timeline-list {
          display: flex;
          flex-direction: column;
          gap: 3.4rem;
          margin-bottom: 4rem;
        }
        .timeline-row {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          position: relative;
          animation: slideUpFadeIn 0.6s ease forwards;
          opacity: 0;
          transform: translateY(30px);
        }
        .timeline-row:nth-child(1) {
          animation-delay: 0.2s;
        }
        .timeline-row:nth-child(2) {
          animation-delay: 0.4s;
        }
        .timeline-row:nth-child(3) {
          animation-delay: 0.6s;
        }
        .timeline-rail {
          position: relative;
          width: 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          min-height: 100%;
        }
        .timeline-dot {
          width: 19px;
          height: 19px;
          background: #fff;
          border-radius: 50%;
          border: 4px solid #9067C6;
          margin-bottom: 0;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
        }
        .timeline-line {
          width: 2px;
          background: #9067C6; /* Purple line */
          border-radius: 8px;
          margin: 0 auto;
          margin-top: -2px;
          z-index: 1;
          transition: height 0.2s;
        }
        .exp-card-dark {
          background: rgba(44, 49, 74, 0.97);
          color: #f0f0f0;
          border-radius: 13px;
          box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
          padding: 1.1rem 1.2rem 1rem 2.5rem;
          margin-left: 4.5rem;
          min-width: 0;
          flex: 1;
          font-size: 1.08rem;
          position: relative;
          word-break: break-word;
          margin-bottom: 0;
          transition: box-shadow 0.18s;
          line-height: 1.4;
        }
        .timeline-title {
          font-weight: 700;
          color: #a084f6;
          font-size: 1.14rem;
          margin-bottom: 0.35rem;
          line-height: 1.3;
          letter-spacing: 0.01em;
        }
        .timeline-company,
        .timeline-date,
        .timeline-details,
        .timeline-stack {
          margin-bottom: 0.65rem;
        }
        .timeline-details {
          margin-top: 0.18rem;
          color: #f0f0f0;
          font-size: 1rem;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .timeline-details li {
          margin-bottom: 0.3rem;
        }
        @media (max-width: 500px) {
          .exp-awards-root {
            padding: 0 0.7rem;
          }
          .section-header {
            font-size: 3.4rem; /* Mobile size */
            gap: 0.4rem;
            padding-left: 0;
          }
          .exp-card-dark {
            margin-left: 1.5rem;
            padding: 1rem 0.7rem 0.7rem 0.7rem;
            font-size: 0.9rem;
          }
          .timeline-rail {
            width: 17px;
          }
          .timeline-details {
            padding-left: 1rem;
          }
        }
        @media (max-width: 375px) {
          .exp-awards-root {
            padding: 0 0.12rem;
          }
        }
        @keyframes slideUpFadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
