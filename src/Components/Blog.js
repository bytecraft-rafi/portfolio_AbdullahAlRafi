// import React from 'react';
// import BlogImg1 from '../images/BlogImg1.webp';
// import BlogImg2 from '../images/BlogImg2.png';
// import BlogImg3 from '../images/BlogImg3.png';
// import BlogImg4 from '../images/BlogImg4.png';

// const demoBlogs = [
//   {
//     title: "AI Agents and Their Future",
//     image: BlogImg1,
//     date: "2024-06-01",
//     author: "Abdullah Al Rafi",
//     content: `
//       <p>Artificial Intelligence (AI) agents are systems designed to perceive their environment and act autonomously to achieve specific goals. Modern AI agents leverage large language models (LLMs) and reinforcement learning to perform complex tasks such as planning, learning, and collaborating with humans or other agents.</p>
//       <p>Their applications span from personal assistants to autonomous vehicles and industrial automation, where they continuously adapt to changing environments. The advent of agentic AI promises to revolutionize industries by augmenting human capabilities and automating knowledge work.</p>
//       <p><b>Key capabilities</b> of AI agents include:</p>
//       <ul>
//         <li><b>Perception:</b> Sensing and interpreting data from the environment.</li>
//         <li><b>Reasoning:</b> Making decisions based on goals and constraints.</li>
//         <li><b>Learning:</b> Improving performance through experience.</li>
//       </ul>
//       <p>As AI agents evolve, ethical considerations such as transparency and safety are crucial. For deeper insights, see <a href="https://arxiv.org/abs/2305.15896" target="_blank" rel="noreferrer">Recent Advances in Agentic AI</a>.</p>
//     `
//   },
//   {
//     title: "Prompt Engineering: Best Practices for LLMs",
//     image: BlogImg2,
//     date: "2024-05-22",
//     author: "Abdullah Al Rafi",
//     content: `
//       <p>Prompt engineering has become an essential skill to unlock the power of large language models (LLMs) like GPT-4. It involves crafting effective inputs (prompts) that guide the model to generate useful, relevant outputs for diverse tasks.</p>
//       <p>Successful prompt design improves accuracy and reduces ambiguity in responses. Some recommended strategies include:</p>
//       <ul>
//         <li><b>Clear and specific instructions:</b> Define the task explicitly to avoid vague outputs.</li>
//         <li><b>Chain-of-thought prompting:</b> Encourage step-by-step reasoning to improve complex problem-solving.</li>
//         <li><b>Few-shot learning:</b> Provide examples within the prompt to guide desired formats and styles.</li>
//       </ul>
//       <p>Mastering prompt engineering expands LLM capabilities in fields like natural language processing, coding, and decision support. For a comprehensive guide, check <a href="https://arxiv.org/abs/2212.10496" target="_blank" rel="noreferrer">Prompt Engineering for LLMs</a>.</p>
//     `
//   },
//   {
//     title: "Data Science Pipelines for AI",
//     image: BlogImg3,
//     date: "2024-04-10",
//     author: "Abdullah Al Rafi",
//     content: `
//       <p>Building robust AI solutions requires well-designed data science pipelines that handle data ingestion, processing, model training, and deployment. Pipelines ensure reproducibility, scalability, and maintainability of machine learning workflows.</p>
//       <p>Typical stages include:</p>
//       <ol>
//         <li><b>Data Ingestion:</b> Collecting and importing raw data from multiple sources.</li>
//         <li><b>Data Cleaning & Feature Engineering:</b> Removing noise and crafting features that improve model performance.</li>
//         <li><b>Model Training & Validation:</b> Applying algorithms to train models and evaluating their accuracy.</li>
//         <li><b>Deployment & Monitoring:</b> Serving models in production and monitoring performance over time.</li>
//       </ol>
//       <p>Popular orchestration tools like Apache Airflow, Kubeflow, and MLflow help automate these pipelines, reducing manual errors. For more details, see <a href="https://www.oreilly.com/library/view/building-machine-learning/9781492045112/" target="_blank" rel="noreferrer">Building Machine Learning Pipelines</a> by Hannes Hapke.</p>
//     `
//   },
//   {
//     title: "Why Agentic AI Will Change Everything",
//     image: BlogImg4,
//     date: "2024-03-17",
//     author: "Abdullah Al Rafi",
//     content: `
//       <p>Agentic AI represents a new era where intelligent systems autonomously plan, reason, and execute tasks on behalf of humans. Unlike narrow AI, agentic AI adapts dynamically and coordinates complex workflows across multiple domains.</p>
//       <p>This shift will transform workplaces by embedding AI assistants that learn user preferences, automate decision-making, and self-optimize processes.</p>
//       <ul>
//         <li><b>Personal AI assistants:</b> Seamlessly integrated in software tools and devices.</li>
//         <li><b>Adaptive workflows:</b> Self-monitoring and continuously improving business processes.</li>
//         <li><b>Collaborative AI:</b> Networks of agents working with humans and other agents to solve problems.</li>
//       </ul>
//       <p>However, ensuring trust, transparency, and ethical use remains critical. For an in-depth discussion, read <a href="https://arxiv.org/abs/2304.12269" target="_blank" rel="noreferrer">The Future of Agentic AI</a>.</p>
//     `
//   }
// ];

