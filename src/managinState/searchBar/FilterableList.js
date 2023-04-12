import { useState } from 'react';
import { foods, filterItems } from './data-foods';
const FilterableList = () => {
    const [query, setQuery] = useState('');
    const results = filterItems(foods, query);
    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    return(
        <>
            <SearchBar
                query={query}
                onChange={handleChange}
            />
            <hr />
            <List items={results}/>
        </>
    )
}
export default FilterableList;
const SearchBar = ({query, onChange}) => {
    return(
        <label>
            Search: <input value={query} onChange={onChange}/>
        </label>
    )
}
const List = ({items}) => {
    return(
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}