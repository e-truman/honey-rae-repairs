//listens for when url changes and pattern matches url endings
import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList"
import { CustomerList } from "./customers/CustomerList"
import { TicketList } from "./tickets/TicketList"
import { TicketForm } from "./tickets/TicketForm" 
import { Ticket } from "./tickets/Ticket"
import { Employee } from "./employees/Employee"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)"> {/*capture whatever comes after second slash by use a colon and specific key- react captures and stored in ticket id variable. The (\d+) makes sure whatever comes after the slash is a number in order to invoke the functions */}
                <Ticket />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)"> {/*capture whatever comes after second slash by use a colon and specific key- react captures and stored in ticket id variable. The (\d+) makes sure whatever comes after the slash is a number in order to invoke the functions */}
                <Employee />
            </Route>
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
            <Route path="/employee/hire">
                <EmployeeForm />
            </Route>
        </>
    )
}

// create a route to render the pages you want to see on different pages. when url is ______, you see _______.
//need to make an exact path for when you have two urls that begin the same