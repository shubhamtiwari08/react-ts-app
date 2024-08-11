
import { useSelector } from 'react-redux'
import './App.css'
import { RootState } from './Redux/store'
import Customertab from './Components/Customertab/Customertab'
import Detailstab from './Components/Detailstab/Detailstab'

function App() {
  const tabState = useSelector((state:RootState) => state)
  const totalData = tabState.totalData
  

  return (
    <main>
      <div className="customer-list"> 
     {totalData.map(({id,customerName,description,isSelected}) => <Customertab id={id} customerName={customerName} description={description} isSelected={isSelected}/>)}
     </div>
     <div className='main-detail-container'>

     <Detailstab/>
     </div>
      
    </main>
  )
}

export default App


