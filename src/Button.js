

function Button({text}) {
    return(
        <button type="button" onClick={()=> console.log({text})}> {text} </button>
    )
}
export default Button;



