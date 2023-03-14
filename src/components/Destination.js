import React from 'react'
import { Link } from 'react-router-dom'

const Destination = () => {

    const myArray = ['European Adventure', 'South American Excursion', 'African Safari'];
    const img = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YuhZ1q_tYrHqZJ_zAPAsXn1IauAHNpAaeQ&usqp=CAU',
                'https://www.travelandleisure.com/thmb/-RvEPqLC3CSkJrQbZa5YX9dzmX8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/brazil-amazon-river-cruise-SATRIPS0519-03ed718a483b458dbd926a37b50483b8.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVdK4gn9q11QugmAqB-kCTl6Oo9iKAvcgLjQ&usqp=CAU']
  return (
    <div data-testid='destination'>

        
        <h1>Popular destinations</h1>
        <ul style={{alignContent:'center', listStyle:'none', display:'flex'}}>        
            
            {myArray.map((id, i) => (
            <li key={`${id}`} style={{marginLeft: '8%', padding: '1.5rem', fontSize: '1.5rem', marginTop: '0.5rem'}}>
             {id}
            <Link to={`/item/${id}`}><img alt='' src={img[i]}></img>
            </Link>
            </li>
            )
            )
            }
        </ul>     
    </div>
  )
}

export default Destination
