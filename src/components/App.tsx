import * as React from 'react';
import Question from './Question';
import { connect } from 'react-redux';
import './App.css';

interface AppProps {
  questions: any;
  activeQuestion: number;
}

class App extends React.Component<AppProps, null> {
  render() {
    return (
      <div className="app">
        {
          this.props.questions.map((question, index) => {
            if (index <= this.props.activeQuestion) {
              return <Question key={index} {...question} isActive={index === this.props.activeQuestion}/>;
            }
            return null;
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
