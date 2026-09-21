import CredentislUser from "../../componentes/CredetialUser"
import MenuFuncionario from "../MenuFuncionario/MenuFuncionario"

const HomeFuncionario = () => {

    return (
        <div className="container">

            <MenuFuncionario/>
            <CredentislUser title="Home page Funcionário"/>

            <p>Home Funcionario</p>

        </div>
    )
}

export default HomeFuncionario