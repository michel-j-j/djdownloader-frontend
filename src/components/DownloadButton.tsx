import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
    enabled: boolean;
    onClick: () => void;
    downloading?: boolean;
}

export function DownloadButton({ enabled, onClick, downloading = false }: DownloadButtonProps) {
    return (
        <div className="flex justify-center mt-10">
            <button
                disabled={!enabled || downloading}
                onClick={onClick}
                className={`
          relative flex items-center gap-3 px-8 py-4 rounded-xl font-medium text-white text-lg
          transition-all transform hover:scale-105 overflow-hidden
          ${enabled && !downloading
                    ? 'bg-[#FF3E3E] hover:bg-[#E63636]'
                    : 'bg-gray-600 cursor-not-allowed'}
        `}
            >
                {downloading && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
            animate-[shimmer_1s_infinite] -translate-x-full"></div>
                )}
                <Download className={`w-6 h-6 ${downloading ? 'animate-bounce' : ''}`} />
                {downloading ? 'Downloading...' : 'Download'}
            </button>
        </div>
    );
}