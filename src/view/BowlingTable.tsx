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
            {this.props.frames.map((frame) =>
              <>
                <TableCell>{getThrow(frame, 0)}</TableCell>
                <TableCell>{getThrow(frame, 1)}</TableCell>
              </>
            )}
          </TableRow>
          <TableRow>
            {this.props.frames.map((frame) =>
              <>
                <TableCell>{getFrameScore(frame)}</TableCell>
                <TableCell></TableCell>
              </>
            )}
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}