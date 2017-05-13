import * as React from 'react';
import { RaisedButton, FontIcon } from 'material-ui';

interface OkayButtonProps {
    onClick: any;
    label?: string;
}

const OkayButton: React.StatelessComponent<OkayButtonProps> = (props: OkayButtonProps) => {

    const onClick = (e) => {
        e.stopPropagation();
        props.onClick();
    };

    return (
        <div className="btn">
            <RaisedButton
                label={props.label}
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
