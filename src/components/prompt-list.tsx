import * as React from "react";

interface PromptListProps {
    prompts: string[];
    currentPrompt: number;
}

const getKey = (prompt: string) => prompt.replace(/\s+/, "");

const PromptList: React.FunctionComponent<PromptListProps> = ({ prompts, currentPrompt }) => {
    return (
        <div className="prompt-list">
            {
                (prompts || []).map((value, index) => (
                    <li
                        key={index + getKey(value)}
                        className={(index === currentPrompt) ? "active" : ""}
                    >
                    {value}
                    </li>
                ))
            }
        </div>
    );
};

export { PromptList };
