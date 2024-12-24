import { currentUser } from "@clerk/nextjs/server";
import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import getTransactions from "./actions/getTransactions";
import Guest from "@/components/Guest";
import IncomeExpenses from "@/components/IncomeExpenses";
import ListTransactions from "@/components/ListTransactions";
import PieGraph from "@/components/PieGraph";

const HomePage =  async () => {

  const user = await currentUser();
  const transactions = await getTransactions();

  if (!user) {
    return <Guest />
  }

  return (
  <>
  <main className="flex flex-col p-4 ">
    <h1 className="text-4xl p-2">Welcome, {user.firstName ?? user.username ?? user?.emailAddresses[0]?.emailAddress} </h1>
    <Balance />
    <IncomeExpenses />
    <AddTransaction />
    <PieGraph data={transactions} />
    <ListTransactions />
  </main> 
  </>
   );
}
 
export default HomePage;