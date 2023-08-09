import React from 'react'

export default function  User (props){
  return (
    <div>
        <table border='3' width="100%">
            <tr>
            <th>Guide Id</th>
            <td>{props.details.g_id}</td>
            </tr>
            <tr>
            <th>Guide Name</th>
            <td>{props.details.g_name}</td>
            </tr>
            <tr>
            <th>Guide Rating</th>
            <td>{props.details.g_rating}</td>
            </tr>                
            <tr>
            <th>Guide Charge</th>
            <td>{props.details.g_charge}</td>
            </tr>
            <tr>
            <th>Guide Location</th>
            <td>{props.details.g_location}</td>
            </tr>
            <tr>
            <th>Guide Phone</th>
            <td>{props.details.g_phone}</td>
            </tr>
        </table>
    </div>
  )
}
