import axios from 'axios';
import { DownloadRequest, DownloadResponse } from '../types';
import { env } from '../config/env';

export const musicApi = {
  async downloadMusic(request: DownloadRequest): Promise<DownloadResponse> {
    let endpoint = '';
    switch (request.player) {
      case 'youtube':
        endpoint = `${env.apiBaseUrl}/youtube`;
        break;
      case 'spotify':
        endpoint = `${env.apiBaseUrl}/spotify`;
        break;
      case 'apple':
        endpoint = `${env.apiBaseUrl}/apple`;
        break;
    }

    try {
      const response = await axios.post(
          endpoint,
          {
            url: request.url,
            format: request.format
          },
          {
            responseType: 'blob',
            headers: {
              'Accept': 'application/json, application/octet-stream',
              'Content-Type': 'application/json'
            }
          }
      );

      // Log headers para debugging
      console.log('Response headers:', response.headers);

      // Obtener metadatos de los headers (case-insensitive)
      const headers = new Headers(response.headers);
      const contentDisposition = headers.get('content-disposition')?.toLowerCase();
      const originalTitle = headers.get('x-original-title') || '';
      const artist = headers.get('x-artist') || 'Unknown';
      const duration = parseInt(headers.get('x-duration') || '0', 10);

      // Crear blob y URL de descarga
      const blob = new Blob([response.data], {
        type: `audio/${request.format}`
      });
      const downloadUrl = window.URL.createObjectURL(blob);

      // Extraer el nombre del archivo del header Content-Disposition
      let fileName = 'download';
      if (contentDisposition) {
        const matches = contentDisposition.match(/filename="(.+?)"/i);
        if (matches && matches[1]) {
          fileName = matches[1];
        }
      }

      // Usar el nombre del archivo sin extensión como título si no hay título original
      const title = originalTitle || fileName.replace(`.${request.format}`, '');

      return {
        downloadUrl,
        metadata: {
          title,
          artist,
          duration
        }
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error status:', error.response?.status);
        console.error('Error headers:', error.response?.headers);
        console.error('Error data:', error.response?.data);
      }
      throw new Error('Failed to download music');
    }
  },
};