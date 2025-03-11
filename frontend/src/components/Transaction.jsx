import React from 'react';

// Single Transaction Component
const Transaction = ({ type, entity, dateTime, amount, status }) => {
  const statusStyles = {
    Pending: 'bg-blue-900 text-white w-[141px] h-[40px] justify-center items-center rounded-2xl pl-8',
    Confirmed: 'bg-black text-white',
    Canceled: 'bg-gray-400 text-white',
    Failed: 'bg-gray-400 text-white',
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            type === 'Fund Wallet' ? 'bg-black text-white' : 'bg-gray-400 text-black'
          }`}
        >
          {type === 'Fund Wallet' ? '+' : '-'}
        </div>
        <div className="ml-4">
          <div className="text-lg font-semibold">{type}</div>
          <div className="text-sm text-gray-500">{entity}</div>
        </div>
      </div>
      <div className="text-sm text-gray-500">{dateTime}</div>
      <div className="text-lg font-semibold">${amount.toLocaleString()}</div>
      <div className={`px-4 py-2 rounded ${statusStyles[status]}`}>{status}</div>
    </div>
  );
};

// Transaction List Component
const TransactionsList = ({ transactions }) => {
  return (
    <div className="w-[1120px] h-[611px] mx-auto bg-white shadow-md rounded-lg">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-semibold">Transactions</h2>
      </div>
      {transactions.map((transaction, index) => (
        <Transaction key={index} {...transaction} />
      ))}
    </div>
  );
};

// Example Usage
const TransactionPage = () => {
  const transactionsData = [
    {
      type: 'Purchase Items',
      entity: 'Calco',
      dateTime: '06.Mar.2023 - 09:39',
      amount: 120200.0,
      status: 'Pending',
    },
    {
      type: 'Purchase Items',
      entity: 'Calco',
      dateTime: '02.Mar.2023 - 09:39',
      amount: 1800400.0,
      status: 'Confirmed',
    },
    {
      type: 'Fund Wallet',
      entity: 'Calco',
      dateTime: '02.Mar.2023 - 09:39',
      amount: 2560000.0,
      status: 'Confirmed',
    },
    {
      type: 'Purchase Items',
      entity: 'Colco',
      dateTime: '02.Mar.2023 - 09:39',
      amount: 1800400.0,
      status: 'Canceled',
    },
    {
      type: 'Fund Wallet',
      entity: 'Calco',
      dateTime: '01.Mar.2023 - 09:39',
      amount: 1800400.0,
      status: 'Failed',
    },
  ];

  return <TransactionsList transactions={transactionsData} />;
};

export default TransactionPage;

