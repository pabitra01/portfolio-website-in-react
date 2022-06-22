export const color_item=(color)=>{
    return {
        type:'COLOR',
        payload:color
    }
}
export const selectTheme=(theme)=>{
    return {
        type:'THEME',
        payload:theme
    }
}