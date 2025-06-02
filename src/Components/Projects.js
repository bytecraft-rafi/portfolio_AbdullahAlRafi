// // // // // import React from 'react';
// // // // // import ProjectBox from './ProjectBox';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // import SQA1 from '../images/SeleniumAutomation.png';
// // // // // import SQA2 from '../images/Ecommerce.png';
// // // // // import SQA3 from '../images/POM.png';

// // // // // import Dev1 from '../images/LandManagement.png';
// // // // // import Dev2 from '../images/Healthcare.png';
// // // // // import Dev3 from '../images/Student.png';

// // // // // import ML1 from '../images/DryFruit.png';
// // // // // import ML2 from '../images/Default.png';
// // // // // import ML3 from '../images/Default.png';

// // // // // import DA1 from '../images/Default.png';
// // // // // import DA2 from '../images/Default.png';
// // // // // import DA3 from '../images/Default.png';

// // // // // const githubProfileUrl = "https://github.com/bytecraft-rafi";

// // // // // // --- QA Projects ---
// // // // // const SQAProjects = [
// // // // //   {
// // // // //     projectName: "Healthcare App Testing with Selenium Java",
// // // // //     projectPhoto: SQA1,
// // // // //     github: "https://github.com/bytecraft-rafi/Heathcare_App_Testing_with-Selenium_Java",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "Comprehensive Selenium-based test suite for automating the functional testing of a healthcare web application. Includes positive and negative test cases for authentication, appointments, consultation, UI, and patient features. JDK, Maven, Selenium WebDriver.",
// // // // //   },
// // // // //   {
// // // // //     projectName: "Advanced E-commerce API Testing Suite",
// // // // //     projectPhoto: SQA2,
// // // // //     github: "https://github.com/bytecraft-rafi/Advanced-E-commerce-Platform-API-Testing-Suite",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "Robust API testing framework with RestAssured and TestNG for the Restful-booker API. Supports token-based authentication, CRUD bookings, detailed logging and reports, parallel execution, and data-driven testing. Java 11, TestNG, Maven.",
// // // // //   },
// // // // //   {
// // // // //     projectName: "SauceDemo Test Automation Suite (POM)",
// // // // //     projectPhoto: SQA3,
// // // // //     github: "https://github.com/bytecraft-rafi/SauceDemo_TestAutomationSuitePOM",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "Automated Selenium test scripts for SauceDemo.com with Java, TestNG, and Page Object Model. Covers login, shopping cart, checkout, product sorting, and negative scenarios. Follows industry-standard project structure and best practices.",
// // // // //   },
// // // // // ];

// // // // // // --- Development Projects ---
// // // // // const DevelopmentProjects = [
// // // // //   {
// // // // //     projectName: "Decentralized Land Management System",
// // // // //     projectPhoto: Dev1,
// // // // //     github: "https://github.com/bytecraft-rafi/Land-Management-Advancement",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "A secure, transparent, and efficient platform for managing land records using blockchain technology. Features role-based access control, land allocation, ownership transfer, user management, and transaction history on the Ethereum blockchain. Built with Node.js, Truffle, Ganache, Solidity, React, and MetaMask integration.",
// // // // //   },
// // // // //   {
// // // // //     projectName: "Bondhu | A Healthcare Management System",
// // // // //     projectPhoto: Dev2,
// // // // //     github: "https://github.com/bytecraft-rafi/E_Healthcare_with_Live_Chatbox",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "A full-featured healthcare management platform for mental health support in Bangladesh. Patients and consultants can securely connect, manage consultations, emergency SOS alerts, mental health forums, prescriptions, and progress recovery—all with strong privacy controls. Built with Django, PostgreSQL, HTML/CSS/JS.",
// // // // //   },
// // // // //   {
// // // // //     projectName: "Student Enrollment Web Application",
// // // // //     projectPhoto: Dev3,
// // // // //     github: "https://github.com/bytecraft-rafi/Student_Enrollment_System",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "A web app streamlining student enrollment and management for admins and students. Includes secure login, profile management, enrollment forms, dashboard analytics, course registration, file upload, CSV export, and password reset. Built with PHP, MySQL, HTML, CSS, JS.",
// // // // //   },
// // // // // ];

// // // // // // --- ML / Data Science Projects ---
// // // // // const MLProjects = [
// // // // //   {
// // // // //     projectName: "DryFruitClassification-Modified",
// // // // //     projectPhoto: ML1,
// // // // //     github: "https://github.com/bytecraft-rafi/DryFruitClassification-Modified",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "Deep learning image classification for 12 dry fruit classes using a stacking ensemble of MobileNetV1/V2, SqueezeNet, and ShuffleNetV2. Achieved 98.3% test accuracy and real-time inference speed.",
// // // // //   },
// // // // //   {
// // // // //     projectName: "Student Performance Analysis Dashboard",
// // // // //     projectPhoto: ML2,
// // // // //     github: "#",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "A dashboard for visualizing and analyzing student performance data, using Python and Tableau to deliver actionable insights for educational improvement.",
// // // // //   },
// // // // //   {
// // // // //     projectName: "Market Basket Analysis Tool",
// // // // //     projectPhoto: ML3,
// // // // //     github: "#",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "Python tool for analyzing retail basket data and recommending product bundles using association rule mining and interactive data visualizations.",
// // // // //   },
// // // // // ];

// // // // // // --- Data Analytics Projects ---
// // // // // const DataAnalyticsProjects = [
// // // // //   {
// // // // //     projectName: "Sales Forecasting Dashboard",
// // // // //     projectPhoto: DA1,
// // // // //     github: "#",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "Developed a Power BI dashboard that forecasts monthly sales, visualizes KPIs, and provides insights into seasonal trends. Integrated advanced analytics for demand prediction.",
// // // // //   },
// // // // //   {
// // // // //     projectName: "Customer Churn Prediction",
// // // // //     projectPhoto: DA2,
// // // // //     github: "#",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "Machine learning model to predict customer churn using logistic regression and XGBoost. Automated feature engineering and SHAP-based interpretability for business strategy.",
// // // // //   },
// // // // //   {
// // // // //     projectName: "Financial Statement Analysis Tool",
// // // // //     projectPhoto: DA3,
// // // // //     github: "#",
// // // // //     website: "",
// // // // //     desc:
// // // // //       "Automated analysis of financial statements for SMEs, including ratio analysis, trend visualization, and anomaly detection with Python and Excel.",
// // // // //   },
// // // // // ];

