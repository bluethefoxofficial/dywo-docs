import React from 'react';
import styled from 'styled-components';

const ConfigurationWrapper = styled.div`
  h2 {
    color: ${props => props.theme.colors.secondary};
  }
  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

function Configuration() {
  return (
    <ConfigurationWrapper>
      <h1>Dywo Configuration</h1>
      <p>Dywo uses a <code>dywo.config.js</code> file in the root of your project for configuration. Here's an example of what this file might look like:</p>
      <pre>
        <code>{`
module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080
  },
  // Add more configuration options here
};
        `}</code>
      </pre>
      <h2>Configuration Options</h2>
      <ul>
        <li><code>entry</code>: The entry point of your application</li>
        <li><code>output</code>: Configuration for the output bundle</li>
        <li><code>devServer</code>: Configuration for the development server</li>
        <li><code>plugins</code>: Array of webpack plugins to use</li>
        <li><code>module.rules</code>: Array of loader rules for different file types</li>
      </ul>
      <h2>Extending Configuration</h2>
      <p>You can extend the default Dywo configuration by adding your own options or overriding existing ones in the <code>dywo.config.js</code> file.</p>
    </ConfigurationWrapper>
  );
}

export default Configuration;