
 const OPEN = 'OPEN';


interface openAction {
  type: typeof OPEN;
  id:Number
}


export type MyActionTypes = openAction 


export const openDetails = (id:Number): MyActionTypes => ({
    type: OPEN,
    id,
  });



