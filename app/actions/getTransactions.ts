'use server';

import { auth } from '@clerk/nextjs/server';
import {db } from '@/lib/db';


interface TransactionResult {
    category: string,
    text: string,
    amount: number,
    createdAt: Date
    id: string
}


async function getTransactions(): Promise<TransactionResult[]> {
    const { userId } = await auth();

    if (!userId) {
        return [];
    }

    try {
        const transactions = await db.transaction.findMany({
            where: {
                userId
            }
        });

        return transactions;
    } catch (error) {
        console.error(error);
        return [];      

    }

}

export default getTransactions