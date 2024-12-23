import getUserBalance from "@/app/actions/getUserBalance";

const Balance = async () => {

    const { balance } = await getUserBalance();

    if (balance) {
        return (
            <>
                <div className="w-fit mt-1 flex flex-row gap-2 p-2 ">
                    <h4 className="text-3xl" >Balance : </h4>
                    <p className={balance > 0 ? "text-green-900 text-3xl" : "text-red-900 text-3xl"}>{balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>

                </div>
            </>
        )
    } 


}

export default Balance;