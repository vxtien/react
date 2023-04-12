import { useState } from "react";

const initialProducts = [
    {
        id: 0,
        name: 'Baklava',
        count: 1,
    },
    {
        id: 1,
        name: 'Cheese',
        count: 5,
    },
    {
        id: 2,
        name: 'Spaghetti',
        count: 1,
    },
]

const ShoppingCart = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleIncreaseClick = (productId) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count + 1,
                }
            } else {
                return product;
            }
        }))
    }

    const handleDecreaseClick = (productId) => {
        let nextProducts = products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    count: product.count - 1,
                }
            } else {
                return product;
            }
        })
        nextProducts = nextProducts.filter(p => p.count >= 0);
        setProducts(nextProducts)
    }

    return(
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}   
                    ({product.count})
                    <button onClick={()=>{handleIncreaseClick(product.id)}}>+</button>
                    <button onClick={()=>{handleDecreaseClick(product.id)}}>-</button>
                </li>
            ))}
        </ul>
    )
}
export default ShoppingCart;