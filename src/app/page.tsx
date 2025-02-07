import Image from 'next/image';
import Intro from './intro';
import Form from './form';
import Calendar from './calendar';

const data = {
    intro: {
        title: 'Thanh Thanh - Văn Toàn',
        subtitle: 'Thư mời tiệc cưới',
        date: 'Chủ Nhật, ngày 09 tháng 03 năm 2025',
        lunarCalendar: 'Lịch âm: 10 tháng 02 năm Ất Tỵ',
        content:
            'Thật vui khi được đón tiếp bạn trong ngày cưới của chúng mình! Chúng mình rất hạnh phúc và chân thành cảm ơn bạn vì sự hiện diện cùng những lời chúc tốt đẹp.',
        background: {
            bride: '/imgs/bg-1.jpg',
            groom: '/imgs/bg-2.jpg'
        }
    },
    brideAndGroom: [
        {
            id: 1,
            name: 'Chú Rể: Đỗ Văn Toàn',
            avatar: '/imgs/DO_TOAN.jpg',
            mother: 'Hoàng Thị Nhiên',
            father: 'Đỗ Văn Tuyền',
            content:
                '"Hôm nay là một ngày vô cùng đặc biệt trong cuộc đời mình, và niềm hạnh phúc lớn nhất chính là có sự hiện diện của gia đình, bạn bè thân yêu. Cảm ơn mọi người đã đến chung vui, gửi những lời chúc tốt đẹp và sẻ chia khoảnh khắc đáng nhớ này. Mình thật may mắn khi có được một người bạn đời tuyệt vời để cùng nhau viết tiếp hành trình phía trước" 💍❤️'
        },
        {
            id: 2,
            name: 'Cô Dâu: Phạm Thị Thanh',
            avatar: '/imgs/THANH.JPG',
            mother: 'Lưu Thị Thảo',
            father: 'Phạm Duy Tâm',
            content:
                '"Hôm nay là ngày hạnh phúc nhất của mình, và điều ý nghĩa hơn cả là được sẻ chia khoảnh khắc này với gia đình, bạn bè thân yêu. Cảm ơn mọi người đã đến, dành cho chúng mình những lời chúc tốt đẹp và lan tỏa niềm vui. Mình thật may mắn khi tìm được một nửa yêu thương để cùng nhau xây dựng tương lai" 💕👰💍'
        }
    ],
    weddingInvitation: {
        groom: {
            img: '/imgs/thiep-cuoi.jpg',
            title: 'Tiệc Mừng Nhà Trai',
            date: '09.03.2025',
            lunarCalendar: 'Lịch âm 10 Th2 Ất Tỵ',
            time: '07:30',
            address: 'Xóm Bắc, Xã Tân An, Huyện Thanh Hà, Hải Dương'
        },
        bride: {
            img: '/imgs/album-3.jpg',
            title: 'Tiệc Mừng Nhà Gái',
            date: '09.03.2025',
            lunarCalendar: 'Lịch âm 10 Th2 Ất Tỵ',
            time: '07:30',
            address: 'Xóm 1, Xã An Phượng, Thanh Hà, Hải Dương'
        }
    },
    album: [
        {
            title: 'Hồi ấy dại khờ',
            date: '04 Th3, 2025',
            images: [
                '/imgs/album-1.jpg',
                '/imgs/album-5.jpg',
                '/imgs/album-8.jpg',
                '/imgs/album-4.jpg',
                '/imgs/album-7.jpg',
                '/imgs/album-3.jpg',
                '/imgs/album-6.jpg',
                '/imgs/album-2.jpg'
            ]
        }
    ],
    programme: {
        groom: {
            address: 'Xóm Bắc, Xã Tân An, Huyện Thanh Hà, Hải Dương',
            time: 'Vào lúc 7h:30, Ngày 09-03-2025',
            lunarCalendar: 'Lịch âm 10 Th2 Ất Tỵ'
        },
        bride: {
            address: 'Xóm 1, Xã An Phượng, Thanh Hà, Hải Dương',
            time: 'Vào lúc 7h:30, Ngày 09-03-2025 (Lịch âm 10 Th2 Ất Tỵ)',
            lunarCalendar: ''
        },
        schedule: [
            {
                title: '1️⃣Đón khách (07:30 - 10:30)',
                content: ['✨Chào đón khách mời, chụp ảnh lưu niệm.', '✨Thưởng thức tiệc & giao lưu.']
            },
            {
                title: '2️⃣Khai mạc buổi lễ (12:00 - 13:00)',
                content: ['🎤MC giới thiệu chương trình.', '🎬Chiếu video/kỷ niệm hành trình tình yêu (tuỳ chọn).']
            },
            {
                title: '3️⃣Nghi thức lễ cưới (13:00 - 14:15)',
                content: [
                    '💍Cô dâu - chú rể tiến vào lễ đường.',
                    '💖Phát biểu cảm nghĩ của cô dâu - chú rể.',
                    '🥂Nghi thức rót rượu/champagne & cắt bánh cưới.',
                    '👨‍👩‍👧‍👦Đại diện gia đình phát biểu.'
                ]
            },
            {
                title: '4️⃣Giao lưu Kết thúc & cảm ơn (20:30 - 21:00)',
                content: [
                    '🎤Cô dâu - chú rể gửi lời cảm ơn.',
                    '🎁Trao quà lưu niệm cho khách mời.',
                    '👋Chia tay & gửi lời chúc tốt đẹp.'
                ]
            }
        ]
    },
    bank: {
        bride: {
            name: 'PHAM THI THANH',
            number: '3126 0520 04',
            bank: 'Techcombank',
            qr: '/imgs/qr-thanh.png'
        },
        groom: {
            name: 'DO VAN TOAN',
            number: '3108 2048 8888',
            bank: 'Techcombank',
            qr: '/imgs/qr-toan.png'
        }
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
                <p className='text-white text-center'>🎉 Trân trọng mời {ten} tham dự lễ vu quy 🎉</p>
            </div>
            <Intro data={data.intro} typeKey={keyWeddingInvitation} />
            <div>
                <h3 className='uppercase text-2xl font-light text-center py-12 text-gray-500'></h3>
                <div className='space-y-16'>
                    {data.brideAndGroom.map((item, index) => (
                        <div key={index} className='px-4 grid grid-cols-1 gap-8 items-center justify-center'>
                            <Image
                                width={160}
                                height={160}
                                src={item.avatar}
                                alt={item.name}
                                className='w-40 rounded-full aspect-square object-cover object-top mx-auto'
                            />
                            <div className='text-center flex-1'>
                                <p className='text-4xl font-medium font-meow'>{item.name}</p>
                                <p className='flex items-center justify-center gap-x-12 flex-wrap py-2'>
                                    <span>
                                        Con ông: <span className='font-medium'>{item.father}</span>
                                    </span>
                                    <span>
                                        Con bà: <span className='font-medium'>{item.mother}</span>
                                    </span>
                                </p>
                                <p className='font-light'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-8'>
                <Calendar />
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
                            Trân trọng kính mời {ten} đến dự tiệc thân mật cùng gia đình chúng tôi !
                        </p>
                        <div className='text-sm text-center'>
                            <p className='font-light'>
                                Vào lúc
                                <span className='pl-1'>{data.weddingInvitation[keyWeddingInvitation].time}</span>
                            </p>
                            <p className='py-1 border-y border-y-gray-300 my-2 text-rose-700 text-xl font-medium font-lobster'>
                                {data.weddingInvitation[keyWeddingInvitation].date}
                            </p>
                            <p>{data.weddingInvitation[keyWeddingInvitation].lunarCalendar}</p>
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
                            {/* <div className='flex items-center justify-between pb-3'>
                                <p className='text-gray-600'>{item.title}</p>
                                <p className='text-gray-600'>{item.date}</p>
                            </div> */}
                            <div className='grid grid-cols-2 gap-0.5 *:aspect-[4/6] *:object-cover'>
                                {item.images.map((image, index) => (
                                    <Image key={index} width={160} height={160} src={image} alt='' className='w-full' />
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
                        <p className='text-center'>{data.programme[keyWeddingInvitation].address}</p>
                        <p className='text-center'>{data.programme[keyWeddingInvitation].time}</p>
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
            <Form type={key} bank={data.bank} keyType={keyWeddingInvitation} />
        </div>
    );
}
