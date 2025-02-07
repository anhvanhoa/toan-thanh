import type { Metadata } from 'next';
import { Grey_Qo, Lobster, Splash, Bad_Script, Darker_Grotesque } from 'next/font/google';
import './globals.css';

const greyQoSna = Grey_Qo({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-meow'
});

const lobster = Lobster({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-lobster'
});

const splash = Splash({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-splash'
});

const badScript = Bad_Script({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-bad-script'
});

const darkerGrotesque = Darker_Grotesque({
    subsets: ['latin'],
    weight: ['500', '600', '700'],
    variable: '--font-darker-grotesque'
});

export const metadata: Metadata = {
    title: 'Đỗ Văn Toàn & Phạm Thị Thanh',
    description: 'Chúc mừng đám cưới'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${greyQoSna.variable} ${lobster.variable} ${splash.variable} ${badScript.variable} ${darkerGrotesque.className} bg-white text-black`}
            >
                {children}
            </body>
        </html>
    );
}
