const { Player } = require("../model/Player");
const { Facade } = require("../backend/Facade");
const { Game } = require("../model/game");
const chalk = require('chalk');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

class GameHandler {
    facade;

    constructor() {
        this.facade = new Facade();
    }

    startNewGame() {
        console.log(chalk.blue('Stating new game...'));
        console.log(chalk.green('Enter player name:'));
        var player;
        var self = this;
        rl.on('line', function (name) {
            //TODO validate input
            player = new Player(name);
            console.log(chalk.blue('Loading...'));
            self.facade.loadQuestions().then(
                questions => {
                    console.log(chalk.blue('Questions successfully loaded.'));
                    var game = new Game(player, questions);
                    game.startNewGame();
                }
            );
        });
    }

}

module.exports = { GameHandler }