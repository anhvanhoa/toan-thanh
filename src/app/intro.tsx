'use client';
import { PauseIcon, PlayIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type IntroType = {
    data: {
        background: string;
        title: string;
        subtitle: string;
        date: string;
        content: string;
    };
};

const Intro = ({ data }: IntroType) => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audio = React.useRef<HTMLAudioElement>(null);
    const handlePlay = React.useCallback(() => {
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
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        if (typeof window !== 'undefined') {
            window.document.body.style.overflow = 'auto';
        }
        handlePlay();
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div
                className='overflow-hidden relative min-h-96 bg-cover bg-black w-full aspect-[4/6]'
                style={{ backgroundImage: `url(${data.background})` }}
            >
                <h1
                    className={`font-splash text-white text-center text-3xl -translate-y-[120%] -rotate-6 pt-10 ${
                        isOpen ? 'animate-slide-down' : ''
                    }`}
                >
                    {data.title}
                </h1>
                <div className='absolute bottom-4 px-4 py-4 left-0 right-0 mx-2 rounded-2xl backdrop-blur-xl bg-white/10 text-center *:py-1'>
                    <p className='uppercase text-lg font-semibold'>{data.subtitle}</p>
                    <p className='text-2xl font-meow'>{data.date}</p>
                    <p className='font-medium'>{data.content}</p>
                    <Link href='#form' className='p-1 inline-block mt-2 relative'>
                        <p className='animate-ping bg-rose-600/20 rounded-full absolute inset-0'></p>
                        <button className='!py-1.5 px-5 rounded-full bg-rose-600 transition-all cursor-pointer font-medium text-white text-sm'>
                            Xác nhận tham gia
                        </button>
                    </Link>
                    <Image
                        width={128}
                        height={128}
                        src='/imgs/hoa-tiet.png'
                        alt='Hoa tiết'
                        className={`absolute -top-4 -right-4 rotate-180 w-32 translate-x-full ${
                            isOpen ? 'animate-slide-right-to-left' : ''
                        }`}
                    />
                </div>
            </div>
            <div
                className={`min-h-dvh bg-black/90 fixed inset-0 z-30 flex flex-col justify-between items-center ${
                    isOpen ? 'animate-blur-to-clear' : 'backdrop-blur-md'
                }`}
            >
                <p className='py-4 text-white'>HAPPY WENDDING</p>
                <div onClick={handleOpen} className='relative'>
                    <div
                        className={`absolute inset-0 border-[3px] border-rose-600 border-dashed rounded-full ${
                            isOpen ? 'animate-spin' : ''
                        }`}
                    ></div>
                    <button className={`font-badScript z-50 text-rose-600 font-semibold size-28 uppercase text-xl`}>
                        Mở
                    </button>
                </div>
                <p className='py-4 text-white'>@2025 Đỗ Toàn & Phạm Thị Thanh</p>
            </div>
            <div>
                <audio ref={audio} autoPlay className='hidden' src='/audio/nen.mp3' controls></audio>
                <button
                    onClick={isPlaying ? handlePause : handlePlay}
                    className='fixed bottom-0 right-0 p-2 m-2 border bg-white/30 rounded-full'
                >
                    {isPlaying ? <PauseIcon className='size-4' /> : <PlayIcon className='size-4' />}
                </button>
            </div>
        </div>
    );
};

export default Intro;
