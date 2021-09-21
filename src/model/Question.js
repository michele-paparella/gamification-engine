const chalk = require('chalk');
var _ = require('underscore');

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
    
}

module.exports = { Question };