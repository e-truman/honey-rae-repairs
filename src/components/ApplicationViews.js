//listens for when url changes and pattern matches url endings
import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList"
import { CustomerList } from "./customers/CustomerList"
import { TicketList } from "./tickets/TicketList"
import { TicketForm } from "./tickets/TicketForm" 
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
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