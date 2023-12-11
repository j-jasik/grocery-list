export default function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}){
  return (
    <form>
      <input 
        type="search" 
        placeholder="Search..." 
        value={filterText} 
        onChange={(e) => onFilterTextChange(e.target.value)} />
      <br />
      <label>
        <input 
          type="checkbox" 
          id="in-stock" 
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)} />
        {' '}
        Only show products in stock
      </label>
    </form>
  )
}