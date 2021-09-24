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
                var timeout = 0;
                if (!config.enableEagerLoading) {
                    //simulating lazy load
                    timeout = 3000;
                }
                setTimeout(function () {
                    var questionsFromFile = JSON.parse(data).questions;
                    for (var question of questionsFromFile) {
                        self.questions.push(new Question(question.description, question.choices, question.goldAnnotation));
                    }
                    resolve(self.getNextQuestions());
                }, timeout);
            });
        });
        return promise;

    }

    getNextQuestions() {
        return _.last(_.shuffle(this.questions), config.questionsSize);
    }

}

module.exports = { Facade }