import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../../context'
import FormInputGroup from '../layout/FormInputGroup';

export class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }
  
  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    const contact = res.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });
  }
  
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    //Field Checks
    if(name === ''){
      this.setState({errors: {name: 'Name is Required'}});
      return
    }
    if(email === ''){
      this.setState({errors: {email: 'Email is Required'}});
      return
    }
    if(phone === ''){
      this.setState({errors: {phone: 'Phone Number is Required'}});
      return
    }
    
    const { id } = this.props.match.params;

    const updatedContact = {
      name,
      email,
      phone
    }

    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updatedContact);
    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });
    //Automatically go to main page without refreshing the web-app
    this.props.history.push('/');
  }
 
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, phone, errors } = this.state;
    return(
      <Consumer>
      { value => {
          const { dispatch } = value;
          return(
            <div className='card mb-3'>
              <div className='card-header'><h4>Edit Contact</h4></div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <FormInputGroup 
                    label='Name'
                    name='name'
                    placeholder='Enter Name'
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <FormInputGroup 
                    label='Email'
                    name='email'
                    placeholder='Enter Email'
                    value={email}
                    type='email'
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <FormInputGroup 
                    label='Phone'
                    name='phone'
                    placeholder='Enter Phone Number'
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input type="submit" className="btn btn-block btn-dark" value='Update Contact'/>
                </form>
              </div>
            </div>
          )
      }}
      </Consumer>
    )
  }
}

export default EditContact
