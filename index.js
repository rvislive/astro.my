const reBalancingBudget = require('./lib/balancingBudget');

/** Please pass the no of media and inital budget in this function parameters */
reBalancingBudget(2, 1000);

// for testing
module.exports = reBalancingBudget;

