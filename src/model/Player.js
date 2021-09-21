var config = require('../config');

class Player {
    name;
    reliability;

    constructor(name) {
        this.name = name;
        this.reliability = 0.0;
    }

    updateReliability(correctQuestions, wrongQuestions){
        if (config.debug){
            console.debug('correctQuestions: %d, wrongQuestions: %d', correctQuestions, wrongQuestions);
        }
        this.reliability = correctQuestions / (correctQuestions + wrongQuestions);
    }

    print() {
        console.log('Player %s has a reliability score of %f', this.name, this.reliability.toFixed(2));
    }
}

module.exports = { Player }