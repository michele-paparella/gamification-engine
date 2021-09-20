const { Question } = require("./model/Question");

let q = new Question('text', {1: 'a', 2: 'b', 3: 'c'});
console.log(q.description, q.choices);
