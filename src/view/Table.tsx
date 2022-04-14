import React, {Component} from 'react'
import {Frame} from '../logic/Frame';

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

export default class Table extends Component<Props> {

  render () {
    return (
        <table>
          <thead>
            <tr>
                <td>{getThrow(this.props.frames[0], 0)}</td>
                <td>{getThrow(this.props.frames[0], 1)}</td>
                <td>{getThrow(this.props.frames[1], 0)}</td>
                <td>{getThrow(this.props.frames[1], 1)}</td>
                <td>{getThrow(this.props.frames[2], 0)}</td>
                <td>{getThrow(this.props.frames[2], 1)}</td>
                <td>{getThrow(this.props.frames[3], 0)}</td>
                <td>{getThrow(this.props.frames[3], 1)}</td>
                <td>{getThrow(this.props.frames[4], 0)}</td>
                <td>{getThrow(this.props.frames[4], 1)}</td>
                <td>{getThrow(this.props.frames[5], 0)}</td>
                <td>{getThrow(this.props.frames[5], 1)}</td>
                <td>{getThrow(this.props.frames[6], 0)}</td>
                <td>{getThrow(this.props.frames[6], 1)}</td>
                <td>{getThrow(this.props.frames[7], 0)}</td>
                <td>{getThrow(this.props.frames[7], 1)}</td>
                <td>{getThrow(this.props.frames[8], 0)}</td>
                <td>{getThrow(this.props.frames[8], 1)}</td>
                <td>{getThrow(this.props.frames[9], 0)}</td>
                <td>{getThrow(this.props.frames[9], 1)}</td>
                <td>{getThrow(this.props.frames[10], 0)}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>{getFrameScore(this.props.frames[0])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[1])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[2])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[3])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[4])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[5])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[6])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[7])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[8])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[9])}</td>
                <td></td>
                <td>{getFrameScore(this.props.frames[10])}</td>
                <td></td>
            </tr>
          </tbody>
        </table>
    )
  }
}