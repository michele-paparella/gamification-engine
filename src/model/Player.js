var config = require('../config');
const chalk = require('chalk');

class Player {

    name;
    correctQuestions;
    wrongQuestions;

    constructor(name) {
        this.name = name;
        this.correctQuestions = 0;
        this.wrongQuestions = 0;
    }

    updateReliability(correctQuestions, wrongQuestions) {
        if (config.debug) {
            console.debug('correctQuestions: %d, wrongQuestions: %d', correctQuestions, wrongQuestions);
        }
        this.correctQuestions += correctQuestions;
        this.wrongQuestions += wrongQuestions;
    }

    /**
     * we can calculate the player's reliability by the following formula:
     * 
     * <correct_answers>/(<correct_answers> + <wrong_answers>)
     */
    print() {
        var reliability = this.correctQuestions / (this.correctQuestions + this.wrongQuestions);
        if (reliability > config.reliabilityThreshold) {
            console.log(chalk.green.bold('Player %s has a reliability score of %f, so next time few golden questions will be added.'), this.name, reliability.toFixed(2));
        } else {
            console.log(chalk.red.bold('Player %s has a reliability score of %f, so next time more golden questions will be added.'), this.name, reliability.toFixed(2));
        }
    }
}

module.exports = { Player }