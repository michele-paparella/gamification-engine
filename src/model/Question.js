const chalk = require('chalk');
var _ = require('underscore');
var config = require('../config');

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
            if (config.debug){
                console.debug('for question %s the correct answer is %d while the player choose %d', this.description, this.goldAnnotation, this.answer);
            }
            this.result = this.goldAnnotation === this.answer ? Question.CORRECT : Question.WRONG;
        }
    }
    
}

module.exports = { Question };