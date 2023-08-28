import './App.css';
import Body from './Body';
import Header from './Header';
import { ValuesForPrint } from './assets/questions';

function App () {
    return (
        <div className='jeopardy' style={{ gridTemplateColumns: `repeat(${ValuesForPrint.length + 1}, 1fr)` }}>
            <Header />
            <Body />
        </div>
    );
}

export default App;
