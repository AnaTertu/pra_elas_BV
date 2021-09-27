//console.log("Estou funcionando!")

const option = require('./data');
const User = require('./controller/user');

let games = new User({ opt: option }).game();
games