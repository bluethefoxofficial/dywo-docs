import React from 'react';
import styled from 'styled-components';

const InstallationWrapper = styled.div`
  h2 {
    color: ${props => props.theme.colors.secondary};
  }
  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

function Installation() {
  return (
    <InstallationWrapper>
      <h1>Installing Dywo</h1>
      <h2>Prerequisites</h2>
      <ul>
        <li>Node.js (version 12 or higher)</li>
        <li>npm (usually comes with Node.js)</li>
      </ul>
      <h2>Installation Steps</h2>
      <ol>
        <li>Open your terminal</li>
        <li>Run the following command:
          <pre><code>npm install -g dywo-cli</code></pre>
        </li>
        <li>Verify the installation by running:
          <pre><code>dywo --version</code></pre>
        </li>
      </ol>
      <h2>Updating Dywo</h2>
      <p>To update Dywo to the latest version, run:</p>
      <pre><code>npm update -g dywo-cli</code></pre>
    </InstallationWrapper>
  );
}

export default Installation;