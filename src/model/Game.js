const { Question } = require("./Question");

const { prompt } = require('enquirer');
var _ = require('underscore');
const chalk = require('chalk');


class Game {
    player;
    questions;

    constructor(player, questions) {
        this.player = player;
        this.questions = questions;
    }

    async startNewGame() {
        var correctQuestions = 0;
        var wrongQuestions = 0;
        var i = 1;
        var self = this;
        var formattedQuestions = [];
        for (question of this.questions) {
            var currentChoice = 0;
            formattedQuestions.push({
                type: 'select',
                name: i.toString(),
                message: question.description,
                choices:
                    _.map(question.choices, function (choice) {
                        currentChoice++;
                        return { name: currentChoice.toString(), message: choice, value: '#ff0000' };
                    })
            });
            i++;
        }
        const response = await prompt(formattedQuestions);
        console.log(chalk.blue("Game ended."));
        var currentQuestion = 0;
        for (var question of this.questions) {
            question.answer = parseInt(response[currentQuestion + 1]);
            question.checkResult();
            if (question.result === Question.CORRECT) {
                correctQuestions++;
            } else if (question.result === Question.WRONG) {
                wrongQuestions++;
            }
            currentQuestion++;
        }
        self.player.updateReliability(correctQuestions, wrongQuestions);
        self.player.print();
    }

}

module.exports = { Game }