// // // // // // import React from 'react';
// // // // // // import { FaGithub } from "react-icons/fa";
// // // // // // import { CgFileDocument } from "react-icons/cg";

// // // // // // const ProjectBox = ({ projectPhoto, projectName, descOverride, github, website }) => {
// // // // // //   // Always show Github button, use # if missing
// // // // // //   const githubUrl = github && github.trim() !== "" ? github : "#";

// // // // // //   return (
// // // // // //     <div className='projectBox' style={{
// // // // // //       minHeight: "470px",
// // // // // //       display: "flex",
// // // // // //       flexDirection: "column",
// // // // // //       justifyContent: "space-between",
// // // // // //       boxShadow: "0 4px 24px rgba(144,103,198,0.06)"
// // // // // //     }}>
// // // // // //       <img className='projectPhoto' src={projectPhoto} alt="Project display" style={{ width: "100%", height: "170px", objectFit: "cover", borderRadius: "8px 8px 0 0" }} />
// // // // // //       <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
// // // // // //         <br />
// // // // // //         <h3 style={{ minHeight: "2.5em" }}>{projectName}</h3>
// // // // // //         <br />
// // // // // //         <div style={{ textAlign: "justify", color: "#ddd", minHeight: "120px", fontSize: "1.05rem" }}>
// // // // // //           {descOverride}
// // // // // //         </div>
// // // // // //         <br />
// // // // // //         {/* Centered and highlighted GitHub button */}
// // // // // //         <div style={{ display: "flex", justifyContent: "center", marginTop: "1.2em" }}>
// // // // // //           <a
// // // // // //             href={githubUrl}
// // // // // //             target='_blank'
// // // // // //             rel="noreferrer"
// // // // // //             style={{
// // // // // //               width: "80%",
// // // // // //               textAlign: "center",
// // // // // //               textDecoration: "none"
// // // // // //             }}
// // // // // //           >
// // // // // //             <button
// // // // // //               className='projectbtn'
// // // // // //               style={{
// // // // // //                 width: "100%",
// // // // // //                 background: "#171515",
// // // // // //                 color: "#fff",
// // // // // //                 borderRadius: "2rem",
// // // // // //                 fontWeight: 700,
// // // // // //                 fontSize: "1.12rem",
// // // // // //                 boxShadow: "0 2px 12px rgba(144,103,198,0.18)",
// // // // // //                 border: "none",
// // // // // //                 display: "flex",
// // // // // //                 alignItems: "center",
// // // // // //                 justifyContent: "center",
// // // // // //                 gap: "0.6em",
// // // // // //                 padding: "1rem",
// // // // // //                 cursor: "pointer",
// // // // // //                 transition: "background 0.2s, color 0.2s"
// // // // // //               }}
// // // // // //             >
// // // // // //               <FaGithub style={{ fontSize: "1.45em", verticalAlign: "middle" }} />
// // // // // //               <span style={{ fontWeight: 700, fontSize: "1.14rem", marginLeft: "0.3em" }}>Github</span>
// // // // // //             </button>
// // // // // //           </a>
// // // // // //         </div>
// // // // // //         {website &&
// // // // // //           <div style={{ display: "flex", justifyContent: "center", marginTop: "0.8em" }}>
// // // // // //             <a
// // // // // //               href={website}
// // // // // //               target='_blank'
// // // // // //               rel="noreferrer"
// // // // // //               style={{ width: "80%" }}
// // // // // //             >
// // // // // //               <button
// // // // // //                 className='projectbtn'
// // // // // //                 style={{
// // // // // //                   background: "#fff",
// // // // // //                   color: "#9067C6",
// // // // // //                   fontWeight: 700,
// // // // // //                   fontSize: "1.09rem",
// // // // // //                   borderRadius: "2rem",
// // // // // //                   width: "100%",
// // // // // //                   padding: "0.9rem",
// // // // // //                   marginTop: 0,
// // // // // //                   border: "none",
// // // // // //                   display: "flex",
// // // // // //                   alignItems: "center",
// // // // // //                   justifyContent: "center",
// // // // // //                   gap: "0.6em"
// // // // // //                 }}>
// // // // // //                 <CgFileDocument style={{ fontSize: "1.18em", verticalAlign: "middle" }} /> Demo
// // // // // //               </button>
// // // // // //             </a>
// // // // // //           </div>
// // // // // //         }
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default ProjectBox;
// // // // // import React from 'react';
// // // // // import { FaGithub } from "react-icons/fa";
// // // // // import { CgFileDocument } from "react-icons/cg";

