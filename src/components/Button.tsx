import * as React from 'react';
import { RaisedButton, FontIcon } from 'material-ui';

const ENTER = 'Enter';

interface ButtonProps {
    pressedKey?: string;
    onClick?: React.EventHandler<any>;
}

class Button extends React.Component<ButtonProps, {}> {

    componentWillReceiveProps({pressedKey, onClick}: ButtonProps) {
        if (pressedKey === ENTER) {
            if (onClick) {
                onClick({});
            }
        }
    }

    render() {
        const {onClick} = this.props;

        return (
            <div className="btn">
                <RaisedButton
                    label="Ok"
                    primary={true}
                    onClick={onClick}
                    icon={<FontIcon className="fa fa-check" />}
                />
                <span className="btn__press-enter">press <strong>ENTER</strong></span>
            </div>
        );
    }
}
export default Button;
