import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Items/Items'

function NewCollections() {
  
  const [new_Collection, setNew_Collections] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
     .then(response => response.json())
     .then(data => setNew_Collections(data))
     .catch(error => console.error('Error:', error));
  }, [])

  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className='Collections'>
            {new_Collection.map((item, i) => (
                <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
        </div>
    </div>
  )
}

export default NewCollections;