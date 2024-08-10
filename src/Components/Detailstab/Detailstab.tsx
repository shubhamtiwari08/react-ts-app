import React, { useEffect } from 'react';
import './deatil.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const Detailstab: React.FC = () => {
  const imgID  = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 }
  ]

  
  
  
  
  const selectedData = useSelector((state:RootState) => state.selectedIdData)
  const {customerName,id,description} = selectedData
  function getRandomNumber(min: number = 1, max: number = 200): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(()=>{

  })
  
  return (
    <div className='detail-container'>
    {id !== 0 ? (
      <div>
        <h2>{customerName}</h2>
        <p>{description}</p>
        <div className="images-container">
        {imgID.map((item, index) => {
              const randomNumber = getRandomNumber(); 
              return (
                <img
                  key={item.id} // Use a unique key from your imgID array
                  src={`https://picsum.photos/id/${randomNumber}/200`}
                  alt={`random ${randomNumber}`}
                />
              );
            })}
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
