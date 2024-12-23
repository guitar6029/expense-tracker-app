'use server'

import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"

async function getUserBalance(): Promise<{ balance?: number; error?: string; }> {

    const { userId } = await auth();

    if (!userId) {
        return { error: 'User not found' };
    }

    try {
        const transaction = await db.transaction.findMany({
            where: {
                userId
            }
        })

        const balance = transaction.reduce((sum, transaction) => {
            return sum + transaction.amount;
        }, 0)
        return { balance };
    } catch (error) {
        console.error(error);
        return { error: 'Something went wrong' };
    }

}


export default getUserBalance