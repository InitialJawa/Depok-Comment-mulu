import React from 'react';
import { CommentState } from '../../types';
import { renderFormattedText } from '../../utils';
import { Moon, Sun } from 'lucide-react';

interface Props {
  state: CommentState;
  onThemeToggle?: () => void;
}

export function IGLivePreview({ state, onThemeToggle }: Props) {
  const isDark = state.theme === 'dark';
  const bgColor = isDark ? 'bg-black/30' : 'bg-white/80';
  const textColor = isDark ? 'text-white' : 'text-black';

  return (
    <div className="w-full flex justify-start font-sans text-left relative pt-10 pb-4">
      {/* Container for live comment styling */}
      <div className={`flex items-start ${bgColor} backdrop-blur-md rounded-2xl p-2.5 max-w-sm w-full shadow-sm`}>
        <img src={state.avatarUrl} alt="Avatar" className={`w-[34px] h-[34px] rounded-full object-cover mr-3 bg-gray-800 shrink-0 ${isDark ? 'border border-white/10' : 'border border-gray-200'}`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center mb-0.5">
            <span className={`font-semibold ${isDark ? 'text-white/90' : 'text-gray-900'} text-[13px] mr-1`}>
              {state.username.replace(/\s+/g, '').toLowerCase()}
            </span>
            {state.isVerified && (
               <div className="bg-[#3897f0] rounded-full w-3.5 h-3.5 flex items-center justify-center shrink-0">
                  <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
               </div>
            )}
          </div>
          <div className={`${textColor} text-[14px] leading-[1.3] break-words drop-shadow-sm font-medium`}>
            {renderFormattedText(state.commentText)}
          </div>
        </div>
      </div>
    </div>
  );
}
