import * as React from 'react';

interface KeyPressHandlerProps {
    onKeyPress?: any;
    isActive?: boolean;
}

interface KeyPressHandlerState {
    pressedKey?: string;
}

class KeyPressHandler extends React.Component<KeyPressHandlerProps, KeyPressHandlerState> {
    keyHandlerRef;

    constructor() {
        super();
        this.state = {};
        this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
    }

    componentDidMount() {
        this._handleEventBinding();
    }

    componentWillReceiveProps(nextProps: KeyPressHandler) {
        this._handleEventBinding();
    }

    render() {
        return (
            <div ref={(ref) => this.keyHandlerRef = ref}>
                {this.props.children}
            </div>
        );
    }

    onKeyPressHandler(e) {
        this.props.onKeyPress(e.key);
    }

    _handleEventBinding() {
        if (this.props.isActive) {
            this.keyHandlerRef.addEventListener('keydown', this.onKeyPressHandler);
        } else {
            this.keyHandlerRef.removeEventListener('keydown', this.onKeyPressHandler);
        }
    }
}

export default KeyPressHandler;
