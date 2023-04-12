const products = [
    {title: 'Cabbage', isFruit: false, id: 1},
    {title: 'Gralic', isFruit: false, id: 2},
    {title: 'Apple', isFruit: true, id: 3},
];
const ShoppingList = () => {
    const listItems = products.map(item => 
        <li
            key={item.id}
            style={{color: item.isFruit ? 'magenta' : 'darkgreen'}}
        >
            {item.title}
        </li>
        )
    return(
        <ul style={{listStyle: "none"}}>
            {listItems}
        </ul>
    )
}
export default ShoppingList;

