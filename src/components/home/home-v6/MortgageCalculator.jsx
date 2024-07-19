'use client'

import { useState, useEffect } from 'react';

const MortgageCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [downPayment, setDownPayment] = useState('');
  const [loanPeriod, setLoanPeriod] = useState(25);
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    if (principal && downPayment && interestRate) {
      calculatePayment();
    }
  }, [principal, downPayment, loanPeriod, interestRate]);

  const calculatePayment = () => {
    const loanAmount = principal - downPayment;
    const numberOfPayments = loanPeriod * 12;
    const monthlyInterestRate = parseFloat(interestRate.replace(',', '.')) / 100 / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <div className="mb-4">
          <label className="block text-gray-700">Principal</label>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            min="0"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Down Payment</label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
            min="0"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Loan Period (Years)</label>
          <select
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          >
            <option value={25}>25</option>
            <option value={30}>30</option>
            <option value={35}>35</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Interest Rate (%)</label>
          <input
            type="text"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="mt-1 p-2 w-full border rounded"
          />
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Monthly Payment</h2>
        <div className="text-3xl">${monthlyPayment}</div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
