import React from 'react';
import './deatil.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

const Detailstab: React.FC = () => {
  const {customerName,id,description} = useSelector((state:RootState) => state.selectedIdData)

  return (
    <div className='detail-container'>
        <h2>{customerName}</h2>
      <p>{description}</p>
      <div className="images"></div>
    </div>
  );
};

export default Detailstab;
