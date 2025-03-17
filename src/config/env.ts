interface EnvConfig {
  apiBaseUrl: string;
  defaultPlayer: string;
  defaultFormat: string;
}

export const env: EnvConfig = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  defaultPlayer: import.meta.env.VITE_DEFAULT_PLAYER || 'spotify',
  defaultFormat: import.meta.env.VITE_DEFAULT_FORMAT || 'mp3',
};