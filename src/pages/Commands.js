import React from "react";
import styled from "styled-components";

const CommandsWrapper = styled.div`
  h2 {
    color: ${(props) => props.theme.colors.secondary};
  }
  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

function Commands() {
  return (
    <CommandsWrapper>
      <h1>Dywo Commands</h1>
      <h2>dywo create &lt;project-name&gt;</h2>
      <p>Creates a new Dywo project.</p>
      <p>Options:</p>
      <ul>
        <li>
          <code>--template &lt;name&gt;</code>: Specify the template (basic or
          advanced)
        </li>
        <li>
          <code>--state &lt;manager&gt;</code>: Specify the state management
          solution
        </li>
        <li>
          <code>--routing &lt;type&gt;</code>: Specify the routing method (hash
          or history)
        </li>
      </ul>

      <h2>dywo serve</h2>
      <p>Starts the development server.</p>
      <p>Options:</p>
      <ul>
        <li>
          <code>--port &lt;number&gt;</code>: Specify the port number (default:
          3000)
        </li>
      </ul>

      <h2>dywo build</h2>
      <p>Builds the project for production.</p>
      <p>Options:</p>
      <ul>
        <li>
          <code>--analyze</code>: Analyze the bundle size
        </li>
      </ul>

      <h2>dywo test</h2>
      <p>Runs the test suite.</p>
      <p>Options:</p>
      <ul>
        <li>
          <code>--watch</code>: Run tests in watch mode
        </li>
        <li>
          <code>--coverage</code>: Generate a coverage report
        </li>
      </ul>

      <h2>dywo lint</h2>
      <p>Lints the project files.</p>
      <p>Options:</p>
      <ul>
        <li>
          <code>--fix</code>: Automatically fix linting errors when possible
        </li>
      </ul>

      <h2>dywo create-test</h2>
      <p>Creates a test file for a component or module.</p>
      <p>Options:</p>
      <ul>
        <li>
          <code>--file &lt;file&gt;</code>: The file to create a test for
        </li>
      </ul>
    </CommandsWrapper>
  );
}

export default Commands;
