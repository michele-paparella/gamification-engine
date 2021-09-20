
class Question {
    description;
    choices;
    answer;
    goldAnnotation;

    static CORRECT = true;
    static WRONG = false;

    constructor(description, choices, goldAnnotation = undefined) {
        this.description = description;
        this.choices = choices;
        this.goldAnnotation = goldAnnotation;
    }
}

module.exports = { Question };