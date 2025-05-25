import React from 'react';
import { FaBook, FaExternalLinkAlt } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import Lottie from "lottie-react";
import Tilt from "react-parallax-tilt";
import PublicationLottie from '../LottieFiles/publication.json'; // You can use any relevant animation

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

const Publications = () => {
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

      {/* Publications title with icon and ORCID badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left', marginBottom: '2rem', gap: '1.2rem' }}>
        <FaBook size={40} color="#9067C6" />
        <h1 style={{
          fontSize: '2.5rem',
          color: '#fff',
          fontWeight: 500,
          margin: 0,
          lineHeight: 1.2,
          letterSpacing: "0.5px"
        }}>
          Publications
        </h1>
        <a href={orcidUrl} target="_blank" rel="noreferrer" style={{
          marginLeft: "1.4rem", display: "inline-flex", alignItems: "center",
          background: "#fff", color: "#3c6b50", borderRadius: "1.2rem", padding: "0.5rem 1.2rem", fontWeight: 700, textDecoration: "none", fontSize: "1.1rem"
        }}>
          <SiOrcid size={22} style={{ marginRight: "0.4em" }} /> ORCID: {orcidId}
          <FaExternalLinkAlt size={13} style={{ marginLeft: "0.5em" }} />
        </a>
      </div>

      <div style={{ height: '4rem' }}></div>

      {/* Publications Section with Animation on Right */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        {/* Publications Info */}
        <div style={{ flex: 1 }}>
          {publications.map((pub, idx) => (
            <article
              key={pub.doi}
              style={{
                marginBottom: '2.5rem',
                padding: '1.5rem',
                backgroundColor: 'rgba(144, 103, 198, 0.11)',
                borderRadius: '10px',
                animation: `fadeInUp ${0.6 + idx * 0.13}s ease forwards`,
                opacity: 0,
                border: '1.7px solid #282c34',
                boxShadow: '0 4px 18px 2px rgba(90,90,90,0.03)'
              }}
            >
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.35 }}>
                {pub.title}
              </h2>
              <div style={{ color: "#ccc", margin: "0.55em 0 0.5em 0", fontWeight: 400 }}>
                <span>{pub.journal}</span> | <span>{pub.date}</span> | <span>{pub.type}</span>
              </div>
              <div style={{ color: "#ccc", marginBottom: "0.35em", fontSize: "1.02em" }}>
                DOI: <a href={pub.doiUrl} target="_blank" rel="noreferrer" style={{ color: '#81b2ff', textDecoration: "underline" }}>{pub.doi}</a>
              </div>
              <div style={{ color: "#aaa", fontSize: "0.98em", marginBottom: "0.38em" }}>
                <b>CONTRIBUTORS:</b> {pub.contributors.join("; ")}
              </div>
              <div style={{ color: "#f2e5ff", fontWeight: 500, fontSize: "0.96em" }}>
                Source: {pub.source}
              </div>
            </article>
          ))}
        </div>
        {/* Lottie Animation on Right */}
        <div style={{ flex: '0 0 600px', display: 'flex', justifyContent: 'center' }}>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={PublicationLottie}
              loop={true}
              style={{ width: '440px', height: '440px' }}
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
      `}</style>
    </div>
  );
};

export default Publications;
