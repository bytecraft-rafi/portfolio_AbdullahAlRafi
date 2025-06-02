// // // import React from 'react';
// // // import { FaBook, FaExternalLinkAlt } from "react-icons/fa";
// // // import { SiOrcid } from "react-icons/si";
// // // import Lottie from "lottie-react";
// // // import Tilt from "react-parallax-tilt";
// // // import PublicationLottie from '../LottieFiles/publication.json'; // You can use any relevant animation

// // // const publications = [
// // //   {
// // //     title: "Dry fruit image classification using stacking ensemble model",
// // //     journal: "Journal of Agriculture and Food Research",
// // //     date: "2025-06",
// // //     type: "Journal article",
// // //     doi: "10.1016/j.jafr.2025.101850",
// // //     doiUrl: "https://doi.org/10.1016/j.jafr.2025.101850",
// // //     contributors: [
// // //       "Maheen Islam", "Mujaidul Islam", "Alfe Suny",
// // //       "Abdullah Al Rafi", "Abdullahi Chowdhury", "Mohammad Manzurul Islam",
// // //       "Saleh Masum", "Md Sawkat Ali", "Taskeed Jabiid", "Md Mostofa Kamal Rasel"
// // //     ],
// // //     source: "Crossref"
// // //   },
// // //   {
// // //     title: "BDMANGO: An image dataset for identifying the variety of mango based on the mango leaves",
// // //     journal: "Data in Brief",
// // //     date: "2025-02",
// // //     type: "Journal article",
// // //     doi: "10.1016/j.dib.2024.111241",
// // //     doiUrl: "https://doi.org/10.1016/j.dib.2024.111241",
// // //     contributors: [
// // //       "Mohammad Manzurul Islam", "Md. Jubayer Ahmed", "Mahmud Bin Shafi", "Aritra Das", "Md. Rakibul Hasan", "Abdullah Al Rafi", "Mohammad Rifat Ahmmad Rashid", "Nishat Tasnim Niloy", "Md. Sawkat Ali", "Abdullahi Chowdhury", "et al."
// // //     ],
// // //     source: "Crossref"
// // //   },
// // //   {
// // //     title: "Enhancing land management policy in Bangladesh: A blockchain-based framework for transparent and efficient land management",
// // //     journal: "Land Use Policy",
// // //     date: "2024-12-17",
// // //     type: "Journal article",
// // //     doi: "10.1016/j.landusepol.2024.107436",
// // //     doiUrl: "https://doi.org/10.1016/j.landusepol.2024.107436",
// // //     contributors: [
// // //       "Mohammad Rifat Ahmmad Rashid", "Abdullah Al Rafi", "Md. Ashraful Islam", "Sifat Ullah Sharkar", "Ziaul Haque Rafi", "Mahamudul Hasan", "Md Sawkat Ali", "M. Saddam Hossain Khan"
// // //     ],
// // //     source: "Abdullah Al Rafi"
// // //   }
// // // ];

// // // const orcidId = "0009-0003-8079-6693";
// // // const orcidUrl = "https://orcid.org/0009-0003-8079-6693";

// // // const Publications = () => {
// // //   return (
// // //     <div
// // //       className="AboutPage"
// // //       style={{
// // //         maxWidth: '1500px',
// // //         margin: '10em auto 4rem auto',
// // //         padding: '0 2rem',
// // //         fontFamily: "'Raleway', sans-serif",
// // //         fontWeight: 500,
// // //         color: '#f0f0f0',
// // //         lineHeight: 1.7,
// // //         display: 'block',
// // //       }}
// // //     >
// // //       {/* Spacer */}
// // //       <div style={{ height: '8rem' }}></div>

// // //       {/* Publications title with icon and ORCID badge */}
// // //       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', marginBottom: '2rem', gap: '1.2rem' }}>
// // //         <FaBook size={40} color="#9067C6" />
// // //         <h1 style={{
// // //           fontSize: '2.5rem',
// // //           color: '#fff',
// // //           fontWeight: 500,
// // //           margin: 0,
// // //           lineHeight: 1.2,
// // //           letterSpacing: "0.5px"
// // //         }}>
// // //           Publications
// // //         </h1>
// // //         <a href={orcidUrl} target="_blank" rel="noreferrer" style={{
// // //           marginLeft: "1.4rem", display: "inline-flex", alignItems: "center",
// // //           background: "#fff", color: "#3c6b50", borderRadius: "1.2rem", padding: "0.5rem 1.2rem", fontWeight: 700, textDecoration: "none", fontSize: "1.1rem"
// // //         }}>
// // //           <SiOrcid size={22} style={{ marginRight: "0.4em" }} /> ORCID: {orcidId}
// // //           <FaExternalLinkAlt size={13} style={{ marginLeft: "0.5em" }} />
// // //         </a>
// // //       </div>

