import React from 'react'
import { useParams } from 'react-router-dom'

const Item = () => {
const {id} = useParams();
// const {url} = useParams(); 

  return (
    <div>
      <h1>Welcome to {id}</h1>
      {/* <img alt='' src={url}/>  */}
    </div>
  )
}

export default Item
