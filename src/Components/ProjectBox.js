import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, descOverride, github, website }) => {
  // Always show Github button, use # if missing
  const githubUrl = github && github.trim() !== "" ? github : "#";

  return (
    <div className='projectBox' style={{
      minHeight: "470px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 4px 24px rgba(144,103,198,0.06)"
    }}>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" style={{ width: "100%", height: "170px", objectFit: "cover", borderRadius: "8px 8px 0 0" }} />
      <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <br />
        <h3 style={{ minHeight: "2.5em" }}>{projectName}</h3>
        <br />
        <div style={{ textAlign: "justify", color: "#ddd", minHeight: "120px", fontSize: "1.05rem" }}>
          {descOverride}
        </div>
        <br />
        {/* Centered and highlighted GitHub button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.2em" }}>
          <a
            href={githubUrl}
            target='_blank'
            rel="noreferrer"
            style={{
              width: "80%",
              textAlign: "center",
              textDecoration: "none"
            }}
          >
            <button
              className='projectbtn'
              style={{
                width: "100%",
                background: "#171515",
                color: "#fff",
                borderRadius: "2rem",
                fontWeight: 700,
                fontSize: "1.12rem",
                boxShadow: "0 2px 12px rgba(144,103,198,0.18)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6em",
                padding: "1rem",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s"
              }}
            >
              <FaGithub style={{ fontSize: "1.45em", verticalAlign: "middle" }} />
              <span style={{ fontWeight: 700, fontSize: "1.14rem", marginLeft: "0.3em" }}>Github</span>
            </button>
          </a>
        </div>
        {website &&
          <div style={{ display: "flex", justifyContent: "center", marginTop: "0.8em" }}>
            <a
              href={website}
              target='_blank'
              rel="noreferrer"
              style={{ width: "80%" }}
            >
              <button
                className='projectbtn'
                style={{
                  background: "#fff",
                  color: "#9067C6",
                  fontWeight: 700,
                  fontSize: "1.09rem",
                  borderRadius: "2rem",
                  width: "100%",
                  padding: "0.9rem",
                  marginTop: 0,
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.6em"
                }}>
                <CgFileDocument style={{ fontSize: "1.18em", verticalAlign: "middle" }} /> Demo
              </button>
            </a>
          </div>
        }
      </div>
    </div>
  )
}

export default ProjectBox;
