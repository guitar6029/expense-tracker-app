'use client';
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      console.log("error", error);
      toast.error(error);
    } else {
      toast.success('Transaction added');
      formRef.current?.reset();
    }
  };
  

  return (
    <>
      <div className="flex flex-col gap-4 p-2">
        <hr />

        <form className="flex flex-col gap-2"  ref={formRef} action={clientAction}>
         
          {/* Transaction Text */}
          <div className="flex flex-row items-center gap-2">
            <label htmlFor="text" className="w-1/4">Transaction</label>
            <input
              className="p-2 w-3/4 rounded-sm"
              type="text"
              id="text"
              name="text"
              placeholder="Enter text..."
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
              step={"0.01"}
              placeholder="Enter amount..."
            />
          </div>

          <button className="text-2xl rounded-lg bg-slate-300 mt-4">Add Transaction</button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
