"use client";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null);

    // State for the selected category
    const [selectedCategory, setSelectedCategory] = useState<string>("groceries");

    // Handle dropdown change
    const handleSelectedValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    // Form submission handler
    const clientAction = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(formRef.current!); // Get FormData from formRef
        formData.set("category", selectedCategory); // Set category to selected value
    
        const { error } = await addTransaction(formData); // Send form data to the server

        if (error) {
            toast.error(error);
        } else {
            toast.success('Transaction added');
            formRef.current?.reset(); // Reset the form after successful submission
            setSelectedCategory("groceries");
        }
    };

    return (
        <div className="flex flex-col gap-4 p-2">
            <hr />
            <form
                className="flex flex-col gap-2"
                ref={formRef}
                onSubmit={clientAction} // Correctly using onSubmit to handle form submission
            >
                {/* Category Dropdown */}
                <div className="flex flex-row items-center gap-2">
                    <label htmlFor="category" className="w-1/4">Category</label>
                    <select
                        onChange={handleSelectedValue}
                        value={selectedCategory}
                        className="p-2 w-3/4 rounded-sm"
                        name="category"
                        id="category"
                    >   
                        <option value="income">Income</option>
                        <option value="groceries">Groceries</option>
                        <option value="bills">Bills</option>
                        <option value="personal">Personal</option>
                        <option value="shopping">Shopping</option>
                        <option value="services">Services</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* Transaction Text */}
                <div className="flex flex-row items-center gap-2">
                    <label htmlFor="text" className="w-1/4">Transaction</label>
                    <input
                        className="p-2 w-3/4 rounded-sm"
                        type="text"
                        id="text"
                        name="text"
                        placeholder="Enter transaction description..."
                        required
                    />
                </div>

                {/* Amount Input */}
                <div className="flex flex-row items-center gap-2">
                    <label htmlFor="amount" className="w-1/4">Amount</label>
                    <input
                        className="p-2 w-3/4 rounded-sm"
                        type="number"
                        name="amount"
                        id="amount"
                        step="0.01"
                        placeholder="Enter amount..."
                        required
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="text-2xl rounded-lg bg-slate-300 mt-4">
                    Add Transaction
                </button>
            </form>
        </div>
    );
};

export default AddTransaction;
