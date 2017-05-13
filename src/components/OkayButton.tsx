import * as React from 'react';
import { RaisedButton, FontIcon } from 'material-ui';

interface OkayButtonProps {
    onClick?: React.EventHandler<any>;
    label?: string;
}

const OkayButton: React.StatelessComponent<OkayButtonProps> = (props: OkayButtonProps) => {

    const { onClick, label } = props;
    return (
        <div className="btn">
            <RaisedButton
                label={label}
                primary={true}
                onClick={onClick}
                icon={<FontIcon className="fa fa-check" />}
            />
            <span className="btn__press-enter">press <strong>ENTER</strong></span>
        </div>
    );
};

OkayButton.defaultProps = {
    label: 'Ok'
};

export default OkayButton;
