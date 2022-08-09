export default function Button({type, text, btClass, btStyle, onClick}) {
    return(
        <button
            onClick={onClick}
            className={`Button ${btClass ? btClass : ""}`} 
            style={btStyle ? btStyle : {color: 'white'} }  
            type={type}
            
        >
           {text}
        </button>

    )
    
}