// const Blog = () => (
//   <div
//     style={{
//       maxWidth: "1500px",
//       margin: "8rem auto 4rem auto",
//       padding: "0 2rem",
//       fontFamily: "'Raleway', sans-serif"
//     }}
//   >
//     <h1
//       className='projectHeading'
//       style={{ marginBottom: "3.2rem", fontWeight: "900", fontSize: "3rem" }}
//     >
//       My <b>Blog</b>
//     </h1>

//     {demoBlogs.map((blog, idx) => (
//       <article
//         key={idx}
//         style={{
//           marginBottom: "4rem",
//           background: "rgba(144, 103, 198, 0.12)",
//           borderRadius: "20px",
//           padding: "3rem 4rem 3rem 4rem",
//           boxShadow: "0 10px 30px rgba(80,80,90,0.15)",
//           color: "#f2f2f2",
//           display: "flex",
//           gap: "4rem",
//           alignItems: "flex-start",
//           minHeight: "400px",
//           flexWrap: "wrap",
//           cursor: "default"
//         }}
//       >
//         {/* Left: Content */}
//         <div style={{ flex: 2, minWidth: 0 }}>
//           <h2
//             style={{
//               color: "#fff",
//               fontWeight: 900,
//               fontSize: "2.6rem",
//               marginBottom: "0.5em",
//               lineHeight: 1.1
//             }}
//           >
//             {blog.title}
//           </h2>
//           <div
//             style={{ color: "#bbb", marginBottom: "1.5em", fontSize: "1.15em" }}
//           >
//             {blog.date} • {blog.author} • ~2 min read
//           </div>
//           <div
//             style={{
//               fontSize: "1.22em",
//               lineHeight: 1.8,
//               color: "#eae6f4",
//               textAlign: "justify",
//               overflowWrap: "break-word"
//             }}
//             dangerouslySetInnerHTML={{ __html: blog.content }}
//           />
//         </div>
//         {/* Right: Image */}
//         <div
//           style={{
//             flex: 1,
//             minWidth: "360px",
//             display: "flex",
//             alignItems: "flex-start",
//             justifyContent: "flex-end"
//           }}
//         >
//           <img
//             src={blog.image}
//             alt={blog.title}
//             style={{
//               width: "100%",
//               maxWidth: "420px",
//               maxHeight: "350px",
//               objectFit: "cover",
//               borderRadius: "16px",
//               boxShadow: "0 10px 20px rgba(0,0,0,0.5)"
//             }}
//           />
//         </div>
//       </article>
//     ))}
//   </div>
// );

// export default Blog;
import React from 'react';

const Blog = () => (
  <div style={{
    maxWidth: "800px",
    margin: "8rem auto",
    padding: "2rem",
    fontFamily: "'Raleway', sans-serif",
    color: "#f2f2f2",
    textAlign: "center",
  }}>
    <h1 style={{
      fontSize: "4.2rem",
      color: "#9067C6",
      marginBottom: "1.5rem",
      transition: "font-size 0.3s ease"
    }}
    className="blog-title"
    >
      Blog
    </h1>
    <p style={{ fontSize: "1.2rem" }}>
      🚧 This section is still under development. Please check back soon for new posts! 🚧
    </p>

    <style>{`
      @media (max-width: 650px) {
        .blog-title {
          font-size: 3.4rem !important;
        }
      }
    `}</style>
  </div>
);

export default Blog;
