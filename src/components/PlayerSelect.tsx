import React from 'react';
import { AlignJustify as Spotify, Youtube, FileMusic as AppleMusic } from 'lucide-react';
import { Player } from '../types';

interface PlayerSelectProps {
    value: Player;
    onChange: (value: Player) => void;
}

export function PlayerSelect({ value, onChange }: PlayerSelectProps) {
    const getPlayerIcon = (playerType: Player) => {
        switch (playerType) {
            case 'spotify':
                return <Spotify className="w-6 h-6" />;
            case 'youtube':
                return <Youtube className="w-6 h-6" />;
            case 'apple':
                return <AppleMusic className="w-6 h-6" />;
        }
    };

    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as Player)}
                className="appearance-none bg-[#2A2A2A] text-white px-5 py-4 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF3E3E] w-full md:w-44 text-lg"
            >
                <option value="spotify">Spotify</option>
                <option value="youtube">YouTube</option>
                <option value="apple">Apple Music</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
                {getPlayerIcon(value)}
            </div>
        </div>
    );
}