// // // // // // ---------- Section renderer ----------
// // // // // function Section({ title, projects }) {
// // // // //   return (
// // // // //     <>
// // // // //       <h1 className='projectHeading'>Projects - <b>{title}</b></h1>
// // // // //       <div
// // // // //         className='project'
// // // // //         style={{
// // // // //           display: "flex",
// // // // //           flexWrap: "wrap",
// // // // //           gap: "2rem",
// // // // //           justifyContent: "center",
// // // // //           alignItems: "stretch",
// // // // //           minHeight: "480px"
// // // // //         }}>
// // // // //         {projects.map(project => (
// // // // //           <div
// // // // //             key={project.projectName}
// // // // //             style={{
// // // // //               minWidth: "350px",
// // // // //               maxWidth: "350px",
// // // // //               minHeight: "470px",
// // // // //               display: "flex"
// // // // //             }}
// // // // //           >
// // // // //             <ProjectBox
// // // // //               projectPhoto={project.projectPhoto}
// // // // //               projectName={project.projectName}
// // // // //               descOverride={project.desc}
// // // // //               github={project.github}
// // // // //               website={project.website}
// // // // //             />
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //       <div style={{ textAlign: "center", margin: "2rem 0 4rem 0" }}>
// // // // //         <a href={githubProfileUrl} target="_blank" rel="noreferrer">
// // // // //           <button className='projectbtn' style={{ fontWeight: 600, fontSize: "1.1rem" }}>
// // // // //             Show more
// // // // //           </button>
// // // // //         </a>
// // // // //       </div>
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // const Projects = () => {
// // // // //   const navigate = useNavigate();
// // // // //   return (
// // // // //     <div style={{ paddingBottom: "4rem" }}>
// // // // //       <div style={{ height: '8rem' }}></div>
// // // // //       <Section title="Software Quality Assurance" projects={SQAProjects} />
// // // // //       <Section title="Development" projects={DevelopmentProjects} />
// // // // //       <Section title="ML / Data Science" projects={MLProjects} />
// // // // //       <Section title="Data Analytics" projects={DataAnalyticsProjects} />
// // // // //       <div style={{ textAlign: "center", margin: "2.5rem 0 0 0" }}>
// // // // //         <button
// // // // //           className='projectbtn'
// // // // //           style={{
// // // // //             fontWeight: 700,
// // // // //             fontSize: "1.2rem",
// // // // //             background: "#9067C6",
// // // // //             color: "#fff",
// // // // //             padding: "1rem 2.5rem",
// // // // //             borderRadius: "2rem",
// // // // //             marginTop: "1rem"
// // // // //           }}
// // // // //           onClick={() => navigate("/About#contact")}
// // // // //         >
// // // // //           Open for collaborations
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Projects;
// // // // import React from 'react';
// // // // import ProjectBox from './ProjectBox';
// // // // import { useNavigate } from 'react-router-dom';

// // // // import SQA1 from '../images/SeleniumAutomation.png';
// // // // import SQA2 from '../images/Ecommerce.png';
// // // // import SQA3 from '../images/POM.png';

// // // // import Dev1 from '../images/LandManagement.png';
// // // // import Dev2 from '../images/Healthcare.png';
// // // // import Dev3 from '../images/Student.png';

// // // // import ML1 from '../images/DryFruit.png';
// // // // import ML2 from '../images/Default.png';
// // // // import ML3 from '../images/Default.png';

// // // // import DA1 from '../images/Default.png';
// // // // import DA2 from '../images/Default.png';
// // // // import DA3 from '../images/Default.png';

// // // // const githubProfileUrl = "https://github.com/bytecraft-rafi";

// // // // // --- QA Projects ---
// // // // const SQAProjects = [
// // // //   {
// // // //     projectName: "Healthcare App Testing with Selenium Java",
// // // //     projectPhoto: SQA1,
// // // //     github: "https://github.com/bytecraft-rafi/Heathcare_App_Testing_with-Selenium_Java",
// // // //     website: "",
// // // //     desc:
// // // //       "Comprehensive Selenium-based test suite for automating the functional testing of a healthcare web application. Includes positive and negative test cases for authentication, appointments, consultation, UI, and patient features. JDK, Maven, Selenium WebDriver.",
// // // //   },
// // // //   {
// // // //     projectName: "Advanced E-commerce API Testing Suite",
// // // //     projectPhoto: SQA2,
// // // //     github: "https://github.com/bytecraft-rafi/Advanced-E-commerce-Platform-API-Testing-Suite",
// // // //     website: "",
// // // //     desc:
// // // //       "Robust API testing framework with RestAssured and TestNG for the Restful-booker API. Supports token-based authentication, CRUD bookings, detailed logging and reports, parallel execution, and data-driven testing. Java 11, TestNG, Maven.",
// // // //   },
// // // //   {
// // // //     projectName: "SauceDemo Test Automation Suite (POM)",
// // // //     projectPhoto: SQA3,
// // // //     github: "https://github.com/bytecraft-rafi/SauceDemo_TestAutomationSuitePOM",
// // // //     website: "",
// // // //     desc:
// // // //       "Automated Selenium test scripts for SauceDemo.com with Java, TestNG, and Page Object Model. Covers login, shopping cart, checkout, product sorting, and negative scenarios. Follows industry-standard project structure and best practices.",
// // // //   },
// // // // ];

// // // // // --- Development Projects ---
// // // // const DevelopmentProjects = [
// // // //   {
// // // //     projectName: "Decentralized Land Management System",
// // // //     projectPhoto: Dev1,
// // // //     github: "https://github.com/bytecraft-rafi/Land-Management-Advancement",
// // // //     website: "",
// // // //     desc:
// // // //       "A secure, transparent, and efficient platform for managing land records using blockchain technology. Features role-based access control, land allocation, ownership transfer, user management, and transaction history on the Ethereum blockchain. Built with Node.js, Truffle, Ganache, Solidity, React, and MetaMask integration.",
// // // //   },
// // // //   {
// // // //     projectName: "Bondhu | A Healthcare Management System",
// // // //     projectPhoto: Dev2,
// // // //     github: "https://github.com/bytecraft-rafi/E_Healthcare_with_Live_Chatbox",
// // // //     website: "",
// // // //     desc:
// // // //       "A full-featured healthcare management platform for mental health support in Bangladesh. Patients and consultants can securely connect, manage consultations, emergency SOS alerts, mental health forums, prescriptions, and progress recovery—all with strong privacy controls. Built with Django, PostgreSQL, HTML/CSS/JS.",
// // // //   },
// // // //   {
// // // //     projectName: "Student Enrollment Web Application",
// // // //     projectPhoto: Dev3,
// // // //     github: "https://github.com/bytecraft-rafi/Student_Enrollment_System",
// // // //     website: "",
// // // //     desc:
// // // //       "A web app streamlining student enrollment and management for admins and students. Includes secure login, profile management, enrollment forms, dashboard analytics, course registration, file upload, CSV export, and password reset. Built with PHP, MySQL, HTML, CSS, JS.",
// // // //   },
// // // // ];

