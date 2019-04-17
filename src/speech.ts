const delay = (time: number) => new Promise(resolve => setTimeout(() => resolve(), time));

const storeUtteranceToPreventGC = (utterance: SpeechSynthesisUtterance) => {
    // SpeechSynthesisUtterances get cleaned up by the GC if they're not stored in a global scope - it's a bug

    if ((window as any).utterances === undefined) {
        (window as any).utterances = [];
    }

    (window as any).utterances.push(utterance);
};

const getVoices = () => {
    return new Promise<SpeechSynthesisVoice[]>(resolve => {
        window.speechSynthesis.onvoiceschanged = () => {
            resolve(window.speechSynthesis.getVoices());
        };

        const voices = window.speechSynthesis.getVoices();

        if (voices.length > 0) {
            window.speechSynthesis.onvoiceschanged = () => undefined;
            resolve(voices);
        }
    });
};

const getVoice = async () => {
    const voices = await getVoices();

    return voices.find(v => v.voiceURI === "Microsoft Hazel Desktop - English (Great Britain)")
        || voices.find(v => v.voiceURI === "Google UK English Female")
        || voices.find(v => v.voiceURI === "Google UK English Male")
        || voices.find(v => v.lang === "en-GB")
        || voices.find(v => v.lang === "en-US");
};

const replaceNames = (text: string) => {
    return text.replace(/percival/i, "Purr sieve all")
        .replace(/morgana/i, "More garner")
        .replace(/oberon/i, "Oberohn");
};

export const speak = (text: string, endDelay: number) => {
    return new Promise<void>(async resolve => {
        const utterance = new SpeechSynthesisUtterance(replaceNames(text));
        storeUtteranceToPreventGC(utterance);

        utterance.voice = await getVoice();
        utterance.pitch = 0.8;
        utterance.rate = 0.7;

        utterance.onend = async () => {
            await delay(endDelay);

            resolve();
        };

        window.speechSynthesis.speak(utterance);
    });
};
