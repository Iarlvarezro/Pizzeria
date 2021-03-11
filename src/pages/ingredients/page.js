import Ing from './index'


Ing.route = '/ingredients'
Ing.getData = async function (params, query) {
    const response = await fetch('http://localhost:3000/ingredients');
    return { ingredients: await response.json() }

}

export default Ing;