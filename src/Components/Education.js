// import React from 'react';
// import { SiHackerrank } from "react-icons/si";
// import { FaCertificate, FaGraduationCap } from "react-icons/fa";
// import Lottie from "lottie-react";
// import Tilt from "react-parallax-tilt";
// import EducationLottie from '../LottieFiles/Education.json';
// import CertLottie from '../LottieFiles/Certificate.json';

// const Education = () => {
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
//       {/* Spacer */}
//       <div style={{ height: '8rem' }}></div>
      
//       {/* Education title with icon on left, centered */}
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', marginBottom: '2rem', gap: '1.2rem' }}>
//         <FaGraduationCap size={40} color="#9067C6" />
//         <h1
//           style={{
//             fontSize: '2.5rem',
//             color: '#fff',
//             fontWeight: 500,
//             margin: 0,
//             lineHeight: 1.2,
//             letterSpacing: "0.5px"
//           }}
//         >
//           Education
//         </h1>
//       </div>

//       <div style={{ height: '4rem' }}></div>
//       {/* Education Section with Animation on Right */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '3rem',
//         marginBottom: '4rem'
//       }}>
//         {/* Education Info */}
//         <div style={{ flex: 1 }}>
//           {/* ... (articles unchanged) ... */}
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
//             <h2
//               style={{
//                 fontSize: '1.5rem',
//                 color: '#9067C6',
//                 marginBottom: '0.75rem',
//                 fontWeight: 500,
//               }}
//             >
//               BSc. in Computer Science & Engineering
//               <span
//                 style={{
//                   float: 'right',
//                   fontWeight: 400,
//                   fontSize: '1rem',
//                   color: '#bbb',
//                 }}
//               >
//                 Jan 2020 - Jan 2024
//               </span>
//             </h2>
//             <p>Department of Computer Science & Engineering,</p>
//             <p>Faculty of Science,</p>
//             <p>East West University</p>
//             <p>
//               <b>Major:</b> Software Engineering
//             </p>
//             <p>
//               <b>CGPA:</b> 3.71 / 4.00
//             </p>
//           </article>
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
//             <h2
//               style={{
//                 fontSize: '1.5rem',
//                 color: '#9067C6',
//                 marginBottom: '0.75rem',
//                 fontWeight: 500,
//               }}
//             >
//               Higher Secondary Certificate
//               <span
//                 style={{
//                   float: 'right',
//                   fontWeight: 400,
//                   fontSize: '1rem',
//                   color: '#bbb',
//                 }}
//               >
//                 Jul 2016 - Jul 2018
//               </span>
//             </h2>
//             <p>St. Joseph Higher Secondary School</p>
//             <p>
//               <b>Major:</b> Science
//             </p>
//             <p>
//               <b>GPA:</b> 5.00 / 5.00
//             </p>
//             <p
//               style={{
//                 fontStyle: 'italic',
//                 fontSize: '0.9rem',
//                 marginTop: '0.4rem',
//               }}
//             >
//               Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @
//               Scintilla Science Club
//             </p>
//           </article>
//           <article
//             style={{
//               marginBottom: '0',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 0.8s ease forwards',
//               opacity: 0,
//             }}
//           >
//             <h2
//               style={{
//                 fontSize: '1.5rem',
//                 color: '#9067C6',
//                 marginBottom: '0.75rem',
//                 fontWeight: 500,
//               }}
//             >
//               Secondary School Certificate
//               <span
//                 style={{
//                   float: 'right',
//                   fontWeight: 400,
//                   fontSize: '1rem',
//                   color: '#bbb',
//                 }}
//               >
//                 Jan 2006 - Jun 2016
//               </span>
//             </h2>
//             <p>Monipur High School & College</p>
//             <p>
//               <b>Major:</b> Science
//             </p>
//             <p>
//               <b>GPA:</b> 5.00 / 5.00
//             </p>
//             <p
//               style={{
//                 fontStyle: 'italic',
//                 fontSize: '0.9rem',
//                 marginTop: '0.4rem',
//               }}
//             >
//               Activities: Sports Club, CB @ Club de Futbol Avalance
//             </p>
//           </article>
//         </div>
//         {/* Lottie Animation on Right - 3x big */}
//         <div style={{ flex: '0 0 600px' }}>
//           <Tilt>
//             <Lottie
//               className="illustration"
//               animationData={EducationLottie}
//               loop={true}
//               style={{ width: '600px', height: '600px' }}
//             />
//           </Tilt>
//         </div>
//       </div>

