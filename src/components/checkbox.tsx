import * as React from "react";

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const Checkbox: React.FunctionComponent<CheckboxProps> = ({ checked, onChange }) => {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={({ target }) => onChange(target.checked)}
        />
    );
};

export { Checkbox };
