import React from 'react';
import './App.css';
import Cart from './components/cart/Cart';
import FormInput from './components/formInput/FormInput';
import { v4 as uuidv4 } from 'uuid';
import Person1 from './Assets/alex-jonathan.jpg';
import Person2 from './Assets/janeth-carton.jpg';
import Person3 from './Assets/john-smith.jpg';
import Person4 from './Assets/michael-zimber.jpg';
import Person5 from './Assets/monica-smith.jpg';
import Person6 from './Assets/sandra-smith.jpg';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class App extends React.Component {
  state = {
    contacts: [
      {id: uuidv4(), name: 'alex', job: 'developer', company: 'Twitter inc', phone: '555-555-555'},
      {id: uuidv4(), name: 'janeth', job: 'developer', company: 'Twitter inc', phone: '555-555-555'},
      {id: uuidv4(), name: 'john', job: 'developer', company: 'Twitter inc', phone: '555-555-555'},
      {id: uuidv4(), name: 'michael', job: 'developer', company: 'Twitter inc', phone: '555-555-555'},
      {id: uuidv4(), name: 'monica', job: 'developer', company: 'Twitter inc', phone: '555-555-555'},
      {id: uuidv4(), name: 'sandra', job: 'developer', company: 'Twitter inc', phone: '555-555-555'}  
    ],
    load: false
  }

  handleDelete = (id) => {
    const filteredItems = this.state.contacts.filter(item => item.id !== id)
    this.setState({
      contacts: filteredItems
    })
  }

  handleAddIcon = (e) => {
  this.setState({   
    load: true,
  })    
  }

  handleCart = (e) => {    
    e.preventDefault();
    const phoneNumber = e.target.querySelector('#phone').value 
    let newItem = {}
    if(/^\d+$/.test(phoneNumber))  {
       newItem = {
        id: uuidv4(), 
        name: e.target.querySelector('#name').value,
        job: e.target.querySelector('#job').value,
        company: e.target.querySelector('#company').value,
        phone: phoneNumber
      }    
      const updatedItems = [...this.state.contacts,newItem];
      this.setState({
        contacts: updatedItems,
        load: false
      })
    } else {
      alert('Please Enter A valid Phone Number')
    }
  }

  handleEdit = (id) => {
    const filteredItems = this.state.contacts.filter(item => item.id !== id);

    this.setState({
      load: true,
      contacts: filteredItems
    })
  }

  render() {
    const images = [Person1,Person2,Person3,Person4,Person5,Person6];    
    return (
      <>
      <div className="App">
        {
          this.state.contacts.map((contact,index) => {            
            return <Cart 
            key={contact.id} 
            handleEdit={() => this.handleEdit(contact.id)} 
            handleDelete={()=>this.handleDelete(contact.id)} 
            phone={contact.phone} 
            company={contact.company} 
            job={contact.job} 
            name={contact.name} 
            image={images[index] || Person1} />
          })
        }
      </div>
      <div className="add-icon">
        <AddCircleIcon  onClick={this.handleAddIcon} />
      </div>
      {
      this.state.load ? <FormInput contacts={this.state.contacts} handleCart={this.handleCart} /> : ''
      }
      </>
    );
  }
}

export default App;
