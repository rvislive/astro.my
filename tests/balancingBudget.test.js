const reBalancingBudget = require('../index');

describe('Run test cases', () => {
    describe('Balancing Budget', () => {
      test('should print the initial budget after all rebalancing is done', () => {
        const result = reBalancingBudget(2, 100000);
        expect(result).toMatchObject([50000, 50000]);
      });
  
      test('should print the initial budget after all rebalancing is done', () => {
        const result = reBalancingBudget(3, 60000);    
        expect(result).toMatchObject([20000, 20000, 20000]);
      });
    });
});