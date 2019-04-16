import * as React from "react";
import { CharacterSelector, CharacterOptions } from "./character-selector";

const App: React.FunctionComponent = props => {
    const [ choices, setChoices ] = React.useState<CharacterOptions>({
        percival: false,
        mordred: false,
        oberon: false,
        morgana: false
    });

    return (
        <div>
            <p>Hello</p>

            <CharacterSelector choices={choices} onChange={newChoices => setChoices(newChoices)} />

            <div>{JSON.stringify(choices, null, 4)}</div>
        </div>
    );
};

export { App };
