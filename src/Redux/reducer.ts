import { data, Data } from "../Data/data";
import { MyActionTypes } from "./action";

interface State {
    isSelectedId:Number;
    selectedIdData : {
        id:Number;
        customerName:string;
        description:string;
        isSelected?:boolean;
    }
    totalData:Data[]
}

const initiaState : State ={
    isSelectedId : 0,
    selectedIdData : {
        id:0,
        customerName:"",
        description:"",
        isSelected:false,
    },
    totalData:data
}

export const tabReducer = (state = initiaState,action:MyActionTypes):State =>{
    switch (action.type) {
        case "OPEN":
           let filteredData = state.totalData.filter(item => item.id === action.id )[0]
           let modifiedData = state.totalData.map(item => {
            if(item.id == action.id){
                return item = {...item,isSelected:true}
            }else{
                return item
            }
           })
          return { ...state, isSelectedId:state.isSelectedId,selectedIdData:filteredData,totalData:modifiedData};
        default:
            return state
      }
}