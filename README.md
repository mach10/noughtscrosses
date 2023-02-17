# noughtscrosses

We need you to build a system that will evaluate a game board and determine if there is a winner or if there is no winner. 
You will specify how the data should be given to the system you create. The other teams will conform to whatever API you devise. 
For output, the other teams expect the strings: “X wins”, “O wins”, or “No winner”.

Assume we’re only caring about three-by-three boards. You don’t have to worry about validating the board. 
It’s entirely possible there’s a version of the game that handicaps one player by giving extra turns or squares. 
You only have to determine whether a winner is present.

## python

### running
in the code below, python3.9 is your default installation of python
```bash
cd python
python3.9 -m venv env
env/bin/pip install -r requirements.txt
env/bin/pytest 
```
## javascript

### running

If you have nvm, then ```nvm use``` 

```bash
cd javascript
npm install
npm run test-xo
```