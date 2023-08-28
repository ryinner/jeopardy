import Category from './Category';
import { categories } from './assets/questions';

function Body () {
    return (
        <>
            { categories.map(category => <Category category={category} />) }
        </>
    )
}

export default Body;