// // // // // --- ML / Data Science Projects ---
// // // // const MLProjects = [
// // // //   {
// // // //     projectName: "DryFruitClassification-Modified",
// // // //     projectPhoto: ML1,
// // // //     github: "https://github.com/bytecraft-rafi/DryFruitClassification-Modified",
// // // //     website: "",
// // // //     desc:
// // // //       "Deep learning image classification for 12 dry fruit classes using a stacking ensemble of MobileNetV1/V2, SqueezeNet, and ShuffleNetV2. Achieved 98.3% test accuracy and real-time inference speed.",
// // // //   },
// // // //   {
// // // //     projectName: "Student Performance Analysis Dashboard",
// // // //     projectPhoto: ML2,
// // // //     github: "#",
// // // //     website: "",
// // // //     desc:
// // // //       "A dashboard for visualizing and analyzing student performance data, using Python and Tableau to deliver actionable insights for educational improvement.",
// // // //   },
// // // //   {
// // // //     projectName: "Market Basket Analysis Tool",
// // // //     projectPhoto: ML3,
// // // //     github: "#",
// // // //     website: "",
// // // //     desc:
// // // //       "Python tool for analyzing retail basket data and recommending product bundles using association rule mining and interactive data visualizations.",
// // // //   },
// // // // ];

// // // // // --- Data Analytics Projects ---
// // // // const DataAnalyticsProjects = [
// // // //   {
// // // //     projectName: "Sales Forecasting Dashboard",
// // // //     projectPhoto: DA1,
// // // //     github: "#",
// // // //     website: "",
// // // //     desc:
// // // //       "Developed a Power BI dashboard that forecasts monthly sales, visualizes KPIs, and provides insights into seasonal trends. Integrated advanced analytics for demand prediction.",
// // // //   },
// // // //   {
// // // //     projectName: "Customer Churn Prediction",
// // // //     projectPhoto: DA2,
// // // //     github: "#",
// // // //     website: "",
// // // //     desc:
// // // //       "Machine learning model to predict customer churn using logistic regression and XGBoost. Automated feature engineering and SHAP-based interpretability for business strategy.",
// // // //   },
// // // //   {
// // // //     projectName: "Financial Statement Analysis Tool",
// // // //     projectPhoto: DA3,
// // // //     github: "#",
// // // //     website: "",
// // // //     desc:
// // // //       "Automated analysis of financial statements for SMEs, including ratio analysis, trend visualization, and anomaly detection with Python and Excel.",
// // // //   },
// // // // ];

// // // // // Section and Projects components here (use the improved versions I gave you earlier)

// // // // function Section({ title, projects }) {
// // // //   return (
// // // //     <>
// // // //       <h1 className='projectHeading'>Projects - <b>{title}</b></h1>
// // // //       <div className='project'>
// // // //         {projects.map(project => (
// // // //           <ProjectBox
// // // //             key={project.projectName}
// // // //             projectPhoto={project.projectPhoto}
// // // //             projectName={project.projectName}
// // // //             descOverride={project.desc}
// // // //             github={project.github}
// // // //             website={project.website}
// // // //           />
// // // //         ))}
// // // //       </div>
// // // //       <div className="section-btn-container">
// // // //         <a href={githubProfileUrl} target="_blank" rel="noreferrer">
// // // //           <button className='projectbtn show-more-btn'>Show more</button>
// // // //         </a>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // // const Projects = () => {
// // // //   const navigate = useNavigate();
// // // //   return (
// // // //     <div className="projects-root">
// // // //       <div className="spacer" />
// // // //       <Section title="Software Quality Assurance" projects={SQAProjects} />
// // // //       <Section title="Development" projects={DevelopmentProjects} />
// // // //       <Section title="ML / Data Science" projects={MLProjects} />
// // // //       <Section title="Data Analytics" projects={DataAnalyticsProjects} />
// // // //       <div className="collab-btn-container">
// // // //         <button
// // // //           className='projectbtn collab-btn'
// // // //           onClick={() => navigate("/About#contact")}
// // // //         >
// // // //           Open for collaborations
// // // //         </button>
// // // //       </div>

// // // //       {/* Your styles here as shown in the previous message */}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Projects;
// // // import React from 'react';
// // // import ProjectBox from './ProjectBox';
// // // import { useNavigate } from 'react-router-dom';
// // // import { FaProjectDiagram } from 'react-icons/fa';

// // // import SQA1 from '../images/SeleniumAutomation.png';
// // // import SQA2 from '../images/Ecommerce.png';
// // // import SQA3 from '../images/POM.png';

// // // import Dev1 from '../images/LandManagement.png';
// // // import Dev2 from '../images/Healthcare.png';
// // // import Dev3 from '../images/Student.png';

// // // import ML1 from '../images/DryFruit.png';
// // // import ML2 from '../images/Default.png';
// // // import ML3 from '../images/Default.png';

// // // import DA1 from '../images/Default.png';
// // // import DA2 from '../images/Default.png';
// // // import DA3 from '../images/Default.png';

// // // const githubProfileUrl = "https://github.com/bytecraft-rafi";

// // // // --- Project Arrays ---
// // // const SQAProjects = [
// // //   {
// // //     projectName: "Healthcare App Testing with Selenium Java",
// // //     projectPhoto: SQA1,
// // //     github: "https://github.com/bytecraft-rafi/Heathcare_App_Testing_with-Selenium_Java",
// // //     website: "",
// // //     desc:
// // //       "Comprehensive Selenium-based test suite for automating the functional testing of a healthcare web application. Includes positive and negative test cases for authentication, appointments, consultation, UI, and patient features. JDK, Maven, Selenium WebDriver.",
// // //   },
// // //   {
// // //     projectName: "Advanced E-commerce API Testing Suite",
// // //     projectPhoto: SQA2,
// // //     github: "https://github.com/bytecraft-rafi/Advanced-E-commerce-Platform-API-Testing-Suite",
// // //     website: "",
// // //     desc:
// // //       "Robust API testing framework with RestAssured and TestNG for the Restful-booker API. Supports token-based authentication, CRUD bookings, detailed logging and reports, parallel execution, and data-driven testing. Java 11, TestNG, Maven.",
// // //   },
// // //   {
// // //     projectName: "SauceDemo Test Automation Suite (POM)",
// // //     projectPhoto: SQA3,
// // //     github: "https://github.com/bytecraft-rafi/SauceDemo_TestAutomationSuitePOM",
// // //     website: "",
// // //     desc:
// // //       "Automated Selenium test scripts for SauceDemo.com with Java, TestNG, and Page Object Model. Covers login, shopping cart, checkout, product sorting, and negative scenarios. Follows industry-standard project structure and best practices.",
// // //   },
// // // ];

// // // const DevelopmentProjects = [
// // //   {
// // //     projectName: "Decentralized Land Management System",
// // //     projectPhoto: Dev1,
// // //     github: "https://github.com/bytecraft-rafi/Land-Management-Advancement",
// // //     website: "",
// // //     desc:
// // //       "A secure, transparent, and efficient platform for managing land records using blockchain technology. Features role-based access control, land allocation, ownership transfer, user management, and transaction history on the Ethereum blockchain. Built with Node.js, Truffle, Ganache, Solidity, React, and MetaMask integration.",
// // //   },
// // //   {
// // //     projectName: "Bondhu | A Healthcare Management System",
// // //     projectPhoto: Dev2,
// // //     github: "https://github.com/bytecraft-rafi/E_Healthcare_with_Live_Chatbox",
// // //     website: "",
// // //     desc:
// // //       "A full-featured healthcare management platform for mental health support in Bangladesh. Patients and consultants can securely connect, manage consultations, emergency SOS alerts, mental health forums, prescriptions, and progress recovery—all with strong privacy controls. Built with Django, PostgreSQL, HTML/CSS/JS.",
// // //   },
// // //   {
// // //     projectName: "Student Enrollment Web Application",
// // //     projectPhoto: Dev3,
// // //     github: "https://github.com/bytecraft-rafi/Student_Enrollment_System",
// // //     website: "",
// // //     desc:
// // //       "A web app streamlining student enrollment and management for admins and students. Includes secure login, profile management, enrollment forms, dashboard analytics, course registration, file upload, CSV export, and password reset. Built with PHP, MySQL, HTML, CSS, JS.",
// // //   },
// // // ];

