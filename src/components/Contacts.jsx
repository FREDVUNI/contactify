import React,{ useState } from 'react'
import Contact from './Contact'
import { contacts } from '../data/contacts'

const Contacts = () => {
    const [people,setPeople] = useState(contacts);
  return (
    <>
    <li>{console.log(people)}</li>
    </>
  )
}

export default Contacts