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
    const totalCharges = parseFloat(serviceCharge.replace(/,/g, '')) + parseFloat(additionalCharges.replace(/,/g, ''));
    const annualNetRent = parseFloat(rentalPrice.replace(/,/g, '')) - totalCharges;
    const roi = (annualNetRent / parseFloat(purchasePrice.replace(/,/g, ''))) * 100;

    setNetRent(annualNetRent.toFixed(2));
    setNetRoi(roi.toFixed(2));
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <div className="mb-4">
          <label className="block text-gray-700">Purchase Price</label>
          <input
            type="text"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(formatNumber(e.target.value.replace(/,/g, '')))}
            className="mt-1 p-2 w-full border rounded appearance-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Annual Service Charge</label>
          <input
            type="text"
            value={serviceCharge}
            onChange={(e) => setServiceCharge(formatNumber(e.target.value.replace(/,/g, '')))}
            className="mt-1 p-2 w-full border rounded appearance-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Additional Charges</label>
          <input
            type="text"
            value={additionalCharges}
            onChange={(e) => setAdditionalCharges(formatNumber(e.target.value.replace(/,/g, '')))}
            className="mt-1 p-2 w-full border rounded appearance-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Annual Rental Price</label>
          <input
            type="text"
            value={rentalPrice}
            onChange={(e) => setRentalPrice(formatNumber(e.target.value.replace(/,/g, '')))}
            className="mt-1 p-2 w-full border rounded appearance-none"
          />
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        <div className="mb-4">
          <div className="text-lg">Net Rent: ${formatNumber(netRent)}</div>
          <div className="text-lg">Net ROI: {netRoi}%</div>
        </div>
      </div>
    </div>
  );
};

export default RentalYieldCalculator;
