import { addDoc,collection, serverTimestamp } from 'firebase/firestore';
import React, {useState} from 'react'
import { db,auth } from '../firebase'


const styles = {
  button: `w-[20%] bg-blue-400 text-white`,
  input: `w-full text-xl p-4 bg-gray-600 text-white outline-none border-none`,
  form: `h-14 w-full max-w-[725px] flex text-xl sticky bottom-0`,
};

const SendMessage = ({scroll}) => {
    const [input,setInput] = useState(
        '')

    const sendMessage = async (e) => {

        e.preventDefault();
        if(input === ''){
            alert('Please enter a valid message')
            return
        }

        const {uid, displayName} =auth.currentUser
        await addDoc (collection(db, 'messages'),{
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.ScrollIntoView({behavior: 'smooth'})
    }

  return (
    <form onSubmit={sendMessage} className={styles.form}>
        <input
        value={input}
        className={styles.input}
        type="text"
        placeholder="Message"
        onChange= {(e) => setInput(e.target.value)}
         />
        <button className={styles.button} type='Submit'>Send</button>
    </form>
  )
}

export default SendMessage