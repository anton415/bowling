# bowling
##App that takes score of a bowling game

[Live version for play](https://serdyuchenko.com/bowling/)

### Main Requirements
The App should be written using [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/). 

In addition, it should provide the following:
- A way to start a new bowling game;
- A way to input the number of pins knocked down by each ball;
- A way to output the current game score (score for each frame and total score).
- (Bonus!) Have some tests

### Logic details

- Bowling is played by throwing a ball down a narrow alley toward ten wooden pins. The objective is to knock down as many pins as possible per throw.
- The game is played in ten frames. At the beginning of each frame, all ten pins are set up. The player then gets two tries to knock them all down.
- If the player knocks all the pins down on the first try, it is called a "strike,“ and the frame ends.
- If the player fails to knock down all the pins with his first ball, but succeeds with the second ball, it is called a "spare“.
- After the second ball of the frame, the frame ends even if there are still pins standing.
- A strike frame is scored by adding ten, plus the number of pins knocked down by the next two balls, to the score of the previous frame.
- A spare frame is scored by adding ten, plus the number of pins knocked down by the next ball, to the score of the previous frame.
- Otherwise, a frame is scored by adding the number of pins knocked down by the two balls in the frame to the score of the previous frame.
- If a strike is thrown in the tenth frame, then the player may throw two more balls to complete the score of the strike.
- Likewise, if a spare is thrown in the tenth frame, the player may throw one more ball to complete the score of the spare.
- Thus the tenth frame may have three balls instead of two.

For background information, please see [http://en.wikipedia.org/wiki/Ten-pin_bowling](http://en.wikipedia.org/wiki/Ten-pin_bowling)

## Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
