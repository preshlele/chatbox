import { doc } from 'firebase/firestore'
import {React, useState, useEffect, useRef} from 'react'
import Message from './Message'
import {db} from '../firebase'
import {query, collection, onSnapshot, orderBy} from 'firebase/firestore'
import SendMessage from './SendMessage'

const styles ={
    main:`flex flex-col p-[10px] relative`
}

const Chat = () => {
  const [messages, setMessages] = useState([])
  const scroll = useRef()


  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id})
      });
      setMessages(messages);
    })
    return () => unsubscribe();
  }, [])
  

  return (
    <>
      <main className={styles.main}>
        {messages && messages.map((message) =>
        (<Message key={message.id} message={message} />
        ))}
        {/* <Message/> */}
      </main>
        <SendMessage scroll={scroll} />
      <span className={scroll}></span>
    </>
  );
}

export default Chat