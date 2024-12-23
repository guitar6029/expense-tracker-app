
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { checkUser } from '@/lib/checkUser';
//import CurrencySelectorWrapper from './CurrencySelectorWrapper';

const Header = async () => {

    //const user = await checkUser();

    return (
        <nav className="h-16 p-2 flex flex-row items-center justify-between gap-2 bg-black text-white shadow-xl">
            <div>
                <h1 className="text-2xl text-white">Expense Tracker</h1>
            </div>
            <div className="flex flex-row gap-2 items-center text-white">
                {/* <CurrencySelectorWrapper /> */}
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>


        </nav>);
}

export default Header;