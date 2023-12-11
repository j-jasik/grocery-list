import { useState } from "react";
import Card from 'react-bootstrap/Card';

import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

export default function Filter(){
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <Card style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      minHeight: '100vh',
    }}>
      <h2>Grocery List</h2>
      <SearchBar 
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}

      />
      <ProductTable 
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </Card>
  )
}