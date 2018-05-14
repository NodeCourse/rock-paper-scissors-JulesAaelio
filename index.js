const Express = require('express');
const randomItem = require('random-item');
const app = new Express();
app.set('view engine', 'pug');
app.use(Express.static('public'));

console.log('App started at',Date.now());
app.get('/',(req, res) => {
    res.render('choose')
});
app.get('/result/:choice',(req,res) => {
    const items = ['paper','rock','scissors'];
    const iaChoice = randomItem(items);
    const userChoice = req.params.choice;
    let won;
    let equals = false;
    if(iaChoice === userChoice) {
        equals = true;
    }
    won = (
        (userChoice === items[2] && iaChoice === items[0])
        || (userChoice === items[1] && iaChoice === items[2])
        || (userChoice === items[0] && iaChoice === items[1])
    );
    res.render('result',{
        param: req.params.choice,
        iaChoice : iaChoice,
        result: equals ? 'EGALITE' : (won ? 'GAGNE' : 'PERDU')
    })
});
app.listen(3000);