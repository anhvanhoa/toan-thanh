import { getCustomers } from '@/prisma';
import { Metadata } from 'next';
import React from 'react';

// Ngăn chặn việc dò url từ các trình duyệt
export const config = { amp: 'hybrid' };

// Ngăn chăn robot tìm kiếm
export const metadata: Metadata = {
    robots: 'noindex, nofollow'
};

type Props = {
    searchParams: Promise<{
        key: string;
    }>;
};

const Page = async ({ searchParams }: Props) => {
    const { key = 'toan' } = await searchParams;
    const data = await getCustomers(key);
    return (
        <div>
            <p className='text-center py-2'>Tất cả có {data.length} người tham dự</p>
            <div className='relative overflow-x-auto'>
                <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' className='pl-1 py-3'>
                                #
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Họ hàng
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Lời nhắn
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr
                                key={item.id}
                                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'
                            >
                                <td className='pl-1 py-3'>{i + 1}</td>
                                <th
                                    scope='row'
                                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                                >
                                    <p>{item.name}</p>
                                    <p>{item.phone}</p>
                                    <p>{item.created_at.toLocaleDateString('vi')}</p>
                                </th>
                                <td className='px-6 py-4'>{item.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
