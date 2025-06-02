import React from 'react'

const CreateComponent = () => {
  const userDetails = {
    name: 'John Doe',
    email: 'john@gmail.com'
  }

  const productDetails = {
    id: 1,
    name: 'Laptop',
    price: 50000,
    description: 'Dell Inspiron',
    category: 'Electronics'
  } 
  const productList = [
    { id: 1, name: 'Laptop', price: 50000, description: 'Dell Inspiron', category: 'Electronics' },
    { id: 2, name: 'Smartphone', price: 30000, description: 'Samsung Galaxy', category: 'Electronics' },
    { id: 3, name: 'Tablet', price: 20000, description: 'Apple iPad', category: 'Electronics' }
  ]
  const myStyle = {
    heading: {
      backgroundColor: 'lightblue',
      padding: '10px',
      textAlign: 'center',
      borderBottom: '1px solid #dee2e6'
    },
    paragraph: {
      color: 'red',
      fontSize: '16px',
      margin: '5px 0'
    }
  }

  return (
    <div>
    CreateComponent
    <p>UserName: {userDetails.name}</p>
    <p>UserEmail: {userDetails.email}</p>
    <h2>Product Details</h2>
    <p>Product ID: {productDetails.id}</p>  
    <p>Product Name: {productDetails.name}</p>
    <p>Product Price: {productDetails.price}</p>
    <p>Product Description: {productDetails.description}</p>
    <p>Product Category: {productDetails.category}</p>
    <h2>Product List</h2>
    <ul>
      {productList.map(product => (
        <li key={product.id} style={myStyle.paragraph}>
          {product.name} - {product.price} - {product.description} - {product.category}
        </li>
      ))}
      </ul>
    </div>
  )
}

export default CreateComponent