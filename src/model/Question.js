const chalk = require('chalk');

class Question {
    description;
    choices;
    answer;
    goldAnnotation;
    result;

    static CORRECT = true;
    static WRONG = false;

    constructor(description, choices, goldAnnotation = undefined) {
        this.description = description;
        this.choices = choices;
        this.goldAnnotation = goldAnnotation;
    }

    checkResult() {
        if (this.goldAnnotation){
            this.result = this.goldAnnotation === this.answer ? Question.CORRECT : Question.WRONG;
        }
    }

    print() {
        //console.log(chalk`There are {underline 5280 feet} in a mile.`);
        console.log(chalk`${this.description}`);
        var i = 1;
        for (var choice of this.choices){
            console.log(chalk.cyan("%d - %s"), i , choice);
            i++;
        }
    }
    
}

module.exports = { Question };