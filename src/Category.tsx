import Question from './Question';
import { Question as IQuestion, ValuesForPrint, type Category as ICategory } from './assets/questions';

function Category ({ category }: { category: ICategory }) {
    return (
        <>
            <div className='jeopardy__cell jeopardy__cell--category'>
                { category.name }
            </div>
            { ValuesForPrint.map(value => <div className='jeopardy__cell'><Question question={category.questions[value] as IQuestion}>{value}</Question></div> ) }
        </>
    );
}

export default Category;