// // //       <div style={{ height: '4rem' }}></div>

// // //       {/* Publications Section with Animation on Right */}
// // //       <div style={{
// // //         display: 'flex',
// // //         alignItems: 'center',
// // //         gap: '3rem',
// // //         marginBottom: '4rem'
// // //       }}>
// // //         {/* Publications Info */}
// // //         <div style={{ flex: 1 }}>
// // //           {publications.map((pub, idx) => (
// // //             <article
// // //               key={pub.doi}
// // //               style={{
// // //                 marginBottom: '2.5rem',
// // //                 padding: '1.5rem',
// // //                 backgroundColor: 'rgba(144, 103, 198, 0.11)',
// // //                 borderRadius: '10px',
// // //                 animation: `fadeInUp ${0.6 + idx * 0.13}s ease forwards`,
// // //                 opacity: 0,
// // //                 border: '1.7px solid #282c34',
// // //                 boxShadow: '0 4px 18px 2px rgba(90,90,90,0.03)'
// // //               }}
// // //             >
// // //               <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.35 }}>
// // //                 {pub.title}
// // //               </h2>
// // //               <div style={{ color: "#ccc", margin: "0.55em 0 0.5em 0", fontWeight: 400 }}>
// // //                 <span>{pub.journal}</span> | <span>{pub.date}</span> | <span>{pub.type}</span>
// // //               </div>
// // //               <div style={{ color: "#ccc", marginBottom: "0.35em", fontSize: "1.02em" }}>
// // //                 DOI: <a href={pub.doiUrl} target="_blank" rel="noreferrer" style={{ color: '#81b2ff', textDecoration: "underline" }}>{pub.doi}</a>
// // //               </div>
// // //               <div style={{ color: "#aaa", fontSize: "0.98em", marginBottom: "0.38em" }}>
// // //                 <b>CONTRIBUTORS:</b> {pub.contributors.join("; ")}
// // //               </div>
// // //               <div style={{ color: "#f2e5ff", fontWeight: 500, fontSize: "0.96em" }}>
// // //                 Source: {pub.source}
// // //               </div>
// // //             </article>
// // //           ))}
// // //         </div>
// // //         {/* Lottie Animation on Right */}
// // //         <div style={{ flex: '0 0 600px', display: 'flex', justifyContent: 'center' }}>
// // //           <Tilt>
// // //             <Lottie
// // //               className="illustration"
// // //               animationData={PublicationLottie}
// // //               loop={true}
// // //               style={{ width: '440px', height: '440px' }}
// // //             />
// // //           </Tilt>
// // //         </div>
// // //       </div>

// // //       <style>{`
// // //         @keyframes fadeInUp {
// // //           0% {
// // //             opacity: 0;
// // //             transform: translateY(20px);
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

// // // export default Publications;
// // import React, { useEffect } from "react";
// // import { FaBook } from "react-icons/fa";
// // import { SiOrcid } from "react-icons/si";
// // import { FaExternalLinkAlt } from "react-icons/fa";

