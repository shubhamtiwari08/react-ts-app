import React from 'react';
import { Data } from '../../Data/data';
import './customertab.css'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Redux/store';
import { openDetails } from '../../Redux/action';



const Customertab: React.FC<Data> = ({id,customerName,description,isSelected}) => {
  const dispatch = useDispatch<AppDispatch>()
  console.log(isSelected)
  return (
    <div className={`tab-container ${isSelected ? "active" : ""}`} onClick={()=>dispatch(openDetails(id))} >
      <h2>{customerName}</h2>
      <p>{description}</p>  
    </div>
  );
};

export default Customertab;
