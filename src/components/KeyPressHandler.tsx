import * as React from 'react';

interface KeyPressHandlerProps {
    isActive?: boolean;
    children?: any;
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
                {this.props.children({pressedKey: this.state.pressedKey})}
            </div>
        );
    }

    onKeyPressHandler(e) {
        this.setState({pressedKey: e.key});
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
