import { ValuesForPrint } from './assets/questions';

function Header () {
    return (
        <>
            <div className='jeopardy__cell jeopardy__cell--header' />
            { ValuesForPrint.map(number => <div className='jeopardy__cell jeopardy__cell--header' key={number}>{number}</div>) }
        </>
    )
}

export default Header;