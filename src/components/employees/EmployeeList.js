import React, { useEffect, useState } from "react";

// ^ allows us to use react library


// function that renders out html, which is called jsx
export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])
    useEffect( // takes a function and array as parameters, just like event listener
        () => {
            fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then((employeeArray)=> {
                setEmployees(employeeArray)
            })
        },
        [] // when state changes invokes this function, 
    )
    return (
        <>
        <h2>Employees</h2>
         
        { 
            employees.map(
                (employeeObject) => {
                    return <h3>{employeeObject.name}</h3>
                 
                }
            )
        }
        </>
    )
}