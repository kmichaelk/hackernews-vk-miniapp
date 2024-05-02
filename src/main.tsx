import React from 'react';
import { createRoot } from 'react-dom/client';
import vkBridge from '@vkontakte/vk-bridge';
import App from './app';

vkBridge.send('VKWebAppInit');

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (import.meta.env.MODE === 'development') {
  import('./eruda.ts');
}