// // // const MLProjects = [
// // //   {
// // //     projectName: "DryFruitClassification-Modified",
// // //     projectPhoto: ML1,
// // //     github: "https://github.com/bytecraft-rafi/DryFruitClassification-Modified",
// // //     website: "",
// // //     desc:
// // //       "Deep learning image classification for 12 dry fruit classes using a stacking ensemble of MobileNetV1/V2, SqueezeNet, and ShuffleNetV2. Achieved 98.3% test accuracy and real-time inference speed.",
// // //   },
// // //   {
// // //     projectName: "Student Performance Analysis Dashboard",
// // //     projectPhoto: ML2,
// // //     github: "#",
// // //     website: "",
// // //     desc:
// // //       "A dashboard for visualizing and analyzing student performance data, using Python and Tableau to deliver actionable insights for educational improvement.",
// // //   },
// // //   {
// // //     projectName: "Market Basket Analysis Tool",
// // //     projectPhoto: ML3,
// // //     github: "#",
// // //     website: "",
// // //     desc:
// // //       "Python tool for analyzing retail basket data and recommending product bundles using association rule mining and interactive data visualizations.",
// // //   },
// // // ];

// // // const DataAnalyticsProjects = [
// // //   {
// // //     projectName: "Sales Forecasting Dashboard",
// // //     projectPhoto: DA1,
// // //     github: "#",
// // //     website: "",
// // //     desc:
// // //       "Developed a Power BI dashboard that forecasts monthly sales, visualizes KPIs, and provides insights into seasonal trends. Integrated advanced analytics for demand prediction.",
// // //   },
// // //   {
// // //     projectName: "Customer Churn Prediction",
// // //     projectPhoto: DA2,
// // //     github: "#",
// // //     website: "",
// // //     desc:
// // //       "Machine learning model to predict customer churn using logistic regression and XGBoost. Automated feature engineering and SHAP-based interpretability for business strategy.",
// // //   },
// // //   {
// // //     projectName: "Financial Statement Analysis Tool",
// // //     projectPhoto: DA3,
// // //     github: "#",
// // //     website: "",
// // //     desc:
// // //       "Automated analysis of financial statements for SMEs, including ratio analysis, trend visualization, and anomaly detection with Python and Excel.",
// // //   },
// // // ];

// // // // ---------- Section renderer ----------
// // // function Section({ title, projects }) {
// // //   return (
// // //     <>
// // //       <h2 className='subsection-header'>{title}</h2>
// // //       <div className='project'>
// // //         {projects.map(project => (
// // //           <ProjectBox
// // //             key={project.projectName}
// // //             projectPhoto={project.projectPhoto}
// // //             projectName={project.projectName}
// // //             descOverride={project.desc}
// // //             github={project.github}
// // //             website={project.website}
// // //           />
// // //         ))}
// // //       </div>
// // //       <div className="section-btn-container">
// // //         <a href={githubProfileUrl} target="_blank" rel="noreferrer">
// // //           <button className='projectbtn show-more-btn'>Show more</button>
// // //         </a>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // const Projects = () => {
// // //   const navigate = useNavigate();
// // //   return (
// // //     <div className="projects-root">
// // //       <div className="spacer" />
// // //       <header className="main-header">
// // //         <FaProjectDiagram size={40} color="#9067C6" style={{ marginRight: "0.5rem" }} />
// // //         <h1>Projects</h1>
// // //       </header>

// // //       <Section title="Software Quality Assurance" projects={SQAProjects} />
// // //       <Section title="Development" projects={DevelopmentProjects} />
// // //       <Section title="ML / Data Science" projects={MLProjects} />
// // //       <Section title="Data Analytics" projects={DataAnalyticsProjects} />

// // //       <div className="collab-btn-container">
// // //         <button
// // //           className='projectbtn collab-btn'
// // //           onClick={() => navigate("/About#contact")}
// // //         >
// // //           Open for collaborations
// // //         </button>
// // //       </div>

// // //       <style>{`
// // //         .projects-root {
// // //           padding-bottom: 4rem;
// // //           max-width: 1200px;
// // //           margin: 0 auto;
// // //           padding-left: 1rem;
// // //           padding-right: 1rem;
// // //           color: #f0f0f0;
// // //           font-family: 'Poppins', sans-serif;
// // //         }
// // //         .spacer {
// // //           height: 8rem;
// // //         }
// // //         .main-header {
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           font-size: 2.5rem;
// // //           font-weight: 700;
// // //           color: #9067C6;
// // //           margin-bottom: 3rem;
// // //           gap: 0.5rem;
// // //           text-align: center;
// // //         }
// // //         .main-header h1 {
// // //           margin: 0;
// // //         }
// // //         .subsection-header {
// // //           font-size: 1.6rem;
// // //           font-weight: 600;
// // //           color: #b3a5f5;
// // //           text-align: center;
// // //           margin-bottom: 2rem;
// // //           margin-top: 3rem;
// // //           letter-spacing: 0.02em;
// // //         }
// // //         .project {
// // //           display: flex;
// // //           flex-wrap: wrap;
// // //           gap: 2rem;
// // //           justify-content: center;
// // //           align-items: stretch;
// // //           min-height: 480px;
// // //         }
// // //         .section-btn-container {
// // //           text-align: center;
// // //           margin: 2rem 0 4rem 0;
// // //         }
// // //         .show-more-btn {
// // //           font-weight: 600;
// // //           font-size: 1.1rem;
// // //           padding: 0.8rem 2rem;
// // //           border-radius: 2rem;
// // //           background: #9067C6;
// // //           color: white;
// // //           border: none;
// // //           cursor: pointer;
// // //           transition: background-color 0.3s ease;
// // //         }
// // //         .show-more-btn:hover {
// // //           background: #7b54b7;
// // //         }
// // //         .collab-btn-container {
// // //           text-align: center;
// // //           margin: 2.5rem 0 0 0;
// // //         }
// // //         .collab-btn {
// // //           font-weight: 700;
// // //           font-size: 1.2rem;
// // //           background: #9067C6;
// // //           color: #fff;
// // //           padding: 1rem 2.5rem;
// // //           border-radius: 2rem;
// // //           border: none;
// // //           cursor: pointer;
// // //           transition: background-color 0.3s ease;
// // //         }
// // //         .collab-btn:hover {
// // //           background: #7b54b7;
// // //         }
// // //         @media (max-width: 650px) {
// // //           .subsection-header {
// // //             font-size: 1.3rem;
// // //             margin-top: 2rem;
// // //           }
// // //           .project {
// // //             min-height: auto;
// // //             gap: 1rem;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default Projects;
// // import React from 'react';
// // import ProjectBox from './ProjectBox';
// // import { useNavigate } from 'react-router-dom';
// // import { FaProjectDiagram } from 'react-icons/fa';

