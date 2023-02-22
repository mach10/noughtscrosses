import { getOutcome } from '../src/gameDecider';

test('X wins on top row', () => {
    let winner = getOutcome('some board');
    expect(winner).toBe('X wins!')
});
