import React from 'react'
import './Cart.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const Cart = ({image,name,job,phone,company,handleDelete,handleEdit}) => {

 fetch('https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8')
  .then(data => data.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))

 return (
  <div className="cart-container">
   <div className="image-container">
    <img src={image} alt={name}/>
    <span className="job">{job}</span>
   </div>
   <div className="information-container">
   <span className="name">{name}</span>
   <span className="location">location</span>
   <span className="company">{company}</span>
   <span className="phone">{phone}</span>
   </div>
   <div className="icons-container">
    <EditIcon onClick={handleEdit}/>
    <DeleteIcon onClick={handleDelete}/>
   </div>
  </div>
 )
}

export default Cart
