import * as React from "react";
import { getPrompts } from "avalon-prompts";
import { CharacterOptions } from "./character-selector";
import { PromptList } from "./prompt-list";

interface PromptReaderProps {
    choices: CharacterOptions;
}

const PromptReader: React.FunctionComponent<PromptReaderProps> = ({ choices }) => {
    const [ currentPrompt, setCurrentPrompt ] = React.useState<number>(null);
    const [ prompts, setPrompts ] = React.useState<string[]>(null);

    const startNarration = () => {
        const newPrompts = getPrompts(choices);

        setPrompts(newPrompts);
        setCurrentPrompt(0);
    };

    return (
        <div>
            <button onClick={startNarration}>Start narration</button>

            <PromptList prompts={prompts} currentPrompt={currentPrompt} />
        </div>
    );
};

export { PromptReader };
