import * as React from 'react';
import { TextField, DatePicker } from 'material-ui';
import OkayButton from './OkayButton';
import KeyButton from './KeyButton';
import KeyPressHandler from './KeyPressHandler';
import ScrollHandler from './ScrollHandler';
import { navigateTo, updateAnswer, submitAnswer } from '../store/action_creators';
import * as utils from '../helpers/utils';

const ENTER = 'Enter';

interface QuestionProps {
  type?: string;
  label?: string;
  isActive?: boolean;
  index?: number;
  options?: any;
  answer?: string;
  errorText?: string;
  dispatch?: any;
}

class Question extends React.Component<QuestionProps, {}> {
  fieldRef;

  constructor() {
    super();
    this.state = {};
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    // this.handleOnFocus = this.handleOnFocus.bind(this);
    this.handleFocusOnClick = this.handleFocusOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this._focusActive(nextProps.isActive);
  }

  componentDidMount() {
    this._focusActive(this.props.isActive);
  }

  render() {
    const { label, type, isActive, index } = this.props;
    let content;

    switch (type) {
      case 'TEXT':
        content = this.renderInputTypeQuestion();
        break;
      case 'DATEPICKER':
        content = this.renderDatepickerTypeQuestion();
        break;
      case 'BUTTON_GROUP':
        content = this.renderButtonGroupTypeQuestion();
        break;
      default:
        content = null;
        break;
    }

    return (
      <ScrollHandler isActive={isActive} onFocus={this.handleOnFocus}>
        <KeyPressHandler isActive={isActive} onKeyPress={this.handleKeyPress}>
          <a href={'#' + index} className={`question ${isActive ? 'active' : ''}`} onClick={this.handleFocusOnClick}>
            <label className="question__label">{label}</label>
            {content}
            {isActive && <OkayButton onClick={this.handleSubmitAnswer} />}
          </a>
        </KeyPressHandler>
      </ScrollHandler>
    );
  }

  renderInputTypeQuestion() {
    return (
      <TextField
        ref={ref => (this.fieldRef = ref)}
        onChange={this.handleChangeAnswer}
        fullWidth={true}
        hintText={this.props.label}
        name={this.props.label}
        errorText={this.props.errorText}
      />
    );
  }

  renderDatepickerTypeQuestion() {
    return (
      <DatePicker
        onShow={utils.disableAppKeyPressListener}
        onChange={this.handleChangeAnswer}
        fullWidth={true}
        hintText={this.props.label}
        name={this.props.label}
        errorText={this.props.errorText}
        autoOk={true}
      />
    );
  }

  renderButtonGroupTypeQuestion() {
    return (
      <div className="button-group">
        {this.props.options.map((item: any, index) =>
          <KeyButton
            key={index}
            label={item.label}
            selected={item.value === this.props.answer}
            onClick={this.handleChangeAnswer}
            keyLabel={item.keyLabel}
            value={item.value}
          />
        )}
        <div className="error-message">
          {this.props.errorText}
        </div>
      </div>
    );
  }

  handleKeyPress(pressedKey) {
    if (pressedKey === ENTER) {
      this.handleSubmitAnswer();
    }

    if (this.props.options && this.props.options.length > 0) {
      const option = this.props.options.filter((item: any) => item.keyLabel === pressedKey)[0];

      if (option) {
        this.handleChangeAnswer({}, option.value);
      }
    }
  }

  handleSubmitAnswer() {
    this.props.dispatch(submitAnswer(this.props.index));
  }

  handleChangeAnswer(event, value) {
    this.props.dispatch(updateAnswer(this.props.index, value));
    utils.enableAppKeyPressListener();
  }

  handleOnFocus() {
    console.log('focused');
  }

  handleFocusOnClick() {
    this.props.dispatch(navigateTo(this.props.index));
    this._focusActive(true);
  }

  _focusActive(isActive) {
    if (isActive) {
      setTimeout(() => {
        if (this.fieldRef) {
          this.fieldRef.focus();
        }
      }, 0);
    }
  }
}
export default Question;
