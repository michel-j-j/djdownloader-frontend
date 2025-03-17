import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
    value: string;
    onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
    return (
        <div className="relative flex-1">
            <input
                type="text"
                placeholder="Paste your music URL here..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-[#2A2A2A] text-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF3E3E] pr-12 text-lg"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
        </div>
    );
}