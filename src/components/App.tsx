import * as React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import StatusBar from './StatusBar';
import {
  navigateNext,
  navigatePrev,
} from '../store/action_creators';
import './App.css';

interface AppProps {
  questions: any;
  activeQuestion: number;
  dispatch?: any;
  completedPercentage?: number;
}

class App extends React.Component<AppProps, null> {

  constructor() {
    super();
    this.navigateNext = this.navigateNext.bind(this);
    this.navigatePrev = this.navigatePrev.bind(this);
  }

  render() {
    return (
      <div className="app">
        <div className="content">
          {
            this.props.questions.map((question, index) => {
                return (
                  <Question key={index} {...question}
                    dispatch={this.props.dispatch}
                    isActive={index === this.props.activeQuestion}
                    index={index}/>
                );
            })
          }
        </div>
        <StatusBar
          navigateNext={this.navigateNext}
          navigatePrev={this.navigatePrev}
          completedPercentage={this.props.completedPercentage}/>
      </div>
    );
  }

  navigateNext() {
    this.props.dispatch(navigateNext());
  }

  navigatePrev() {
    this.props.dispatch(navigatePrev());
  }
}

export default connect((state) => {
  return {
    questions: state.questions,
    activeQuestion: state.activeQuestion,
    completedPercentage: state.completedPercentage
  };
})(App);
