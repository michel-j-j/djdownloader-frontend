import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { PlayerSelect } from './components/PlayerSelect';
import { SearchInput } from './components/SearchInput';
import { FormatSelect } from './components/FormatSelect';
import { DownloadButton } from './components/DownloadButton';
import { musicApi } from './api/musicApi';
import { Player, Format } from './types';
import { env } from './config/env';
import { Music } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('');
  const [player, setPlayer] = useState<Player>(env.defaultPlayer as Player);
  const [format, setFormat] = useState<Format>(env.defaultFormat as Format);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState<{
    title: string;
    artist: string;
    duration: number;
  } | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = async () => {
    try {
      setError(null);
      setDownloading(true);
      const response = await musicApi.downloadMusic({
        url,
        player,
        format
      });

      // Actualizar información de la pista actual
      setCurrentTrack(response.metadata);

      // Create a temporary anchor element to trigger the download
      const link = document.createElement('a');
      link.href = response.downloadUrl;
      link.download = `${response.metadata.title}.${format}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Cleanup the blob URL
      window.URL.revokeObjectURL(response.downloadUrl);
    } catch (error) {
      console.error('Download failed:', error);
      setError('Failed to download the music. Please try again.');
    } finally {
      setDownloading(false);
    }
  };

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  const isValidUrl = url.trim().length > 0;
  const canDownload = isValidUrl && player && format && !downloading;

  return (
      <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center p-6">
        <div className="w-full max-w-4xl space-y-10">
          <div className="flex items-center justify-center gap-4 mb-14">
            <Music className="w-10 h-10 text-[#FF3E3E]" />
            <h1 className="text-5xl font-bold text-white">
              DJ Downloader
            </h1>
          </div>

          <div className="flex gap-5 flex-col md:flex-row">
            <PlayerSelect value={player} onChange={setPlayer} />
            <SearchInput value={url} onChange={setUrl} />
            <FormatSelect value={format} onChange={setFormat} />
          </div>

          {currentTrack && (
              <div className="bg-[#2A2A2A] p-5 rounded-xl text-white">
                <h2 className="text-2xl font-semibold mb-3">{currentTrack.title}</h2>
                <p className="text-gray-400 text-lg">Artist: {currentTrack.artist}</p>
                {currentTrack.duration > 0 && (
                    <p className="text-gray-400 text-lg">
                      Duration: {Math.floor(currentTrack.duration / 60)}:
                      {String(currentTrack.duration % 60).padStart(2, '0')}
                    </p>
                )}
              </div>
          )}

          {error && (
              <div className="text-red-500 text-center bg-red-100/10 p-4 rounded-xl text-lg">
                {error}
              </div>
          )}

          <DownloadButton
              enabled={canDownload}
              onClick={handleDownload}
              downloading={downloading}
          />
        </div>
      </div>
  );
}

export default App