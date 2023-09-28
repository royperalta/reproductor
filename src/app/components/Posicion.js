import Play from "./Play";

export function Posicion(props){
 
    return(
        <div className="w-16 flex items-center justify-center px-3 ">
           <div>
            {props.estado === true ? (<Play />): props.position }
                     
            
           </div>
        </div>
    )
}