import { PrintTitle } from "@/Components/PrintTitle"
import { P  } from "@/Components/P"

export default function Index (){
    
    return (
        <div>
            <PrintTitle title="CATEGORIAS" subtitle="Mostrar todas las categorias de la aplicación" myArray={[1,2,3]} myObject={{name:'Anuar',code:1234}} />
            <PrintTitle title="PRODUCTOS" />
            <P />
        </div>
    )
}
 