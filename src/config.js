
var config = {};

config.enableEagerLoading = false; // if true it enables eager loading, which means that the questions will be loaded before the game starts
config.questionsSize = 5; // number of questions for each game
config.reliabilityThreshold = 0.1; // threshold for considering a player reliable
config.debug = false;

module.exports = config;