// // const publications = [
// //   {
// //     title: "Dry fruit image classification using stacking ensemble model",
// //     journal: "Journal of Agriculture and Food Research",
// //     date: "2025-06",
// //     type: "Journal article",
// //     doi: "10.1016/j.jafr.2025.101850",
// //     doiUrl: "https://doi.org/10.1016/j.jafr.2025.101850",
// //     contributors: [
// //       "Maheen Islam", "Mujaidul Islam", "Alfe Suny",
// //       "Abdullah Al Rafi", "Abdullahi Chowdhury", "Mohammad Manzurul Islam",
// //       "Saleh Masum", "Md Sawkat Ali", "Taskeed Jabiid", "Md Mostofa Kamal Rasel"
// //     ],
// //     source: "Crossref"
// //   },
// //   {
// //     title: "BDMANGO: An image dataset for identifying the variety of mango based on the mango leaves",
// //     journal: "Data in Brief",
// //     date: "2025-02",
// //     type: "Journal article",
// //     doi: "10.1016/j.dib.2024.111241",
// //     doiUrl: "https://doi.org/10.1016/j.dib.2024.111241",
// //     contributors: [
// //       "Mohammad Manzurul Islam", "Md. Jubayer Ahmed", "Mahmud Bin Shafi", "Aritra Das", "Md. Rakibul Hasan", "Abdullah Al Rafi", "Mohammad Rifat Ahmmad Rashid", "Nishat Tasnim Niloy", "Md. Sawkat Ali", "Abdullahi Chowdhury", "et al."
// //     ],
// //     source: "Crossref"
// //   },
// //   {
// //     title: "Enhancing land management policy in Bangladesh: A blockchain-based framework for transparent and efficient land management",
// //     journal: "Land Use Policy",
// //     date: "2024-12-17",
// //     type: "Journal article",
// //     doi: "10.1016/j.landusepol.2024.107436",
// //     doiUrl: "https://doi.org/10.1016/j.landusepol.2024.107436",
// //     contributors: [
// //       "Mohammad Rifat Ahmmad Rashid", "Abdullah Al Rafi", "Md. Ashraful Islam", "Sifat Ullah Sharkar", "Ziaul Haque Rafi", "Mahamudul Hasan", "Md Sawkat Ali", "M. Saddam Hossain Khan"
// //     ],
// //     source: "Abdullah Al Rafi"
// //   }
// // ];

// // const orcidId = "0009-0003-8079-6693";
// // const orcidUrl = "https://orcid.org/0009-0003-8079-6693";

// // const TimelineCard = React.forwardRef(({ title, journal, date, type, doi, doiUrl, contributors, source }, ref) => (
// //   <div className="timeline-row">
// //     <div className="timeline-rail">
// //       <div className="timeline-dot" />
// //       <div className="timeline-line" />
// //     </div>
// //     <div className="timeline-card exp-card-dark" ref={ref}>
// //       <div className="timeline-title">{title}</div>
// //       <div className="timeline-company">
// //         {journal} | {date} | {type}
// //       </div>
// //       <div className="timeline-date">
// //         DOI: <a href={doiUrl} target="_blank" rel="noreferrer" className="doi-link">{doi}</a>
// //       </div>
// //       <div className="timeline-details">
// //         <b>CONTRIBUTORS:</b> {contributors.join("; ")}
// //       </div>
// //       <div className="timeline-stack">
// //         Source: {source}
// //       </div>
// //     </div>
// //   </div>
// // ));

// // const SectionHeader = ({ icon, children, extra }) => (
// //   <div className="section-header">
// //     {icon}
// //     <span>{children}</span>
// //     {extra && <div className="orcid-badge">{extra}</div>}
// //   </div>
// // );

// // const Publications = () => {
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
// //       <SectionHeader
// //         icon={<FaBook size={30} color="#9067C6" />}
// //         extra={
// //           <a href={orcidUrl} target="_blank" rel="noreferrer" className="orcid-link">
// //             <SiOrcid size={22} style={{ marginRight: "0.4em" }} /> ORCID: {orcidId} <FaExternalLinkAlt size={13} style={{ marginLeft: "0.5em" }} />
// //           </a>
// //         }
// //       >
// //         Publications
// //       </SectionHeader>

