import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import "./Tickets.css";

export const TicketList = () => {
    const [tickets, setTickets] = useState([]) // use state returns an array. asslign it to a variable to capture that initial state, and a variable to hold the function of what you are going to do to modify state. function accepts the value of the array later in code
    const history = useHistory()
    // after you declare the initial state, you have to go get it. takes two arguments. a function and an array. sole purpose is to run code when certain state changes. it is like an event listener
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer") // you can use expand in json to get the info of foreign keys
                .then(res => res.json())
                .then((data) => {
                    setTickets(data) // net to invoke set customers to put state in the array of customers. can not directly modify state. need to use the function you declasred. the argument is what you want the state to be
                })
        },
        [] // leave empty because we only want to run this code the first time the component is rendered
    )

    useEffect(
        () => {

        },
        [tickets]
    )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            window.location.reload(false);
        })
    }



    return (
        <>
            <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            <h2>Service Tickets</h2>
            {
                tickets.map(
                    (ticket) => {
                        return <p className={ticket.emergency ? "emergency " : "ticket"} key={`ticket--${ticket.id}`}>
                            {ticket.emergency ? "🚑 " : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            <button onClick={() => {
                                deleteTicket(ticket.id)
                            }}>Delete</button>

                        </p>

                    }
                )
            }
        </>
    )
}
