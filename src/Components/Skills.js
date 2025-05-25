import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaJava, FaJira, FaDatabase, FaFileExcel, FaBug } from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiPostman, SiVercel, SiPostgresql, SiElasticsearch, SiSelenium, SiJupyter } from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'Python': <FaPython />,
        'Java': <FaJava />,
        'C++': <CgCPlusPlus />,
        'SQL': <FaDatabase />,
        'PostgreSQL': <SiPostgresql />,
        'MongoDB': <SiMongodb />,
        'Elasticsearch': <SiElasticsearch />,
        'Jira': <FaJira />,
        'Jupyter': <SiJupyter />,
        'Excel': <FaFileExcel />,
        'React': <FaReact />,
        'Javascript': <DiJavascript1 />,
        'Node': <DiNodejs />,
        'Express': <SiExpress />,
        'Git': <FaGitAlt />,
        'Github': <FaGithub />,
        'Npm': <FaNpm />,
        'Figma': <FaFigma />,
        'Bootstrap': <FaBootstrap />,
        'Vercel': <SiVercel />,
        'Postman': <SiPostman />,
        'Selenium': <SiSelenium />,
        //'TestNG': <FaBug />, // If you want a bug icon for test frameworks, uncomment this line
    }
    
    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    )
}

export default Skills
