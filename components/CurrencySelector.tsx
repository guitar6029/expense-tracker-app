// components/CurrencySelector.tsx
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from '@/app/slices/CurrencySlice';

const CurrencySelector = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state: any) => state.currency.currency); // Get currency from Redux store

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value;
    dispatch(setCurrency(newCurrency)); // Dispatch to Redux store
  };

  return (
    <div className="max-w-sm mx-auto mt-4">
      <label htmlFor="currency" className="block text-sm font-medium text-gray-700 mb-1">
        Select Currency
      </label>
      <select
        id="currency"
        value={currency}
        onChange={handleCurrencyChange}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  );
};

export default CurrencySelector;
