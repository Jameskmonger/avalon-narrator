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
            <h1>Avalon Narrator</h1>

            <CharacterSelector choices={choices} onChange={newChoices => setChoices(newChoices)} />

            <PromptReader choices={choices} />

            <p className="footer">Developed by James Monger. <a href="https://github.com/Jameskmonger/avalon-narrator">See source on GitHub</a></p>
        </div>
    );
};

export { App };
