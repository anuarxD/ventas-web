export function PrintTitle({title, subtitle = "Subtitulo por degecto", myArray, myObject}){
    return (
    <div>
         <h1>{title}</h1>
         <p>{subtitle}</p>   
         <p>{myArray}</p>   
         <p>{JSON.stringify(myObject)}</p>   

    </div>
 
)}