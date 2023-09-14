import { useState, useEffect } from "react";

function SelectedContact({selectedContactId, setSelectedContactId}){
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const response = () => {
      fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
      
    }
  }, [])
}

export default SelectedContact;