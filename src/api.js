// src/api.js
// Fallbacks so prod uses Render even if the env var isn't set
const FALLBACK_PROD = 'https://my-json-api-9hgp.onrender.com';
const FALLBACK_DEV = 'http://localhost:3000';

const base =
  (import.meta.env.VITE_API_URL && import.meta.env.VITE_API_URL.trim()) ||
  (import.meta.env.PROD ? FALLBACK_PROD : FALLBACK_DEV);

// Remove any trailing slash
export const API = base.replace(/\/+$/, '');
