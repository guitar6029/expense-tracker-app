import getTransactions from "@/app/actions/getTransactions";
import TransactionItem from "./TransactionItem";

const ListTransactions = async () => {
    const transactions = await getTransactions();

    console.log("transactions", transactions);

   

    if (!transactions) {
        return <div className="text-2xl">No Transactions</div>;
    }
    else if (transactions.length === 0) {
        return <div className="text-2xl">No Transactions</div>;
    }
    else if (transactions.length > 0) {
        return (
            <>
                <div className="p-2 rounded-lg flex flex-col gap-4 w-full mt-4 ">
                <h2 className="text-3xl">Transactions History</h2>
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex flex-col gap-2">

                    <TransactionItem  key={transaction.id} transaction={transaction} />
                    </div>
                ))}
                </div>
            </>
        );
    }
};

export default ListTransactions;  
