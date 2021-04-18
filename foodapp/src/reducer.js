export const initialState ={
    items: []
};
export const Totalamount=(items)=>items?.reduce((finalamt,item)=> item.Tottal + finalamt,0);


const reducer = (state, action)=>{
    switch(action.type)
    {
      case 'ADD':
         return{
            ...state,
          items: [...state.items,action.item],
         };
         
         
     case 'del':
         return{
               ...state,
              
         };
            
         default:
             return state;
    }
};
 export default reducer;