'use client';
import { PlayIcon, PauseIcon } from 'lucide-react';
import React, { useCallback, useRef, useState } from 'react';

const Audio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef<HTMLAudioElement>(null);
    const handlePlay = useCallback(() => {
        if (!audio.current) return;
        // nếu dưới 16s thì bắt đầu từ giây thứ 16
        if (audio.current?.currentTime < 16) {
            audio.current.currentTime = 16;
        }
        audio.current?.play();
        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    const handlePause = () => {
        audio.current?.pause();
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <audio ref={audio} autoPlay className='hidden' src='/audio/nen.mp3' controls></audio>
            <button
                onClick={isPlaying ? handlePause : handlePlay}
                className='fixed bottom-0 right-0 p-2 m-2 border bg-white/30 rounded-full'
            >
                {isPlaying ? <PauseIcon className='size-4' /> : <PlayIcon className='size-4' />}
            </button>
        </div>
    );
};

export default Audio;
