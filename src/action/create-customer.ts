'use server';

import { createCustomer, Customer } from '@/prisma';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
    phone: z.string().regex(/^\d{10,11}$/, 'Số điện thoại không hợp lệ'),
    notes: z.string().min(10, 'Lời nhắn phải có ít nhất 10 ký tự'),
    type: z.string()
});

export type FormState = {
    errors?: {
        name?: string[];
        phone?: string[];
        notes?: string[];
    };
    message?: string;
    status?: string;
};

export const submitAction = async (_: FormState, formData: FormData) => {
    'use server';
    try {
        const dataCustomer: Customer = {
            name: formData.get('name') as string,
            phone: formData.get('phone') as string,
            notes: formData.get('notes') as string,
            type: formData.get('type') as string
        };
        const validatedData = formSchema.safeParse(dataCustomer);
        if (!validatedData.success) {
            return { errors: validatedData.error.flatten().fieldErrors, status: 'error' };
        }
        await createCustomer(validatedData.data);
        return { message: 'Cảm ơn bạn đã tham gia!', status: 'success' };
    } catch (_) {
        console.log(_);
        return { message: 'Đã có lỗi xảy ra, vui lòng thử lại sau', status: 'error' };
    }
};
