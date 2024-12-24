'use server';

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

async function getIncomeExpense(): Promise<{ income?: number; expense?: number; error?: string; }> {
    const { userId } = await auth();

    if (!userId) {
        return { error: 'User not found' }
    }

    try {
        const transaction = await db.transaction.findMany({
            where: {
                userId
            }
       })

        const income = transaction.filter(transaction => transaction.amount > 0).reduce((sum, transaction) => {
            return sum + transaction.amount;
        }, 0)

        const expense = transaction.filter(transaction => transaction.amount < 0).reduce((sum, transaction) => {
            return sum + transaction.amount;
        }, 0)

        return { income, expense }
    } catch (error) {
        console.error(error);
        return { error: 'Something went wrong' };
    }


}

export default getIncomeExpense