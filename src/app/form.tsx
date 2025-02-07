'use client';
import { FormState, submitAction } from '@/action/create-customer';
import Image from 'next/image';
import React, { useActionState, useEffect, useState } from 'react';

type BankType = {
    name: string;
    number: string;
    bank: string;
    qr: string;
};

type Props = {
    type: string;
    keyType: 'bride' | 'groom';
    bank: {
        bride: BankType;
        groom: BankType;
    };
};

const FormCustomer = ({ type, bank, keyType }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [state, action, isPending] = useActionState<FormState, FormData>(submitAction, {});

    const handleClose = () => {
        setIsOpen(false);
        if (typeof window !== 'undefined') {
            window.document.body.style.overflow = 'auto';
        }
    };

    useEffect(() => {
        if (state.status === 'success') {
            if (typeof window !== 'undefined') {
                window.document.body.style.overflow = 'auto';
            }
            setIsOpen(true);
            setTimeout(() => {
                setIsOpen(false);
            }, 5000);
        }
    }, [state.message, state.status]);
    return (
        <div id='form'>
            <div className='border-t border-gray-300 mt-16 bg-cover bg-center bg-[url(/imgs/form-2.jpg)] py-6'>
                <h3 className='uppercase text-2xl text-center py-8 text-black'>Sổ Lưu Bút</h3>
                <div className='space-y-1 text-black'>
                    <Image src={bank[keyType].qr} alt='QR' width={150} height={150} className='mx-auto' quality={100} />
                    <p className='text-center font-semibold'>Ngân hàng: {bank[keyType].bank}</p>
                    <p className='text-center font-semibold'>Tên Tài khoản: {bank[keyType].name}</p>
                    <p className='text-center font-semibold'>Số tài khoản: {bank[keyType].number}</p>
                </div>
                <div>
                    <div suppressHydrationWarning className={`px-6 text-sm mx-4`}>
                        <form action={action} className='space-y-3'>
                            <input name='type' type='hidden' value={type} />
                            <div>
                                <input
                                    name='name'
                                    type='text'
                                    placeholder='Họ và tên'
                                    className='w-full outline-none bg-gray-100/10 text-black text-base backdrop-blur-sm py-2.5 px-2.5 rounded-lg'
                                />
                                {state.errors?.name && <p className='pl-1 text-red-600'>{state.errors.name[0]}</p>}
                            </div>
                            <div>
                                <input
                                    name='phone'
                                    type='text'
                                    placeholder='Số điện thoại'
                                    className='w-full outline-none bg-gray-100/10 text-black text-base backdrop-blur-sm py-2.5 px-2.5 rounded-lg'
                                />
                                {state.errors?.phone && <p className='pl-1 text-red-600'>{state.errors.phone[0]}</p>}
                            </div>
                            <div>
                                <textarea
                                    name='notes'
                                    rows={4}
                                    placeholder='Lời nhắn'
                                    className='resize-none w-full outline-none bg-gray-100/10 text-black text-base backdrop-blur-sm py-2.5 px-2.5 rounded-lg'
                                ></textarea>
                                {state.errors?.notes && <p className='pl-1 text-red-600'>{state.errors.notes[0]}</p>}
                            </div>
                            <button
                                disabled={isPending}
                                type='submit'
                                className={`w-full !py-2.5 px-5 rounded-full bg-rose-600 hover:bg-rose-600/80 transition-all cursor-pointer font-medium text-white text-sm`}
                            >
                                {isPending ? 'Đang xử lý...' : 'Xác nhận tham gia'}
                            </button>
                        </form>
                    </div>

                    <p className='mt-6 font-light text-center text-sm py-4 text-gray-500'>
                        💖 Cảm ơn bạn đã đến chung vui cùng chúng mình! 💖
                    </p>
                </div>
            </div>
            {isOpen && (
                <div
                    onClick={handleClose}
                    className='fixed inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md p-4'
                >
                    <Image width={460} height={460} src='/imgs/good.gif' alt='Đang xử lý' className='w-44 mx-auto' />
                    <p className='text-4xl text-white font-meow'>{state.message}</p>
                </div>
            )}
        </div>
    );
};

export default FormCustomer;
