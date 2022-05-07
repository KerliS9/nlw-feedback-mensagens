import { useState } from 'react';

import { CloseButton } from '../CloseButton';
import bugImageUrl from '../../assets/bug.svg'; // falta colocar as imagens na pasta no projeto
import ideaImageUrl from '../../assets/idea.svg'; // falta colocar as imagens na pasta no projeto
import thoughtImageUrl from '../../assets/thought.svg'; // falta colocar as imagens na pasta no projeto
import { FeedbackTypesStep } from './Steps/FeedbackTypesStep';
import { FeedbackContentStep } from './Steps/FeedbackContentStep';

export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: "bugImageUrl",
            alt: "Imagem de um inseto",
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: "ideaImageUrl",
            alt: "Imagem de uma lampada",
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: "thoughtImageUrl",
            alt: "Imagem de um balão de pensamento",
        }
    },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            {!feedbackType ? (
                <FeedbackTypesStep onFeedbackTypeChanged={ setFeedbackType } />
            ) : (
                <FeedbackContentStep />
            )}
            <footer className="text-xs text-neutral-400">
                Feito com ♥ por <a className="underline underline-offset-2" href="https://www.linkedin.com/in/kerlischroeder/">Kerli Schroeder</a>
            </footer>
        </div>
    );
}

