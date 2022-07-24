export default function Button({text, btClass, btStyle, onClick}) {
    return(
        <button
            onClick={onClick}
            className={`Button ${btClass ? btClass : ""}`} 
            style={btStyle ? btStyle : {color: 'white'} }  
            
        >
           {text}
        </button>

    )
    
}