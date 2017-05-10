import * as React from 'react';
import { TextField, DatePicker } from 'material-ui';
import Button from './Button';
import KeyPressHandler from './KeyPressHandler';

interface QuestionProps {
    type?: string;
    validators?: string[];
    label?: string;
    isActive?: boolean;
}

interface QuestionState {
    answer?: string;
}

class Question extends React.Component<QuestionProps, QuestionState> {

    constructor() {
        super();
        this.state = {};
        this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    }

    render() {
        const { label, type, validators, isActive } = this.props;
        let content;

        switch (type) {
            case 'TEXT':
                content = this.renderInputTypeQuestion(label, validators);
                break;
            case 'DATEPICKER':
                content = this.renderDatepickerTypeQuestion(label, validators);
                break;
            default:
                content = null;
                break;
        }
        return (
            <KeyPressHandler isActive={isActive}>
                {
                    ({pressedKey}) => {
                        return (
                            <a href={'#' + label} className={`question ${isActive ? 'active' : ''}`}>
                                <label className="question__label">{label}</label>
                                {content}
                                <Button pressedKey={pressedKey} onClick={this.handleSubmitAnswer}/>
                            </a>
                        );
                    }
                }
            </KeyPressHandler>
        );
    }

    renderInputTypeQuestion(label, validators) {
        return (
            <TextField
                onChange={(e, newValue) => this.setState({answer: newValue})}
                fullWidth={true}
                hintText={label}
                name={label}/>
        );
    }

    renderDatepickerTypeQuestion(label, validators) {
        return (
            <DatePicker
                fullWidth={true}
                hintText={label}
                name={label}/>
        );
    }

    handleSubmitAnswer() {
        console.log('submitting answer', this.state.answer);
    }

}
export default Question;
