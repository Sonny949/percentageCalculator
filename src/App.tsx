import React, { useState } from 'react';
import { calculateMarkupPercentage } from './components/converter';

function App() {
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [markupPercentage, setMarkupPercentage] = useState<number>(0);

  const handleFinalPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFinalPrice(Number(event.target.value));
  };

  const handleDiscountPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountPercentage(Number(event.target.value));
  };

  const handleClick = () => {
    let markupPercentage = calculateMarkupPercentage(finalPrice, discountPercentage);
    setMarkupPercentage(markupPercentage);
  };

  return (
    <div>
      <h1>Markup Percentage Calculator</h1>
       <div>
        <label htmlFor="final-price">Final Price:</label>
        <input type="number" id="final-price" step="0.01" value={finalPrice !== 0 ? finalPrice : ''} onChange={handleFinalPriceChange} /><br /><br />
      </div>
      <div>
        <label htmlFor="discount-percentage">Discount Percentage:</label>
        <input type="number" id="discount-percentage" value={discountPercentage !== 0 ? discountPercentage : ''} onChange={handleDiscountPercentageChange} /><br /><br />
      </div>
      <button onClick={handleClick}>Calculate Markup Percentage</button>
      <p>Markup Percentage: {markupPercentage.toFixed(2)}%</p>
    </div>
  );
}

export default App;
