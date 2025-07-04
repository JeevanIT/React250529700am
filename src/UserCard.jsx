import React from 'react'

const UserCard = ({name,email}) => {
  return (
    <div>
        <h3 data-testid='user-name'>{name}</h3>
        <p data-testid='user-email'>{email}</p>
    </div>
  )
}

export default UserCard