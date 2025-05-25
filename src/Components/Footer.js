// import React from 'react';
// import {FaGithub, FaLinkedin} from "react-icons/fa";
// import {GrMail} from "react-icons/gr";
// import {SiLeetcode} from "react-icons/si"

// const Footer = () => {
//   return (
//     <footer>
//       <h4>Developed by Devansh Sahni</h4>
//       <h4>Copyright &copy; 2023 DS</h4>
//       <div className='footerLinks'>
//         <a href="https://github.com/DevanshSahni" target='_blank'><FaGithub/></a>
//         <a href="https://www.linkedin.com/in/devansh-sahni/" target='_blank'><FaLinkedin/></a>
//         <a href='mailTo:devanshsahni@gmail.com' target='_blank'><GrMail/></a>
//         <a href="https://leetcode.com/sahni1403/" target="_blank"><SiLeetcode/></a>
//       </div>
//     </footer>
//   )
// }

// export default Footer
import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";
import { CgFileDocument } from "react-icons/cg"; // For a CV icon
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Abdullah Al Rafi</h4>
      <h4>Copyright &copy; 2024 AAR</h4>
      <div className='footerLinks'>
        <a href="https://github.com/bytecraft-rafi" target='_blank' rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/rafeeabd" target='_blank' rel="noreferrer"><FaLinkedin /></a>
        <a href="mailto:rafee.zabir@gmail.com" target='_blank' rel="noreferrer"><GrMail /></a>
        {/* <a href="https://leetcode.com/u/radRafi33/" target="_blank" rel="noreferrer"><SiLeetcode /></a> */}
        {/* Add a CV icon that links to your Resume page */}
        {/* <Link to="/Resume" title="View CV" style={{ display: 'inline-flex', alignItems: 'center', color: 'inherit', fontSize: '1.6em' }}>
          <CgFileDocument />
        </Link> */}
      </div>
    </footer>
  )
}

export default Footer;
