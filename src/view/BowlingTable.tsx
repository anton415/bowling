import React, {Component} from 'react'
import { Frame } from '../logic/Frame';
import { Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material';

type Props = {
  frames: Array<Frame>
};

function getThrow(frame: Frame, throwIndex: number): string {
    if (frame === undefined || frame.throws[throwIndex] === undefined) {
        return '';
    }
    return String(frame.throws[throwIndex]);
}

function getFrameScore(frame: Frame): string {
    if (frame === undefined) {
        return '';
    }
    return String(frame.getFrameScore());
}

export default class BowlingTable extends Component<Props> {

  render () {
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>{getThrow(this.props.frames[0], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[0], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[1], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[1], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[2], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[2], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[3], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[3], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[4], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[4], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[5], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[5], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[6], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[6], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[7], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[7], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[8], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[8], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[9], 0)}</TableCell>
            <TableCell>{getThrow(this.props.frames[9], 1)}</TableCell>
            <TableCell>{getThrow(this.props.frames[10], 0)}</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{getFrameScore(this.props.frames[0])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[1])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[2])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[3])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[4])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[5])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[6])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[7])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[8])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[9])}</TableCell>
            <TableCell></TableCell>
            <TableCell>{getFrameScore(this.props.frames[10])}</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>


    )
  }
}