// // import SQA1 from '../images/SeleniumAutomation.png';
// // import SQA2 from '../images/Ecommerce.png';
// // import SQA3 from '../images/POM.png';

// // import Dev1 from '../images/LandManagement.png';
// // import Dev2 from '../images/Healthcare.png';
// // import Dev3 from '../images/Student.png';

// // import ML1 from '../images/DryFruit.png';
// // import ML2 from '../images/Default.png';
// // import ML3 from '../images/Default.png';

// // import DA1 from '../images/Default.png';
// // import DA2 from '../images/Default.png';
// // import DA3 from '../images/Default.png';

// // const githubProfileUrl = "https://github.com/bytecraft-rafi";

// // // --- Projects Data ---
// // const SQAProjects = [
// //   {
// //     projectName: "Healthcare App Testing with Selenium Java",
// //     projectPhoto: SQA1,
// //     github: "https://github.com/bytecraft-rafi/Heathcare_App_Testing_with-Selenium_Java",
// //     website: "",
// //     desc:
// //       "Comprehensive Selenium-based test suite for automating the functional testing of a healthcare web application. Includes positive and negative test cases for authentication, appointments, consultation, UI, and patient features. JDK, Maven, Selenium WebDriver.",
// //   },
// //   {
// //     projectName: "Advanced E-commerce API Testing Suite",
// //     projectPhoto: SQA2,
// //     github: "https://github.com/bytecraft-rafi/Advanced-E-commerce-Platform-API-Testing-Suite",
// //     website: "",
// //     desc:
// //       "Robust API testing framework with RestAssured and TestNG for the Restful-booker API. Supports token-based authentication, CRUD bookings, detailed logging and reports, parallel execution, and data-driven testing. Java 11, TestNG, Maven.",
// //   },
// //   {
// //     projectName: "SauceDemo Test Automation Suite (POM)",
// //     projectPhoto: SQA3,
// //     github: "https://github.com/bytecraft-rafi/SauceDemo_TestAutomationSuitePOM",
// //     website: "",
// //     desc:
// //       "Automated Selenium test scripts for SauceDemo.com with Java, TestNG, and Page Object Model. Covers login, shopping cart, checkout, product sorting, and negative scenarios. Follows industry-standard project structure and best practices.",
// //   },
// // ];

// // const DevelopmentProjects = [
// //   {
// //     projectName: "Decentralized Land Management System",
// //     projectPhoto: Dev1,
// //     github: "https://github.com/bytecraft-rafi/Land-Management-Advancement",
// //     website: "",
// //     desc:
// //       "A secure, transparent, and efficient platform for managing land records using blockchain technology. Features role-based access control, land allocation, ownership transfer, user management, and transaction history on the Ethereum blockchain. Built with Node.js, Truffle, Ganache, Solidity, React, and MetaMask integration.",
// //   },
// //   {
// //     projectName: "Bondhu | A Healthcare Management System",
// //     projectPhoto: Dev2,
// //     github: "https://github.com/bytecraft-rafi/E_Healthcare_with_Live_Chatbox",
// //     website: "",
// //     desc:
// //       "A full-featured healthcare management platform for mental health support in Bangladesh. Patients and consultants can securely connect, manage consultations, emergency SOS alerts, mental health forums, prescriptions, and progress recovery—all with strong privacy controls. Built with Django, PostgreSQL, HTML/CSS/JS.",
// //   },
// //   {
// //     projectName: "Student Enrollment Web Application",
// //     projectPhoto: Dev3,
// //     github: "https://github.com/bytecraft-rafi/Student_Enrollment_System",
// //     website: "",
// //     desc:
// //       "A web app streamlining student enrollment and management for admins and students. Includes secure login, profile management, enrollment forms, dashboard analytics, course registration, file upload, CSV export, and password reset. Built with PHP, MySQL, HTML, CSS, JS.",
// //   },
// // ];

// // const MLProjects = [
// //   {
// //     projectName: "DryFruitClassification-Modified",
// //     projectPhoto: ML1,
// //     github: "https://github.com/bytecraft-rafi/DryFruitClassification-Modified",
// //     website: "",
// //     desc:
// //       "Deep learning image classification for 12 dry fruit classes using a stacking ensemble of MobileNetV1/V2, SqueezeNet, and ShuffleNetV2. Achieved 98.3% test accuracy and real-time inference speed.",
// //   },
// //   {
// //     projectName: "Student Performance Analysis Dashboard",
// //     projectPhoto: ML2,
// //     github: "#",
// //     website: "",
// //     desc:
// //       "A dashboard for visualizing and analyzing student performance data, using Python and Tableau to deliver actionable insights for educational improvement.",
// //   },
// //   {
// //     projectName: "Market Basket Analysis Tool",
// //     projectPhoto: ML3,
// //     github: "#",
// //     website: "",
// //     desc:
// //       "Python tool for analyzing retail basket data and recommending product bundles using association rule mining and interactive data visualizations.",
// //   },
// // ];

// // const DataAnalyticsProjects = [
// //   {
// //     projectName: "Sales Forecasting Dashboard",
// //     projectPhoto: DA1,
// //     github: "#",
// //     website: "",
// //     desc:
// //       "Developed a Power BI dashboard that forecasts monthly sales, visualizes KPIs, and provides insights into seasonal trends. Integrated advanced analytics for demand prediction.",
// //   },
// //   {
// //     projectName: "Customer Churn Prediction",
// //     projectPhoto: DA2,
// //     github: "#",
// //     website: "",
// //     desc:
// //       "Machine learning model to predict customer churn using logistic regression and XGBoost. Automated feature engineering and SHAP-based interpretability for business strategy.",
// //   },
// //   {
// //     projectName: "Financial Statement Analysis Tool",
// //     projectPhoto: DA3,
// //     github: "#",
// //     website: "",
// //     desc:
// //       "Automated analysis of financial statements for SMEs, including ratio analysis, trend visualization, and anomaly detection with Python and Excel.",
// //   },
// // ];

// // // Section component for rendering project lists
// // function Section({ title, projects }) {
// //   return (
// //     <>
// //       <h1 className='projectHeading'>Projects - <b>{title}</b></h1>
// //       <div className='project'>
// //         {projects.map(project => (
// //           <ProjectBox
// //             key={project.projectName}
// //             projectPhoto={project.projectPhoto}
// //             projectName={project.projectName}
// //             descOverride={project.desc}
// //             github={project.github}
// //             website={project.website}
// //           />
// //         ))}
// //       </div>
// //       <div className="section-btn-container">
// //         <a href={githubProfileUrl} target="_blank" rel="noreferrer">
// //           <button className='projectbtn show-more-btn'>Show more</button>
// //         </a>
// //       </div>
// //     </>
// //   );
// // }

