import Guest from "@/components/Guest";
import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import IncomeExpenses from "@/components/IncomeExpenses";
import ListTransactions from "@/components/ListTransactions";
const HomePage =  async () => {

  const user = await currentUser();


  if (!user) {
    return <Guest />
  }

  return (
  <>
  <main className="flex flex-col p-4 ">
    <h1 className="text-4xl p-2">Welcome, {user.firstName ?? user.username ?? user?.emailAddresses[0]?.emailAddress} </h1>
    {/* <div className="h-1 w-full bg-black rounded-lg mt-3 mb-3"></div> */}

    <Balance />
    <IncomeExpenses />
    <AddTransaction />
    <ListTransactions/>
  </main> 
  </>
   );
}
 
export default HomePage;