// //       <div className="timeline-list">
// //         {publications.map((pub, i) => (
// //           <TimelineCard key={pub.doi} {...pub} />
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
// //           padding-left: 56px; /* align text to right edge of dot */
// //           position: relative;
// //         }
// //         .orcid-badge {
// //           margin-left: auto;
// //           background: #fff;
// //           color: #3c6b50;
// //           border-radius: 1.2rem;
// //           padding: 0.5rem 1.2rem;
// //           font-weight: 700;
// //           font-size: 1.1rem;
// //           display: flex;
// //           align-items: center;
// //           gap: 0.4rem;
// //           white-space: nowrap;
// //           text-decoration: none;
// //         }
// //         .orcid-link {
// //           color: #3c6b50;
// //           display: flex;
// //           align-items: center;
// //           text-decoration: none;
// //           gap: 0.4rem;
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
// //           color: #ccc;
// //         }
// //         .timeline-details {
// //           margin-top: 0.18rem;
// //           font-size: 1rem;
// //           padding-left: 1.5rem;
// //           margin-bottom: 0.5rem;
// //           color: #ccc;
// //         }
// //         .doi-link {
// //           color: #81b2ff;
// //           text-decoration: underline;
// //         }
// //         @media (max-width: 650px) {
// //           .section-header {
// //             margin-top: 7rem;
// //             font-size: 1.8rem;
// //             padding-left: 17px;
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
// //           .timeline-rail {
// //             width: 17px;
// //           }
// //         }
// //         @media (max-width: 500px) {
// //           .exp-awards-root {
// //             padding: 0 0.7rem;
// //           }
// //           .exp-card-dark {
// //             margin-left: 1.5rem;
// //             padding: 1rem 0.7rem 0.7rem 0.7rem;
// //             font-size: 0.9rem;
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

// // export default Publications;
// import React, { useEffect } from "react";
// import { FaBook } from "react-icons/fa";
// import { SiOrcid } from "react-icons/si";
// import { FaExternalLinkAlt } from "react-icons/fa";

// const publications = [
//   {
//     title: "Dry fruit image classification using stacking ensemble model",
//     journal: "Journal of Agriculture and Food Research",
//     date: "2025-06",
//     type: "Journal article",
//     doi: "10.1016/j.jafr.2025.101850",
//     doiUrl: "https://doi.org/10.1016/j.jafr.2025.101850",
//     contributors: [
//       "Maheen Islam", "Mujaidul Islam", "Alfe Suny",
//       "Abdullah Al Rafi", "Abdullahi Chowdhury", "Mohammad Manzurul Islam",
//       "Saleh Masum", "Md Sawkat Ali", "Taskeed Jabiid", "Md Mostofa Kamal Rasel"
//     ],
//     source: "Crossref"
//   },
//   {
//     title: "BDMANGO: An image dataset for identifying the variety of mango based on the mango leaves",
//     journal: "Data in Brief",
//     date: "2025-02",
//     type: "Journal article",
//     doi: "10.1016/j.dib.2024.111241",
//     doiUrl: "https://doi.org/10.1016/j.dib.2024.111241",
//     contributors: [
//       "Mohammad Manzurul Islam", "Md. Jubayer Ahmed", "Mahmud Bin Shafi", "Aritra Das", "Md. Rakibul Hasan", "Abdullah Al Rafi", "Mohammad Rifat Ahmmad Rashid", "Nishat Tasnim Niloy", "Md. Sawkat Ali", "Abdullahi Chowdhury", "et al."
//     ],
//     source: "Crossref"
//   },
//   {
//     title: "Enhancing land management policy in Bangladesh: A blockchain-based framework for transparent and efficient land management",
//     journal: "Land Use Policy",
//     date: "2024-12-17",
//     type: "Journal article",
//     doi: "10.1016/j.landusepol.2024.107436",
//     doiUrl: "https://doi.org/10.1016/j.landusepol.2024.107436",
//     contributors: [
//       "Mohammad Rifat Ahmmad Rashid", "Abdullah Al Rafi", "Md. Ashraful Islam", "Sifat Ullah Sharkar", "Ziaul Haque Rafi", "Mahamudul Hasan", "Md Sawkat Ali", "M. Saddam Hossain Khan"
//     ],
//     source: "Abdullah Al Rafi"
//   }
// ];

// const orcidId = "0009-0003-8079-6693";
// const orcidUrl = "https://orcid.org/0009-0003-8079-6693";

// const TimelineCard = React.forwardRef(({ title, journal, date, type, doi, doiUrl, contributors, source }, ref) => (
//   <div className="timeline-row">
//     <div className="timeline-rail">
//       <div className="timeline-dot" />
//       <div className="timeline-line" />
//     </div>
//     <div className="timeline-card exp-card-dark" ref={ref}>
//       <div className="timeline-title">{title}</div>
//       <div className="timeline-company">
//         {journal} | {date} | {type}
//       </div>
//       <div className="timeline-date">
//         DOI: <a href={doiUrl} target="_blank" rel="noreferrer" className="doi-link">{doi}</a>
//       </div>
//       <div className="timeline-details">
//         <b>CONTRIBUTORS:</b> {contributors.join("; ")}
//       </div>
//       <div className="timeline-stack">
//         Source: {source}
//       </div>
//     </div>
//   </div>
// ));

