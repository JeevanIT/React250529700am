import React, { Component } from 'react'

export default class Header extends Component {

  constructor(props) {
    super(props);
    // Initializing state
    this.state = {
      title: 'Header Component',
      subtitle: 'Welcome to the Header'
    };

    this.myname = 'Jeevan';
    this.mySubtitle = 'Welcome to the Header';

    this.user = {
      name: 'John Doe',
      age: 30,
      email: 'john@gmail.com'
    };
this.product=[0,'Laptop', 50000, 'Dell Inspiron', 'Electronics'];
  


//define style object
  this.myStyle = {
    heading:{
    backgroundColor: 'red',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #dee2e6'
  },
    paragraph: {
      color: 'red',
      fontSize: '16px',
      margin: '5px 0'
    },

};
} 
  render() {
    return (
      <div className='headerstyle'>
        <h3>{this.myname}</h3>
       <h1 style={this.myStyle.heading}>User Details</h1>
       <p style={this.myStyle.paragraph}>userName:{this.user.name}</p>
       <p style={this.myStyle.paragraph}>Age: {this.user.age}</p>
       <p style={this.myStyle.paragraph}>Email: {this.user.email}</p>
      </div>
    )
  }
}