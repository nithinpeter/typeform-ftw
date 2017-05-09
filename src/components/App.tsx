import * as React from 'react';
import Button from './Button';
import Input from './Input';
import { connect } from 'react-redux';

interface AppProps {
  questions: any;
}

class App extends React.Component<AppProps, null> {
  render() {
    return (
      <div>
        {
          this.props.questions.map(() => {
            return (
              <div>
                <Button primary={true}>Hi</Button>
                <Input />
              </div>
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
  };
})(App);

