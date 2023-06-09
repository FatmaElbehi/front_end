
import React, { Component } from 'react';
import axios from "axios";
import styled from 'styled-components';

 export default class ApiLoader extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        loading: true,
        result: null
      };
    }
  
    componentWillMount() {
      const { steps } = this.props;
      const searchTerm = steps.handleNext.value.toString();
      console.log('searchTerm', searchTerm);
    
      axios.post('/api/predict', { message: searchTerm }, { headers: { Accept: 'application/json' }})
        .then(response => {
          console.log('response', response);
          if (response.status !== 200) {
            throw new Error('Failed to receive response from server');
          }
          console.log(response.data.answer);
          this.setState({
            loading:false,
            result: response.data.answer,
          });
          // Update the state with the response data here
        })
        .catch(error => {
          console.error(error);
          // Handle the error here, e.g. display an error message to the user
        });
    }
    render() {
      const { loading, result } = this.state;
  
      return (
        <div>
          { loading ? <div> test</div>:result }
        </div>
      );
    }
  }