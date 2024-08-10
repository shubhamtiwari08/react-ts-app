import React, { useEffect, useState } from 'react';
import './deatil.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const Detailstab: React.FC = () => {
  const [randomNumbers, setRandomNumbers] = useState<Number[]>([1,2,3,4,5,6,7,8,9]);
 
  
  const selectedData = useSelector((state:RootState) => state.selectedIdData)
  const {customerName,id,description} = selectedData
  function getRandomNumber(min: number = 1, max: number = 200): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const generateRandomNumbers = () => {
      setRandomNumbers(randomNumbers.map(() => getRandomNumber()));
    };

    generateRandomNumbers(); 
    const intervalId = setInterval(generateRandomNumbers, 10000); 

    return () => clearInterval(intervalId);
  }, [id]);
  
  return (
    <div className='detail-container'>
    {id !== 0 ? (
      <div>
        <h2>{customerName}</h2>
        <p>{description}</p>
        <div className="images-container">
        {randomNumbers.map((randomNumber, index) => (
    <img
      key={index} // Use the index or another unique key from your data
      src={`https://picsum.photos/id/${randomNumber}/200`}
      alt={`random ${randomNumber}`}
    />
  ))}
        </div>
      </div>
    ) : (
      <div>
        <p>Select one of the customer tabs</p>
      </div>
    )}
  </div>
  );
};

export default Detailstab;
