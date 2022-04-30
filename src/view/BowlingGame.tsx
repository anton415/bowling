import React, {Component} from 'react';
import { Bowling } from "../logic/Bowling";
import {Frame} from '../logic/Frame';
import BowlingTable from '../view/BowlingTable';
import { Typography, Button, TextField, FormControl } from '@mui/material';

export default class BowlingGame extends Component<{name: string}, {
    bowling: Bowling,
    score: number,
    throwValue: string,
    pinsLeft: number
}> {

  constructor(props: any) {
    super(props);
    this.state = {
        bowling: new Bowling(),
        score: 0,
        throwValue: '0',
        pinsLeft: 10
    }
  }

  handleSubmit = (event: any) => {
    event.preventDefault();

    // player has 10 frames in one game.
    if (this.state.bowling.frameIndex < 10) {
        this.makeThrow(event);
    // if in last frame is strike or spare, player has one more throw
    } else if (
        this.state.bowling.frameIndex === 10 &&
        (this.state.bowling.frames[9].isStrike ||
        this.state.bowling.frames[9].isSpare) &&
        this.state.bowling.frames[10] === undefined
    ) {
        this.makeThrow(event);
    // if user has not any frames and throws, then start new game.
    } else {
        this.newGame();
    }
  };

  makeThrow = (event: any) => {
      let pins: number = parseInt(this.state.throwValue);
      let bowling: Bowling = this.state.bowling;
      bowling.addThrow(pins);

      // count left pins. player cant throw more then 10 pins in one frame.
      let lastFrame: Frame = bowling.frames[bowling.frames.length - 1];
      let pinsLeftTemp: number = 10;
      if (lastFrame.throws.length === 1 && lastFrame.throws[0] != 10) {
        pinsLeftTemp -= lastFrame.throws[0];
      } else {
        pinsLeftTemp = 10;
      }

      this.setState({
          score: bowling.getScore(),
          pinsLeft: pinsLeftTemp
      });
  }

  newGame = () => {
    this.setState({
        bowling: new Bowling(),
        score: 0,
        throwValue: "0",
        pinsLeft: 10
    });
  }

  // save count of pins player knock out.
  // we need this count for this rule:
  // "player cant throw more then 10 pins in one frame!"
  handleChange = (event: any) => {
    this.setState({
        throwValue: event.target.value
    });
  }


  render () {
    return (
      <div className='BowlingGame'>
        <Typography variant="h4">
          {this.props.name}
        </Typography>

        <br/>

        <form onSubmit={this.handleSubmit}>
          <FormControl onSubmit={this.handleSubmit}>
              <TextField
                type="number"
                InputProps={{ inputProps: { min: 0, max: this.state.pinsLeft } }}
                size="small"
                value={this.state.throwValue}
                defaultValue="0"
                onChange={this.handleChange}
              />
              <Button size="medium" variant="outlined" type="submit">Throw</Button>
          </FormControl>
        </form>

        <BowlingTable frames={this.state.bowling.frames}/>

        <Typography component="p" variant="h4">
          {this.state.score}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          Total score
        </Typography>
        <Button variant="contained" onClick={this.newGame}>New game</Button>
      </div>
    )
  }
}