// // const Projects = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <div className="projects-root">
// //       <div className="spacer" />

// //       <Section title="Software Quality Assurance" projects={SQAProjects} />
// //       <Section title="Development" projects={DevelopmentProjects} />
// //       <Section title="ML / Data Science" projects={MLProjects} />
// //       <Section title="Data Analytics" projects={DataAnalyticsProjects} />

// //       <div className="collab-btn-container">
// //         <button
// //           className='projectbtn collab-btn'
// //           onClick={() => navigate("/About#contact")}
// //         >
// //           Open for collaborations
// //         </button>
// //       </div>

// //       <style>{`
// //         .projects-root {
// //           padding-bottom: 4rem;
// //           max-width: 1000px;
// //           margin: 0 auto;
// //           padding: 0 2.5rem;
// //           font-family: 'Raleway', 'Poppins', sans-serif;
// //           color: #f0f0f0;
// //         }
// //         .spacer {
// //           height: 8rem;
// //         }
// //         .projectHeading {
// //           font-size: 2.2rem;
// //           font-weight: 700;
// //           color: #9067C6;
// //           margin-bottom: 3rem;
// //           margin-left: 3rem;
// //         }
// //         .project {
// //           display: flex;
// //           flex-wrap: wrap;
// //           gap: 2rem;
// //           justify-content: flex-start;
// //           align-items: stretch;
// //           min-height: 480px;
// //         }
// //         .section-btn-container {
// //           text-align: center;
// //           margin: 2rem 0 4rem 0;
// //         }
// //         .show-more-btn {
// //           font-weight: 600;
// //           font-size: 1.1rem;
// //           padding: 0.8rem 2rem;
// //           border-radius: 2rem;
// //           background: #9067C6;
// //           color: white;
// //           border: none;
// //           cursor: pointer;
// //           transition: background-color 0.3s ease;
// //         }
// //         .show-more-btn:hover {
// //           background: #7b54b7;
// //         }
// //         .collab-btn-container {
// //           text-align: center;
// //           margin: 2.5rem 0 0 0;
// //         }
// //         .collab-btn {
// //           font-weight: 700;
// //           font-size: 1.2rem;
// //           background: #9067C6;
// //           color: #fff;
// //           padding: 1rem 2.5rem;
// //           border-radius: 2rem;
// //           border: none;
// //           cursor: pointer;
// //           transition: background-color 0.3s ease;
// //         }
// //         .collab-btn:hover {
// //           background: #7b54b7;
// //         }
// //         @media (min-width: 1024px) {
// //           .project {
// //             justify-content: flex-start;
// //           }
// //         }
// //         @media (max-width: 650px) {
// //           .projectHeading {
// //             margin-left: 1rem;
// //           }
// //           .project {
// //             min-height: auto;
// //             gap: 1rem;
// //             justify-content: center;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Projects;
// import React from 'react';
// import ProjectBox from './ProjectBox';
// import { useNavigate } from 'react-router-dom';
// import { FaProjectDiagram } from 'react-icons/fa';

// import SQA1 from '../images/SeleniumAutomation.png';
// import SQA2 from '../images/Ecommerce.png';
// import SQA3 from '../images/POM.png';

// import Dev1 from '../images/LandManagement.png';
// import Dev2 from '../images/Healthcare.png';
// import Dev3 from '../images/Student.png';

// import ML1 from '../images/DryFruit.png';
// import ML2 from '../images/Default.png';
// import ML3 from '../images/Default.png';

// import DA1 from '../images/Default.png';
// import DA2 from '../images/Default.png';
// import DA3 from '../images/Default.png';

// const githubProfileUrl = "https://github.com/bytecraft-rafi";

// // --- Project Data Arrays ---
// const SQAProjects = [
//   {
//     projectName: "Healthcare App Testing with Selenium Java",
//     projectPhoto: SQA1,
//     github: "https://github.com/bytecraft-rafi/Heathcare_App_Testing_with-Selenium_Java",
//     website: "",
//     desc:
//       "Comprehensive Selenium-based test suite for automating the functional testing of a healthcare web application. Includes positive and negative test cases for authentication, appointments, consultation, UI, and patient features. JDK, Maven, Selenium WebDriver.",
//   },
//   {
//     projectName: "Advanced E-commerce API Testing Suite",
//     projectPhoto: SQA2,
//     github: "https://github.com/bytecraft-rafi/Advanced-E-commerce-Platform-API-Testing-Suite",
//     website: "",
//     desc:
//       "Robust API testing framework with RestAssured and TestNG for the Restful-booker API. Supports token-based authentication, CRUD bookings, detailed logging and reports, parallel execution, and data-driven testing. Java 11, TestNG, Maven.",
//   },
//   {
//     projectName: "SauceDemo Test Automation Suite (POM)",
//     projectPhoto: SQA3,
//     github: "https://github.com/bytecraft-rafi/SauceDemo_TestAutomationSuitePOM",
//     website: "",
//     desc:
//       "Automated Selenium test scripts for SauceDemo.com with Java, TestNG, and Page Object Model. Covers login, shopping cart, checkout, product sorting, and negative scenarios. Follows industry-standard project structure and best practices.",
//   },
// ];

// const DevelopmentProjects = [
//   {
//     projectName: "Decentralized Land Management System",
//     projectPhoto: Dev1,
//     github: "https://github.com/bytecraft-rafi/Land-Management-Advancement",
//     website: "",
//     desc:
//       "A secure, transparent, and efficient platform for managing land records using blockchain technology. Features role-based access control, land allocation, ownership transfer, user management, and transaction history on the Ethereum blockchain. Built with Node.js, Truffle, Ganache, Solidity, React, and MetaMask integration.",
//   },
//   {
//     projectName: "Bondhu | A Healthcare Management System",
//     projectPhoto: Dev2,
//     github: "https://github.com/bytecraft-rafi/E_Healthcare_with_Live_Chatbox",
//     website: "",
//     desc:
//       "A full-featured healthcare management platform for mental health support in Bangladesh. Patients and consultants can securely connect, manage consultations, emergency SOS alerts, mental health forums, prescriptions, and progress recovery—all with strong privacy controls. Built with Django, PostgreSQL, HTML/CSS/JS.",
//   },
//   {
//     projectName: "Student Enrollment Web Application",
//     projectPhoto: Dev3,
//     github: "https://github.com/bytecraft-rafi/Student_Enrollment_System",
//     website: "",
//     desc:
//       "A web app streamlining student enrollment and management for admins and students. Includes secure login, profile management, enrollment forms, dashboard analytics, course registration, file upload, CSV export, and password reset. Built with PHP, MySQL, HTML, CSS, JS.",
//   },
// ];

