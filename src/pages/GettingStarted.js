import React from 'react';
import styled from 'styled-components';

const GettingStartedWrapper = styled.div`
  h2 {
    color: ${props => props.theme.colors.secondary};
  }
  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

function GettingStarted() {
  return (
    <GettingStartedWrapper>
      <h1>Getting Started with Dywo</h1>
      <h2>Creating a New Project</h2>
      <ol>
        <li>Open your terminal</li>
        <li>Navigate to the directory where you want to create your project</li>
        <li>Run the following command:
          <pre><code>dywo create my-project</code></pre>
        </li>
        <li>Follow the prompts to select your project options:
          <ul>
            <li>Choose a template (basic or advanced)</li>
            <li>Select a state management solution</li>
            <li>Choose a routing method</li>
          </ul>
        </li>
      </ol>
      <h2>Project Structure</h2>
      <p>Your new project will have the following structure:</p>
      <pre>
        <code>{`
my-project/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
├── package.json
└── dywo.config.js
        `}</code>
      </pre>
      <h2>Running Your Project</h2>
      <ol>
        <li>Navigate to your project directory:
          <pre><code>cd my-project</code></pre>
        </li>
        <li>Install dependencies:
          <pre><code>npm install</code></pre>
        </li>
        <li>Start the development server:
          <pre><code>npm start</code></pre>
        </li>
      </ol>
      <p>Your project should now be running at <code>http://localhost:3000</code>.</p>
    </GettingStartedWrapper>
  );
}

export default GettingStarted;