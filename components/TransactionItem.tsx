'use client'

import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { deleteTransaction } from "@/app/actions/deleteTransaction";

type TransactionType = {
    id: string; // Unique identifier for the transaction
    category: string;
    text: string; // Description or label for the transaction
    amount: number; // Amount associated with the transaction
    createdAt: Date; // Timestamp of when the transaction was created
};

const handleDeleteItem = async (transactionId: string) => {
    const { success, error } = await deleteTransaction(transactionId);
    if (error) {
        // show toast error message
        toast.error(error);
    } else if (success) {
        // show toast success message
        toast.success(success);
    }
};

type TransactionItemProps = {
    transaction: TransactionType;
};

const TransactionItem = ({ transaction }: TransactionItemProps) => {
    return (
        <>
            {/* Title Row */}
            <div className="flex flex-row gap-2 p-2 text-center font-semibold">
                <span className="w-2/6">Name</span>
                <span className="w-2/6">Amount</span>
                <span className="w-2/6">Date</span>
            </div>

            {/* Transaction Row */}
            <div className="text-xl flex flex-row gap-2 p-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                <span className="w-2/6 flex justify-center items-center">{transaction.text}</span>
                <span className="w-2/6 flex justify-center items-center">
                    {transaction.amount > 0 ? `+${transaction.amount}` : `-${transaction.amount}`}
                </span>
                <span className="w-2/6 flex justify-center items-center">{transaction.createdAt.toLocaleDateString()}</span>
                <button onClick={() => handleDeleteItem(transaction.id)} className="ml-auto hover:text-red-700">
                    <MdDeleteForever size={30} height={30} />
                </button>
            </div>
        </>
    );
};

export default TransactionItem;
