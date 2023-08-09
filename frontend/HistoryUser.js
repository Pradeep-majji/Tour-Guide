
import React from 'react'

export default function  HistoryUser (props){
  return (
    <div>
        <table border='3' width="100%">
            <tr>
            <th>User Id</th>
            <td>{props.details.u_id}</td>
            </tr>
            <tr>
            <th>User Name</th>
            <td>{props.details.u_name}</td>
            </tr>
            <tr>
            <th>User Address</th>
            <td>{props.details.u_address}</td>
            </tr>                
            <tr>
            <th>Number of people</th>
            <td>{props.details.num_of_people}</td>
            </tr>
            <tr>
            <th>Travel Place</th>
            <td>{props.details.travel_place}</td>
            </tr>
            <tr>
            <th>Number of Days</th>
            <td>{props.details.num_days}</td>
            </tr>
            <tr>
            <th>Guide Id</th>
            <td>{props.details.g_id}</td>
            </tr>
            <tr>
            <th>Phone Number</th>
            <td>{props.details.u_phone}</td>
            </tr>
            <tr>
            <th>status</th>
            <td>{props.details.status === 0 && props.details.viewed === 1
                ? "Rejected"
                : props.details.status === 1 && props.details.viewed === 1
                ? "Accepted"
                : "Not Verified"}
            </td>
            </tr>
        </table>
    </div>
  )
}
