import * as React from 'react';
import { TextField, DatePicker } from 'material-ui';
import Button from './Button';
import KeyPressHandler from './KeyPressHandler';
import { updateAnswer, submitAnswer } from '../store/action_creators';

const ENTER = 'Enter';

interface QuestionProps {
    type?: string;
    label?: string;
    isActive?: boolean;
    index?: number;
    answer?: string;
    errorText?: string;
    dispatch?: any;
}

class Question extends React.Component<QuestionProps, {}> {

    constructor() {
        super();
        this.state = {};
        this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
        this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    render() {
        const { label, type, isActive, index } = this.props;
        let content;

        switch (type) {
            case 'TEXT':
                content = this.renderInputTypeQuestion(label);
                break;
            case 'DATEPICKER':
                content = this.renderDatepickerTypeQuestion(label);
                break;
            default:
                content = null;
                break;
        }
        return (
            <KeyPressHandler isActive={isActive} onKeyPress={this.handleKeyPress}>
                <a href={'#' + index} className={`question ${isActive ? 'active' : ''}`}>
                    <label className="question__label">{label}</label>
                    {content}
                    {isActive && <Button onClick={this.handleSubmitAnswer} />}
                </a>
            </KeyPressHandler>
        );
    }

    renderInputTypeQuestion(label) {
        return (
            <TextField
                onChange={this.handleChangeAnswer}
                fullWidth={true}
                hintText={label}
                name={label}
                errorText={this.props.errorText} />
        );
    }

    renderDatepickerTypeQuestion(label) {
        return (
            <DatePicker
                fullWidth={true}
                hintText={label}
                name={label} />
        );
    }

    handleKeyPress(pressedKey) {
        if (pressedKey === ENTER) {
            this.handleSubmitAnswer();
        }
    }

    handleSubmitAnswer() {
        this.props.dispatch(submitAnswer(this.props.index));
    }

    handleChangeAnswer(event, value) {
        this.props.dispatch(updateAnswer(this.props.index, value));
    }

}
export default Question;
