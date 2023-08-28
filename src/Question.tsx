import { PropsWithChildren, useState } from 'react';
import QuestionModal from './QuestionModal';
import type { Question as IQuestion } from './assets/questions';

function Question({ question, children }: PropsWithChildren & { question: IQuestion }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnswered, setIsAnswered] = useState(false);

    const clickHandler = () => {
        if (!isAnswered) {
            setIsOpen(true);
        }
    };

    const answeredHandler = () => {
        setIsAnswered(true);
    };

    const closeHandler = () => {
        setIsOpen(false);
    };

    return (
        <>
            <span className='jeopardy__question-button' onClick={clickHandler}>{ !isAnswered && children }</span>
            { isOpen && <QuestionModal onClose={closeHandler} onAnswer={answeredHandler} question={question} isAnswered={isAnswered} /> }
        </>
    );
}

export default Question;