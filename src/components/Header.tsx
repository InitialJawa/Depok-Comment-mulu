import React from 'react';
import { Platform } from '../types';
import { TikTokColoredIcon, InstagramColoredIcon, YouTubeColoredIcon, TwitterColoredIcon, KickColoredIcon } from './icons';

interface Props {
  platform: Platform;
  onPlatformChange: (p: Platform) => void;
}

export function Header({ platform, onPlatformChange }: Props) {
  const platforms: { id: Platform; label: string; icon: React.ReactNode }[] = [
    { id: 'tiktok', label: 'TikTok', icon: <TikTokColoredIcon className="w-5 h-5 drop-shadow-sm" /> },
    { id: 'instagram', label: 'Instagram', icon: <InstagramColoredIcon className="w-6 h-6 drop-shadow-sm" /> },
    { id: 'youtube', label: 'YouTube', icon: <YouTubeColoredIcon className="w-6 h-6 drop-shadow-sm" /> },
    { id: 'twitter', label: 'Twitter/X', icon: <TwitterColoredIcon className="w-6 h-6 drop-shadow-sm" /> },
    { id: 'kick_live', label: 'Kick Live', icon: <KickColoredIcon className="w-5 h-5 drop-shadow-sm" fontSize="14px" /> },
  ];

  return (
    <header className="h-16 border-b border-[#2D2D2D] px-4 lg:px-6 flex items-center justify-between bg-[#0A0A0A] shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
           <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
        </div>
        <div>
           <h1 className="text-lg font-bold tracking-tight text-[#F9FAFB] hidden sm:block">depokkomen</h1>
        </div>
      </div>
      
      <div className="hidden lg:flex bg-[#141414] p-1 rounded-xl border border-[#2D2D2D] items-center gap-1">
        {platforms.map((p) => (
          <button
            key={p.id}
            title={p.label}
            onClick={() => onPlatformChange(p.id)}
            className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
              platform === p.id 
                ? 'bg-[#2D2D2D] shadow-inner border border-[#3D3D3D]' 
                : 'hover:bg-[#1A1A1A] opacity-60 hover:opacity-100 border border-transparent'
            }`}
          >
            {p.icon}
          </button>
        ))}
      </div>
      
      <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-widest font-semibold">
        <span className="hidden sm:inline">ID</span>
        <div className="w-px h-3 bg-gray-700 hidden sm:block"></div>
        <span className="text-gray-700 hidden sm:inline">EN</span>
      </div>
    </header>
  );
}