// const SectionHeader = ({ icon, children, extra }) => (
//   <div className="section-header">
//     {icon}
//     <span>{children}</span>
//     {extra && <div className="orcid-badge">{extra}</div>}
//   </div>
// );

// const Publications = () => {
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
//       <SectionHeader
//         icon={<FaBook size={30} color="#9067C6" />}
//         extra={
//           <a href={orcidUrl} target="_blank" rel="noreferrer" className="orcid-link">
//             <SiOrcid size={22} style={{ marginRight: "0.4em" }} /> ORCID: {orcidId} 
//           </a>
//         }
//       >
//         Publications
//       </SectionHeader>

//       <div className="timeline-list">
//         {publications.map((pub, i) => (
//           <TimelineCard key={pub.doi} {...pub} />
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
//           padding-left: 56px; /* align text to right edge of dot */
//           position: relative;
//         }
//         .orcid-badge {
//           margin-left: auto;
//           background: #fff;
//           color: #3c6b50;
//           border-radius: 1.2rem;
//           padding: 0.5rem 1.2rem;
//           font-weight: 700;
//           font-size: 1.1rem;
//           display: flex;
//           align-items: center;
//           gap: 0.4rem;
//           white-space: nowrap;
//           text-decoration: none;
//         }
//         .orcid-link {
//           color: #3c6b50;
//           display: flex;
//           align-items: center;
//           text-decoration: none;
//           gap: 0.4rem;
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
//           color: #ccc;
//         }
//         .timeline-details {
//           margin-top: 0.18rem;
//           font-size: 1rem;
//           padding-left: 1.5rem;
//           margin-bottom: 0.5rem;
//           color: #ccc;
//         }
//         .doi-link {
//           color: #81b2ff;
//           text-decoration: underline;
//         }
//         @media (max-width: 650px) {
//           .section-header {
//             margin-top: 7rem;
//             font-size: 1.8rem;
//             padding-left: 17px;
//             flex-wrap: wrap;
//           }
//           .orcid-badge {
//             width: 100%;
//             margin-left: 0;
//             margin-top: 0.8rem;
//             justify-content: flex-start;
//             font-size: 1rem;
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
//           .timeline-rail {
//             width: 17px;
//           }
//         }
//         @media (max-width: 500px) {
//           .exp-awards-root {
//             padding: 0 0.7rem;
//           }
//           .exp-card-dark {
//             margin-left: 1.5rem;
//             padding: 1rem 0.7rem 0.7rem 0.7rem;
//             font-size: 0.9rem;
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

// export default Publications;
import React, { useEffect } from "react";
import { FaBookOpen } from "react-icons/fa"; // changed icon for publication header
import { SiOrcid } from "react-icons/si";

const publications = [
  {
    title: "Dry fruit image classification using stacking ensemble model",
    journal: "Journal of Agriculture and Food Research",
    date: "2025-06",
    type: "Journal article",
    doi: "10.1016/j.jafr.2025.101850",
    doiUrl: "https://doi.org/10.1016/j.jafr.2025.101850",
    contributors: [
      "Maheen Islam", "Mujaidul Islam", "Alfe Suny",
      "Abdullah Al Rafi", "Abdullahi Chowdhury", "Mohammad Manzurul Islam",
      "Saleh Masum", "Md Sawkat Ali", "Taskeed Jabiid", "Md Mostofa Kamal Rasel"
    ],
    source: "Crossref"
  },
  {
    title: "BDMANGO: An image dataset for identifying the variety of mango based on the mango leaves",
    journal: "Data in Brief",
    date: "2025-02",
    type: "Journal article",
    doi: "10.1016/j.dib.2024.111241",
    doiUrl: "https://doi.org/10.1016/j.dib.2024.111241",
    contributors: [
      "Mohammad Manzurul Islam", "Md. Jubayer Ahmed", "Mahmud Bin Shafi", "Aritra Das", "Md. Rakibul Hasan", "Abdullah Al Rafi", "Mohammad Rifat Ahmmad Rashid", "Nishat Tasnim Niloy", "Md. Sawkat Ali", "Abdullahi Chowdhury", "et al."
    ],
    source: "Crossref"
  },
  {
    title: "Enhancing land management policy in Bangladesh: A blockchain-based framework for transparent and efficient land management",
    journal: "Land Use Policy",
    date: "2024-12-17",
    type: "Journal article",
    doi: "10.1016/j.landusepol.2024.107436",
    doiUrl: "https://doi.org/10.1016/j.landusepol.2024.107436",
    contributors: [
      "Mohammad Rifat Ahmmad Rashid", "Abdullah Al Rafi", "Md. Ashraful Islam", "Sifat Ullah Sharkar", "Ziaul Haque Rafi", "Mahamudul Hasan", "Md Sawkat Ali", "M. Saddam Hossain Khan"
    ],
    source: "Abdullah Al Rafi"
  }
];

