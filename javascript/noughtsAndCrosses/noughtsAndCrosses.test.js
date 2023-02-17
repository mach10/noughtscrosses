const getWinner = require('./noughtsAndCrosses');




test('X wins on top row', () => {
    let winner = getWinner('some board');
    expect(winner).toBe('X wins!')
});


