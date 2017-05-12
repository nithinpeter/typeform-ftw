import * as React from 'react';
import { shouldTriggerAppKeyPressCb } from '../helpers/utils';

interface KeyPressHandlerProps {
    onKeyPress?: any;
    isActive?: boolean;
}

interface KeyPressHandlerState {
}

class KeyPressHandler extends React.Component<KeyPressHandlerProps, KeyPressHandlerState> {
    keyHandlerRef;

    constructor() {
        super();
        this.state = {};
        this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    }

    componentDidMount() {
        this._handleEventBinding(this.props.isActive);
    }

    componentWillReceiveProps(nextProps: KeyPressHandlerProps) {
        this._handleEventBinding(nextProps.isActive);
    }

    render() {
        return (
            <div ref={(ref) => this.keyHandlerRef = ref}>
                {this.props.children}
            </div>
        );
    }

    onKeyPressHandler(e) {
        if (shouldTriggerAppKeyPressCb()) {
            this.props.onKeyPress(e.key);
        }
    }

    _handleEventBinding(isActive) {
        setTimeout(() => {
            if (isActive) {
                window.addEventListener('keydown', this.onKeyPressHandler);
            } else {
                window.removeEventListener('keydown', this.onKeyPressHandler);
            }
        }, 0);
    }
}

export default KeyPressHandler;
