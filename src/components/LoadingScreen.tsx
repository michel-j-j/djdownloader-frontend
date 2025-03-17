import React from 'react';
import { Play } from 'lucide-react';

interface LoadingScreenProps {
    onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
    return (
        <div className="min-h-screen bg-[#1A1A1A] flex items-center justify-center">
            <div className="relative group cursor-pointer" onClick={onComplete}>
                <div className="absolute inset-0 bg-[#FF3E3E] rounded-full
          animate-ping opacity-25 group-hover:opacity-0"></div>
                <div className="absolute inset-0 bg-[#FF3E3E] rounded-full
          animate-pulse opacity-75 group-hover:opacity-0"></div>
                <button
                    className="relative text-white p-10 rounded-full bg-[#FF3E3E]
            transition-all transform hover:scale-110 hover:rotate-90 duration-300
            hover:shadow-[0_0_35px_rgba(255,62,62,0.5)]"
                >
                    <Play size={56} className="ml-2" />
                </button>
            </div>
        </div>
    );
}