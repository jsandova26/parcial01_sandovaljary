import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { ConciertoCrear } from "../../componentes/conciertos/ConciertoCrear"
import { ConciertoListar} from "../../componentes/conciertos/ConciertoListar"
import { ConciertoAdmin } from "../../componentes/conciertos/ConciertoAdmin"




export const Ruteo = () =>{
    return(
       <Routes>
        <Route path="/" element={<Inicio/>}/>

        <Route path="/concre" element={<ConciertoCrear/>}/>
        <Route path="/conlis" element={<ConciertoListar/>}/>
        <Route path="/conadm" element={<ConciertoAdmin/>}/>


        <Route path="*" element={<NoEncontrado/>}/>
       </Routes> 
    )
}