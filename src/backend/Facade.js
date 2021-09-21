const fs = require('fs');
var path = require('path');
const { Question } = require("../model/question");
var _ = require('underscore');
var config = require('../config');


class Facade {

    questions;

    constructor() {
        this.questions = [];
        this.loadQuestions();
    }

    loadQuestions() {
        //TODO use real db
        var self = this;
        const promise = new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, 'questions.json'), (err, data) => {
                if (err) throw err;
                var questionsFromFile = JSON.parse(data).questions;
                for (var question of questionsFromFile) {
                    this.questions.push(new Question(question.description, question.choices, question.goldAnnotation));
                }
                resolve(self.getNextQuestions());
            });
        });
        return promise;

    }

    getNextQuestions() {
        //TODO use shuffle
        return _.sample(this.questions, config.questionsSize);
    }

}

module.exports = { Facade }