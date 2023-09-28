

export default function Play() {
    const svgStyle = {
        fill: 'white',       
        transform:0,
        msFilter:0
        // Establece el color de relleno aquí
        // Agrega cualquier otro estilo que desees aquí
    };

    return (
        <div className="relative">                      
            <svg className="absolute animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 2 24" style={svgStyle}><path d="M7 6v12l10-6z"></path></svg>
            <svg className="relative inline-flex h-full w-full rounded-full bg-sky-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={svgStyle}><path d="M7 6v12l10-6z"></path></svg>
        </div>
    );

}
