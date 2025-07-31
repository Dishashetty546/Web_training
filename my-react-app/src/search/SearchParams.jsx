import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category");
  const price = searchParams.get("price");

  return (
    <div>
      <h1>hello</h1>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
      <br />
      <button onClick={() => setSearchParams({ category: 'cell electronics', price: 1000 })}>Set Cell Electronics</button>
      <button onClick={() => setSearchParams({ category: 'hp laptops', price: 2000 })}>Set HP Laptops</button>
    </div>
  )
}

export default SearchParams
