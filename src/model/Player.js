
class Player {
    name;
    reliability;

    constructor(name) {
        this.name = name;
        this.reliability = 0.0;
    }

    updateReliability(correctQuestions, wrongQuestions){
        this.reliability = correctQuestions / (correctQuestions + wrongQuestions);
    }

    print() {
        console.log('Player %s has a reliability score of %f', this.name, this.reliability);
    }
}

module.exports = { Player }