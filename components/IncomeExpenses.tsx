import getIncomeExpense from '@/app/actions/incomeExpense';

const IncomeExpenses = async () => {

    const { income, expense } = await getIncomeExpense();

    return (
        <>
            <div className="flex flex-row items-center justify-center gap-2 text-2xl mt-4">

                <div className="w-2/4 flex-col items-center gap-2 p-2 rounded-lg hover:bg-green-200">
                    <h3 >Income</h3>
                    <p className="text-green-900">+{(income ?? 0).toFixed(2)}</p>
                </div>
                <div className="w-2/4 flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-red-200">
                    <h3 >Expenses</h3>
                    <p className="text-red-900">{(expense ?? 0).toFixed(2)}</p>
                </div>
            </div>
        </>);

}

export default IncomeExpenses;