const orcidId = "0009-0003-8079-6693";
const orcidUrl = "https://orcid.org/0009-0003-8079-6693";

const TimelineCard = React.forwardRef(({ title, journal, date, type, doi, doiUrl, contributors, source }, ref) => (
  <div className="timeline-row">
    <div className="timeline-rail">
      <div className="timeline-dot" />
      <div className="timeline-line" />
    </div>
    <div className="timeline-card exp-card-dark" ref={ref}>
      <div className="timeline-title">{title}</div>
      <div className="timeline-company">
        {journal} | {date} | {type}
      </div>
      <div className="timeline-date">
        DOI: <a href={doiUrl} target="_blank" rel="noreferrer" className="doi-link">{doi}</a>
      </div>
      <div className="timeline-details">
        <b>CONTRIBUTORS:</b> {contributors.join("; ")}
      </div>
      <div className="timeline-stack">
        Source: {source}
      </div>
    </div>
  </div>
));

const SectionHeader = ({ icon, children, extra }) => (
  <div className="section-header">
    {icon}
    <span>{children}</span>
    {extra && <div className="orcid-badge">{extra}</div>}
  </div>
);

const Publications = () => {
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
      <SectionHeader
        icon={<FaBookOpen size={38} color="#9067C6" />}
        extra={
          <a href={orcidUrl} target="_blank" rel="noreferrer" className="orcid-link">
            <SiOrcid size={22} style={{ marginRight: "0.4em" }} /> ORCID: {orcidId}
          </a>
        }
      >
        Publications
      </SectionHeader>

      <div className="timeline-list">
        {publications.map((pub, i) => (
          <TimelineCard key={pub.doi} {...pub} />
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
          font-size: 4.2rem;
          font-weight: 700;
          color: #9067C6;
          letter-spacing: 0.5px;
          margin-top: 12rem;
          margin-bottom: 4rem;
          gap: 1.2rem;
          padding-left: 0;
          justify-content: center;
          position: relative;
        }
        .orcid-badge {
          margin-left: auto;
          background: #fff;
          color: #3c6b50;
          border-radius: 1.2rem;
          padding: 0.5rem 1.2rem;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
          text-decoration: none;
        }
        .orcid-link {
          color: #3c6b50;
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 0.4rem;
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
          color: #ccc;
        }
        .timeline-details {
          margin-top: 0.18rem;
          font-size: 1rem;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: #ccc;
        }
        .doi-link {
          color: #81b2ff;
          text-decoration: underline;
        }
        @media (max-width: 650px) {
          .section-header {
            margin-top: 7rem;
            font-size: 3.4rem;
            padding-left: 17px;
            flex-wrap: wrap;
            justify-content: center;
          }
          .orcid-badge {
            width: 100%;
            margin-left: 0;
            margin-top: 0.8rem;
            justify-content: center;
            font-size: 1rem;
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
          .timeline-rail {
            width: 17px;
          }
        }
        @media (max-width: 500px) {
          .exp-awards-root {
            padding: 0 0.7rem;
          }
          .exp-card-dark {
            margin-left: 1.5rem;
            padding: 1rem 0.7rem 0.7rem 0.7rem;
            font-size: 0.9rem;
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

export default Publications;
