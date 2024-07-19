'use client'

import { useState, useEffect } from 'react';

const RentalYieldCalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [serviceCharge, setServiceCharge] = useState('');
  const [additionalCharges, setAdditionalCharges] = useState('');
  const [rentalPrice, setRentalPrice] = useState('');
  const [netRent, setNetRent] = useState(0);
  const [netRoi, setNetRoi] = useState(0);

  useEffect(() => {
    if (purchasePrice && serviceCharge && additionalCharges && rentalPrice) {
      calculateYield();
    }
  }, [purchasePrice, serviceCharge, additionalCharges, rentalPrice]);

  const calculateYield = () => {
    const totalCharges = parseFloat(serviceCharge) + parseFloat(additionalCharges);
    const annualNetRent = parseFloat(rentalPrice) - totalCharges;
    const roi = (annualNetRent / parseFloat(purchasePrice)) * 100;

    setNetRent(annualNetRent.toFixed(2));
    setNetRoi(roi.toFixed(2));
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <div className="mb-4">
          <label className="block text-gray-700">Purchase Price</label>
          <input
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(e.target.value)}
            className="mt-1 p-2 w-full border rounded appearance-none"
            min="0"
            step="1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Annual Service Charge</label>
          <input
            type="number"
            value={serviceCharge}
            onChange={(e) => setServiceCharge(e.target.value)}
            className="mt-1 p-2 w-full border rounded appearance-none"
            min="0"
            step="1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Additional Charges</label>
          <input
            type="number"
            value={additionalCharges}
            onChange={(e) => setAdditionalCharges(e.target.value)}
            className="mt-1 p-2 w-full border rounded appearance-none"
            min="0"
            step="1"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Annual Rental Price</label>
          <input
            type="number"
            value={rentalPrice}
            onChange={(e) => setRentalPrice(e.target.value)}
            className="mt-1 p-2 w-full border rounded appearance-none"
            min="0"
            step="1"
          />
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        <div className="mb-4">
          <div className="text-lg">Net Rent: ${netRent}</div>
          <div className="text-lg">Net ROI: {netRoi}%</div>
        </div>
      </div>
    </div>
  );
};

export default RentalYieldCalculator;