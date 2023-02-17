import pytest
from noughtscrosses import game


def test_no_winner():
    game_state = "some input value representing a board"
    undertest = game.Game(game_state)
    state = undertest.state()
    assert state == 'draw'