import Image from 'next/image';
import Intro from './intro';
import Form from './form';

const data = {
    intro: {
        title: 'Phạm Thanh - Đỗ Toàn',
        subtitle: 'Thư mời tiệc cưới',
        date: 'Chủ Nhật, ngày 08 tháng 03 năm 2025',
        content:
            'Thật vui khi được đón tiếp bạn trong ngày cưới của chúng mình! Chúng mình rất hạnh phúc và chân thành cảm ơn bạn vì sự hiện diện cùng những lời chúc tốt đẹp.',
        background: '/imgs/bg-1.jpg'
    },
    brideAndGroom: [
        {
            id: 1,
            name: 'Đỗ Văn Toàn',
            avatar: '/imgs/DO_TOAN.jpg',
            content:
                '"Hôm nay là một ngày vô cùng đặc biệt trong cuộc đời mình, và niềm hạnh phúc lớn nhất chính là có sự hiện diện của gia đình, bạn bè thân yêu. Cảm ơn mọi người đã đến chung vui, gửi những lời chúc tốt đẹp và sẻ chia khoảnh khắc đáng nhớ này. Mình thật may mắn khi có được một người bạn đời tuyệt vời để cùng nhau viết tiếp hành trình phía trước" 💍❤️'
        },
        {
            id: 2,
            name: 'Phạm Thị Thanh',
            avatar: '/imgs/THANH.JPG',
            content:
                '"Hôm nay là ngày hạnh phúc nhất của mình, và điều ý nghĩa hơn cả là được sẻ chia khoảnh khắc này với gia đình, bạn bè thân yêu. Cảm ơn mọi người đã đến, dành cho chúng mình những lời chúc tốt đẹp và lan tỏa niềm vui. Mình thật may mắn khi tìm được một nửa yêu thương để cùng nhau xây dựng tương lai" 💕👰💍'
        }
    ],
    weddingInvitation: {
        groom: {
            img: '/imgs/thiep-cuoi.jpg',
            title: 'Tiệc Mừng Nhà Trai',
            date: '08.03.2025',
            time: '07:30',
            address: 'Xóm Bắc, Xã Tân An, Huyện Thanh Hà, Hải Dương'
        },
        bride: {
            img: '/imgs/thiep-cuoi.jpg',
            title: 'Tiệc Mừng Nhà Gái',
            date: '08.03.2025',
            time: '07:30',
            address: 'Xóm Bắc, Xã Tân An, Huyện Thanh Hà, Hải Dương'
        }
    },
    album: [
        {
            title: 'Hồi ấy dại khờ',
            date: '04 Th3, 2025',
            images: [
                '/imgs/DSC_1980.JPG',
                '/imgs/happy-wendding.jpg',
                '/imgs/DSC_1980.JPG',
                '/imgs/DSC_1980.JPG',
                '/imgs/DSC_1980.JPG'
            ]
        }
    ],
    programme: {
        groom: {
            address: 'Xóm Bắc, Xã Tân An, Huyện Thanh Hà, Hải Dương',
            time: 'Vào lúc 7h:30, Ngày 08-03-2025'
        },
        bride: {
            address: 'Xóm Bắc, Xã Tân An, Huyện Thanh Hà, Hải Dương',
            time: 'Vào lúc 7h:30, Ngày 08-03-2025'
        },
        schedule: [
            {
                title: '1️⃣Đón khách (17:00 - 18:00)',
                content: ['✨Chào đón khách mời, chụp ảnh lưu niệm.', '✨Thưởng thức tiệc nhẹ & giao lưu.']
            },
            {
                title: '2️⃣Khai mạc buổi lễ (18:00 - 18:15)',
                content: ['🎤MC giới thiệu chương trình.', '🎬Chiếu video/kỷ niệm hành trình tình yêu (tuỳ chọn).']
            },
            {
                title: '3️⃣Nghi thức lễ cưới (18:15 - 18:45)',
                content: [
                    '💍Cô dâu - chú rể tiến vào lễ đường.',
                    '💖Phát biểu cảm nghĩ của cô dâu - chú rể.',
                    '🥂Nghi thức rót rượu/champagne & cắt bánh cưới.',
                    '👨‍👩‍👧‍👦Đại diện gia đình phát biểu.'
                ]
            },
            {
                title: '4️⃣Dùng tiệc & giao lưu (18:45 - 20:30)',
                content: [
                    '🍽️Khai tiệc & nâng ly chúc mừng.',
                    '🎶Văn nghệ & trò chơi giao lưu cùng khách mời.',
                    '📸Chụp ảnh kỷ niệm cùng cô dâu - chú rể.'
                ]
            },
            {
                title: '5️⃣Kết thúc & cảm ơn (20:30 - 21:00)',
                content: [
                    '🎤Cô dâu - chú rể gửi lời cảm ơn.',
                    '🎁Trao quà lưu niệm cho khách mời.',
                    '👋Chia tay & gửi lời chúc tốt đẹp.'
                ]
            }
        ]
    }
};

