import * as React from 'react';
import { RaisedButton } from 'material-ui';
import './KeyButton.css';

interface KeyButtonProps {
    label?: string;
    onClick?: any;
    selected?: boolean;
    value?: string;
    keyLabel?: string;
}

const KeyButton = (props: KeyButtonProps) => {
    const { label, keyLabel, onClick, selected } = props;

    const handleClick = (e) => {
        e.stopPropagation();
        onClick(e, props.value);
    };

    return (
        <RaisedButton
            buttonStyle={{textAlign: 'left'}}
            label={(
                <span className="key-button">
                    <span className="key-label">{keyLabel}</span>
                    <span>{label}</span>
                </span>
            )}
            primary={selected}
            onClick={handleClick}
        />
    );
};

export default KeyButton;
