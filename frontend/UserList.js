import React, { Component } from 'react';
import  Axios  from './Axios';

export default class UserList extends Component {
    constructor(props){super(props);this.state={elist:[]}}
    getUsers=()=>{
        Axios.getUsers().then(response=>this.setState({elist:response.data}))}
  render() {
    return (
      <div>
        <center><input type="button" value="getUsers" onClick={this.getUsers}></input></center>
        <hr/>
        <table border="1">
            <tr>
                <th>UserId</th>
                <th>User Name</th>
                <th>User Address</th>
                <th>number of people</th>
                <th>travel place</th>
                <th>number of days</th>
                <th>Guide id</th>
                <th>user phone number</th>
            </tr>
            {this.state.elist.map((e)=><tr><td>{e.u_id}</td><td>{e.u_name}</td>
            <td>{e.u_address}</td><td>{e.num_of_people}</td><td>{e.travel_place}</td>
            <td>{e.num_days}</td><td>{e.g_id}</td><td>{e.u_phone}</td>
            </tr>)}
        </table>
      </div>
    )
  }
}
