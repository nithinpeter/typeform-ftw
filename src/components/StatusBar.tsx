import * as React from 'react';
import { FlatButton, FontIcon } from 'material-ui';
import KeyPressHandler from './KeyPressHandler';
import './StatusBar.css';

const UP = 'ArrowUp';
const DOWN = 'ArrowDown';

interface StatusBarProps {
  completedPercentage?: number;
  navigateNext?: any;
  navigatePrev?: any;
}

class StatusBar extends React.Component<StatusBarProps, {}> {
  constructor() {
    super();
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  render() {
    const completedPercentage = this.props.completedPercentage;
    return (
      <KeyPressHandler onKeyPress={this.handleKeyPress} isActive={true}>
        <div className="status-bar">
          <div className="status-bar__inner">
            <div className="status-bar__progress-container">
              <span>{completedPercentage}% completed.</span>
              <div className="status-bar__progress">
                <div style={{ width: completedPercentage + '%' }} className="status-bar__progress__filled" />
              </div>
            </div>
            <div className="status-bar__navigation-container">
              <FlatButton
                onClick={this.props.navigatePrev}
                backgroundColor="#a4c639"
                hoverColor="#8AA62F"
                icon={<FontIcon className="fa fa-chevron-up" />}
                style={{ marginRight: 10, color: '#fff' }}
              />
              <FlatButton
                onClick={this.props.navigateNext}
                backgroundColor="#a4c639"
                hoverColor="#8AA62F"
                icon={<FontIcon className="fa fa-chevron-down" />}
                style={{ color: '#fff' }}
              />
            </div>
          </div>
        </div>
      </KeyPressHandler>
    );
  }

  handleKeyPress(pressedKey) {
    if (pressedKey === UP) {
      this.props.navigatePrev();
    } else if (pressedKey === DOWN) {
      this.props.navigateNext();
    }
  }
}

export default StatusBar;
