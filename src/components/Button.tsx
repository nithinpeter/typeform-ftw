import * as React from 'react';
import { RaisedButton, FontIcon } from 'material-ui';

interface ButtonProps {
    onClick?: React.EventHandler<any>;
}

class Button extends React.Component<ButtonProps, {}> {

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
