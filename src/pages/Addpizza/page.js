import Addpizza from "./index"

AddPizzas.route = '/AddPizzas';
AddPizzas.getData = async function (params, query) {
    const response = await fetch('http://localhost:3000/ingredients');
    return { ingredients: await response.json() }
}

export default Addpizza;
