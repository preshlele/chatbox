import React from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import LogOut from './LogOut'


const styles ={
    nav:`bg-blue-400 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl font-bold`
}

const Navbar = () => {
  const [user] = useAuthState(auth);


  return (

    <div className={styles.nav}>
        <h1 className={styles.heading}>Twittar</h1>
        {user ? <LogOut /> : <SignIn />}
    </div>
  )
}

export default Navbar