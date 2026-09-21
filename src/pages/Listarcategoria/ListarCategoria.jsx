import MenuFuncionario from "../MenuFuncionario/MenuFuncionario";
import CredentislUser from "../../componentes/CredetialUser";
const ListarCategoria = () => {

    return (
        <div className="container"> 
       <MenuFuncionario/>
       <CredentislUser title= "Lista de categorias"/>
            <p> Listar categorias do produto</p>
        </div>
    )
}

export default ListarCategoria