// // // // // const ProjectBox = ({ projectPhoto, projectName, descOverride, github, website }) => {
// // // // //   const githubUrl = github && github.trim() !== "" ? github : "#";

// // // // //   return (
// // // // //     <div className='projectBox'>
// // // // //       <img
// // // // //         className='projectPhoto'
// // // // //         src={projectPhoto}
// // // // //         alt={`${projectName} display`}
// // // // //       />
// // // // //       <div className='projectContent'>
// // // // //         <h3 className='projectTitle'>{projectName}</h3>
// // // // //         <div className='projectDesc'>{descOverride}</div>

// // // // //         <div className='projectBtns'>
// // // // //           <a href={githubUrl} target='_blank' rel="noreferrer">
// // // // //             <button className='githubBtn'>
// // // // //               <FaGithub className='icon' />
// // // // //               Github
// // // // //             </button>
// // // // //           </a>
// // // // //           {website && website.trim() !== "" && (
// // // // //             <a href={website} target='_blank' rel="noreferrer">
// // // // //               <button className='demoBtn'>
// // // // //                 <CgFileDocument className='icon' />
// // // // //                 Demo
// // // // //               </button>
// // // // //             </a>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       <style>{`
// // // // //         .projectBox {
// // // // //           min-width: 350px;
// // // // //           max-width: 350px;
// // // // //           background: #2c314a;
// // // // //           border-radius: 12px;
// // // // //           box-shadow: 0 6px 18px rgba(144, 103, 198, 0.25);
// // // // //           overflow: hidden;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// // // // //           cursor: pointer;
// // // // //         }
// // // // //         .projectBox:hover {
// // // // //           transform: translateY(-8px);
// // // // //           box-shadow: 0 12px 32px rgba(144, 103, 198, 0.5);
// // // // //         }
// // // // //         .projectPhoto {
// // // // //           width: 100%;
// // // // //           height: 180px;
// // // // //           object-fit: cover;
// // // // //           border-radius: 12px 12px 0 0;
// // // // //           transition: transform 0.3s ease;
// // // // //         }
// // // // //         .projectBox:hover .projectPhoto {
// // // // //           transform: scale(1.05);
// // // // //         }
// // // // //         .projectContent {
// // // // //           padding: 1.2rem 1.5rem 1.5rem 1.5rem;
// // // // //           color: #e0e0e0;
// // // // //           display: flex;
// // // // //           flex-direction: column;
// // // // //           flex-grow: 1;
// // // // //         }
// // // // //         .projectTitle {
// // // // //           font-weight: 700;
// // // // //           font-size: 1.25rem;
// // // // //           margin-bottom: 0.6rem;
// // // // //           color: #a084f6;
// // // // //           border-bottom: 2px solid transparent;
// // // // //           padding-bottom: 4px;
// // // // //           transition: border-color 0.3s ease;
// // // // //           cursor: default;
// // // // //         }
// // // // //         .projectBox:hover .projectTitle {
// // // // //           border-color: #9067C6;
// // // // //         }
// // // // //         .projectDesc {
// // // // //           flex-grow: 1;
// // // // //           font-size: 1rem;
// // // // //           color: #cfcfcf;
// // // // //           line-height: 1.5;
// // // // //           margin-bottom: 1rem;
// // // // //           overflow-y: auto;
// // // // //           max-height: 110px;
// // // // //         }
// // // // //         .projectBtns {
// // // // //           display: flex;
// // // // //           justify-content: center;
// // // // //           gap: 1rem;
// // // // //           margin-top: auto;
// // // // //         }
// // // // //         .githubBtn, .demoBtn {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           gap: 0.5rem;
// // // // //           padding: 0.75rem 1.8rem;
// // // // //           font-weight: 700;
// // // // //           font-size: 1.1rem;
// // // // //           border-radius: 30px;
// // // // //           border: none;
// // // // //           cursor: pointer;
// // // // //           transition: background-color 0.3s ease, color 0.3s ease;
// // // // //           box-shadow: 0 4px 12px rgba(144, 103, 198, 0.2);
// // // // //         }
// // // // //         .githubBtn {
// // // // //           background-color: #171515;
// // // // //           color: #fff;
// // // // //         }
// // // // //         .githubBtn:hover {
// // // // //           background-color: #2f2f2f;
// // // // //           box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
// // // // //         }
// // // // //         .demoBtn {
// // // // //           background-color: #fff;
// // // // //           color: #9067C6;
// // // // //         }
// // // // //         .demoBtn:hover {
// // // // //           background-color: #e6d9ff;
// // // // //           box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
// // // // //         }
// // // // //         .icon {
// // // // //           font-size: 1.3rem;
// // // // //           vertical-align: middle;
// // // // //         }
// // // // //         @media (max-width: 400px) {
// // // // //           .projectBox {
// // // // //             min-width: 100%;
// // // // //             max-width: 100%;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ProjectBox;
// // // // import React from 'react';
// // // // import { FaGithub } from "react-icons/fa";
// // // // import { CgFileDocument } from "react-icons/cg";

