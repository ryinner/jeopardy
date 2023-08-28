import { Question as IQuestion } from './assets/questions';

function QuestionModal ({ onClose, onAnswer, isAnswered, question }: { onClose: () => void; onAnswer: () => void; isAnswered: boolean; question: IQuestion  }) {
    const text = isAnswered ? <span className='jeopardy__question-button' onClick={onClose}>Close</span> : <span className='jeopardy__question-button' onClick={onAnswer}>Give answer</span>

    return (
        <div className='jeopardy__question'>
            <div className='jeopardy__question-text'>{ isAnswered ? question.answer : question.question }</div>
            { text }
        </div>
    );
}

export default QuestionModal;