import React from 'react'

const PrintName = () => {
    return (
        <div>
        <h3>Print Name Component</h3>
        <p>Jeevan</p>
        <p>Jeevan is a software engineer</p>
        <p>Jeevan loves coding and learning new technologies</p>
        </div>
    )
    }

    const PrintAddress = () => {
        return (
            <div>
            <h3>Print Address Component</h3>
            <p>123 Main St, City, Country</p>
            <p>Jeevan's address is a beautiful place</p>
            </div>
        )
    }   

const MultiComponent = () => {
  return (
    <div>
        <h3>MultiComponent</h3>
        <PrintName />
        <PrintAddress />
        <div>
            <h3>Inline Function Component</h3>
            <p>This is an inline function component</p>
            <p>It is used to demonstrate how to create a component inline</p>
        </div>
    </div>
  )
}
// Inline function component            
export default MultiComponent