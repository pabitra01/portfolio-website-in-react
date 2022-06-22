const colorItem=localStorage.getItem('item-color')|| '#00AFC1';
const themeItem=localStorage.getItem('theme') || 'light';
const initialColor=colorItem;
const initialTheme=themeItem;

export const color=(state=initialColor,action)=>{
    
    if(action.type==='COLOR'){
        return action.payload;
    }
    else{
        return state;
    }
    

}
export const theme=(state=initialTheme,action)=>{
    
    if(action.type==='THEME'){
        return action.payload;
    }else{
        return state;
    }
}