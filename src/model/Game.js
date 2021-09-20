const { Question } = require("./Question");

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

class Game {
    player;
    questions;

    constructor(player, questions) {
        this.player = player;
        this.questions = questions;
    }

    startNewGame() {
        var correctQuestions = 0;
        var wrongQuestions = 0;
        for (var question of this.questions) {
            question.print();
            console.log("Please enter your answer: ");
            rl.on('line', function (line) {
                //TODO validate input
                question.answer = line;
                question.checkResult();
                if (question.result === Question.CORRECT) {
                    correctQuestions++;
                } else if (question.result === Question.WRONG) {
                    wrongQuestions++;
                }
            });
        }
        this.player.reliability = correctQuestions / (correctQuestions + wrongQuestions);

    }

}

module.exports = { Game }