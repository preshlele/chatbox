import React from 'react'
import {auth} from '../firebase'

const styles ={
    button: `bg-gray-200 px-4 py-3 hover:bg-gray-100 cursor-pointer`
}

const LogOut = () => {
    const signOut = () =>{
        signOut(auth);
    }
  return (
    <button className={styles.button} onClick={()=> auth.signOut()}>Log Out</button>
  )
}

export default LogOut