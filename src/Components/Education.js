// // // // // // // import React from 'react';
// // // // // // // import { SiHackerrank } from "react-icons/si";
// // // // // // // import { FaCertificate, FaGraduationCap } from "react-icons/fa";
// // // // // // // import Lottie from "lottie-react";
// // // // // // // import Tilt from "react-parallax-tilt";
// // // // // // // import EducationLottie from '../LottieFiles/Education.json';
// // // // // // // import CertLottie from '../LottieFiles/Certificate.json';

// // // // // // // const Education = () => {
// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className="AboutPage"
// // // // // // //       style={{
// // // // // // //         maxWidth: '1500px',
// // // // // // //         margin: '10em auto 4rem auto',
// // // // // // //         padding: '0 2rem',
// // // // // // //         fontFamily: "'Raleway', sans-serif",
// // // // // // //         fontWeight: 500,
// // // // // // //         color: '#f0f0f0',
// // // // // // //         lineHeight: 1.7,
// // // // // // //         display: 'block',
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {/* Spacer */}
// // // // // // //       <div style={{ height: '8rem' }}></div>
      
// // // // // // //       {/* Education title with icon on left, centered */}
// // // // // // //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', marginBottom: '2rem', gap: '1.2rem' }}>
// // // // // // //         <FaGraduationCap size={40} color="#9067C6" />
// // // // // // //         <h1
// // // // // // //           style={{
// // // // // // //             fontSize: '2.5rem',
// // // // // // //             color: '#fff',
// // // // // // //             fontWeight: 500,
// // // // // // //             margin: 0,
// // // // // // //             lineHeight: 1.2,
// // // // // // //             letterSpacing: "0.5px"
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Education
// // // // // // //         </h1>
// // // // // // //       </div>

// // // // // // //       <div style={{ height: '4rem' }}></div>
// // // // // // //       {/* Education Section with Animation on Right */}
// // // // // // //       <div style={{
// // // // // // //         display: 'flex',
// // // // // // //         alignItems: 'center',
// // // // // // //         gap: '3rem',
// // // // // // //         marginBottom: '4rem'
// // // // // // //       }}>
// // // // // // //         {/* Education Info */}
// // // // // // //         <div style={{ flex: 1 }}>
// // // // // // //           {/* ... (articles unchanged) ... */}
// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '2.5rem',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 0.6s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <h2
// // // // // // //               style={{
// // // // // // //                 fontSize: '1.5rem',
// // // // // // //                 color: '#9067C6',
// // // // // // //                 marginBottom: '0.75rem',
// // // // // // //                 fontWeight: 500,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               BSc. in Computer Science & Engineering
// // // // // // //               <span
// // // // // // //                 style={{
// // // // // // //                   float: 'right',
// // // // // // //                   fontWeight: 400,
// // // // // // //                   fontSize: '1rem',
// // // // // // //                   color: '#bbb',
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Jan 2020 - Jan 2024
// // // // // // //               </span>
// // // // // // //             </h2>
// // // // // // //             <p>Department of Computer Science & Engineering,</p>
// // // // // // //             <p>Faculty of Science,</p>
// // // // // // //             <p>East West University</p>
// // // // // // //             <p>
// // // // // // //               <b>Major:</b> Software Engineering
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               <b>CGPA:</b> 3.71 / 4.00
// // // // // // //             </p>
// // // // // // //           </article>
// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '2.5rem',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 0.7s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <h2
// // // // // // //               style={{
// // // // // // //                 fontSize: '1.5rem',
// // // // // // //                 color: '#9067C6',
// // // // // // //                 marginBottom: '0.75rem',
// // // // // // //                 fontWeight: 500,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Higher Secondary Certificate
// // // // // // //               <span
// // // // // // //                 style={{
// // // // // // //                   float: 'right',
// // // // // // //                   fontWeight: 400,
// // // // // // //                   fontSize: '1rem',
// // // // // // //                   color: '#bbb',
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Jul 2016 - Jul 2018
// // // // // // //               </span>
// // // // // // //             </h2>
// // // // // // //             <p>St. Joseph Higher Secondary School</p>
// // // // // // //             <p>
// // // // // // //               <b>Major:</b> Science
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               <b>GPA:</b> 5.00 / 5.00
// // // // // // //             </p>
// // // // // // //             <p
// // // // // // //               style={{
// // // // // // //                 fontStyle: 'italic',
// // // // // // //                 fontSize: '0.9rem',
// // // // // // //                 marginTop: '0.4rem',
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @
// // // // // // //               Scintilla Science Club
// // // // // // //             </p>
// // // // // // //           </article>
// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '0',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 0.8s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <h2
// // // // // // //               style={{
// // // // // // //                 fontSize: '1.5rem',
// // // // // // //                 color: '#9067C6',
// // // // // // //                 marginBottom: '0.75rem',
// // // // // // //                 fontWeight: 500,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Secondary School Certificate
// // // // // // //               <span
// // // // // // //                 style={{
// // // // // // //                   float: 'right',
// // // // // // //                   fontWeight: 400,
// // // // // // //                   fontSize: '1rem',
// // // // // // //                   color: '#bbb',
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Jan 2006 - Jun 2016
// // // // // // //               </span>
// // // // // // //             </h2>
// // // // // // //             <p>Monipur High School & College</p>
// // // // // // //             <p>
// // // // // // //               <b>Major:</b> Science
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               <b>GPA:</b> 5.00 / 5.00
// // // // // // //             </p>
// // // // // // //             <p
// // // // // // //               style={{
// // // // // // //                 fontStyle: 'italic',
// // // // // // //                 fontSize: '0.9rem',
// // // // // // //                 marginTop: '0.4rem',
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Activities: Sports Club, CB @ Club de Futbol Avalance
// // // // // // //             </p>
// // // // // // //           </article>
// // // // // // //         </div>
// // // // // // //         {/* Lottie Animation on Right - 3x big */}
// // // // // // //         <div style={{ flex: '0 0 600px' }}>
// // // // // // //           <Tilt>
// // // // // // //             <Lottie
// // // // // // //               className="illustration"
// // // // // // //               animationData={EducationLottie}
// // // // // // //               loop={true}
// // // // // // //               style={{ width: '600px', height: '600px' }}
// // // // // // //             />
// // // // // // //           </Tilt>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div style={{ height: '4rem' }}></div>
// // // // // // //       {/* Certifications title with icon on right, centered */}
// // // // // // //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', marginBottom: '2rem', gap: '1.2rem' }}>
// // // // // // //         <h1
// // // // // // //           style={{
// // // // // // //             fontSize: '2.5rem',
// // // // // // //             color: '#fff',
// // // // // // //             fontWeight: 500,
// // // // // // //             margin: 0,
// // // // // // //             lineHeight: 1.2,
// // // // // // //             letterSpacing: "0.5px"
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Certifications
// // // // // // //         </h1>
// // // // // // //         <FaCertificate size={40} color="#9067C6" />
// // // // // // //       </div>

// // // // // // //       {/* Certifications Section with Lottie on Left - 3x big */}
// // // // // // //       <div style={{
// // // // // // //         display: 'flex',
// // // // // // //         alignItems: 'center',
// // // // // // //         gap: '3rem',
// // // // // // //         marginBottom: '4rem'
// // // // // // //       }}>
// // // // // // //         {/* Lottie Animation on Left - 3x big */}
// // // // // // //         <div style={{ flex: '0 0 600px' }}>
// // // // // // //           <Tilt>
// // // // // // //             <Lottie
// // // // // // //               className="illustration"
// // // // // // //               animationData={CertLottie}
// // // // // // //               loop={true}
// // // // // // //               style={{ width: '600px', height: '600px' }}
// // // // // // //             />
// // // // // // //           </Tilt>
// // // // // // //         </div>
// // // // // // //         {/* Certifications Info */}
// // // // // // //         <div style={{ flex: 1 }}>
// // // // // // //           {/* ... (certification articles unchanged) ... */}
// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '1.5rem',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 0.9s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //               display: 'flex',
// // // // // // //               alignItems: 'center',
// // // // // // //               gap: '1rem',
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <SiHackerrank size={48} color="#2EC866" />
// // // // // // //             <div>
// // // // // // //               <b>SQL Advanced Certification</b> — HackerRank (May 2025) <br />
// // // // // // //               Credential ID:{' '}
// // // // // // //               <a
// // // // // // //                 href="https://www.hackerrank.com/certificates/5905cf970f0a"
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noreferrer"
// // // // // // //                 style={{ color: '#9067C6' }}
// // // // // // //               >
// // // // // // //                 5905cf970f0a
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           </article>

// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '1.5rem',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 1s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //               display: 'flex',
// // // // // // //               alignItems: 'center',
// // // // // // //               gap: '1rem',
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <SiHackerrank size={48} color="#2EC866" />
// // // // // // //             <div>
// // // // // // //               <b>SQL Intermediate Certification</b> — HackerRank (May 2025) <br />
// // // // // // //               Credential ID:{' '}
// // // // // // //               <a
// // // // // // //                 href="https://www.hackerrank.com/certificates/1268f4f884cf"
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noreferrer"
// // // // // // //                 style={{ color: '#9067C6' }}
// // // // // // //               >
// // // // // // //                 1268f4f884cf
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           </article>

// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '1.5rem',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 1.1s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //               display: 'flex',
// // // // // // //               alignItems: 'center',
// // // // // // //               gap: '1rem',
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <FaCertificate size={48} color="#9067C6" />
// // // // // // //             <div>
// // // // // // //               <b>TestDome Certification</b> (Details in CV) <br />
// // // // // // //               Credential link:{' '}
// // // // // // //               <a
// // // // // // //                 href="https://www.testdome.com/certificates"
// // // // // // //                 target="_blank"
// // // // // // //                 rel="noreferrer"
// // // // // // //                 style={{ color: '#9067C6' }}
// // // // // // //               >
// // // // // // //                 View Certificates
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           </article>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <style>{`
// // // // // // //         @keyframes fadeInUp {
// // // // // // //           0% {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateY(20px);
// // // // // // //           }
// // // // // // //           100% {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateY(0);
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Education;
// // // // // // // import React from 'react';
// // // // // // // import { SiHackerrank } from "react-icons/si";
// // // // // // // import { FaCertificate, FaGraduationCap } from "react-icons/fa";
// // // // // // // import Lottie from "lottie-react";
// // // // // // // import Tilt from "react-parallax-tilt";
// // // // // // // import EducationLottie from '../LottieFiles/Education.json';
// // // // // // // import CertLottie from '../LottieFiles/Certificate.json';

// // // // // // // const Education = () => {
// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       className="AboutPage"
// // // // // // //       style={{
// // // // // // //         maxWidth: '1500px',
// // // // // // //         margin: '10em auto 4rem auto',
// // // // // // //         padding: '0 2rem',
// // // // // // //         fontFamily: "'Raleway', sans-serif",
// // // // // // //         fontWeight: 500,
// // // // // // //         color: '#f0f0f0',
// // // // // // //         lineHeight: 1.7,
// // // // // // //         display: 'block',
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {/* Spacer */}
// // // // // // //       <div style={{ height: '8rem' }}></div>
      
// // // // // // //       {/* Education title with icon on left, centered */}
// // // // // // //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', marginBottom: '2rem', gap: '1.2rem' }}>
// // // // // // //         <FaGraduationCap size={40} color="#9067C6" />
// // // // // // //         <h1
// // // // // // //           style={{
// // // // // // //             fontSize: '2.5rem',
// // // // // // //             color: '#fff',
// // // // // // //             fontWeight: 500,
// // // // // // //             margin: 0,
// // // // // // //             lineHeight: 1.2,
// // // // // // //             letterSpacing: "0.5px"
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Education
// // // // // // //         </h1>
// // // // // // //       </div>

// // // // // // //       <div style={{ height: '4rem' }}></div>
// // // // // // //       {/* Education Section with Animation on Right */}
// // // // // // //       <div style={{
// // // // // // //         display: 'flex',
// // // // // // //         alignItems: 'center',
// // // // // // //         gap: '3rem',
// // // // // // //         marginBottom: '4rem'
// // // // // // //       }}>
// // // // // // //         {/* Education Info */}
// // // // // // //         <div style={{ flex: 1 }}>
// // // // // // //           {/* Education Articles */}
// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '2.5rem',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 0.6s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <h2
// // // // // // //               style={{
// // // // // // //                 fontSize: '1.5rem',
// // // // // // //                 color: '#9067C6',
// // // // // // //                 marginBottom: '0.75rem',
// // // // // // //                 fontWeight: 500,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               BSc. in Computer Science & Engineering
// // // // // // //               <span
// // // // // // //                 style={{
// // // // // // //                   float: 'right',
// // // // // // //                   fontWeight: 400,
// // // // // // //                   fontSize: '1rem',
// // // // // // //                   color: '#bbb',
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Jan 2020 - Jan 2024
// // // // // // //               </span>
// // // // // // //             </h2>
// // // // // // //             <p>Department of Computer Science & Engineering,</p>
// // // // // // //             <p>Faculty of Science,</p>
// // // // // // //             <p>East West University</p>
// // // // // // //             <p>
// // // // // // //               <b>Major:</b> Software Engineering
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               <b>CGPA:</b> 3.71 / 4.00
// // // // // // //             </p>
// // // // // // //           </article>
// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '2.5rem',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 0.7s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <h2
// // // // // // //               style={{
// // // // // // //                 fontSize: '1.5rem',
// // // // // // //                 color: '#9067C6',
// // // // // // //                 marginBottom: '0.75rem',
// // // // // // //                 fontWeight: 500,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Higher Secondary Certificate
// // // // // // //               <span
// // // // // // //                 style={{
// // // // // // //                   float: 'right',
// // // // // // //                   fontWeight: 400,
// // // // // // //                   fontSize: '1rem',
// // // // // // //                   color: '#bbb',
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Jul 2016 - Jul 2018
// // // // // // //               </span>
// // // // // // //             </h2>
// // // // // // //             <p>St. Joseph Higher Secondary School</p>
// // // // // // //             <p>
// // // // // // //               <b>Major:</b> Science
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               <b>GPA:</b> 5.00 / 5.00
// // // // // // //             </p>
// // // // // // //             <p
// // // // // // //               style={{
// // // // // // //                 fontStyle: 'italic',
// // // // // // //                 fontSize: '0.9rem',
// // // // // // //                 marginTop: '0.4rem',
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @
// // // // // // //               Scintilla Science Club
// // // // // // //             </p>
// // // // // // //           </article>
// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '0',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 0.8s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <h2
// // // // // // //               style={{
// // // // // // //                 fontSize: '1.5rem',
// // // // // // //                 color: '#9067C6',
// // // // // // //                 marginBottom: '0.75rem',
// // // // // // //                 fontWeight: 500,
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Secondary School Certificate
// // // // // // //               <span
// // // // // // //                 style={{
// // // // // // //                   float: 'right',
// // // // // // //                   fontWeight: 400,
// // // // // // //                   fontSize: '1rem',
// // // // // // //                   color: '#bbb',
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 Jan 2006 - Jun 2016
// // // // // // //               </span>
// // // // // // //             </h2>
// // // // // // //             <p>Monipur High School & College</p>
// // // // // // //             <p>
// // // // // // //               <b>Major:</b> Science
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               <b>GPA:</b> 5.00 / 5.00
// // // // // // //             </p>
// // // // // // //             <p
// // // // // // //               style={{
// // // // // // //                 fontStyle: 'italic',
// // // // // // //                 fontSize: '0.9rem',
// // // // // // //                 marginTop: '0.4rem',
// // // // // // //               }}
// // // // // // //             >
// // // // // // //               Activities: Sports Club, CB @ Club de Futbol Avalance
// // // // // // //             </p>
// // // // // // //           </article>
// // // // // // //         </div>
// // // // // // //         {/* Lottie Animation on Right - 3x big */}
// // // // // // //         <div style={{ flex: '0 0 600px' }}>
// // // // // // //           <Tilt>
// // // // // // //             <Lottie
// // // // // // //               className="illustration"
// // // // // // //               animationData={EducationLottie}
// // // // // // //               loop={true}
// // // // // // //               style={{ width: '600px', height: '600px' }}
// // // // // // //             />
// // // // // // //           </Tilt>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <div style={{ height: '4rem' }}></div>
// // // // // // //       {/* Certifications title with icon on right, centered */}
// // // // // // //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', marginBottom: '2rem', gap: '1.2rem' }}>
// // // // // // //         <h1
// // // // // // //           style={{
// // // // // // //             fontSize: '2.5rem',
// // // // // // //             color: '#fff',
// // // // // // //             fontWeight: 500,
// // // // // // //             margin: 0,
// // // // // // //             lineHeight: 1.2,
// // // // // // //             letterSpacing: "0.5px"
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           Certifications
// // // // // // //         </h1>
// // // // // // //         <FaCertificate size={40} color="#9067C6" />
// // // // // // //       </div>
// // // // // // //       <div style={{ height: '5rem' }}></div>

// // // // // // //       {/* Certifications Section with Lottie on Left - 3x big */}
// // // // // // //       <div style={{
// // // // // // //         display: 'flex',
// // // // // // //         alignItems: 'center',
// // // // // // //         gap: '3rem',
// // // // // // //         marginBottom: '4rem'
// // // // // // //       }}>
// // // // // // //         {/* Lottie Animation on Left - 3x big */}
// // // // // // //         <div style={{ flex: '0 0 600px' }}>
// // // // // // //           <Tilt>
// // // // // // //             <Lottie
// // // // // // //               className="illustration"
// // // // // // //               animationData={CertLottie}
// // // // // // //               loop={true}
// // // // // // //               style={{ width: '600px', height: '600px' }}
// // // // // // //             />
// // // // // // //           </Tilt>
// // // // // // //         </div>
// // // // // // //         {/* Certifications Info */}
// // // // // // //         <div style={{ flex: 1 }}>
// // // // // // //           {/* Certification Articles */}
// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '1.5rem',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 0.9s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //               display: 'flex',
// // // // // // //               alignItems: 'center',
// // // // // // //               gap: '1rem',
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <SiHackerrank size={48} color="#2EC866" />
// // // // // // //             <div>
// // // // // // //               <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '600' }}>SQL Advanced Certification</h3>
// // // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>HackerRank</p>
// // // // // // //               <p style={{ margin: '0 0 0.3rem 0', fontWeight: '500', color: '#ccc' }}>May 2025</p>
// // // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>
// // // // // // //                 Credential ID:{' '}
// // // // // // //                 <a
// // // // // // //                   href="https://www.hackerrank.com/certificates/5905cf970f0a"
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // // //                 >
// // // // // // //                   5905cf970f0a
// // // // // // //                 </a>
// // // // // // //               </p>
// // // // // // //               <p style={{ margin: '0' }}>
// // // // // // //                 View Certificate:{' '}
// // // // // // //                 <a
// // // // // // //                   href="https://www.hackerrank.com/certificates/5905cf970f0a"
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // // //                 >
// // // // // // //                   Link
// // // // // // //                 </a>
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </article>

// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '1.5rem',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 1s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //               display: 'flex',
// // // // // // //               alignItems: 'center',
// // // // // // //               gap: '1rem',
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <SiHackerrank size={48} color="#2EC866" />
// // // // // // //             <div>
// // // // // // //               <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '600' }}>SQL Intermediate Certification</h3>
// // // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>HackerRank</p>
// // // // // // //               <p style={{ margin: '0 0 0.3rem 0', fontWeight: '500', color: '#ccc' }}>May 2025</p>
// // // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>
// // // // // // //                 Credential ID:{' '}
// // // // // // //                 <a
// // // // // // //                   href="https://www.hackerrank.com/certificates/1268f4f884cf"
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // // //                 >
// // // // // // //                   1268f4f884cf
// // // // // // //                 </a>
// // // // // // //               </p>
// // // // // // //               <p style={{ margin: '0' }}>
// // // // // // //                 View Certificate:{' '}
// // // // // // //                 <a
// // // // // // //                   href="https://www.hackerrank.com/certificates/1268f4f884cf"
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // // //                 >
// // // // // // //                   Link
// // // // // // //                 </a>
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </article>

// // // // // // //           <article
// // // // // // //             style={{
// // // // // // //               marginBottom: '0',
// // // // // // //               padding: '1.5rem',
// // // // // // //               backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // // //               borderRadius: '8px',
// // // // // // //               animation: 'fadeInUp 1.1s ease forwards',
// // // // // // //               opacity: 0,
// // // // // // //               display: 'flex',
// // // // // // //               gap: '1.5rem',
// // // // // // //               alignItems: 'center',
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             <FaCertificate size={48} color="#9067C6" />
// // // // // // //             <div>
// // // // // // //               <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '600' }}>TestDome Certification</h3>
// // // // // // //               <p style={{ margin: '0 0 0.3rem 0', fontWeight: '500', color: '#ccc' }}>(Details in CV)</p>
// // // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>
// // // // // // //                 Credential ID: <strong>18fcfee2169e449bb9a144aafd68ee1b</strong>
// // // // // // //               </p>
// // // // // // //               <p style={{ margin: '0' }}>
// // // // // // //                 View Certificate:{' '}
// // // // // // //                 <a
// // // // // // //                   href="https://www.testdome.com/certificates/18fcfee2169e449bb9a144aafd68ee1b"
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // // //                 >
// // // // // // //                   Link
// // // // // // //                 </a>
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           </article>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <style>{`
// // // // // // //         @keyframes fadeInUp {
// // // // // // //           0% {
// // // // // // //             opacity: 0;
// // // // // // //             transform: translateY(20px);
// // // // // // //           }
// // // // // // //           100% {
// // // // // // //             opacity: 1;
// // // // // // //             transform: translateY(0);
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Education;
// // // // // // import React from 'react';
// // // // // // import { SiHackerrank } from "react-icons/si";
// // // // // // import { FaCertificate, FaGraduationCap } from "react-icons/fa";
// // // // // // import Lottie from "lottie-react";
// // // // // // import Tilt from "react-parallax-tilt";
// // // // // // import EducationLottie from '../LottieFiles/Education.json';
// // // // // // import CertLottie from '../LottieFiles/Certificate.json';

// // // // // // const Education = () => {
// // // // // //   return (
// // // // // //     <div
// // // // // //       className="AboutPage"
// // // // // //       style={{
// // // // // //         maxWidth: '1500px',
// // // // // //         margin: '10em auto 4rem auto',
// // // // // //         padding: '0 2rem',
// // // // // //         fontFamily: "'Raleway', sans-serif",
// // // // // //         fontWeight: 500,
// // // // // //         color: '#f0f0f0',
// // // // // //         lineHeight: 1.7,
// // // // // //         display: 'block',
// // // // // //       }}
// // // // // //     >
// // // // // //       <div style={{ height: '8rem' }}></div>

// // // // // //       {/* Education title with icon on left, centered */}
// // // // // //       <div style={{
// // // // // //         display: 'flex',
// // // // // //         alignItems: 'center',
// // // // // //         justifyContent: 'left',
// // // // // //         marginBottom: '2rem',
// // // // // //         gap: '1.2rem'
// // // // // //       }}>
// // // // // //         <FaGraduationCap size={40} color="#9067C6" />
// // // // // //         <h1 style={{
// // // // // //           fontSize: '2.5rem',
// // // // // //           color: '#fff',
// // // // // //           fontWeight: 500,
// // // // // //           margin: 0,
// // // // // //           lineHeight: 1.2,
// // // // // //           letterSpacing: "0.5px"
// // // // // //         }}>
// // // // // //           Education
// // // // // //         </h1>
// // // // // //       </div>

// // // // // //       <div style={{ height: '4rem' }}></div>

// // // // // //       {/* Flex container with responsive */}
// // // // // //       <div style={{
// // // // // //         display: 'flex',
// // // // // //         alignItems: 'center',
// // // // // //         gap: '3rem',
// // // // // //         marginBottom: '4rem',
// // // // // //         flexWrap: 'wrap'
// // // // // //       }}>
// // // // // //         {/* Education Info */}
// // // // // //         <div style={{ flex: '1 1 400px', minWidth: '320px' }}>
// // // // // //           <article style={{
// // // // // //             marginBottom: '2.5rem',
// // // // // //             padding: '1.5rem',
// // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // //             borderRadius: '8px',
// // // // // //             animation: 'fadeInUp 0.6s ease forwards',
// // // // // //             opacity: 0,
// // // // // //           }}>
// // // // // //             <h2 style={{
// // // // // //               fontSize: '1.5rem',
// // // // // //               color: '#9067C6',
// // // // // //               marginBottom: '0.75rem',
// // // // // //               fontWeight: 500,
// // // // // //             }}>
// // // // // //               BSc. in Computer Science & Engineering
// // // // // //               <span style={{
// // // // // //                 float: 'right',
// // // // // //                 fontWeight: 400,
// // // // // //                 fontSize: '1rem',
// // // // // //                 color: '#bbb',
// // // // // //               }}>
// // // // // //                 Jan 2020 - Jan 2024
// // // // // //               </span>
// // // // // //             </h2>
// // // // // //             <p>Department of Computer Science & Engineering,</p>
// // // // // //             <p>Faculty of Science,</p>
// // // // // //             <p>East West University</p>
// // // // // //             <p><b>Major:</b> Software Engineering</p>
// // // // // //             <p><b>CGPA:</b> 3.71 / 4.00</p>
// // // // // //           </article>

// // // // // //           <article style={{
// // // // // //             marginBottom: '2.5rem',
// // // // // //             padding: '1.5rem',
// // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // //             borderRadius: '8px',
// // // // // //             animation: 'fadeInUp 0.7s ease forwards',
// // // // // //             opacity: 0,
// // // // // //           }}>
// // // // // //             <h2 style={{
// // // // // //               fontSize: '1.5rem',
// // // // // //               color: '#9067C6',
// // // // // //               marginBottom: '0.75rem',
// // // // // //               fontWeight: 500,
// // // // // //             }}>
// // // // // //               Higher Secondary Certificate
// // // // // //               <span style={{
// // // // // //                 float: 'right',
// // // // // //                 fontWeight: 400,
// // // // // //                 fontSize: '1rem',
// // // // // //                 color: '#bbb',
// // // // // //               }}>
// // // // // //                 Jul 2016 - Jul 2018
// // // // // //               </span>
// // // // // //             </h2>
// // // // // //             <p>St. Joseph Higher Secondary School</p>
// // // // // //             <p><b>Major:</b> Science</p>
// // // // // //             <p><b>GPA:</b> 5.00 / 5.00</p>
// // // // // //             <p style={{
// // // // // //               fontStyle: 'italic',
// // // // // //               fontSize: '0.9rem',
// // // // // //               marginTop: '0.4rem',
// // // // // //             }}>
// // // // // //               Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @ Scintilla Science Club
// // // // // //             </p>
// // // // // //           </article>

// // // // // //           <article style={{
// // // // // //             marginBottom: '0',
// // // // // //             padding: '1.5rem',
// // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // //             borderRadius: '8px',
// // // // // //             animation: 'fadeInUp 0.8s ease forwards',
// // // // // //             opacity: 0,
// // // // // //           }}>
// // // // // //             <h2 style={{
// // // // // //               fontSize: '1.5rem',
// // // // // //               color: '#9067C6',
// // // // // //               marginBottom: '0.75rem',
// // // // // //               fontWeight: 500,
// // // // // //             }}>
// // // // // //               Secondary School Certificate
// // // // // //               <span style={{
// // // // // //                 float: 'right',
// // // // // //                 fontWeight: 400,
// // // // // //                 fontSize: '1rem',
// // // // // //                 color: '#bbb',
// // // // // //               }}>
// // // // // //                 Jan 2006 - Jun 2016
// // // // // //               </span>
// // // // // //             </h2>
// // // // // //             <p>Monipur High School & College</p>
// // // // // //             <p><b>Major:</b> Science</p>
// // // // // //             <p><b>GPA:</b> 5.00 / 5.00</p>
// // // // // //             <p style={{
// // // // // //               fontStyle: 'italic',
// // // // // //               fontSize: '0.9rem',
// // // // // //               marginTop: '0.4rem',
// // // // // //             }}>
// // // // // //               Activities: Sports Club, CB @ Club de Futbol Avalance
// // // // // //             </p>
// // // // // //           </article>
// // // // // //         </div>

// // // // // //         {/* Lottie Animation on Right */}
// // // // // //         <div style={{ flex: '0 0 600px', minWidth: '320px' }}>
// // // // // //           <Tilt>
// // // // // //             <Lottie
// // // // // //               className="illustration"
// // // // // //               animationData={EducationLottie}
// // // // // //               loop={true}
// // // // // //               style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
// // // // // //             />
// // // // // //           </Tilt>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div style={{ height: '4rem' }}></div>

// // // // // //       {/* Certifications title with icon */}
// // // // // //       <div style={{
// // // // // //         display: 'flex',
// // // // // //         alignItems: 'center',
// // // // // //         justifyContent: 'right',
// // // // // //         marginBottom: '2rem',
// // // // // //         gap: '1.2rem',
// // // // // //         flexWrap: 'wrap'
// // // // // //       }}>
// // // // // //         <h1 style={{
// // // // // //           fontSize: '2.5rem',
// // // // // //           color: '#fff',
// // // // // //           fontWeight: 500,
// // // // // //           margin: 0,
// // // // // //           lineHeight: 1.2,
// // // // // //           letterSpacing: "0.5px"
// // // // // //         }}>
// // // // // //           Certifications
// // // // // //         </h1>
// // // // // //         <FaCertificate size={40} color="#9067C6" />
// // // // // //       </div>

// // // // // //       <div style={{ height: '5rem' }}></div>

// // // // // //       {/* Certifications Section with Lottie */}
// // // // // //       <div style={{
// // // // // //         display: 'flex',
// // // // // //         alignItems: 'center',
// // // // // //         gap: '3rem',
// // // // // //         marginBottom: '4rem',
// // // // // //         flexWrap: 'wrap'
// // // // // //       }}>
// // // // // //         <div style={{ flex: '0 0 600px', minWidth: '320px' }}>
// // // // // //           <Tilt>
// // // // // //             <Lottie
// // // // // //               className="illustration"
// // // // // //               animationData={CertLottie}
// // // // // //               loop={true}
// // // // // //               style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
// // // // // //             />
// // // // // //           </Tilt>
// // // // // //         </div>
// // // // // //         <div style={{ flex: '1 1 400px', minWidth: '320px' }}>
// // // // // //           {/* Certification Articles */}
// // // // // //           <article style={{
// // // // // //             marginBottom: '1.5rem',
// // // // // //             padding: '1.5rem',
// // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // //             borderRadius: '8px',
// // // // // //             animation: 'fadeInUp 0.9s ease forwards',
// // // // // //             opacity: 0,
// // // // // //             display: 'flex',
// // // // // //             alignItems: 'center',
// // // // // //             gap: '1rem',
// // // // // //           }}>
// // // // // //             <SiHackerrank size={48} color="#2EC866" />
// // // // // //             <div>
// // // // // //               <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '600' }}>SQL Advanced Certification</h3>
// // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>HackerRank</p>
// // // // // //               <p style={{ margin: '0 0 0.3rem 0', fontWeight: '500', color: '#ccc' }}>May 2025</p>
// // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>
// // // // // //                 Credential ID:{' '}
// // // // // //                 <a
// // // // // //                   href="https://www.hackerrank.com/certificates/5905cf970f0a"
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // //                 >
// // // // // //                   5905cf970f0a
// // // // // //                 </a>
// // // // // //               </p>
// // // // // //               <p style={{ margin: 0 }}>
// // // // // //                 View Certificate:{' '}
// // // // // //                 <a
// // // // // //                   href="https://www.hackerrank.com/certificates/5905cf970f0a"
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // //                 >
// // // // // //                   Link
// // // // // //                 </a>
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </article>

// // // // // //           <article style={{
// // // // // //             marginBottom: '1.5rem',
// // // // // //             padding: '1.5rem',
// // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // //             borderRadius: '8px',
// // // // // //             animation: 'fadeInUp 1s ease forwards',
// // // // // //             opacity: 0,
// // // // // //             display: 'flex',
// // // // // //             alignItems: 'center',
// // // // // //             gap: '1rem',
// // // // // //           }}>
// // // // // //             <SiHackerrank size={48} color="#2EC866" />
// // // // // //             <div>
// // // // // //               <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '600' }}>SQL Intermediate Certification</h3>
// // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>HackerRank</p>
// // // // // //               <p style={{ margin: '0 0 0.3rem 0', fontWeight: '500', color: '#ccc' }}>May 2025</p>
// // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>
// // // // // //                 Credential ID:{' '}
// // // // // //                 <a
// // // // // //                   href="https://www.hackerrank.com/certificates/1268f4f884cf"
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // //                 >
// // // // // //                   1268f4f884cf
// // // // // //                 </a>
// // // // // //               </p>
// // // // // //               <p style={{ margin: 0 }}>
// // // // // //                 View Certificate:{' '}
// // // // // //                 <a
// // // // // //                   href="https://www.hackerrank.com/certificates/1268f4f884cf"
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // //                 >
// // // // // //                   Link
// // // // // //                 </a>
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </article>

// // // // // //           <article style={{
// // // // // //             marginBottom: 0,
// // // // // //             padding: '1.5rem',
// // // // // //             backgroundColor: 'rgba(144, 103, 198, 0.1)',
// // // // // //             borderRadius: '8px',
// // // // // //             animation: 'fadeInUp 1.1s ease forwards',
// // // // // //             opacity: 0,
// // // // // //             display: 'flex',
// // // // // //             gap: '1.5rem',
// // // // // //             alignItems: 'center',
// // // // // //           }}>
// // // // // //             <FaCertificate size={48} color="#9067C6" />
// // // // // //             <div>
// // // // // //               <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '600' }}>TestDome Certification</h3>
// // // // // //               <p style={{ margin: '0 0 0.3rem 0', fontWeight: '500', color: '#ccc' }}>(Details in CV)</p>
// // // // // //               <p style={{ margin: '0 0 0.3rem 0' }}>
// // // // // //                 Credential ID: <strong>18fcfee2169e449bb9a144aafd68ee1b</strong>
// // // // // //               </p>
// // // // // //               <p style={{ margin: 0 }}>
// // // // // //                 View Certificate:{' '}
// // // // // //                 <a
// // // // // //                   href="https://www.testdome.com/certificates/18fcfee2169e449bb9a144aafd68ee1b"
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   style={{ color: '#9067C6', textDecoration: 'underline' }}
// // // // // //                 >
// // // // // //                   Link
// // // // // //                 </a>
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </article>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style>{`
// // // // // //         @keyframes fadeInUp {
// // // // // //           0% {
// // // // // //             opacity: 0;
// // // // // //             transform: translateY(20px);
// // // // // //           }
// // // // // //           100% {
// // // // // //             opacity: 1;
// // // // // //             transform: translateY(0);
// // // // // //           }
// // // // // //         }

// // // // // //         @media (max-width: 900px) {
// // // // // //           /* Stack flex container vertically on small screens */
// // // // // //           div[style*="display: flex"][style*="align-items: center"][style*="gap: 3rem"] {
// // // // // //             flex-direction: column !important;
// // // // // //             align-items: center !important;
// // // // // //           }
// // // // // //           div[style*="flex: 1 1 400px"] {
// // // // // //             max-width: 100% !important;
// // // // // //           }
// // // // // //           div[style*="flex: 0 0 600px"] {
// // // // // //             max-width: 100% !important;
// // // // // //             margin-bottom: 2rem;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Education;


// // // // // import React, { useEffect } from "react";
// // // // // import { FaGraduationCap, FaCertificate } from "react-icons/fa";
// // // // // import { SiHackerrank } from "react-icons/si";
// // // // // import Lottie from "lottie-react";
// // // // // import Tilt from "react-parallax-tilt";
// // // // // import EducationLottie from '../LottieFiles/Education.json';
// // // // // import CertLottie from '../LottieFiles/Certificate.json';

// // // // // const educationData = [
// // // // //   {
// // // // //     title: "BSc. in Computer Science & Engineering",
// // // // //     institution: "Department of Computer Science & Engineering, Faculty of Science, East West University",
// // // // //     major: "Software Engineering",
// // // // //     cgpa: "3.71 / 4.00",
// // // // //     date: "Jan 2020 - Jan 2024",
// // // // //     details: []
// // // // //   },
// // // // //   {
// // // // //     title: "Higher Secondary Certificate",
// // // // //     institution: "St. Joseph Higher Secondary School",
// // // // //     major: "Science",
// // // // //     gpa: "5.00 / 5.00",
// // // // //     date: "Jul 2016 - Jul 2018",
// // // // //     details: [
// // // // //       "Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @ Scintilla Science Club"
// // // // //     ]
// // // // //   },
// // // // //   {
// // // // //     title: "Secondary School Certificate",
// // // // //     institution: "Monipur High School & College",
// // // // //     major: "Science",
// // // // //     gpa: "5.00 / 5.00",
// // // // //     date: "Jan 2006 - Jun 2016",
// // // // //     details: [
// // // // //       "Activities: Sports Club, CB @ Club de Futbol Avalance"
// // // // //     ]
// // // // //   }
// // // // // ];

// // // // // const certificationData = [
// // // // //   {
// // // // //     title: "SQL Advanced Certification",
// // // // //     org: "HackerRank",
// // // // //     date: "May 2025",
// // // // //     credentialId: "5905cf970f0a",
// // // // //     link: "https://www.hackerrank.com/certificates/5905cf970f0a",
// // // // //     icon: <SiHackerrank size={48} color="#2EC866" />
// // // // //   },
// // // // //   {
// // // // //     title: "SQL Intermediate Certification",
// // // // //     org: "HackerRank",
// // // // //     date: "May 2025",
// // // // //     credentialId: "1268f4f884cf",
// // // // //     link: "https://www.hackerrank.com/certificates/1268f4f884cf",
// // // // //     icon: <SiHackerrank size={48} color="#2EC866" />
// // // // //   },
// // // // //   {
// // // // //     title: "TestDome Certification",
// // // // //     org: "(Details in CV)",
// // // // //     date: "",
// // // // //     credentialId: "18fcfee2169e449bb9a144aafd68ee1b",
// // // // //     link: "https://www.testdome.com/certificates/18fcfee2169e449bb9a144aafd68ee1b",
// // // // //     icon: <FaCertificate size={48} color="#9067C6" />
// // // // //   }
// // // // // ];

// // // // // // Timeline Card Component
// // // // // const TimelineCard = React.forwardRef(({ title, institution, major, cgpa, gpa, date, details, credentialId, link, org, icon }, ref) => (
// // // // //   <div className="timeline-row">
// // // // //     <div className="timeline-rail">
// // // // //       <div className="timeline-dot" />
// // // // //       <div className="timeline-line" />
// // // // //     </div>
// // // // //     <div className="timeline-card exp-card-dark" ref={ref}>
// // // // //       <div className="timeline-title">{title}</div>
// // // // //       {institution && <div className="timeline-company">{institution}</div>}
// // // // //       {major && <div><b>Major:</b> {major}</div>}
// // // // //       {cgpa && <div><b>CGPA:</b> {cgpa}</div>}
// // // // //       {gpa && <div><b>GPA:</b> {gpa}</div>}
// // // // //       {date && <div className="timeline-date">{date}</div>}
// // // // //       {details && details.length > 0 && (
// // // // //         <ul className="timeline-details">
// // // // //           {details.map((d, i) => <li key={i}>{d}</li>)}
// // // // //         </ul>
// // // // //       )}
// // // // //       {credentialId && (
// // // // //         <p>
// // // // //           Credential ID:{" "}
// // // // //           <a href={link} target="_blank" rel="noreferrer" className="timeline-link">{credentialId}</a>
// // // // //         </p>
// // // // //       )}
// // // // //       {link && (
// // // // //         <p>
// // // // //           View Certificate:{" "}
// // // // //           <a href={link} target="_blank" rel="noreferrer" className="timeline-link">Link</a>
// // // // //         </p>
// // // // //       )}
// // // // //       {org && !institution && <div className="timeline-company">{org}</div>}
// // // // //       {icon && <div className="timeline-icon">{icon}</div>}
// // // // //     </div>
// // // // //   </div>
// // // // // ));

// // // // // const SectionHeader = ({ icon, children }) => (
// // // // //   <div className="section-header">
// // // // //     {icon}
// // // // //     <span>{children}</span>
// // // // //   </div>
// // // // // );

// // // // // const Education = () => {
// // // // //   // Adjust timeline line height to be card height - dot radius * 2 - 0.2cm (approx 2px)
// // // // //   useEffect(() => {
// // // // //     function adjustLines() {
// // // // //       const rows = document.querySelectorAll(".timeline-row");
// // // // //       rows.forEach(row => {
// // // // //         const card = row.querySelector(".timeline-card");
// // // // //         const line = row.querySelector(".timeline-line");
// // // // //         const dot = row.querySelector(".timeline-dot");
// // // // //         if (card && line && dot) {
// // // // //           const dotRadius = dot.offsetWidth / 2;
// // // // //           // 0.2cm = approx 7.5px, adjust accordingly if needed
// // // // //           line.style.height = `${card.offsetHeight - dotRadius * 2 - 7.5}px`;
// // // // //         }
// // // // //       });
// // // // //     }
// // // // //     adjustLines();
// // // // //     window.addEventListener("resize", adjustLines);
// // // // //     return () => window.removeEventListener("resize", adjustLines);
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="exp-awards-root">
// // // // //       {/* Education Section */}
// // // // //       <SectionHeader icon={<FaGraduationCap size={30} color="#9067C6" />}>Education</SectionHeader>
// // // // //       <div className="timeline-list">
// // // // //         {educationData.map((edu, i) => (
// // // // //           <TimelineCard
// // // // //             key={edu.title + i}
// // // // //             {...edu}
// // // // //           />
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Education Lottie Animation */}
// // // // //       <div className="lottie-container">
// // // // //         <Tilt>
// // // // //           <Lottie
// // // // //             animationData={EducationLottie}
// // // // //             loop
// // // // //             style={{ width: "100%", maxWidth: "600px", height: "auto" }}
// // // // //           />
// // // // //         </Tilt>
// // // // //       </div>

// // // // //       <div className="section-gap" />

// // // // //       {/* Certifications Section */}
// // // // //       <SectionHeader icon={<FaCertificate size={26} color="#9067C6" />}>Certifications</SectionHeader>
// // // // //       <div className="timeline-list">
// // // // //         {certificationData.map((cert, i) => (
// // // // //           <TimelineCard
// // // // //             key={cert.title + i}
// // // // //             title={cert.title}
// // // // //             org={cert.org}
// // // // //             date={cert.date}
// // // // //             credentialId={cert.credentialId}
// // // // //             link={cert.link}
// // // // //             icon={cert.icon}
// // // // //             details={[]}
// // // // //           />
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Certifications Lottie Animation */}
// // // // //       <div className="lottie-container">
// // // // //         <Tilt>
// // // // //           <Lottie
// // // // //             animationData={CertLottie}
// // // // //             loop
// // // // //             style={{ width: "100%", maxWidth: "600px", height: "auto" }}
// // // // //           />
// // // // //         </Tilt>
// // // // //       </div>

// // // // //       <style>{`
// // // // //         .exp-awards-root {
// // // // //           max-width: 1000px;
// // // // //           margin: 8rem auto 2rem auto;
// // // // //           padding: 0 2.5rem;
// // // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // // //           color: #f0f0f0;
// // // // //         }
// // // // //         .section-header {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           font-size: 2.1rem;
// // // // //           font-weight: 700;
// // // // //           color: #fff;
// // // // //           letter-spacing: 0.5px;
// // // // //           margin-bottom: 4rem;
// // // // //           margin-left: 27px; /* align left edge with timeline dot right edge */
// // // // //           gap: 0.85rem;
// // // // //         }
// // // // //         .timeline-list {
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           gap: 3.4rem;
// // // // //           margin-bottom: 4rem;
// // // // //           margin-left: 27px; /* align with dot */
// // // // //         }
// // // // //         .timeline-row {
// // // // //           display: flex;
// // // // //           flex-direction: row;
// // // // //           align-items: flex-start;
// // // // //           position: relative;
// // // // //         }
// // // // //         .timeline-rail {
// // // // //           position: relative;
// // // // //           width: 54px;
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
// // // // //           margin: 0;
// // // // //           position: relative;
// // // // //           z-index: 2;
// // // // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // // // //         }
// // // // //         .timeline-line {
// // // // //           width: 3px;
// // // // //           min-height: 68px;
// // // // //           background: #fff;
// // // // //           border-radius: 8px;
// // // // //           margin: 0 auto;
// // // // //           margin-top: -2px;
// // // // //           z-index: 1;
// // // // //           transition: height 0.2s;
// // // // //         }
// // // // //         .timeline-row:last-child .timeline-line {
// // // // //           background: #fff;
// // // // //           min-height: 68px;
// // // // //         }
// // // // //         .exp-card-dark {
// // // // //           background: rgba(44, 49, 74, 0.97);
// // // // //           color: #f0f0f0;
// // // // //           border-radius: 13px;
// // // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // // // //           padding: 1.1rem 1.2rem 1rem 1.2rem;
// // // // //           margin-left: 3.7rem;
// // // // //           min-width: 0;
// // // // //           flex: 1;
// // // // //           font-size: 1.08rem;
// // // // //           position: relative;
// // // // //           word-break: break-word;
// // // // //           margin-bottom: 0;
// // // // //           transition: box-shadow 0.18s;
// // // // //           line-height: 1.4;
// // // // //           animation: fadeInUp 0.8s ease forwards;
// // // // //           opacity: 0;
// // // // //         }
// // // // //         .timeline-title {
// // // // //           font-weight: 700;
// // // // //           color: #a084f6;
// // // // //           font-size: 1.14rem;
// // // // //           margin-bottom: 0.35rem;
// // // // //           line-height: 1.3;
// // // // //           letter-spacing: 0.01em;
// // // // //         }
// // // // //         .timeline-company {
// // // // //           color: #bfbde9;
// // // // //           font-weight: 500;
// // // // //           font-size: 1.01rem;
// // // // //           margin-bottom: 0.65rem;
// // // // //           line-height: 1.17;
// // // // //         }
// // // // //         .timeline-date {
// // // // //           font-size: 0.98rem;
// // // // //           color: #bdb4e0;
// // // // //           font-weight: 400;
// // // // //           margin-bottom: 0.65rem;
// // // // //           letter-spacing: .01em;
// // // // //         }
// // // // //         .timeline-details {
// // // // //           margin-top: 0.18rem;
// // // // //           color: #f0f0f0;
// // // // //           font-size: 1rem;
// // // // //           padding-left: 1.1rem;
// // // // //           margin-bottom: 0.5rem;
// // // // //           line-height: 1.5;
// // // // //         }
// // // // //         .timeline-details li {
// // // // //           margin-bottom: 0.3rem;
// // // // //         }
// // // // //         .timeline-link {
// // // // //           color: #9067C6;
// // // // //           text-decoration: underline;
// // // // //         }
// // // // //         .timeline-icon {
// // // // //           margin-top: 1rem;
// // // // //         }
// // // // //         .lottie-container {
// // // // //           max-width: 600px;
// // // // //           margin: 0 auto 4rem auto;
// // // // //         }
// // // // //         .section-gap {
// // // // //           height: 4rem;
// // // // //         }
// // // // //         @keyframes fadeInUp {
// // // // //           0% {
// // // // //             opacity: 0;
// // // // //             transform: translateY(20px);
// // // // //           }
// // // // //           100% {
// // // // //             opacity: 1;
// // // // //             transform: translateY(0);
// // // // //           }
// // // // //         }

// // // // //         /* MOBILE */
// // // // //         @media (max-width: 900px) {
// // // // //           .exp-awards-root {
// // // // //             margin-top: 4rem;
// // // // //             padding: 0 1.5rem;
// // // // //             max-width: 100vw;
// // // // //           }
// // // // //           .section-header {
// // // // //             margin-left: 22px;
// // // // //             font-size: 1.8rem;
// // // // //           }
// // // // //           .timeline-list {
// // // // //             margin-left: 22px;
// // // // //           }
// // // // //           .lottie-container {
// // // // //             margin-bottom: 3rem;
// // // // //           }
// // // // //         }
// // // // //         @media (max-width: 600px) {
// // // // //           .exp-card-dark {
// // // // //             padding: 1rem 1rem 1rem 1.1rem;
// // // // //             font-size: 0.95rem;
// // // // //             border-radius: 10px;
// // // // //             margin-left: 2.5rem;
// // // // //             line-height: 1.3;
// // // // //           }
// // // // //           .section-header {
// // // // //             margin-left: 16px;
// // // // //             font-size: 1.6rem;
// // // // //           }
// // // // //           .timeline-list {
// // // // //             margin-left: 16px;
// // // // //           }
// // // // //           .lottie-container {
// // // // //             margin-bottom: 2rem;
// // // // //           }
// // // // //         }
// // // // //         @media (max-width: 375px) {
// // // // //           .exp-awards-root {
// // // // //             padding: 0 0.5rem;
// // // // //           }
// // // // //           .section-header {
// // // // //             margin-left: 12px;
// // // // //             font-size: 1.4rem;
// // // // //           }
// // // // //           .timeline-list {
// // // // //             margin-left: 12px;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Education;
// // // // import React, { useEffect } from "react";
// // // // import { FaGraduationCap, FaCertificate } from "react-icons/fa";
// // // // import { SiHackerrank } from "react-icons/si";
// // // // import Lottie from "lottie-react";
// // // // import Tilt from "react-parallax-tilt";
// // // // import EducationLottie from '../LottieFiles/Education.json';
// // // // import CertLottie from '../LottieFiles/Certificate.json';

// // // // const educationData = [
// // // //   {
// // // //     title: "BSc. in Computer Science & Engineering",
// // // //     institutionLines: [
// // // //       "Department of Computer Science & Engineering,",
// // // //       "Faculty of Science,",
// // // //       "East West University"
// // // //     ],
// // // //     major: "Software Engineering",
// // // //     cgpa: "3.71 / 4.00",
// // // //     date: "Jan 2020 - Jan 2024",
// // // //     details: []
// // // //   },
// // // //   {
// // // //     title: "Higher Secondary Certificate",
// // // //     institutionLines: ["St. Joseph Higher Secondary School"],
// // // //     major: "Science",
// // // //     gpa: "5.00 / 5.00",
// // // //     date: "Jul 2016 - Jul 2018",
// // // //     details: [
// // // //       "Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @ Scintilla Science Club"
// // // //     ]
// // // //   },
// // // //   {
// // // //     title: "Secondary School Certificate",
// // // //     institutionLines: ["Monipur High School & College"],
// // // //     major: "Science",
// // // //     gpa: "5.00 / 5.00",
// // // //     date: "Jan 2006 - Jun 2016",
// // // //     details: [
// // // //       "Activities: Sports Club, CB @ Club de Futbol Avalance"
// // // //     ]
// // // //   }
// // // // ];

// // // // const certificationData = [
// // // //   {
// // // //     title: "SQL Advanced Certification",
// // // //     org: "HackerRank",
// // // //     date: "May 2025",
// // // //     credentialId: "5905cf970f0a",
// // // //     link: "https://www.hackerrank.com/certificates/5905cf970f0a",
// // // //     icon: <SiHackerrank size={48} color="#2EC866" />
// // // //   },
// // // //   {
// // // //     title: "SQL Intermediate Certification",
// // // //     org: "HackerRank",
// // // //     date: "May 2025",
// // // //     credentialId: "1268f4f884cf",
// // // //     link: "https://www.hackerrank.com/certificates/1268f4f884cf",
// // // //     icon: <SiHackerrank size={48} color="#2EC866" />
// // // //   },
// // // //   {
// // // //     title: "TestDome Certification",
// // // //     org: "(Details in CV)",
// // // //     date: "",
// // // //     credentialId: "18fcfee2169e449bb9a144aafd68ee1b",
// // // //     link: "https://www.testdome.com/certificates/18fcfee2169e449bb9a144aafd68ee1b",
// // // //     icon: <FaCertificate size={48} color="#9067C6" />
// // // //   }
// // // // ];

// // // // const TimelineCard = React.forwardRef(({ title, institutionLines, major, cgpa, gpa, date, details, credentialId, link, org, icon }, ref) => (
// // // //   <div className="timeline-row">
// // // //     <div className="timeline-rail">
// // // //       <div className="timeline-dot" />
// // // //       <div className="timeline-line" />
// // // //     </div>
// // // //     <div className="timeline-card exp-card-dark" ref={ref}>
// // // //       <div className="timeline-title">{title}</div>
// // // //       {institutionLines && institutionLines.map((line, i) => (
// // // //         <div key={i} className="timeline-company">{line}</div>
// // // //       ))}
// // // //       {major && <div><b>Major:</b> {major}</div>}
// // // //       {cgpa && <div><b>CGPA:</b> {cgpa}</div>}
// // // //       {gpa && <div><b>GPA:</b> {gpa}</div>}
// // // //       {date && <div className="timeline-date">{date}</div>}
// // // //       {details && details.length > 0 && (
// // // //         <ul className="timeline-details">
// // // //           {details.map((d, i) => <li key={i}>{d}</li>)}
// // // //         </ul>
// // // //       )}
// // // //       {credentialId && (
// // // //         <p>
// // // //           Credential ID:{" "}
// // // //           <a href={link} target="_blank" rel="noreferrer" className="timeline-link">{credentialId}</a>
// // // //         </p>
// // // //       )}
// // // //       {link && (
// // // //         <p>
// // // //           View Certificate:{" "}
// // // //           <a href={link} target="_blank" rel="noreferrer" className="timeline-link">Link</a>
// // // //         </p>
// // // //       )}
// // // //       {org && !institutionLines && <div className="timeline-company">{org}</div>}
// // // //       {icon && <div className="timeline-icon">{icon}</div>}
// // // //     </div>
// // // //   </div>
// // // // ));

// // // // const SectionHeader = ({ icon, children }) => (
// // // //   <div className="section-header">
// // // //     {icon}
// // // //     <span>{children}</span>
// // // //   </div>
// // // // );

// // // // const Education = () => {
// // // //   useEffect(() => {
// // // //     function adjustLines() {
// // // //       const rows = document.querySelectorAll(".timeline-row");
// // // //       rows.forEach(row => {
// // // //         const card = row.querySelector(".timeline-card");
// // // //         const line = row.querySelector(".timeline-line");
// // // //         const dot = row.querySelector(".timeline-dot");
// // // //         if (card && line && dot) {
// // // //           const dotRadius = dot.offsetWidth / 2;
// // // //           line.style.height = `${card.offsetHeight - dotRadius * 2 - 7.5}px`;
// // // //         }
// // // //       });
// // // //     }
// // // //     adjustLines();
// // // //     window.addEventListener("resize", adjustLines);
// // // //     return () => window.removeEventListener("resize", adjustLines);
// // // //   }, []);

// // // //   return (
// // // //     <div className="exp-awards-root">
// // // //       {/* Education Section */}
// // // //       <SectionHeader icon={<FaGraduationCap size={30} color="#9067C6" />}>Education</SectionHeader>
// // // //       <div className="timeline-list">
// // // //         {educationData.map((edu, i) => (
// // // //           <TimelineCard key={edu.title + i} {...edu} />
// // // //         ))}
// // // //       </div>

// // // //       {/* Education Lottie Animation */}
// // // //       <div className="lottie-container">
// // // //         <Tilt>
// // // //           <Lottie
// // // //             animationData={EducationLottie}
// // // //             loop
// // // //             style={{ width: "100%", maxWidth: "360px", height: "auto" }}
// // // //           />
// // // //         </Tilt>
// // // //       </div>

// // // //       <div className="section-gap" />

// // // //       {/* Certifications Section */}
// // // //       <SectionHeader icon={<FaCertificate size={26} color="#9067C6" />}>Certifications</SectionHeader>
// // // //       <div className="timeline-list">
// // // //         {certificationData.map((cert, i) => (
// // // //           <TimelineCard
// // // //             key={cert.title + i}
// // // //             title={cert.title}
// // // //             org={cert.org}
// // // //             date={cert.date}
// // // //             credentialId={cert.credentialId}
// // // //             link={cert.link}
// // // //             icon={cert.icon}
// // // //             details={[]}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       {/* Certifications Lottie Animation */}
// // // //       <div className="lottie-container">
// // // //         <Tilt>
// // // //           <Lottie
// // // //             animationData={CertLottie}
// // // //             loop
// // // //             style={{ width: "100%", maxWidth: "360px", height: "auto" }}
// // // //           />
// // // //         </Tilt>
// // // //       </div>

// // // //       <style>{`
// // // //         .exp-awards-root {
// // // //           max-width: 1000px;
// // // //           margin: 8rem auto 2rem auto;
// // // //           padding: 0 2.5rem;
// // // //           font-family: 'Raleway', 'Poppins', sans-serif;
// // // //           color: #f0f0f0;
// // // //         }
// // // //         .section-header {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           font-size: 2.1rem;
// // // //           font-weight: 700;
// // // //           color: #fff;
// // // //           letter-spacing: 0.5px;
// // // //           margin-bottom: 4rem;
// // // //           margin-left: 27px;
// // // //           gap: 0.85rem;
// // // //         }
// // // //         .timeline-list {
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           gap: 3.4rem;
// // // //           margin-bottom: 4rem;
// // // //           margin-left: 27px;
// // // //         }
// // // //         .timeline-row {
// // // //           display: flex;
// // // //           flex-direction: row;
// // // //           align-items: flex-start;
// // // //           position: relative;
// // // //         }
// // // //         .timeline-rail {
// // // //           position: relative;
// // // //           width: 54px;
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
// // // //           margin: 0;
// // // //           position: relative;
// // // //           z-index: 2;
// // // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // // //         }
// // // //         .timeline-line {
// // // //           width: 3px;
// // // //           min-height: 68px;
// // // //           background: #fff;
// // // //           border-radius: 8px;
// // // //           margin: 0 auto;
// // // //           margin-top: -2px;
// // // //           z-index: 1;
// // // //           transition: height 0.2s;
// // // //         }
// // // //         .timeline-row:last-child .timeline-line {
// // // //           background: #fff;
// // // //           min-height: 68px;
// // // //         }
// // // //         .exp-card-dark {
// // // //           background: rgba(44, 49, 74, 0.97);
// // // //           color: #f0f0f0;
// // // //           border-radius: 13px;
// // // //           box-shadow: 0 6px 20px 0 rgba(80,60,180,0.18);
// // // //           padding: 1.1rem 1.2rem 1rem 1.2rem;
// // // //           margin-left: 3.7rem;
// // // //           min-width: 0;
// // // //           flex: 1;
// // // //           font-size: 1.08rem;
// // // //           position: relative;
// // // //           word-break: break-word;
// // // //           margin-bottom: 0;
// // // //           transition: box-shadow 0.18s;
// // // //           line-height: 1.4;
// // // //           animation: fadeInUp 0.8s ease forwards;
// // // //           opacity: 0;
// // // //         }
// // // //         .timeline-title {
// // // //           font-weight: 700;
// // // //           color: #a084f6;
// // // //           font-size: 1.14rem;
// // // //           margin-bottom: 0.35rem;
// // // //           line-height: 1.3;
// // // //           letter-spacing: 0.01em;
// // // //         }
// // // //         .timeline-company {
// // // //           color: #bfbde9;
// // // //           font-weight: 500;
// // // //           font-size: 1.01rem;
// // // //           margin-bottom: 0.35rem;
// // // //           line-height: 1.17;
// // // //         }
// // // //         .timeline-date {
// // // //           font-size: 0.98rem;
// // // //           color: #bdb4e0;
// // // //           font-weight: 400;
// // // //           margin-bottom: 0.65rem;
// // // //           letter-spacing: .01em;
// // // //         }
// // // //         .timeline-details {
// // // //           margin-top: 0.18rem;
// // // //           color: #f0f0f0;
// // // //           font-size: 1rem;
// // // //           padding-left: 1.1rem;
// // // //           margin-bottom: 0.5rem;
// // // //           line-height: 1.5;
// // // //         }
// // // //         .timeline-details li {
// // // //           margin-bottom: 0.3rem;
// // // //         }
// // // //         .timeline-link {
// // // //           color: #9067C6;
// // // //           text-decoration: underline;
// // // //         }
// // // //         .timeline-icon {
// // // //           margin-top: 1rem;
// // // //         }
// // // //         .lottie-container {
// // // //           max-width: 360px;
// // // //           margin: 0 auto 4rem auto;
// // // //         }
// // // //         .section-gap {
// // // //           height: 4rem;
// // // //         }
// // // //         @keyframes fadeInUp {
// // // //           0% {
// // // //             opacity: 0;
// // // //             transform: translateY(20px);
// // // //           }
// // // //           100% {
// // // //             opacity: 1;
// // // //             transform: translateY(0);
// // // //           }
// // // //         }
// // // //         /* MOBILE */
// // // //         @media (max-width: 900px) {
// // // //           .exp-awards-root {
// // // //             margin-top: 4rem;
// // // //             padding: 0 1.5rem;
// // // //             max-width: 100vw;
// // // //           }
// // // //           .section-header {
// // // //             margin-left: 22px;
// // // //             font-size: 1.8rem;
// // // //           }
// // // //           .timeline-list {
// // // //             margin-left: 22px;
// // // //           }
// // // //           .lottie-container {
// // // //             margin-bottom: 3rem;
// // // //           }
// // // //         }
// // // //         @media (max-width: 600px) {
// // // //           .exp-card-dark {
// // // //             padding: 1rem 1rem 1rem 1.1rem;
// // // //             font-size: 0.95rem;
// // // //             border-radius: 10px;
// // // //             margin-left: 2.5rem;
// // // //             line-height: 1.3;
// // // //           }
// // // //           .section-header {
// // // //             margin-left: 16px;
// // // //             font-size: 1.6rem;
// // // //           }
// // // //           .timeline-list {
// // // //             margin-left: 16px;
// // // //           }
// // // //           .lottie-container {
// // // //             margin-bottom: 2rem;
// // // //           }
// // // //         }
// // // //         @media (max-width: 375px) {
// // // //           .exp-awards-root {
// // // //             padding: 0 0.5rem;
// // // //           }
// // // //           .section-header {
// // // //             margin-left: 12px;
// // // //             font-size: 1.4rem;
// // // //           }
// // // //           .timeline-list {
// // // //             margin-left: 12px;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Education;
// // // import React, { useEffect } from "react";
// // // import { FaGraduationCap, FaCertificate } from "react-icons/fa";

// // // const education = [
// // //   {
// // //     title: "BSc. in Computer Science & Engineering",
// // //     companyLines: [
// // //       "Department of Computer Science & Engineering,",
// // //       "Faculty of Science,",
// // //       "East West University"
// // //     ],
// // //     date: "Jan 2020 – Jan 2024",
// // //     details: [],
// // //     stack: (
// // //       <>
// // //         <b>Major:</b> Software Engineering<br />
// // //         <b>CGPA:</b> 3.71 / 4.00
// // //       </>
// // //     )
// // //   },
// // //   {
// // //     title: "Higher Secondary Certificate",
// // //     companyLines: ["St. Joseph Higher Secondary School"],
// // //     date: "Jul 2016 – Jul 2018",
// // //     details: [
// // //       "Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @ Scintilla Science Club"
// // //     ],
// // //     stack: (
// // //       <>
// // //         <b>Major:</b> Science<br />
// // //         <b>GPA:</b> 5.00 / 5.00
// // //       </>
// // //     )
// // //   },
// // //   {
// // //     title: "Secondary School Certificate",
// // //     companyLines: ["Monipur High School & College"],
// // //     date: "Jan 2006 – Jun 2016",
// // //     details: [
// // //       "Activities: Sports Club, CB @ Club de Futbol Avalance"
// // //     ],
// // //     stack: (
// // //       <>
// // //         <b>Major:</b> Science<br />
// // //         <b>GPA:</b> 5.00 / 5.00
// // //       </>
// // //     )
// // //   }
// // // ];

// // // const certifications = [
// // //   {
// // //     title: "SQL Advanced Certification",
// // //     companyLines: ["HackerRank"],
// // //     date: "May 2025",
// // //     details: [],
// // //     stack: (
// // //       <>
// // //         Credential ID:{" "}
// // //         <a
// // //           href="https://www.hackerrank.com/certificates/5905cf970f0a"
// // //           target="_blank"
// // //           rel="noreferrer"
// // //           style={{ color: "#9067C6", textDecoration: "underline" }}
// // //         >
// // //           5905cf970f0a
// // //         </a>
// // //         <br />
// // //         View Certificate:{" "}
// // //         <a
// // //           href="https://www.hackerrank.com/certificates/5905cf970f0a"
// // //           target="_blank"
// // //           rel="noreferrer"
// // //           style={{ color: "#9067C6", textDecoration: "underline" }}
// // //         >
// // //           Link
// // //         </a>
// // //       </>
// // //     )
// // //   },
// // //   {
// // //     title: "SQL Intermediate Certification",
// // //     companyLines: ["HackerRank"],
// // //     date: "May 2025",
// // //     details: [],
// // //     stack: (
// // //       <>
// // //         Credential ID:{" "}
// // //         <a
// // //           href="https://www.hackerrank.com/certificates/1268f4f884cf"
// // //           target="_blank"
// // //           rel="noreferrer"
// // //           style={{ color: "#9067C6", textDecoration: "underline" }}
// // //         >
// // //           1268f4f884cf
// // //         </a>
// // //         <br />
// // //         View Certificate:{" "}
// // //         <a
// // //           href="https://www.hackerrank.com/certificates/1268f4f884cf"
// // //           target="_blank"
// // //           rel="noreferrer"
// // //           style={{ color: "#9067C6", textDecoration: "underline" }}
// // //         >
// // //           Link
// // //         </a>
// // //       </>
// // //     )
// // //   },
// // //   {
// // //     title: "TestDome Certification",
// // //     companyLines: ["(Details in CV)"],
// // //     date: "",
// // //     details: [],
// // //     stack: (
// // //       <>
// // //         Credential ID: <strong>18fcfee2169e449bb9a144aafd68ee1b</strong>
// // //         <br />
// // //         View Certificate:{" "}
// // //         <a
// // //           href="https://www.testdome.com/certificates/18fcfee2169e449bb9a144aafd68ee1b"
// // //           target="_blank"
// // //           rel="noreferrer"
// // //           style={{ color: "#9067C6", textDecoration: "underline" }}
// // //         >
// // //           Link
// // //         </a>
// // //       </>
// // //     )
// // //   }
// // // ];

// // // const TimelineCard = React.forwardRef(({ title, companyLines, date, details, stack }, ref) => (
// // //   <div className="timeline-row">
// // //     <div className="timeline-rail">
// // //       <div className="timeline-dot" />
// // //       <div className="timeline-line" />
// // //     </div>
// // //     <div className="timeline-card exp-card-dark" ref={ref}>
// // //       <div className="timeline-title">{title}</div>
// // //       {companyLines.map((line, i) => (
// // //         <div key={i} className="timeline-company">{line}</div>
// // //       ))}
// // //       {date && <div className="timeline-date">{date}</div>}
// // //       {details.length > 0 && (
// // //         <ul className="timeline-details">
// // //           {details.map((d, i) => (
// // //             <li key={i}>{d}</li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //       {stack && <div className="timeline-stack">{stack}</div>}
// // //     </div>
// // //   </div>
// // // ));

// // // const SectionHeader = ({ icon, children }) => (
// // //   <div className="section-header">
// // //     {icon}
// // //     <span>{children}</span>
// // //   </div>
// // // );

// // // const Education = () => {
// // //   useEffect(() => {
// // //     function adjustLines() {
// // //       const rows = document.querySelectorAll(".timeline-row");
// // //       rows.forEach((row) => {
// // //         const card = row.querySelector(".timeline-card");
// // //         const line = row.querySelector(".timeline-line");
// // //         const dotRadius = 9.5; // half dot size (19px / 2)
// // //         const cmToPx = 37.8;
// // //         const extraGapPx = 0.2 * cmToPx;
// // //         if (card && line) {
// // //           const lineHeight = card.offsetHeight - dotRadius * 2 - extraGapPx;
// // //           line.style.height = `${lineHeight}px`;
// // //           line.style.background = "#fff";
// // //           line.style.width = "2px";
// // //         }
// // //       });
// // //     }
// // //     adjustLines();
// // //     window.addEventListener("resize", adjustLines);
// // //     return () => window.removeEventListener("resize", adjustLines);
// // //   }, []);

// // //   return (
// // //     <div className="exp-awards-root">
// // //       {/* Education Section */}
// // //       <SectionHeader icon={<FaGraduationCap size={30} color="#9067C6" />}>
// // //         Education
// // //       </SectionHeader>
// // //       <div className="timeline-list">
// // //         {education.map((edu, i) => (
// // //           <TimelineCard key={edu.title + i} {...edu} />
// // //         ))}
// // //       </div>

// // //       {/* Certifications Section */}
// // //       <SectionHeader icon={<FaCertificate size={26} color="#9067C6" />}>
// // //         Certifications
// // //       </SectionHeader>
// // //       <div className="timeline-list">
// // //         {certifications.map((cert, i) => (
// // //           <TimelineCard key={cert.title + i} {...cert} />
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
// // //           margin-top: 12rem;
// // //           margin-bottom: 4rem;
// // //           gap: 0.85rem;
// // //           padding-left: 56px; /* align to right edge of dot */
// // //         }
// // //         @media (max-width: 650px) {
// // //           .section-header {
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
// // //           margin-bottom: 0;
// // //           position: relative;
// // //           z-index: 2;
// // //           box-shadow: 0 0 0 7px rgba(144,103,198,0.09);
// // //         }
// // //         .timeline-line {
// // //           width: 2px;
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
// // //             padding-left: 17px;
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

// // // export default Education;
// // import React, { useEffect } from "react";
// // import { FaGraduationCap, FaCertificate } from "react-icons/fa";

// // const education = [
// //   {
// //     title: "BSc. in Computer Science & Engineering",
// //     companyLines: [
// //       "Department of Computer Science & Engineering,",
// //       "Faculty of Science,",
// //       "East West University"
// //     ],
// //     date: "Jan 2020 – Jan 2024",
// //     details: [],
// //     stack: (
// //       <>
// //         <b>Major:</b> Software Engineering<br />
// //         <b>CGPA:</b> 3.71 / 4.00
// //       </>
// //     )
// //   },
// //   {
// //     title: "Higher Secondary Certificate",
// //     companyLines: ["St. Joseph Higher Secondary School"],
// //     date: "Jul 2016 – Jul 2018",
// //     details: [
// //       "Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @ Scintilla Science Club"
// //     ],
// //     stack: (
// //       <>
// //         <b>Major:</b> Science<br />
// //         <b>GPA:</b> 5.00 / 5.00
// //       </>
// //     )
// //   },
// //   {
// //     title: "Secondary School Certificate",
// //     companyLines: ["Monipur High School & College"],
// //     date: "Jan 2006 – Jun 2016",
// //     details: [
// //       "Activities: Sports Club, CB @ Club de Futbol Avalance"
// //     ],
// //     stack: (
// //       <>
// //         <b>Major:</b> Science<br />
// //         <b>GPA:</b> 5.00 / 5.00
// //       </>
// //     )
// //   }
// // ];

// // const certifications = [
// //   {
// //     title: "SQL Advanced Certification",
// //     companyLines: ["HackerRank"],
// //     date: "May 2025",
// //     details: [],
// //     stack: (
// //       <>
// //         Credential ID:{" "}
// //         <a
// //           href="https://www.hackerrank.com/certificates/5905cf970f0a"
// //           target="_blank"
// //           rel="noreferrer"
// //           style={{ color: "#9067C6", textDecoration: "underline" }}
// //         >
// //           5905cf970f0a
// //         </a>
// //         <br />
// //         View Certificate:{" "}
// //         <a
// //           href="https://www.hackerrank.com/certificates/5905cf970f0a"
// //           target="_blank"
// //           rel="noreferrer"
// //           style={{ color: "#9067C6", textDecoration: "underline" }}
// //         >
// //           Link
// //         </a>
// //       </>
// //     ),
// //     logo: "src\images\HackerRank.png"
// //   },
// //   {
// //     title: "SQL Intermediate Certification",
// //     companyLines: ["HackerRank"],
// //     date: "May 2025",
// //     details: [],
// //     stack: (
// //       <>
// //         Credential ID:{" "}
// //         <a
// //           href="https://www.hackerrank.com/certificates/1268f4f884cf"
// //           target="_blank"
// //           rel="noreferrer"
// //           style={{ color: "#9067C6", textDecoration: "underline" }}
// //         >
// //           1268f4f884cf
// //         </a>
// //         <br />
// //         View Certificate:{" "}
// //         <a
// //           href="https://www.hackerrank.com/certificates/1268f4f884cf"
// //           target="_blank"
// //           rel="noreferrer"
// //           style={{ color: "#9067C6", textDecoration: "underline" }}
// //         >
// //           Link
// //         </a>
// //       </>
// //     ),
// //     logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/HackerRank_Logo.png"
// //   },
// //   {
// //     title: "TestDome Certification",
// //     companyLines: ["(Details in CV)"],
// //     date: "",
// //     details: [],
// //     stack: (
// //       <>
// //         Credential ID: <strong>18fcfee2169e449bb9a144aafd68ee1b</strong>
// //         <br />
// //         View Certificate:{" "}
// //         <a
// //           href="https://www.testdome.com/certificates/18fcfee2169e449bb9a144aafd68ee1b"
// //           target="_blank"
// //           rel="noreferrer"
// //           style={{ color: "#9067C6", textDecoration: "underline" }}
// //         >
// //           Link
// //         </a>
// //       </>
// //     ),
// //     logo: "https://cdn.testdome.com/static/assets/logos/testdome.svg"
// //   }
// // ];

// // const TimelineCard = React.forwardRef(({ title, companyLines, date, details, stack, logo }, ref) => (
// //   <div className="timeline-row">
// //     <div className="timeline-rail">
// //       <div className="timeline-dot" />
// //       <div className="timeline-line" />
// //     </div>
// //     <div className="timeline-card exp-card-dark" ref={ref}>
// //       <div className="timeline-content">
// //         <div>
// //           <div className="timeline-title">{title}</div>
// //           {companyLines.map((line, i) => (
// //             <div key={i} className="timeline-company">{line}</div>
// //           ))}
// //           {date && <div className="timeline-date">{date}</div>}
// //           {details.length > 0 && (
// //             <ul className="timeline-details">
// //               {details.map((d, i) => (
// //                 <li key={i}>{d}</li>
// //               ))}
// //             </ul>
// //           )}
// //           {stack && <div className="timeline-stack">{stack}</div>}
// //         </div>
// //         {logo && (
// //           <div className="timeline-logo-container">
// //             <img src={logo} alt={`${title} logo`} className="timeline-logo" />
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   </div>
// // ));

// // const SectionHeader = ({ icon, children }) => (
// //   <div className="section-header">
// //     {icon}
// //     <span>{children}</span>
// //   </div>
// // );

// // const Education = () => {
// //   useEffect(() => {
// //     function adjustLines() {
// //       const rows = document.querySelectorAll(".timeline-row");
// //       rows.forEach((row) => {
// //         const card = row.querySelector(".timeline-card");
// //         const line = row.querySelector(".timeline-line");
// //         const dotRadius = 9.5; // half dot size (19px / 2)
// //         const cmToPx = 37.8;
// //         const extraGapPx = 0.2 * cmToPx;
// //         if (card && line) {
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
// //       {/* Education Section */}
// //       <SectionHeader icon={<FaGraduationCap size={30} color="#9067C6" />}>
// //         Education
// //       </SectionHeader>
// //       <div className="timeline-list">
// //         {education.map((edu, i) => (
// //           <TimelineCard key={edu.title + i} {...edu} />
// //         ))}
// //       </div>

// //       {/* Certifications Section */}
// //       <SectionHeader icon={<FaCertificate size={26} color="#9067C6" />}>
// //         Certifications
// //       </SectionHeader>
// //       <div className="timeline-list">
// //         {certifications.map((cert, i) => (
// //           <TimelineCard key={cert.title + i} {...cert} />
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
// //           padding-left: 56px;
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
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //         }
// //         .timeline-content {
// //           display: flex;
// //           justify-content: space-between;
// //           align-items: center;
// //           width: 100%;
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
// //         .timeline-logo-container {
// //           flex-shrink: 0;
// //           margin-left: 1rem;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //         }
// //         .timeline-logo {
// //           height: 40px;
// //           width: auto;
// //           object-fit: contain;
// //           filter: brightness(0) invert(1); /* white logos on dark background */
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
// //             flex-direction: column;
// //             align-items: flex-start;
// //           }
// //           .timeline-logo-container {
// //             margin-left: 0;
// //             margin-top: 0.6rem;
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

// // export default Education;
// import React, { useEffect } from "react";
// import { FaGraduationCap, FaCertificate } from "react-icons/fa";

// const education = [
//   {
//     title: "BSc. in Computer Science & Engineering",
//     companyLines: [
//       "Department of Computer Science & Engineering,",
//       "Faculty of Science,",
//       "East West University"
//     ],
//     date: "Jan 2020 – Jan 2024",
//     details: [],
//     stack: (
//       <>
//         <b>Major:</b> Software Engineering<br />
//         <b>CGPA:</b> 3.71 / 4.00
//       </>
//     )
//   },
//   {
//     title: "Higher Secondary Certificate",
//     companyLines: ["St. Joseph Higher Secondary School"],
//     date: "Jul 2016 – Jul 2018",
//     details: [
//       "Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @ Scintilla Science Club"
//     ],
//     stack: (
//       <>
//         <b>Major:</b> Science<br />
//         <b>GPA:</b> 5.00 / 5.00
//       </>
//     )
//   },
//   {
//     title: "Secondary School Certificate",
//     companyLines: ["Monipur High School & College"],
//     date: "Jan 2006 – Jun 2016",
//     details: [
//       "Activities: Sports Club, CB @ Club de Futbol Avalance"
//     ],
//     stack: (
//       <>
//         <b>Major:</b> Science<br />
//         <b>GPA:</b> 5.00 / 5.00
//       </>
//     )
//   }
// ];

// const certifications = [
//   {
//     title: "SQL Advanced Certification",
//     companyLines: ["HackerRank"],
//     date: "May 2025",
//     details: [],
//     stack: (
//       <>
//         Credential ID:{" "}
//         <a
//           href="https://www.hackerrank.com/certificates/5905cf970f0a"
//           target="_blank"
//           rel="noreferrer"
//           style={{ color: "#9067C6", textDecoration: "underline" }}
//         >
//           5905cf970f0a
//         </a>
//         <br />
//         View Certificate:{" "}
//         <a
//           href="https://www.hackerrank.com/certificates/5905cf970f0a"
//           target="_blank"
//           rel="noreferrer"
//           style={{ color: "#9067C6", textDecoration: "underline" }}
//         >
//           Link
//         </a>
//       </>
//     ),
//     logo: require("../images/HackerRank.png") // Use require to load local image
//   },
//   {
//     title: "SQL Intermediate Certification",
//     companyLines: ["HackerRank"],
//     date: "May 2025",
//     details: [],
//     stack: (
//       <>
//         Credential ID:{" "}
//         <a
//           href="https://www.hackerrank.com/certificates/1268f4f884cf"
//           target="_blank"
//           rel="noreferrer"
//           style={{ color: "#9067C6", textDecoration: "underline" }}
//         >
//           1268f4f884cf
//         </a>
//         <br />
//         View Certificate:{" "}
//         <a
//           href="https://www.hackerrank.com/certificates/1268f4f884cf"
//           target="_blank"
//           rel="noreferrer"
//           style={{ color: "#9067C6", textDecoration: "underline" }}
//         >
//           Link
//         </a>
//       </>
//     ),
//     logo: require("../images/HackerRank.png")
//   },
//   {
//     title: "TestDome Certification",
//     companyLines: ["(Details in CV)"],
//     date: "",
//     details: [],
//     stack: (
//       <>
//         Credential ID: <strong>18fcfee2169e449bb9a144aafd68ee1b</strong>
//         <br />
//         View Certificate:{" "}
//         <a
//           href="https://www.testdome.com/certificates/18fcfee2169e449bb9a144aafd68ee1b"
//           target="_blank"
//           rel="noreferrer"
//           style={{ color: "#9067C6", textDecoration: "underline" }}
//         >
//           Link
//         </a>
//       </>
//     ),
//     logo: require("../images/TestDome.png")
//   }
// ];

// const TimelineCard = React.forwardRef(({ title, companyLines, date, details, stack, logo }, ref) => (
//   <div className="timeline-row">
//     <div className="timeline-rail">
//       <div className="timeline-dot" />
//       <div className="timeline-line" />
//     </div>
//     <div className="timeline-card exp-card-dark" ref={ref}>
//       <div className="timeline-content">
//         <div>
//           <div className="timeline-title">{title}</div>
//           {companyLines.map((line, i) => (
//             <div key={i} className="timeline-company">{line}</div>
//           ))}
//           {date && <div className="timeline-date">{date}</div>}
//           {details.length > 0 && (
//             <ul className="timeline-details">
//               {details.map((d, i) => (
//                 <li key={i}>{d}</li>
//               ))}
//             </ul>
//           )}
//           {stack && <div className="timeline-stack">{stack}</div>}
//         </div>
//         {logo && (
//           <div className="timeline-logo-container">
//             <img src={logo} alt={`${title} logo`} className="timeline-logo" />
//           </div>
//         )}
//       </div>
//     </div>
//   </div>
// ));

// const SectionHeader = ({ icon, children }) => (
//   <div className="section-header">
//     {icon}
//     <span>{children}</span>
//   </div>
// );

// const Education = () => {
//   useEffect(() => {
//     function adjustLines() {
//       const rows = document.querySelectorAll(".timeline-row");
//       rows.forEach((row) => {
//         const card = row.querySelector(".timeline-card");
//         const line = row.querySelector(".timeline-line");
//         const dotRadius = 9.5; // half dot size (19px / 2)
//         const cmToPx = 37.8;
//         const extraGapPx = 0.2 * cmToPx;
//         if (card && line) {
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
//       {/* Education Section */}
//       <SectionHeader icon={<FaGraduationCap size={30} color="#9067C6" />}>
//         Education
//       </SectionHeader>
//       <div className="timeline-list">
//         {education.map((edu, i) => (
//           <TimelineCard key={edu.title + i} {...edu} />
//         ))}
//       </div>

//       {/* Certifications Section */}
//       <SectionHeader icon={<FaCertificate size={26} color="#9067C6" />}>
//         Certifications
//       </SectionHeader>
//       <div className="timeline-list">
//         {certifications.map((cert, i) => (
//           <TimelineCard key={cert.title + i} {...cert} />
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
//           font-size: 2.5rem;
//           font-weight: 700;
//           color: #fff;
//           letter-spacing: 0.5px;
//           margin-top: 12rem;
//           margin-bottom: 4rem;
//           gap: 0.85rem;
//           padding-left: 56px;
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
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }
//         .timeline-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           width: 100%;
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
//         .timeline-logo-container {
//           flex-shrink: 0;
//           margin-left: 1rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .timeline-logo {
//           height: 40px;
//           width: auto;
//           object-fit: contain;
//           /* filter: brightness(0) invert(1);  Disabled filter to show logos correctly */
//         }
//         @media (max-width: 500px) {
//           .exp-awards-root {
//             padding: 0 0.7rem;
//           }
//           .section-header {
//             font-size: 1.8rem;
//             gap: 0.4rem;
//             padding-left: 17px;
//           }
//           .exp-card-dark {
//             margin-left: 1.5rem;
//             padding: 1rem 0.7rem 0.7rem 0.7rem;
//             font-size: 0.9rem;
//             flex-direction: column;
//             align-items: flex-start;
//           }
//           .timeline-logo-container {
//             margin-left: 0;
//             margin-top: 0.6rem;
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

// export default Education;
import React, { useEffect } from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const education = [
  {
    title: "BSc. in Computer Science & Engineering",
    companyLines: [
      "Department of Computer Science & Engineering,",
      "Faculty of Science,",
      "East West University"
    ],
    date: "Jan 2020 – Jan 2024",
    details: [],
    stack: (
      <>
        <b>Major:</b> Software Engineering<br />
        <b>CGPA:</b> 3.71 / 4.00
      </>
    )
  },
  {
    title: "Higher Secondary Certificate",
    companyLines: ["St. Joseph Higher Secondary School"],
    date: "Jul 2016 – Jul 2018",
    details: [
      "Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @ Scintilla Science Club"
    ],
    stack: (
      <>
        <b>Major:</b> Science<br />
        <b>GPA:</b> 5.00 / 5.00
      </>
    )
  },
  {
    title: "Secondary School Certificate",
    companyLines: ["Monipur High School & College"],
    date: "Jan 2006 – Jun 2016",
    details: [
      "Activities: Sports Club, CB @ Club de Futbol Avalance"
    ],
    stack: (
      <>
        <b>Major:</b> Science<br />
        <b>GPA:</b> 5.00 / 5.00
      </>
    )
  }
];

const certifications = [
  {
    title: "SQL Advanced Certification",
    companyLines: ["HackerRank"],
    date: "May 2025",
    details: [],
    stack: (
      <>
        Credential ID:{" "}
        <a
          href="https://www.hackerrank.com/certificates/5905cf970f0a"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#9067C6", textDecoration: "underline" }}
        >
          5905cf970f0a
        </a>
        <br />
        View Certificate:{" "}
        <a
          href="https://www.hackerrank.com/certificates/5905cf970f0a"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#9067C6", textDecoration: "underline" }}
        >
          Link
        </a>
      </>
    ),
    logo: require("../images/HackerRank.png")
  },
  {
    title: "SQL Intermediate Certification",
    companyLines: ["HackerRank"],
    date: "May 2025",
    details: [],
    stack: (
      <>
        Credential ID:{" "}
        <a
          href="https://www.hackerrank.com/certificates/1268f4f884cf"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#9067C6", textDecoration: "underline" }}
        >
          1268f4f884cf
        </a>
        <br />
        View Certificate:{" "}
        <a
          href="https://www.hackerrank.com/certificates/1268f4f884cf"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#9067C6", textDecoration: "underline" }}
        >
          Link
        </a>
      </>
    ),
    logo: require("../images/HackerRank.png")
  },
  {
    title: "TestDome Certification",
    companyLines: ["(Details in CV)"],
    date: "",
    details: [],
    stack: (
      <>
        Credential ID: <strong>18fcfee2169e449bb9a144aafd68ee1b</strong>
        <br />
        View Certificate:{" "}
        <a
          href="https://www.testdome.com/certificates/18fcfee2169e449bb9a144aafd68ee1b"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#9067C6", textDecoration: "underline" }}
        >
          Link
        </a>
      </>
    ),
    logo: require("../images/TestDome.png")
  }
];

const TimelineCard = React.forwardRef(({ title, companyLines, date, details, stack, logo }, ref) => (
  <div className="timeline-row">
    <div className="timeline-rail">
      <div className="timeline-dot" />
      <div className="timeline-line" />
    </div>
    <div className="timeline-card exp-card-dark" ref={ref}>
      <div className="timeline-content">
        <div>
          <div className="timeline-title">{title}</div>
          {companyLines.map((line, i) => (
            <div key={i} className="timeline-company">{line}</div>
          ))}
          {date && <div className="timeline-date">{date}</div>}
          {details.length > 0 && (
            <ul className="timeline-details">
              {details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
          {stack && <div className="timeline-stack">{stack}</div>}
        </div>
        {logo && (
          <div className="timeline-logo-container">
            <img src={logo} alt={`${title} logo`} className="timeline-logo" />
          </div>
        )}
      </div>
    </div>
  </div>
));

const SectionHeader = ({ icon, children }) => (
  <div className="section-header">
    {icon}
    <span>{children}</span>
  </div>
);

const Education = () => {
  useEffect(() => {
    function adjustLines() {
      const rows = document.querySelectorAll(".timeline-row");
      rows.forEach((row) => {
        const card = row.querySelector(".timeline-card");
        const line = row.querySelector(".timeline-line");
        const dotRadius = 9.5; // half dot size (19px / 2)
        const cmToPx = 37.8;
        const extraGapPx = 0.2 * cmToPx;
        if (card && line) {
          const lineHeight = card.offsetHeight - dotRadius * 2 - extraGapPx;
          line.style.height = `${lineHeight}px`;
          line.style.background = "#fff";
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
      {/* Education Section */}
      <SectionHeader icon={<FaGraduationCap size={30} color="#9067C6" />}>
        Education
      </SectionHeader>
      <div className="timeline-list">
        {education.map((edu, i) => (
          <TimelineCard key={edu.title + i} {...edu} />
        ))}
      </div>

      {/* Certifications Section */}
      <SectionHeader icon={<FaCertificate size={26} color="#9067C6" />}>
        Certifications
      </SectionHeader>
      <div className="timeline-list">
        {certifications.map((cert, i) => (
          <TimelineCard key={cert.title + i} {...cert} />
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
          background: #fff;
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
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .timeline-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
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
        .timeline-logo-container {
          flex-shrink: 0;
          margin-left: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .timeline-logo {
          height: 40px;
          width: auto;
          object-fit: contain;
          /* filter: brightness(0) invert(1);  Disabled filter to show logos correctly */
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
            flex-direction: column;
            align-items: flex-start;
          }
          .timeline-logo-container {
            margin-left: 0;
            margin-top: 0.6rem;
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

export default Education;