// // // // const ProjectBox = ({ projectPhoto, projectName, descOverride, github, website }) => {
// // // //   // Always show Github button, use # if missing
// // // //   const githubUrl = github && github.trim() !== "" ? github : "#";

// // // //   return (
// // // //     <div className='projectBox'>
// // // //       <img
// // // //         className='projectPhoto'
// // // //         src={projectPhoto}
// // // //         alt={`${projectName} display`}
// // // //       />
// // // //       <div className='projectInfo'>
// // // //         <h3 className='projectTitle'>{projectName}</h3>
// // // //         <p className='projectDesc'>{descOverride}</p>
// // // //         <div className='btnContainer'>
// // // //           <a href={githubUrl} target='_blank' rel="noreferrer" className='btnLink'>
// // // //             <button className='projectbtn githubBtn'>
// // // //               <FaGithub />
// // // //               <span>Github</span>
// // // //             </button>
// // // //           </a>
// // // //           {website &&
// // // //             <a href={website} target='_blank' rel="noreferrer" className='btnLink'>
// // // //               <button className='projectbtn demoBtn'>
// // // //                 <CgFileDocument />
// // // //                 <span>Demo</span>
// // // //               </button>
// // // //             </a>
// // // //           }
// // // //         </div>
// // // //       </div>

// // // //       <style>{`
// // // //         .projectBox {
// // // //           min-height: 470px;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           background: rgba(30, 30, 60, 0.85);
// // // //           border-radius: 12px;
// // // //           box-shadow: 0 8px 24px rgba(144,103,198,0.15);
// // // //           overflow: hidden;
// // // //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// // // //           width: 350px;
// // // //         }
// // // //         .projectBox:hover {
// // // //           transform: translateY(-6px);
// // // //           box-shadow: 0 14px 40px rgba(144,103,198,0.3);
// // // //         }
// // // //         .projectPhoto {
// // // //           width: 100%;
// // // //           height: 180px;
// // // //           object-fit: cover;
// // // //           border-radius: 12px 12px 0 0;
// // // //           filter: brightness(0.95);
// // // //           transition: filter 0.3s ease;
// // // //         }
// // // //         .projectBox:hover .projectPhoto {
// // // //           filter: brightness(1);
// // // //         }
// // // //         .projectInfo {
// // // //           flex: 1 1 auto;
// // // //           padding: 1.2rem 1.5rem 1.5rem 1.5rem;
// // // //           display: flex;
// // // //           flex-direction: column;
// // // //           justify-content: space-between;
// // // //         }
// // // //         .projectTitle {
// // // //           font-size: 1.2rem;
// // // //           font-weight: 700;
// // // //           color: #c8baff;
// // // //           margin-bottom: 0.75rem;
// // // //           min-height: 3rem;
// // // //         }
// // // //         .projectDesc {
// // // //           color: #ddd;
// // // //           font-size: 1rem;
// // // //           flex-grow: 1;
// // // //           text-align: justify;
// // // //           margin-bottom: 1.2rem;
// // // //           line-height: 1.3;
// // // //         }
// // // //         .btnContainer {
// // // //           display: flex;
// // // //           gap: 1rem;
// // // //           justify-content: center;
// // // //           flex-wrap: wrap;
// // // //         }
// // // //         .btnLink {
// // // //           width: 48%;
// // // //           text-decoration: none;
// // // //         }
// // // //         .projectbtn {
// // // //           width: 100%;
// // // //           padding: 0.9rem 0;
// // // //           border-radius: 2rem;
// // // //           border: none;
// // // //           font-weight: 700;
// // // //           font-size: 1.1rem;
// // // //           cursor: pointer;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           gap: 0.5rem;
// // // //           box-shadow: 0 4px 14px rgba(144,103,198,0.25);
// // // //           transition: background-color 0.3s ease, color 0.3s ease;
// // // //         }
// // // //         .githubBtn {
// // // //           background: #171515;
// // // //           color: #fff;
// // // //         }
// // // //         .githubBtn:hover {
// // // //           background: #3b3b3b;
// // // //         }
// // // //         .demoBtn {
// // // //           background: #fff;
// // // //           color: #9067C6;
// // // //         }
// // // //         .demoBtn:hover {
// // // //           background: #e5d8ff;
// // // //         }
// // // //         @media (max-width: 400px) {
// // // //           .projectBox {
// // // //             width: 100%;
// // // //           }
// // // //           .btnLink {
// // // //             width: 100%;
// // // //           }
// // // //           .btnContainer {
// // // //             gap: 0.7rem;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ProjectBox;
// // // import React from 'react';
// // // import { FaGithub } from "react-icons/fa";
// // // import { CgFileDocument } from "react-icons/cg";

