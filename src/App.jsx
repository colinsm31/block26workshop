import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList';
import SelectedContact from "./components/SelectedContact";

function App() {
  // const [contacts, setContacts] = useState(dummyContacts);
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
      <SelectedContact>Selected Contact View</SelectedContact>
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId}/>
    )}
    </>
  )
}

export default App
