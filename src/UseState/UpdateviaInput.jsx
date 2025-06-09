import React from 'react'

const UpdateviaInput = () => {
    const [product, setProduct] = React.useState({
        name: 'Laptop',
        price: 50000,
        description: 'Dell Inspiron',
        category: 'Electronics',
        imageurl: 'https://techterms.com/img/xl/laptop_586.png'
    });
  return (
    <div>
        <h3>UpdateviaInput</h3>
        <p>Product Image: <img src={product.imageurl} alt={product.name} style={{width: '100px', height: '100px'}}/></p>
        <p>Product Name: {product.name}</p>
        <p>Product Price: {product.price}</p>
        <p>Product Description: {product.description}</p>
        <p>Product Category: {product.category}</p>

        <input type='text' id='pname' placeholder='Enter Product Name'/>

        <button onClick={() => {
            const newName = document.getElementById('pname').value;
            
            setProduct((prevProduct) => ({
                ...prevProduct,
                name: newName
            }));
        }
        }>Update Product Name</button>
    </div>
  )
}

export default UpdateviaInput