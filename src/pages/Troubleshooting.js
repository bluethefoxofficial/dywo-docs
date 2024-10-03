import React from 'react';
import styled from 'styled-components';

const TroubleshootingWrapper = styled.div`
  h2 {
    color: ${props => props.theme.colors.secondary};
  }
  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

function Troubleshooting() {
  return (
    <TroubleshootingWrapper>
      <h1>Troubleshooting</h1>
      <h2>Common Issues and Solutions</h2>
      <h3>1. "dywo: command not found"</h3>
      <p>This error occurs when Dywo is not properly installed or not in your PATH.</p>
      <p>Solution:</p>
      <ul>
        <li>Ensure Dywo is installed globally: <code>npm install -g dywo-cli</code></li>
        <li>Check your PATH environment variable</li>
        <li>Try closing and reopening your terminal</li>
      </ul>
      
      <h3>2. Build fails with "Module not found" error</h3>
      <p>This often happens when a required module is not installed.</p>
      <p>Solution:</p>
      <ul>
        <li>Run <code>npm install</code> to ensure all dependencies are installed</li>
        <li>Check if the module is listed in your <code>package.json</code></li>
        <li>Ensure you're not importing from a non-existent file</li>
      </ul>
      
      <h3>3. Hot reloading not working</h3>
      <p>Sometimes the development server doesn't detect changes.</p>
      <p>Solution:</p>
      <ul>
        <li>Ensure you're running the latest version of Dywo</li>
        <li>Check if your file watcher is working (you might need to increase system limits)</li>
        <li>Try restarting the development server</li>
      </ul>
      
      <h3>4. Styling issues with styled-components</h3>
      <p>If your styles are not applying correctly, there might be a configuration issue.</p>
      <p>Solution:</p>
      <ul>
        <li>Ensure you have the styled-components babel plugin in your <code>.babelrc</code></li>
        <li>Check if you're wrapping your app with <code>ThemeProvider</code></li>
        <li>Verify that you're using the correct theme variables</li>
      </ul>
      
      <h3>5. Environment variables not working</h3>
      <p>If your environment variables are undefined, there might be a loading issue.</p>
      <p>Solution:</p>
      <ul>
        <li>Ensure your <code>.env</code> file is in the root directory</li>
        <li>Prefix your variables with <code>DYWO_</code> for automatic loading</li>
        <li>Restart your development server after changing environment variables</li>
      </ul>
      
      <h2>Debugging Tips</h2>
      <ul>
        <li>Use <code>console.log()</code> or browser dev tools for debugging</li>
        <li>Check the browser console for any error messages</li>
        <li>Use the <code>--debug</code> flag with Dywo commands for verbose output</li>
        <li>Inspect your build output in the <code>dist</code> directory</li>
      </ul>
      
      <h2>Getting Help</h2>
      <p>If you're still having issues:</p>
      <ul>
        <li>Check the <a href="https://github.com/your-username/dywo-cli/issues">Dywo GitHub Issues</a> for similar problems and solutions</li>
        <li>Join the <a href="#">Dywo Community Discord</a> for real-time help</li>
        <li>Post a question on <a href="https://stackoverflow.com/questions/tagged/dywo">Stack Overflow</a> with the 'dywo' tag</li>
      </ul>
    </TroubleshootingWrapper>
  );
}

export default Troubleshooting;