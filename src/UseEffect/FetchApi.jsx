import React,{use, useEffect, useState} from 'react'

const FetchApi = () => {
    /* 
    useState is used to manage state in functional components.
    useEffect is used to perform side effects in functional components, such as fetching data from an API.
    useEffect runs after the component mounts and can also run on updates based on dependencies.
    useEffect can be used to fetch data from an API when the component mounts.
    fetch is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server.
    then is a method used with promises to handle the response after a successful fetch request.
    catch is a method used with promises to handle errors that occur during a fetch request.
    
    */
   const [comments, setComments] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetching users from the API
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setUsers(users))
            .catch(error => { console.error('Error fetching users:', error); });
    }, []);


   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      
    //convert the response to JSON
      // This is where you handle the response from the API
    .then(response => response.json())
    .then((comments) =>setComments(comments))
    .catch(error => {console.error('Error fetching comments:', error);})
      
   }, []);

  return (
    <div>
        <h2>FetchApi Content</h2>

        <h3>Users</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
            {users.map((user) => (
                <div key={user.id} style={{border: '1px solid #ccc', padding: '10px', width: '300px'}}>     
                    <h3>{user.name}</h3>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                    <p><strong>Company:</strong> {user.company.name}</p>
                    <p><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                </div>))}
        
        </div>
        
        <h3>Comments</h3>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
            {comments.map((comment) => (
                <div key={comment.id} style={{border: '1px solid #ccc', padding: '10px', width: '300px'}}>
                    <h3>{comment.name}</h3>
                    <p><strong>Email:</strong> {comment.email}</p>
                    <p><strong>Body:</strong> {comment.body}</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default FetchApi