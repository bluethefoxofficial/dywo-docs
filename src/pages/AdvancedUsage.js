import React from 'react';
import styled from 'styled-components';

const AdvancedUsageWrapper = styled.div`
  h2 {
    color: ${props => props.theme.colors.secondary};
  }
  code {
    background-color: #f0f0f0;
    padding: 2px 4px;
    border-radius: 4px;
  }
`;

function AdvancedUsage() {
  return (
    <AdvancedUsageWrapper>
      <h1>Advanced Usage</h1>
      
      <h2>Custom Webpack Configuration</h2>
      <p>You can extend the Webpack configuration by modifying the <code>dywo.config.js</code> file:</p>
      <pre>
        <code>{`
module.exports = {
  webpack: (config, { isDev, isServer }) => {
    // Modify the config here
    return config;
  },
};
        `}</code>
      </pre>
      
      <h2>Environment Variables</h2>
      <p>Dywo supports environment variables through <code>.env</code> files. Create a <code>.env</code> file in your project root:</p>
      <pre>
        <code>{`
API_URL=https://api.example.com
        `}</code>
      </pre>
      <p>You can then use these variables in your code as <code>process.env.API_URL</code>.</p>
      
      <h2>Code Splitting</h2>
      <p>Dywo supports dynamic imports for code splitting. Use it like this:</p>
      <pre>
        <code>{`
import dynamic from 'dywo/dynamic';

const DynamicComponent = dynamic(() => import('../components/MyComponent'));
        `}</code>
      </pre>
      
      <h2>Custom Server</h2>
      <p>You can create a custom server by adding a <code>server.js</code> file to your project root:</p>
      <pre>
        <code>{`
const express = require('express');
const dywo = require('dywo');

const app = express();
const handler = dywo.getRequestHandler();

app.use(handler);

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('> Ready on http://localhost:3000');
});
        `}</code>
      </pre>
      
      <h2>API Routes</h2>
      <p>Dywo allows you to create API routes easily. Add a file in the <code>pages/api</code> directory:</p>
      <pre>
        <code>{`
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Dywo!' });
}
        `}</code>
      </pre>
      
      <h2>Customizing Babel Config</h2>
      <p>You can extend the Babel configuration by creating a <code>.babelrc</code> file in your project root:</p>
      <pre>
        <code>{`
{
  "presets": ["dywo/babel"],
  "plugins": [
    ["styled-components", { "ssr": true }]
  ]
}
        `}</code>
      </pre>
      
      <h2>Plugins</h2>
      <p>Dywo supports plugins to extend its functionality. You can add plugins in your <code>dywo.config.js</code>:</p>
      <pre>
        <code>{`
module.exports = {
  plugins: [
    'dywo-plugin-example',
    ['dywo-plugin-with-options', { option1: 'value1' }]
  ]
};
        `}</code>
      </pre>
      
      <h2>Internationalization (i18n)</h2>
      <p>For internationalization, you can use the built-in i18n support:</p>
      <pre>
        <code>{`
// dywo.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en'
  }
};

// pages/index.js
import { useTranslation } from 'dywo-i18n';

export default function Home() {
  const { t } = useTranslation('common');
  return <h1>{t('welcome')}</h1>;
}
        `}</code>
      </pre>
      
      <h2>Performance Optimization</h2>
      <p>Dywo provides several ways to optimize your application's performance:</p>
      <ul>
        <li>Use <code>dywo/image</code> component for optimized images</li>
        <li>Implement lazy loading with dynamic imports</li>
        <li>Use <code>dywo/link</code> for prefetching pages</li>
        <li>Optimize fonts with <code>dywo/font</code></li>
      </ul>
      
      <h2>Testing</h2>
      <p>Dywo comes with Jest and React Testing Library set up. You can run tests with:</p>
      <pre><code>npm test</code></pre>
      <p>For end-to-end testing, you can integrate Cypress or Playwright.</p>
      
      <h2>Deployment</h2>
      <p>Dywo projects can be easily deployed to various platforms:</p>
      <ul>
        <li>Vercel: <code>vercel</code></li>
        <li>Netlify: Connect your Git repository and set the build command to <code>dywo build</code></li>
        <li>Custom server: Build with <code>dywo build</code> and run <code>dywo start</code></li>
      </ul>
    </AdvancedUsageWrapper>
  );
}

export default AdvancedUsage;