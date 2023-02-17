const getWinner = require('./noughtsAndCrosses');


const X_TOP_ROW = ['X', 'X', 'X',
                   'X', 'O', 'O',
                   'O', 'O', 'X'];

const X_MIDDLE_COLUMN = ['O', 'X', 'X',
                         'X', 'X', 'O',
                         'O', 'X', 'X'];

const O_DIAGONAL = ['O', 'X', 'O',
                    'X', 'O', 'O',
                    'O', 'X', 'X'];

test('X wins on top row', () => {
    let winner = getWinner(X_TOP_ROW);
    expect(winner).toBe('X wins!')
});

test('X wins on middle column', () => {
    let winner = getWinner(X_MIDDLE_COLUMN);
    expect(winner).toBe('X wins!')
});

test('O wins on diagonal', () => {
    let winner = getWinner(O_DIAGONAL);
    expect(winner).toBe('O wins!')
});

