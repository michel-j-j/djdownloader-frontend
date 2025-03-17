export type Player = 'spotify' | 'youtube' | 'apple';
export type Format = 'mp3' | 'wav' | 'flac';

export interface DownloadRequest {
  url: string;
  player: Player;
  format: Format;
}

export interface DownloadResponse {
  downloadUrl: string;
  metadata: {
    title: string;
    artist: string;
    duration: number;
  };
}