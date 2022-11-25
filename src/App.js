import React from 'react';
import Navbar from './components/Navbar'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat';

const styles = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[100vh] bg-gray-100 shadow-xl border relative`,
};


function App() {
const [user] = useAuthState(auth);
console.log(user)

  return (
    <div className={styles.appContainer}>
      <section className={styles.sectionContainer}>
        <Navbar />
        {user ?  <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
