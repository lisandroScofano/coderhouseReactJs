import * as React from 'react';

export default function App() {
  
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(function (response) {
        return response.json();
      })
      .then(function (prods) {
        setProducts(prods);
      });
  }, []);

  if (!products) return null;

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
