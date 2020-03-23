import React, { Component } from 'react';
import { Consumer } from '../../context';
import Contact from './Contact';
export class Contacts extends Component {
  
  render(){
    return(
      <Consumer>
        { value => {
          const { contacts } = value; 
          return(<React.Fragment>
            <h1 className="display-4 mb-3"><span className='text-danger'>Contact</span> List</h1>
            {contacts.map(contact => (
              <Contact 
                key={contact.id}
                contact={contact}
                deleteClickHandler={this.deleteContact.bind(this, contact.id)}
              />
            ))}
          </React.Fragment>)
        }}
      </Consumer>
    )
  }

  deleteContact = (id) => {
    const newContacts = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    })
  }

  // render() {
  //   const { contacts } = this.state;
  //   return (
      
  //   )
  // }
}

export default Contacts
