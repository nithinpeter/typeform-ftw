import * as React from 'react';

interface QuestionProps {
  control: 'text';
  validators: [{}];
  children: (props: QuestionProps) => React.ReactNode;
}

class Question extends React.Component<QuestionProps, null> {

  render() {
    return (
      <div>
        {this.props.children(this.props)}
      </div>
    );
  }

}
export default Question;