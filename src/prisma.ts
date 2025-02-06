import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export type Customer = {
    name: string;
    email?: string;
    phone: string;
    notes: string;
};

export const createCustomer = async (data: Customer) => {
    return await prisma.customers.create({
        data: data,
    });
};

export const getCustomers = async () => {
    return await prisma.customers.findMany();
};

export default prisma;