//       <div style={{ height: '4rem' }}></div>
//       {/* Certifications title with icon on right, centered */}
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', marginBottom: '2rem', gap: '1.2rem' }}>
//         <h1
//           style={{
//             fontSize: '2.5rem',
//             color: '#fff',
//             fontWeight: 500,
//             margin: 0,
//             lineHeight: 1.2,
//             letterSpacing: "0.5px"
//           }}
//         >
//           Certifications
//         </h1>
//         <FaCertificate size={40} color="#9067C6" />
//       </div>

//       {/* Certifications Section with Lottie on Left - 3x big */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '3rem',
//         marginBottom: '4rem'
//       }}>
//         {/* Lottie Animation on Left - 3x big */}
//         <div style={{ flex: '0 0 600px' }}>
//           <Tilt>
//             <Lottie
//               className="illustration"
//               animationData={CertLottie}
//               loop={true}
//               style={{ width: '600px', height: '600px' }}
//             />
//           </Tilt>
//         </div>
//         {/* Certifications Info */}
//         <div style={{ flex: 1 }}>
//           {/* ... (certification articles unchanged) ... */}
//           <article
//             style={{
//               marginBottom: '1.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 0.9s ease forwards',
//               opacity: 0,
//               display: 'flex',
//               alignItems: 'center',
//               gap: '1rem',
//             }}
//           >
//             <SiHackerrank size={48} color="#2EC866" />
//             <div>
//               <b>SQL Advanced Certification</b> — HackerRank (May 2025) <br />
//               Credential ID:{' '}
//               <a
//                 href="https://www.hackerrank.com/certificates/5905cf970f0a"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: '#9067C6' }}
//               >
//                 5905cf970f0a
//               </a>
//             </div>
//           </article>

//           <article
//             style={{
//               marginBottom: '1.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 1s ease forwards',
//               opacity: 0,
//               display: 'flex',
//               alignItems: 'center',
//               gap: '1rem',
//             }}
//           >
//             <SiHackerrank size={48} color="#2EC866" />
//             <div>
//               <b>SQL Intermediate Certification</b> — HackerRank (May 2025) <br />
//               Credential ID:{' '}
//               <a
//                 href="https://www.hackerrank.com/certificates/1268f4f884cf"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: '#9067C6' }}
//               >
//                 1268f4f884cf
//               </a>
//             </div>
//           </article>

//           <article
//             style={{
//               marginBottom: '1.5rem',
//               padding: '1.5rem',
//               backgroundColor: 'rgba(144, 103, 198, 0.1)',
//               borderRadius: '8px',
//               animation: 'fadeInUp 1.1s ease forwards',
//               opacity: 0,
//               display: 'flex',
//               alignItems: 'center',
//               gap: '1rem',
//             }}
//           >
//             <FaCertificate size={48} color="#9067C6" />
//             <div>
//               <b>TestDome Certification</b> (Details in CV) <br />
//               Credential link:{' '}
//               <a
//                 href="https://www.testdome.com/certificates"
//                 target="_blank"
//                 rel="noreferrer"
//                 style={{ color: '#9067C6' }}
//               >
//                 View Certificates
//               </a>
//             </div>
//           </article>
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

// export default Education;
import React from 'react';
import { SiHackerrank } from "react-icons/si";
import { FaCertificate, FaGraduationCap } from "react-icons/fa";
import Lottie from "lottie-react";
import Tilt from "react-parallax-tilt";
import EducationLottie from '../LottieFiles/Education.json';
import CertLottie from '../LottieFiles/Certificate.json';

