import React, { useState } from "react";
import guideService from "./guideService";
import "./TravelUserForm.css"
import { useNavigate } from "react-router";
import NavbarUser from "../NavbarUser";

const TravelUserForm =()=>
{
    const [glist,setGlist]=useState([]);
    const [place,setPlace]=useState('');
    const navigate=useNavigate()
    const getGuides=async ()=>
    {   
        const response=await guideService.getGuides(place)
        setGlist(response.data);
    }

   const bookGuide=()=>
    {  navigate('/Bookguide') }

        return( <>
        <NavbarUser/>
                <div className="travel-form">
                    <table className="table1">
                        <tr><td><input type="text" placeholder="Enter Travel Place" name="place" value={place} onChange={(e)=>setPlace(e.target.value)}/></td></tr>
                        <tr><td><input type="submit" value="submit" onClick={getGuides}/></td> </tr>

                    </table>
                    <table align="center" width="50%" border="1" className="table2">
                        <caption>Guides Details</caption>
                        <tr>
                            <th>Guide Name</th>
                            <th>Guide Rating</th>
                            <th>Guide Phone Number</th>
                            <th>Guide Charge</th>
                            <th>Action</th>
                        </tr>
                        <tbody>
                            {  glist.map(   (e, index) => (
                                                <tr key={index}>
                                                    <td>{e.g_name}</td>
                                                    <td>{e.g_rating}</td>
                                                    <td>{e.g_phone}</td>
                                                    <td>{e.g_charge}</td>
                                                    <td>
                                                    <input type="button" value="Book" onClick={bookGuide} />
                                                    </td>
                                                </tr>
                                            )
                                  )
                            }
                                  
                            
                        <tr>
                        </tr>
                        </tbody>
                    </table>
                 </div>
                 </>
        );
    }
export default TravelUserForm;