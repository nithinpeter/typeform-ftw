import * as React from 'react';
import Question from './Question';
import { connect } from 'react-redux';
import './App.css';

interface AppProps {
  questions: any;
  activeQuestion: number;
  dispatch?: any;
}

class App extends React.Component<AppProps, null> {
  render() {
    return (
      <div className="app">
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
    );
  }
}

export default connect((state) => {
  return {
    questions: state.questions,
    activeQuestion: state.activeQuestion,
  };
})(App);
