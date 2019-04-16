import * as React from "react";
import { Checkbox } from "./checkbox";

interface CharacterOptions {
    percival?: boolean;
    mordred?: boolean;
    oberon?: boolean;
    morgana?: boolean;
}

interface CharacterSelectorProps {
    choices: CharacterOptions;
    onChange: (choices: CharacterOptions) => void;
}

const CharacterSelector: React.FunctionComponent<CharacterSelectorProps> = ({ choices, onChange }) => {
    const updateChoice = (update: Partial<CharacterOptions>) => {
        const full = {
            ...choices,
            ...update
        };

        onChange(full);
    };

    return (
        <div>
            <Checkbox checked={choices.percival} onChange={checked => updateChoice({ percival: checked })} /> Percival <br />
            <Checkbox checked={choices.mordred} onChange={checked => updateChoice({ mordred: checked })} /> Mordred <br />
            <Checkbox checked={choices.oberon} onChange={checked => updateChoice({ oberon: checked })} /> Oberon <br />
            <Checkbox checked={choices.morgana} onChange={checked => updateChoice({ morgana: checked })} /> Morgana
        </div>
    );
};

export { CharacterSelector, CharacterOptions };
