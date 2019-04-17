import * as React from "react";
import { CharacterSelector, CharacterOptions } from "./character-selector";
import { PromptReader } from "./prompt-reader";

const App: React.FunctionComponent = props => {
    const [ choices, setChoices ] = React.useState<CharacterOptions>({
        percival: false,
        mordred: false,
        oberon: false,
        morgana: false
    });

    return (
        <div>
            <CharacterSelector choices={choices} onChange={newChoices => setChoices(newChoices)} />

            <PromptReader choices={choices} />
        </div>
    );
};

export { App };
