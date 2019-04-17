import * as React from "react";
import { getPrompts } from "avalon-prompts";
import { CharacterOptions } from "./character-selector";
import { PromptList } from "./prompt-list";
import { speak } from "../speech";

interface PromptReaderProps {
    choices: CharacterOptions;
}

interface PromptReaderState {
    prompts: string[];
    currentPrompt: number;
}

export class PromptReader extends React.Component<PromptReaderProps, PromptReaderState> {
    public state = {
        prompts: null,
        currentPrompt: null
    };

    public render() {
        const { prompts, currentPrompt } = this.state;

        return (
            <div className="prompt-reader">
                <button onClick={this.startNarration} disabled={currentPrompt !== null}>Start narration</button>

                {
                    prompts !== null
                    && <PromptList prompts={prompts} currentPrompt={currentPrompt} />
                }
            </div>
        );
    }

    private startNarration = () => {
        const newPrompts = getPrompts(this.props.choices);

        this.setState({
            prompts: newPrompts,
            currentPrompt: 0
        }, async () => {
            while (true) {
                await this.narrateCurrentPrompt();

                const next = this.getNextPrompt();

                if (next === null) {
                    break;
                }

                await this.moveToPrompt(next);
            }

            this.setState({
                currentPrompt: null,
                prompts: null
            });
        });
    }

    private getNextPrompt = () => {
        const { prompts, currentPrompt } = this.state;

        if (prompts === null || currentPrompt === null) {
            return null;
        }

        const nextPrompt = currentPrompt + 1;

        return nextPrompt >= prompts.length ? null : nextPrompt;
    }

    private narrateCurrentPrompt = async () => {
        const { prompts, currentPrompt } = this.state;

        await speak(prompts[currentPrompt], 1000);
    }

    private moveToPrompt = (index: number) => {
        return new Promise<void>(resolve => {
            this.setState({
                currentPrompt: index
            }, resolve);
        });
    }
}