type Props = {
    searchParams: Promise<{
        key: 'toan' | 'thanh';
        ten: string;
    }>;
};

export default async function Home({ searchParams }: Props) {
    let keyWeddingInvitation: 'groom' | 'bride' = 'groom';
    const { key = 'toan', ten = 'Nguyễn Văn Ánh' } = await searchParams;
    if (key === 'toan') keyWeddingInvitation = 'groom';
    if (key === 'thanh') keyWeddingInvitation = 'bride';
    return (
        <div>
            <div className='bg-indigo-600 py-1'>
                <p className='text-white text-center text-sm'>🎉 Trân trọng mời {ten} tham dự lễ vu quy 🎉</p>
            </div>
            <Intro data={data.intro} />
            <div>
                <h3 className='uppercase text-2xl font-light text-center py-12 text-gray-500'>Giới thiệu</h3>
                <div className='space-y-16'>
                    {data.brideAndGroom.map((item, index) => (
                        <div key={index} className='px-4 grid grid-cols-1 gap-4 items-center justify-center'>
                            <Image
                                width={160}
                                height={160}
                                src={item.avatar}
                                alt={item.name}
                                className='w-40 rounded-full aspect-square object-cover object-top mx-auto'
                            />
                            <div className='text-center flex-1'>
                                <p className='text-4xl font-medium font-meow'>{item.name}</p>
                                <p className='font-light'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div id='thiep-cuoi' className='border-y border-gray-300 mt-14'>
                <div className='space-y-8'>
                    <div className='*:text-black w-full aspect-[4/6] bg-cover bg-[url(/imgs/bg.jpg)] flex items-center justify-center flex-col gap-y-2 px-16'>
                        <Image
                            width={160}
                            height={160}
                            src={data.weddingInvitation[keyWeddingInvitation].img}
                            alt='Thiệp cưới'
                            className='w-36 inset-shadow-sm aspect-square rounded-t-full rounded-b-4xl object-top object-cover'
                        />
                        <p className='font-light text-lg uppercase font-great'>
                            {data.weddingInvitation[keyWeddingInvitation].title}
                        </p>
                        <p className='text-center px-2 font-meow text-xl'>
                            Trân trọng kính mời {ten} đến dự tiệc thâm mật cùng gia đình chúng tôi !
                        </p>
                        <div className='text-sm text-center'>
                            <p className='font-light'>
                                Vào lúc
                                <span className='pl-1'>{data.weddingInvitation[keyWeddingInvitation].time}</span>
                            </p>
                            <p className='py-1 border-y border-y-gray-300 my-2 text-rose-700 text-xl font-medium font-lobster'>
                                {data.weddingInvitation[keyWeddingInvitation].date}
                            </p>
                            <p className='font-light px-4'>{data.weddingInvitation[keyWeddingInvitation].address}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-gray-300'>
                <h3 className='uppercase text-2xl font-light text-center py-9 text-gray-500'>Album</h3>
                <div className='space-y-4'>
                    {data.album.map((item, index) => (
                        <div key={index} className='px-4'>
                            <div className='flex items-center justify-between pb-3'>
                                <p className='text-gray-600'>{item.title}</p>
                                <p className='text-gray-600'>{item.date}</p>
                            </div>
                            <div className='grid grid-cols-3 gap-0.5 *:aspect-square *:object-cover'>
                                {item.images.map((image, index) => (
                                    <Image key={index} width={160} height={160} src={image} alt='' />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='border-t border-gray-300 mt-16'>
                <h3 className='uppercase text-2xl font-light text-center py-12 text-gray-500'>Chương Trình</h3>
                <div className='px-2 space-y-3'>
                    <div>
                        <p>
                            <span className='font-medium pr-1'>📍DC:</span>
                            {data.programme[keyWeddingInvitation].address}
                        </p>
                        <p>
                            <span className='font-medium pr-1'>📅 Thời gian:</span>
                            {data.programme[keyWeddingInvitation].time}
                        </p>
                    </div>
                    {data.programme.schedule.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <ul>
                                {item.content.map((content, index) => (
                                    <li key={index}>{content}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <Form />
        </div>
    );
}
