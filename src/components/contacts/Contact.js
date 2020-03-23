import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../../context';
import PropTypes from 'prop-types';
import axios from 'axios';

export class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = async (id, dispatch) => {
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id});
    }
    catch(e){
      dispatch({type: 'DELETE_CONTACT', payload: id});
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const {showContactInfo} = this.state;

    return (
      <Consumer>
        { value => {
          return (
            <div className="card card-body mb-3">
              <h4>{name}{' '}
                <i 
                  className="fas fa-caret-down" 
                  style={{paddingLeft: '5px', cursor: 'pointer'}}
                  onClick={() => this.setState({showContactInfo: !showContactInfo})}>
                </i>
                <i 
                  className="fas fa-times" 
                  style={{float: 'right', color: 'red', cursor: 'pointer'}}
                  onClick={this.onDeleteClick.bind(this, id, value.dispatch)}>
                </i>
                <Link to={`editContact/${id}`}>
                  <i 
                    className="fas fa-pencil-alt"
                    style={{cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem'}}>
                  </i>
                </Link>
              </h4>
              {showContactInfo ? (<ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
              </ul>) : null}
            </div>
          )
        }}
      </Consumer>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
}

export default Contact