const Education = () => {
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
      {/* Spacer */}
      <div style={{ height: '8rem' }}></div>
      
      {/* Education title with icon on left, centered */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', marginBottom: '2rem', gap: '1.2rem' }}>
        <FaGraduationCap size={40} color="#9067C6" />
        <h1
          style={{
            fontSize: '2.5rem',
            color: '#fff',
            fontWeight: 500,
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "0.5px"
          }}
        >
          Education
        </h1>
      </div>

      <div style={{ height: '4rem' }}></div>
      {/* Education Section with Animation on Right */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        {/* Education Info */}
        <div style={{ flex: 1 }}>
          {/* Education Articles */}
          <article
            style={{
              marginBottom: '2.5rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(144, 103, 198, 0.1)',
              borderRadius: '8px',
              animation: 'fadeInUp 0.6s ease forwards',
              opacity: 0,
            }}
          >
            <h2
              style={{
                fontSize: '1.5rem',
                color: '#9067C6',
                marginBottom: '0.75rem',
                fontWeight: 500,
              }}
            >
              BSc. in Computer Science & Engineering
              <span
                style={{
                  float: 'right',
                  fontWeight: 400,
                  fontSize: '1rem',
                  color: '#bbb',
                }}
              >
                Jan 2020 - Jan 2024
              </span>
            </h2>
            <p>Department of Computer Science & Engineering,</p>
            <p>Faculty of Science,</p>
            <p>East West University</p>
            <p>
              <b>Major:</b> Software Engineering
            </p>
            <p>
              <b>CGPA:</b> 3.71 / 4.00
            </p>
          </article>
          <article
            style={{
              marginBottom: '2.5rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(144, 103, 198, 0.1)',
              borderRadius: '8px',
              animation: 'fadeInUp 0.7s ease forwards',
              opacity: 0,
            }}
          >
            <h2
              style={{
                fontSize: '1.5rem',
                color: '#9067C6',
                marginBottom: '0.75rem',
                fontWeight: 500,
              }}
            >
              Higher Secondary Certificate
              <span
                style={{
                  float: 'right',
                  fontWeight: 400,
                  fontSize: '1rem',
                  color: '#bbb',
                }}
              >
                Jul 2016 - Jul 2018
              </span>
            </h2>
            <p>St. Joseph Higher Secondary School</p>
            <p>
              <b>Major:</b> Science
            </p>
            <p>
              <b>GPA:</b> 5.00 / 5.00
            </p>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '0.9rem',
                marginTop: '0.4rem',
              }}
            >
              Activities: Prefect of Discipline, Performer & OS @JFDC, Executive @
              Scintilla Science Club
            </p>
          </article>
          <article
            style={{
              marginBottom: '0',
              padding: '1.5rem',
              backgroundColor: 'rgba(144, 103, 198, 0.1)',
              borderRadius: '8px',
              animation: 'fadeInUp 0.8s ease forwards',
              opacity: 0,
            }}
          >
            <h2
              style={{
                fontSize: '1.5rem',
                color: '#9067C6',
                marginBottom: '0.75rem',
                fontWeight: 500,
              }}
            >
              Secondary School Certificate
              <span
                style={{
                  float: 'right',
                  fontWeight: 400,
                  fontSize: '1rem',
                  color: '#bbb',
                }}
              >
                Jan 2006 - Jun 2016
              </span>
            </h2>
            <p>Monipur High School & College</p>
            <p>
              <b>Major:</b> Science
            </p>
            <p>
              <b>GPA:</b> 5.00 / 5.00
            </p>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: '0.9rem',
                marginTop: '0.4rem',
              }}
            >
              Activities: Sports Club, CB @ Club de Futbol Avalance
            </p>
          </article>
        </div>
        {/* Lottie Animation on Right - 3x big */}
        <div style={{ flex: '0 0 600px' }}>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={EducationLottie}
              loop={true}
              style={{ width: '600px', height: '600px' }}
            />
          </Tilt>
        </div>
      </div>

      <div style={{ height: '4rem' }}></div>
      {/* Certifications title with icon on right, centered */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', marginBottom: '2rem', gap: '1.2rem' }}>
        <h1
          style={{
            fontSize: '2.5rem',
            color: '#fff',
            fontWeight: 500,
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "0.5px"
          }}
        >
          Certifications
        </h1>
        <FaCertificate size={40} color="#9067C6" />
      </div>
      <div style={{ height: '5rem' }}></div>

      {/* Certifications Section with Lottie on Left - 3x big */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        {/* Lottie Animation on Left - 3x big */}
        <div style={{ flex: '0 0 600px' }}>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={CertLottie}
              loop={true}
              style={{ width: '600px', height: '600px' }}
            />
          </Tilt>
        </div>
        {/* Certifications Info */}
        <div style={{ flex: 1 }}>
          {/* Certification Articles */}
          <article
            style={{
              marginBottom: '1.5rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(144, 103, 198, 0.1)',
              borderRadius: '8px',
              animation: 'fadeInUp 0.9s ease forwards',
              opacity: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <SiHackerrank size={48} color="#2EC866" />
            <div>
              <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '600' }}>SQL Advanced Certification</h3>
              <p style={{ margin: '0 0 0.3rem 0' }}>HackerRank</p>
              <p style={{ margin: '0 0 0.3rem 0', fontWeight: '500', color: '#ccc' }}>May 2025</p>
              <p style={{ margin: '0 0 0.3rem 0' }}>
                Credential ID:{' '}
                <a
                  href="https://www.hackerrank.com/certificates/5905cf970f0a"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#9067C6', textDecoration: 'underline' }}
                >
                  5905cf970f0a
                </a>
              </p>
              <p style={{ margin: '0' }}>
                View Certificate:{' '}
                <a
                  href="https://www.hackerrank.com/certificates/5905cf970f0a"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#9067C6', textDecoration: 'underline' }}
                >
                  Link
                </a>
              </p>
            </div>
          </article>

          <article
            style={{
              marginBottom: '1.5rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(144, 103, 198, 0.1)',
              borderRadius: '8px',
              animation: 'fadeInUp 1s ease forwards',
              opacity: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <SiHackerrank size={48} color="#2EC866" />
            <div>
              <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '600' }}>SQL Intermediate Certification</h3>
              <p style={{ margin: '0 0 0.3rem 0' }}>HackerRank</p>
              <p style={{ margin: '0 0 0.3rem 0', fontWeight: '500', color: '#ccc' }}>May 2025</p>
              <p style={{ margin: '0 0 0.3rem 0' }}>
                Credential ID:{' '}
                <a
                  href="https://www.hackerrank.com/certificates/1268f4f884cf"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#9067C6', textDecoration: 'underline' }}
                >
                  1268f4f884cf
                </a>
              </p>
              <p style={{ margin: '0' }}>
                View Certificate:{' '}
                <a
                  href="https://www.hackerrank.com/certificates/1268f4f884cf"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#9067C6', textDecoration: 'underline' }}
                >
                  Link
                </a>
              </p>
            </div>
          </article>

          <article
            style={{
              marginBottom: '0',
              padding: '1.5rem',
              backgroundColor: 'rgba(144, 103, 198, 0.1)',
              borderRadius: '8px',
              animation: 'fadeInUp 1.1s ease forwards',
              opacity: 0,
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'center',
            }}
          >
            <FaCertificate size={48} color="#9067C6" />
            <div>
              <h3 style={{ margin: '0 0 0.4rem 0', fontWeight: '600' }}>TestDome Certification</h3>
              <p style={{ margin: '0 0 0.3rem 0', fontWeight: '500', color: '#ccc' }}>(Details in CV)</p>
              <p style={{ margin: '0 0 0.3rem 0' }}>
                Credential ID: <strong>18fcfee2169e449bb9a144aafd68ee1b</strong>
              </p>
              <p style={{ margin: '0' }}>
                View Certificate:{' '}
                <a
                  href="https://www.testdome.com/certificates/18fcfee2169e449bb9a144aafd68ee1b"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#9067C6', textDecoration: 'underline' }}
                >
                  Link
                </a>
              </p>
            </div>
          </article>
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
      `}</style>
    </div>
  );
};

export default Education;
