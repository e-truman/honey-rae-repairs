//listens for when url changes and pattern matches url endings
import React from "react"
import { Route } from "react-router-dom"
import { EmployeeList } from "./employees/EmployeeList"
import { CustomerList } from "./customers/CustomerList"
import { TicketList } from "./tickets/TicketList"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/tickets">
                <TicketList />
            </Route>
        </>
    )
}