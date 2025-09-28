import React from 'react'
import Left from './home/left/left'
import Right from './home/right/right'
import Logout from './home/left1/Logout'
import Signup from './components/Signup'
function App(){
  return (
    <>
    /<div className='flex h-screen'>
    <Left />
    <Right />
    <Signup></Signup>
    <Login></Login>
    <Logout />
</div> 
  
    
    </>
  )
}
export default App
