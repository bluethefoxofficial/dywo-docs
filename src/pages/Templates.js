import React from 'react';
import styled from 'styled-components';

const TemplatesWrapper = styled.div`
  h2 {
    color: ${props => props.theme.colors.secondary};
  }
  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

function Templates() {
  return (
    <TemplatesWrapper>
      <h1>Dywo Templates</h1>
      <p>Dywo offers two main templates for project creation:</p>
      <h2>Basic Template</h2>
      <p>The basic template includes:</p>
      <ul>
        <li>Simple React setup</li>
        <li>Basic routing</li>
        <li>Minimal styling</li>
      </ul>
      <p>Use this template for small projects or when you want to start from a minimal setup.</p>
      <h2>Advanced Template</h2>
      <p>The advanced template includes:</p>
      <ul>
        <li>React setup with additional best practices</li>
        <li>More sophisticated routing setup</li>
        <li>Styled-components for styling</li>
        <li>Example of component and page organization</li>
      </ul>
      <p>Use this template for larger projects or when you need a more feature-rich starting point.</p>
      <h2>Custom Templates</h2>
      <p>You can also create your own custom templates. Place your template in the <code>templates</code> directory of your Dywo installation, and you can use it with:</p>
      <pre><code>dywo create my-project --template my-custom-template</code></pre>
    </TemplatesWrapper>
  );
}

export default Templates;