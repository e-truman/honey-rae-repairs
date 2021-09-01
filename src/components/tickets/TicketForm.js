import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const TicketForm = () => {
    const [ticket, updateTicket ] = useState({
        description: "",
         emergency: false
    });

    // can give use state initial values to capture more than one thing. 

    const history = useHistory() // hook that allows you to push to browser history


// save ticket uses the state variables to create an object to post to api

    const saveTicket = (event) => { // invoked when you push submit button
        event.preventDefault() // prevents form from being submitted without being able to see your fetch
        const newTicket ={
            description: ticket.description, // got this from state
            emergency: ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1, // hard code one because json needs all valid foreign keys or else it will delete your whole object
            dateCompleted: ""
        }
       const fetchOption = {
           method: "POST", //have to write options for fetch before writign fetch call
           headers: { // needs headers or json won't work. only need content type
               "Content-Type": "application/json"
           },
           body: JSON.stringify(newTicket) // sends body of reqest. hast to be sent as string. cant be javascript objects
       }
    
    return fetch("http://localhost:8088/serviceTickets", fetchOption)
       .then(() => {
            history.push("/tickets") // after you post a ticket, you are redirected to service tickets
       })
    }
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description = evt.target.value
                                updateTicket(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.emergency = evt.target.checked
                                updateTicket(copy)
                            }
                        } 
                        type="checkbox"/>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveTicket}> 
                Submit Ticket
            </button>
        </form>
    )
}

// write an event listener for just input and just checknox . updated any time user inteacts. 
//1.) copy state with spread operator
//2.) then modify the copy
//3.) update the state with new copy

// can't use .value with a checkbox. 

// can post you even listener info, along with some other info

// if there is an invalid value in an object, json witll delete the whole object

// 