// const MLProjects = [
//   {
//     projectName: "DryFruitClassification-Modified",
//     projectPhoto: ML1,
//     github: "https://github.com/bytecraft-rafi/DryFruitClassification-Modified",
//     website: "",
//     desc:
//       "Deep learning image classification for 12 dry fruit classes using a stacking ensemble of MobileNetV1/V2, SqueezeNet, and ShuffleNetV2. Achieved 98.3% test accuracy and real-time inference speed.",
//   },
//   {
//     projectName: "Student Performance Analysis Dashboard",
//     projectPhoto: ML2,
//     github: "#",
//     website: "",
//     desc:
//       "A dashboard for visualizing and analyzing student performance data, using Python and Tableau to deliver actionable insights for educational improvement.",
//   },
//   {
//     projectName: "Market Basket Analysis Tool",
//     projectPhoto: ML3,
//     github: "#",
//     website: "",
//     desc:
//       "Python tool for analyzing retail basket data and recommending product bundles using association rule mining and interactive data visualizations.",
//   },
// ];

// const DataAnalyticsProjects = [
//   {
//     projectName: "Sales Forecasting Dashboard",
//     projectPhoto: DA1,
//     github: "#",
//     website: "",
//     desc:
//       "Developed a Power BI dashboard that forecasts monthly sales, visualizes KPIs, and provides insights into seasonal trends. Integrated advanced analytics for demand prediction.",
//   },
//   {
//     projectName: "Customer Churn Prediction",
//     projectPhoto: DA2,
//     github: "#",
//     website: "",
//     desc:
//       "Machine learning model to predict customer churn using logistic regression and XGBoost. Automated feature engineering and SHAP-based interpretability for business strategy.",
//   },
//   {
//     projectName: "Financial Statement Analysis Tool",
//     projectPhoto: DA3,
//     github: "#",
//     website: "",
//     desc:
//       "Automated analysis of financial statements for SMEs, including ratio analysis, trend visualization, and anomaly detection with Python and Excel.",
//   },
// ];

// // Section renderer for subsections (no "Projects" word)
// function Section({ title, projects }) {
//   return (
//     <>
//       <h2 className="subsection-header">{title}</h2>
//       <div className="project">
//         {projects.map(project => (
//           <ProjectBox
//             key={project.projectName}
//             projectPhoto={project.projectPhoto}
//             projectName={project.projectName}
//             descOverride={project.desc}
//             github={project.github}
//             website={project.website}
//           />
//         ))}
//       </div>
//       <div className="section-btn-container">
//         <a href={githubProfileUrl} target="_blank" rel="noreferrer">
//           <button className="projectbtn show-more-btn">Show more</button>
//         </a>
//       </div>
//     </>
//   );
// }

// const Projects = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="projects-root">
//       <div className="spacer" />

//       {/* Main Projects Header with icon */}
//       <header className="main-header">
//         <FaProjectDiagram size={40} color="#9067C6" style={{ marginRight: "0.5rem" }} />
//         <h1>Projects</h1>
//       </header>

//       {/* Subsections without "Projects" word */}
//       <Section title="Software Quality Assurance" projects={SQAProjects} />
//       <Section title="Development" projects={DevelopmentProjects} />
//       <Section title="ML / Data Science" projects={MLProjects} />
//       <Section title="Data Analytics" projects={DataAnalyticsProjects} />

//       <div className="collab-btn-container">
//         <button
//           className="projectbtn collab-btn"
//           onClick={() => navigate("/About#contact")}
//         >
//           Open for collaborations
//         </button>
//       </div>

//       <style>{`
//         .projects-root {
//           padding-bottom: 4rem;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding-left: 1rem;
//           padding-right: 1rem;
//           color: #f0f0f0;
//           font-family: 'Poppins', sans-serif;
//         }
//         .spacer {
//           height: 8rem;
//         }
//         .main-header {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 2.5rem;
//           font-weight: 700;
//           color: #9067C6;
//           margin-bottom: 3rem;
//           gap: 0.5rem;
//           text-align: center;
//         }
//         .main-header h1 {
//           margin: 0;
//         }
//         .subsection-header {
//           font-size: 1.6rem;
//           font-weight: 600;
//           color: #b3a5f5;
//           text-align: center;
//           margin-bottom: 2rem;
//           margin-top: 3rem;
//           letter-spacing: 0.02em;
//         }
//         .project {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 2rem;
//           justify-content: center;
//           align-items: stretch;
//           min-height: 480px;
//         }
//         .section-btn-container {
//           text-align: center;
//           margin: 2rem 0 4rem 0;
//         }
//         .show-more-btn {
//           font-weight: 600;
//           font-size: 1.1rem;
//           padding: 0.8rem 2rem;
//           border-radius: 2rem;
//           background: #9067C6;
//           color: white;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
//         .show-more-btn:hover {
//           background: #7b54b7;
//         }
//         .collab-btn-container {
//           text-align: center;
//           margin: 2.5rem 0 0 0;
//         }
//         .collab-btn {
//           font-weight: 700;
//           font-size: 1.2rem;
//           background: #9067C6;
//           color: #fff;
//           padding: 1rem 2.5rem;
//           border-radius: 2rem;
//           border: none;
//           cursor: pointer;
//           transition: background-color 0.3s ease;
//         }
//         .collab-btn:hover {
//           background: #7b54b7;
//         }
//         @media (max-width: 650px) {
//           .subsection-header {
//             font-size: 1.3rem;
//             margin-top: 2rem;
//           }
//           .project {
//             min-height: auto;
//             gap: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Projects;
import React from 'react';
import ProjectBox from './ProjectBox';
import { useNavigate } from 'react-router-dom';
import { FaProjectDiagram } from 'react-icons/fa';

import SQA1 from '../images/SeleniumAutomation.png';
import SQA2 from '../images/Ecommerce.png';
import SQA3 from '../images/POM.png';

import Dev1 from '../images/LandManagement.png';
import Dev2 from '../images/Healthcare.png';
import Dev3 from '../images/Student.png';

import ML1 from '../images/DryFruit.png';
import ML2 from '../images/Default.png';
import ML3 from '../images/Default.png';

import DA1 from '../images/Default.png';
import DA2 from '../images/Default.png';
import DA3 from '../images/Default.png';

const githubProfileUrl = "https://github.com/bytecraft-rafi";

// --- Project Arrays ---
const SQAProjects = [
  {
    projectName: "Healthcare App Testing with Selenium Java",
    projectPhoto: SQA1,
    github: "https://github.com/bytecraft-rafi/Heathcare_App_Testing_with-Selenium_Java",
    website: "",
    desc:
      "Comprehensive Selenium-based test suite for automating the functional testing of a healthcare web application. Includes positive and negative test cases for authentication, appointments, consultation, UI, and patient features. JDK, Maven, Selenium WebDriver.",
  },
  {
    projectName: "Advanced E-commerce API Testing Suite",
    projectPhoto: SQA2,
    github: "https://github.com/bytecraft-rafi/Advanced-E-commerce-Platform-API-Testing-Suite",
    website: "",
    desc:
      "Robust API testing framework with RestAssured and TestNG for the Restful-booker API. Supports token-based authentication, CRUD bookings, detailed logging and reports, parallel execution, and data-driven testing. Java 11, TestNG, Maven.",
  },
  {
    projectName: "SauceDemo Test Automation Suite (POM)",
    projectPhoto: SQA3,
    github: "https://github.com/bytecraft-rafi/SauceDemo_TestAutomationSuitePOM",
    website: "",
    desc:
      "Automated Selenium test scripts for SauceDemo.com with Java, TestNG, and Page Object Model. Covers login, shopping cart, checkout, product sorting, and negative scenarios. Follows industry-standard project structure and best practices.",
  },
];

