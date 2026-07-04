function ProductCard(props) {
  return (
    <div
      style={{
        border: '1px solid black',
        padding: 8,
        margin: 8,
        width: 150,
        height: 100,
        backgroundColor: 'white',
      }}
    >
      <div className="ProductList" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
