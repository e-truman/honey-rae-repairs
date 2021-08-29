//responsibility is to show what order things should be displayed
import React from 'react';
import { CustomerList } from './customers/CustomerList';
import { EmployeeList } from './employees/EmployeeList';
import { TicketList } from './tickets/TicketList';

// ^ allows us to use react library


// function that renders our html, which is called jsx
export const Repairs = () => {
    return (
        <>
        <h1>Honey Rae RepairShop</h1>
       <CustomerList /> 
        <EmployeeList />
        <TicketList />
        </>
    )
}






