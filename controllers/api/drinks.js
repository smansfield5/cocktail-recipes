const Drink = require('../../models/drink');
const fetch = require('node-fetch');

module.exports = {
   show,
   getAll,
   create
}

async function show(req, res) {
    let drink = await Drink.findOne({apiId: req.params.id});
    if (!drink) {
        drink = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${req.params.id}`).then((res) => res.json())
        drink = drink.drinks[0];
        console.log(drink);
        const newDrink = {
            apiId: drink.idDrink,
            name: drink.strDrink,
            ingredients: [],
            image: drink.strDrinkThumb,
            instructions: drink.strInstructions
        };
        for (let i = 1; i < 16; i++) {
            const key = `strIngredient${i}`;
            if (drink[key] === null) break;
            const measure = drink[`strMeasure${i}`];
            newDrink.ingredients.push(`${measure || ''} - ${drink[key]}`);
        }
        drink = await Drink.create(newDrink);
    }
    res.json(drink);
}

async function getAll(req, res) {
    const posts = await PostListPage.find({
        user: req.user._id 
    })
    res.json(posts);
}

async function create(req, res) {
    req.body.user = req.user_.id
    const post = await post.create(req.body);
    res.json(post);
}