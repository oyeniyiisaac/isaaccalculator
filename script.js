const calc = (para) => {
    // show.innerHTML += para
    if(para === 'clear'){
        show.innerHTML = ''
    } else{
        show.innerHTML += para
    }
}
const operator = (opera) => {
    // show.innerHTML += opera
    if(opera === 'equalTo'){
        try{
            show.innerHTML = eval(show.innerHTML)
        } catch{
            show.innerHTML = 'Error'
        }
    } else {
        show.innerHTML += opera
    }
}