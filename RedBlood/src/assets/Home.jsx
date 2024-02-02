// src/App.tsx
// import React from 'react';
// import './App.css';
import './Home.css';

function App() {
  return (
    <div>
      <header>
        <img alt="REDBLOOD Logo" src="/redblood-logo.png" />
        <h1>REDBLOOD Cybersecurity Project</h1>
        <p>Making Cybersecurity Accessible and Effective</p>
      </header>

      <section>
        <h2>Welcome to REDBLOOD</h2>
        <p>
          REDBLOOD is an open-source cybersecurity project dedicated to simplifying vulnerability scanning.
          Whether you're a seasoned professional or just starting, we welcome you to contribute to this innovative project.
        </p>
        <p>
          Join us in building a powerful cybersecurity tool that makes a difference. Your expertise and enthusiasm are crucial to the success of REDBLOOD.
        </p>
        <a href="#get-involved" className="cta-button">Get Involved</a>
      </section>

      <section id="get-involved">
        <h2>How to Get Involved</h2>
        <p>
          1. Check out the <a href="#project-details">REDBLOOD Project Details</a> for more information.
        </p>
        <p>
          2. Explore our <a href="#github-repo">GitHub Repository</a> to understand the codebase.
        </p>
        <p>
          3. Join the conversation on our <a href="#community-forum">Community Forum</a> and share your thoughts.
        </p>
        <p>
          4. Contribute by submitting pull requests, reporting issues, or suggesting new features.
        </p>
      </section>
    </div>
  );
}

export default App;
