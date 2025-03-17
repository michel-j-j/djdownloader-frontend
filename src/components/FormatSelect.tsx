import React from 'react';
import { FileAudio } from 'lucide-react';
import { Format } from '../types';

interface FormatSelectProps {
    value: Format;
    onChange: (value: Format) => void;
}

export function FormatSelect({ value, onChange }: FormatSelectProps) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value as Format)}
                className="appearance-none bg-[#2A2A2A] text-white px-5 py-4 pr-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF3E3E] w-full md:w-36 text-lg"
            >
                <option value="mp3">MP3</option>
                <option value="wav">WAV</option>
                <option value="flac">FLAC</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white pointer-events-none">
                <FileAudio className="w-6 h-6" />
            </div>
        </div>
    );
}