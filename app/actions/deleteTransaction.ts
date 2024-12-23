'use server';

import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function deleteTransaction(transactionId: string) {
    const { userId } = await auth();

    if (!userId) {
        return { error: 'User not found' };
    } else {
        try {
            // Attempt to delete the transaction from the database
            await db.transaction.delete({
                where: {
                    id: transactionId
                }
            });

            // Revalidate the home page to reflect the updated list of transactions
            revalidatePath('/');

            return { success: 'Transaction deleted successfully' };

        } catch (error) {
            console.error(error);
            return { error: 'Something went wrong' };
        }
    }
}


export default deleteTransaction