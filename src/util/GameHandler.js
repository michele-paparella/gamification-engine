const { Player } = require("../model/Player");
const { Facade } = require("../backend/Facade");
const { Game } = require("../model/game");
const chalk = require('chalk');
const { prompt } = require('enquirer');
var _ = require('underscore');
var config = require('../config');


class GameHandler {
    facade;

    constructor() {
        this.facade = new Facade();
    }

    async startNewGame() {
        console.log(chalk.blue('Stating new game...'));
        var player;
        var self = this;
        const response = await prompt({
            type: 'input',
            name: 'name',
            message: chalk.green('Enter player name: '),
            validate(value, state, item, index) {
                if (_.isUndefined(value) || value.trim().length === 0) {
                    return "Please insert a name";
                } else {
                    return true;
                }
            }
        });
        //TODO validate input
        player = new Player(response.name);
        console.log(chalk.blue('Loading...'));
        self.facade.loadQuestions().then(
            async questions => {
                console.log(chalk.blue('Questions successfully loaded.'));
                var game = new Game(player, questions);
                game.startNewGame();
            }
        );
    }

}

module.exports = { GameHandler }