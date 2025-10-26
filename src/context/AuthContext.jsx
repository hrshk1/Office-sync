import React from 'react'

const AuthContext = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default AuthContext
//you will have to create children inside small brackets and then write it in div to show the content from App to the main
//Also you dont have to import anything in APP 