import React from 'react'
import './NewCollections.css'
import new_Collection from '../Assests/new_collections'
import Item from '../Items/Item'

function NewCollections() {
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