const DevelopmentProjects = [
  {
    projectName: "Decentralized Land Management System",
    projectPhoto: Dev1,
    github: "https://github.com/bytecraft-rafi/Land-Management-Advancement",
    website: "",
    desc:
      "A secure, transparent, and efficient platform for managing land records using blockchain technology. Features role-based access control, land allocation, ownership transfer, user management, and transaction history on the Ethereum blockchain. Built with Node.js, Truffle, Ganache, Solidity, React, and MetaMask integration.",
  },
  {
    projectName: "Bondhu | A Healthcare Management System",
    projectPhoto: Dev2,
    github: "https://github.com/bytecraft-rafi/E_Healthcare_with_Live_Chatbox",
    website: "",
    desc:
      "A full-featured healthcare management platform for mental health support in Bangladesh. Patients and consultants can securely connect, manage consultations, emergency SOS alerts, mental health forums, prescriptions, and progress recovery—all with strong privacy controls. Built with Django, PostgreSQL, HTML/CSS/JS.",
  },
  {
    projectName: "Student Enrollment Web Application",
    projectPhoto: Dev3,
    github: "https://github.com/bytecraft-rafi/Student_Enrollment_System",
    website: "",
    desc:
      "A web app streamlining student enrollment and management for admins and students. Includes secure login, profile management, enrollment forms, dashboard analytics, course registration, file upload, CSV export, and password reset. Built with PHP, MySQL, HTML, CSS, JS.",
  },
];

const MLProjects = [
  {
    projectName: "DryFruitClassification-Modified",
    projectPhoto: ML1,
    github: "https://github.com/bytecraft-rafi/DryFruitClassification-Modified",
    website: "",
    desc:
      "Deep learning image classification for 12 dry fruit classes using a stacking ensemble of MobileNetV1/V2, SqueezeNet, and ShuffleNetV2. Achieved 98.3% test accuracy and real-time inference speed.",
  },
  {
    projectName: "Student Performance Analysis Dashboard",
    projectPhoto: ML2,
    github: "#",
    website: "",
    desc:
      "A dashboard for visualizing and analyzing student performance data, using Python and Tableau to deliver actionable insights for educational improvement.",
  },
  {
    projectName: "Market Basket Analysis Tool",
    projectPhoto: ML3,
    github: "#",
    website: "",
    desc:
      "Python tool for analyzing retail basket data and recommending product bundles using association rule mining and interactive data visualizations.",
  },
];

const DataAnalyticsProjects = [
  {
    projectName: "Sales Forecasting Dashboard",
    projectPhoto: DA1,
    github: "#",
    website: "",
    desc:
      "Developed a Power BI dashboard that forecasts monthly sales, visualizes KPIs, and provides insights into seasonal trends. Integrated advanced analytics for demand prediction.",
  },
  {
    projectName: "Customer Churn Prediction",
    projectPhoto: DA2,
    github: "#",
    website: "",
    desc:
      "Machine learning model to predict customer churn using logistic regression and XGBoost. Automated feature engineering and SHAP-based interpretability for business strategy.",
  },
  {
    projectName: "Financial Statement Analysis Tool",
    projectPhoto: DA3,
    github: "#",
    website: "",
    desc:
      "Automated analysis of financial statements for SMEs, including ratio analysis, trend visualization, and anomaly detection with Python and Excel.",
  },
];

// ---------- Section renderer ----------
function Section({ title, projects }) {
  return (
    <>
      <h2 className='subsection-header'>{title}</h2>
      <div className='project'>
        {projects.map(project => (
          <ProjectBox
            key={project.projectName}
            projectPhoto={project.projectPhoto}
            projectName={project.projectName}
            descOverride={project.desc}
            github={project.github}
            website={project.website}
          />
        ))}
      </div>
      <div className="section-btn-container">
        <a href={githubProfileUrl} target="_blank" rel="noreferrer">
          <button className='projectbtn show-more-btn'>Show more</button>
        </a>
      </div>
    </>
  );
}

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div className="projects-root">
      <div className="spacer" />
      <header className="main-header">
        <FaProjectDiagram size={40} color="#9067C6" style={{ marginRight: "0.5rem" }} />
        <h1>Projects</h1>
      </header>

      <Section title="Software Quality Assurance" projects={SQAProjects} />
      <Section title="Development" projects={DevelopmentProjects} />
      <Section title="ML / Data Science" projects={MLProjects} />
      <Section title="Data Analytics" projects={DataAnalyticsProjects} />

      <div className="collab-btn-container">
        <button
          className='projectbtn collab-btn'
          onClick={() => navigate("/About#contact")}
        >
          Open for collaborations
        </button>
      </div>

      <style>{`
        .projects-root {
          padding-bottom: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 1rem;
          padding-right: 1rem;
          color: #f0f0f0;
          font-family: 'Poppins', sans-serif;
        }
        .spacer {
          height: 8rem;
        }
        .main-header {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 700;
          color: #9067C6;
          margin-bottom: 3rem;
          gap: 0.5rem;
          text-align: center;
        }
        .main-header h1 {
          margin: 0;
        }
        .subsection-header {
          font-size: 1.6rem;
          font-weight: 600;
          color: #b3a5f5;
          text-align: center;
          margin-bottom: 2rem;
          margin-top: 3rem;
          letter-spacing: 0.02em;
        }
        .project {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          justify-items: center;
          align-items: stretch;
          min-height: 480px;
        }
        @media (max-width: 650px) {
          .subsection-header {
            font-size: 1.3rem;
            margin-top: 2rem;
          }
          .project {
            grid-template-columns: 1fr;
            min-height: auto;
            gap: 1rem;
          }
        }
        .section-btn-container {
          text-align: center;
          margin: 2rem 0 4rem 0;
        }
        .show-more-btn {
          font-weight: 600;
          font-size: 1.1rem;
          padding: 0.8rem 2rem;
          border-radius: 2rem;
          background: #9067C6;
          color: white;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .show-more-btn:hover {
          background: #7b54b7;
        }
        .collab-btn-container {
          text-align: center;
          margin: 2.5rem 0 0 0;
        }
        .collab-btn {
          font-weight: 700;
          font-size: 1.2rem;
          background: #9067C6;
          color: #fff;
          padding: 1rem 2.5rem;
          border-radius: 2rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .collab-btn:hover {
          background: #7b54b7;
        }
      `}</style>
    </div>
  );
};

export default Projects;
