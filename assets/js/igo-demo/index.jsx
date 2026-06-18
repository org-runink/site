import React from 'react';
import { createRoot } from 'react-dom/client';
import { IntentProvider } from './IntentContext';
import { Dashboard } from './Dashboard';

const rootElement = document.getElementById('igo-react-root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <IntentProvider>
        <Dashboard />
      </IntentProvider>
    </React.StrictMode>
  );
}