// // // const ProjectBox = ({ projectPhoto, projectName, descOverride, github, website }) => {
// // //   const githubUrl = github && github.trim() !== "" ? github : "#";

// // //   return (
// // //     <div className='projectBox'>
// // //       <img
// // //         className='projectPhoto'
// // //         src={projectPhoto}
// // //         alt={`${projectName} display`}
// // //       />
// // //       <div className='projectContent'>
// // //         <h3 className='projectTitle'>{projectName}</h3>
// // //         <div className='projectDesc'>{descOverride}</div>

// // //         <div className='projectBtns'>
// // //           <a href={githubUrl} target='_blank' rel="noreferrer">
// // //             <button className='githubBtn'>
// // //               <FaGithub className='icon' />
// // //               Github
// // //             </button>
// // //           </a>
// // //           {website && website.trim() !== "" && (
// // //             <a href={website} target='_blank' rel="noreferrer">
// // //               <button className='demoBtn'>
// // //                 <CgFileDocument className='icon' />
// // //                 Demo
// // //               </button>
// // //             </a>
// // //           )}
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         .projectBox {
// // //           min-width: 350px;
// // //           max-width: 350px;
// // //           background: #2c314a;
// // //           border-radius: 12px;
// // //           box-shadow: 0 6px 18px rgba(144, 103, 198, 0.25);
// // //           overflow: hidden;
// // //           display: flex;
// // //           flex-direction: column;
// // //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// // //           cursor: pointer;
// // //         }
// // //         .projectBox:hover {
// // //           transform: translateY(-8px);
// // //           box-shadow: 0 12px 32px rgba(144, 103, 198, 0.5);
// // //         }
// // //         .projectPhoto {
// // //           width: 100%;
// // //           height: 180px;
// // //           object-fit: cover;
// // //           border-radius: 12px 12px 0 0;
// // //           transition: transform 0.3s ease;
// // //         }
// // //         .projectBox:hover .projectPhoto {
// // //           transform: scale(1.05);
// // //         }
// // //         .projectContent {
// // //           padding: 1.2rem 1.5rem 1.5rem 1.5rem;
// // //           color: #e0e0e0;
// // //           display: flex;
// // //           flex-direction: column;
// // //           flex-grow: 1;
// // //         }
// // //         .projectTitle {
// // //           font-weight: 700;
// // //           font-size: 1.25rem;
// // //           margin-bottom: 0.6rem;
// // //           color: #a084f6;
// // //           border-bottom: 2px solid transparent;
// // //           padding-bottom: 4px;
// // //           transition: border-color 0.3s ease;
// // //           cursor: default;
// // //         }
// // //         .projectBox:hover .projectTitle {
// // //           border-color: #9067C6;
// // //         }
// // //         .projectDesc {
// // //           flex-grow: 1;
// // //           font-size: 1rem;
// // //           color: #cfcfcf;
// // //           line-height: 1.5;
// // //           margin-bottom: 1rem;
// // //           overflow-y: auto;
// // //           max-height: 110px;
// // //         }
// // //         .projectBtns {
// // //           display: flex;
// // //           justify-content: center;
// // //           gap: 1rem;
// // //           margin-top: auto;
// // //         }
// // //         .githubBtn, .demoBtn {
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           gap: 0.5rem;
// // //           padding: 0.75rem 1.8rem;
// // //           font-weight: 700;
// // //           font-size: 1.1rem;
// // //           border-radius: 30px;
// // //           border: none;
// // //           cursor: pointer;
// // //           transition: background-color 0.3s ease, color 0.3s ease;
// // //           box-shadow: 0 4px 12px rgba(144, 103, 198, 0.2);
// // //         }
// // //         .githubBtn {
// // //           background-color: #171515;
// // //           color: #fff;
// // //         }
// // //         .githubBtn:hover {
// // //           background-color: #2f2f2f;
// // //           box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
// // //         }
// // //         .demoBtn {
// // //           background-color: #fff;
// // //           color: #9067C6;
// // //         }
// // //         .demoBtn:hover {
// // //           background-color: #e6d9ff;
// // //           box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
// // //         }
// // //         .icon {
// // //           font-size: 1.3rem;
// // //           vertical-align: middle;
// // //         }
// // //         @media (max-width: 400px) {
// // //           .projectBox {
// // //             min-width: 100%;
// // //             max-width: 100%;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default ProjectBox;
// // import React from 'react';
// // import { FaGithub } from "react-icons/fa";
// // import { CgFileDocument } from "react-icons/cg";

// // const ProjectBox = ({ projectPhoto, projectName, descOverride, github, website }) => {
// //   const githubUrl = github && github.trim() !== "" ? github : "#";

// //   return (
// //     <div className='projectBox'>
// //       <img
// //         className='projectPhoto'
// //         src={projectPhoto}
// //         alt={`${projectName} display`}
// //       />
// //       <div className='projectContent'>
// //         <h3 className='projectTitle'>{projectName}</h3>
// //         <div className='projectDesc'>{descOverride}</div>

// //         <div className='projectBtns'>
// //           <a href={githubUrl} target='_blank' rel="noreferrer">
// //             <button className='githubBtn'>
// //               <FaGithub className='icon' />
// //               Github
// //             </button>
// //           </a>
// //           {website && website.trim() !== "" && (
// //             <a href={website} target='_blank' rel="noreferrer">
// //               <button className='demoBtn'>
// //                 <CgFileDocument className='icon' />
// //                 Demo
// //               </button>
// //             </a>
// //           )}
// //         </div>
// //       </div>

// //       <style>{`
// //         .projectBox {
// //           min-width: 350px;
// //           max-width: 350px;
// //           background: #2c314a;
// //           border-radius: 12px;
// //           box-shadow: 0 6px 18px rgba(144, 103, 198, 0.25);
// //           overflow: hidden;
// //           display: flex;
// //           flex-direction: column;
// //           transition: transform 0.3s ease, box-shadow 0.3s ease;
// //           cursor: pointer;
// //         }
// //         .projectBox:hover {
// //           transform: translateY(-8px);
// //           box-shadow: 0 12px 32px rgba(144, 103, 198, 0.5);
// //         }
// //         .projectPhoto {
// //           width: 100%;
// //           height: 180px;
// //           object-fit: cover;
// //           border-radius: 12px 12px 0 0;
// //           transition: transform 0.3s ease;
// //         }
// //         .projectBox:hover .projectPhoto {
// //           transform: scale(1.05);
// //         }
// //         .projectContent {
// //           padding: 1.2rem 1.5rem 1.5rem 1.5rem;
// //           color: #e0e0e0;
// //           display: flex;
// //           flex-direction: column;
// //           flex-grow: 1;
// //         }
// //         .projectTitle {
// //           font-weight: 700;
// //           font-size: 1.25rem;
// //           margin-bottom: 0.6rem;
// //           color: #a084f6;
// //           border-bottom: 2px solid transparent;
// //           padding-bottom: 4px;
// //           transition: border-color 0.3s ease;
// //           cursor: default;
// //         }
// //         .projectBox:hover .projectTitle {
// //           border-color: #9067C6;
// //         }
// //         .projectDesc {
// //           flex-grow: 1;
// //           font-size: 1rem;
// //           color: #cfcfcf;
// //           line-height: 1.5;
// //           margin-bottom: 1rem;
// //           overflow-y: auto;
// //           max-height: 110px;
// //         }
// //         .projectBtns {
// //           display: flex;
// //           justify-content: center;
// //           gap: 1rem;
// //           margin-top: auto;
// //         }
// //         .githubBtn, .demoBtn {
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           gap: 0.5rem;
// //           padding: 0.75rem 1.8rem;
// //           font-weight: 700;
// //           font-size: 1.1rem;
// //           border-radius: 30px;
// //           border: none;
// //           cursor: pointer;
// //           transition: background-color 0.3s ease, color 0.3s ease;
// //           box-shadow: 0 4px 12px rgba(144, 103, 198, 0.2);
// //         }
// //         .githubBtn {
// //           background-color: #171515;
// //           color: #fff;
// //         }
// //         .githubBtn:hover {
// //           background-color: #2f2f2f;
// //           box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
// //         }
// //         .demoBtn {
// //           background-color: #fff;
// //           color: #9067C6;
// //         }
// //         .demoBtn:hover {
// //           background-color: #e6d9ff;
// //           box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
// //         }
// //         .icon {
// //           font-size: 1.3rem;
// //           vertical-align: middle;
// //         }
// //         @media (max-width: 400px) {
// //           .projectBox {
// //             min-width: 100%;
// //             max-width: 100%;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default ProjectBox;
// import React from 'react';
// import { FaGithub } from "react-icons/fa";
// import { CgFileDocument } from "react-icons/cg";

// const ProjectBox = ({ projectPhoto, projectName, descOverride, github, website }) => {
//   const githubUrl = github && github.trim() !== "" ? github : "#";

//   return (
//     <div className='projectBox'>
//       <img
//         className='projectPhoto'
//         src={projectPhoto}
//         alt={`${projectName} display`}
//       />
//       <div className='projectContent'>
//         <h3 className='projectTitle'>{projectName}</h3>
//         <div className='projectDesc'>{descOverride}</div>

//         <div className='projectBtns'>
//           <a href={githubUrl} target='_blank' rel="noreferrer">
//             <button className='githubBtn'>
//               <FaGithub className='icon' />
//               Github
//             </button>
//           </a>
//           {website && website.trim() !== "" && (
//             <a href={website} target='_blank' rel="noreferrer">
//               <button className='demoBtn'>
//                 <CgFileDocument className='icon' />
//                 Demo
//               </button>
//             </a>
//           )}
//         </div>
//       </div>

//       <style>{`
//         .projectBox {
//           width: 100%;
//           max-width: 350px;
//           background: #2c314a;
//           border-radius: 12px;
//           box-shadow: 0 6px 18px rgba(144, 103, 198, 0.25);
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           cursor: pointer;
//           word-break: break-word;
//         }
//         .projectBox:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 12px 32px rgba(144, 103, 198, 0.5);
//         }
//         .projectPhoto {
//           width: 100%;
//           height: 180px;
//           object-fit: cover;
//           border-radius: 12px 12px 0 0;
//           transition: transform 0.3s ease;
//         }
//         .projectBox:hover .projectPhoto {
//           transform: scale(1.05);
//         }
//         .projectContent {
//           padding: 1.2rem 1.5rem 1.5rem 1.5rem;
//           color: #e0e0e0;
//           display: flex;
//           flex-direction: column;
//           flex-grow: 1;
//         }
//         .projectTitle {
//           font-weight: 700;
//           font-size: 1.25rem;
//           margin-bottom: 0.6rem;
//           color: #a084f6;
//           border-bottom: 2px solid transparent;
//           padding-bottom: 4px;
//           transition: border-color 0.3s ease;
//           cursor: default;
//           word-wrap: break-word;
//         }
//         .projectBox:hover .projectTitle {
//           border-color: #9067C6;
//         }
//         .projectDesc {
//           flex-grow: 1;
//           font-size: 1rem;
//           color: #cfcfcf;
//           line-height: 1.5;
//           margin-bottom: 1rem;
//           overflow-y: auto;
//           max-height: 110px;
//           word-wrap: break-word;
//           overflow-wrap: break-word;
//           word-break: break-word;
//         }
//         .projectBtns {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//           margin-top: auto;
//           flex-wrap: wrap;
//         }
//         .githubBtn, .demoBtn {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 0.5rem;
//           padding: 0.75rem 1.8rem;
//           font-weight: 700;
//           font-size: 1.1rem;
//           border-radius: 30px;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.3s ease, color 0.3s ease;
//           box-shadow: 0 4px 12px rgba(144, 103, 198, 0.2);
//           white-space: nowrap;
//         }
//         .githubBtn {
//           background-color: #171515;
//           color: #fff;
//           min-width: 110px;
//         }
//         .githubBtn:hover {
//           background-color: #2f2f2f;
//           box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
//         }
//         .demoBtn {
//           background-color: #fff;
//           color: #9067C6;
//           min-width: 110px;
//         }
//         .demoBtn:hover {
//           background-color: #e6d9ff;
//           box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
//         }
//         .icon {
//           font-size: 1.3rem;
//           vertical-align: middle;
//         }
//         @media (max-width: 768px) {
//           .projectBox {
//             max-width: 90vw;
//             min-width: auto;
//           }
//         }
//         @media (max-width: 400px) {
//           .projectBox {
//             max-width: 100vw;
//             min-width: auto;
//             margin-left: auto;
//             margin-right: auto;
//           }
//           .projectBtns {
//             gap: 0.7rem;
//           }
//           .githubBtn, .demoBtn {
//             font-size: 1rem;
//             padding: 0.6rem 1.2rem;
//             min-width: 100px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProjectBox;
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, descOverride, github, website }) => {
  const githubUrl = github && github.trim() !== "" ? github : "#";

  return (
    <div className='projectBox'>
      <img
        className='projectPhoto'
        src={projectPhoto}
        alt={`${projectName} display`}
      />
      <div className='projectContent'>
        <h3 className='projectTitle'>{projectName}</h3>
        <div className='projectDesc'>{descOverride}</div>

        <div className='projectBtns'>
          <a href={githubUrl} target='_blank' rel="noreferrer">
            <button className='githubBtn'>
              <FaGithub className='icon' />
              Github
            </button>
          </a>
          {website && website.trim() !== "" && (
            <a href={website} target='_blank' rel="noreferrer">
              <button className='demoBtn'>
                <CgFileDocument className='icon' />
                Demo
              </button>
            </a>
          )}
        </div>
      </div>

      <style>{`
        .projectBox {
          width: 100%;
          max-width: 350px;
          background: #2c314a;
          border-radius: 12px;
          box-shadow: 0 6px 18px rgba(144, 103, 198, 0.25);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          min-height: 470px;
        }
        .projectBox:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(144, 103, 198, 0.5);
        }
        .projectPhoto {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
          transition: transform 0.3s ease;
        }
        .projectBox:hover .projectPhoto {
          transform: scale(1.05);
        }
        .projectContent {
          padding: 1.2rem 1.5rem 1.5rem 1.5rem;
          color: #e0e0e0;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .projectTitle {
          font-weight: 700;
          font-size: 1.25rem;
          margin-bottom: 0.6rem;
          color: #a084f6;
          border-bottom: 2px solid transparent;
          padding-bottom: 4px;
          transition: border-color 0.3s ease;
          cursor: default;
        }
        .projectBox:hover .projectTitle {
          border-color: #9067C6;
        }
        .projectDesc {
          flex-grow: 1;
          font-size: 1rem;
          color: #cfcfcf;
          line-height: 1.5;
          margin-bottom: 1rem;
          overflow-y: auto;
          max-height: 110px;
        }
        .projectBtns {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: auto;
          flex-wrap: wrap;
        }
        .githubBtn, .demoBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.8rem;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
          box-shadow: 0 4px 12px rgba(144, 103, 198, 0.2);
          white-space: nowrap;
          max-width: 48%;
          width: 100%;
          box-sizing: border-box;
        }
        .githubBtn {
          background-color: #171515;
          color: #fff;
        }
        .githubBtn:hover {
          background-color: #2f2f2f;
          box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
        }
        .demoBtn {
          background-color: #fff;
          color: #9067C6;
        }
        .demoBtn:hover {
          background-color: #e6d9ff;
          box-shadow: 0 6px 20px rgba(144, 103, 198, 0.5);
        }
        .icon {
          font-size: 1.3rem;
          vertical-align: middle;
        }
        @media (max-width: 400px) {
          .projectBox {
            max-width: 100%;
          }
          .githubBtn, .demoBtn {
            max-width: 100%;
            white-space: normal;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectBox;
