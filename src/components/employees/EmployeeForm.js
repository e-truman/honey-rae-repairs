// Create a route in ApplicationViews for /employee/create that renders an EmployeeForm.
// Add a button to the employee list labeled, "Hire Employee".
// When the button is clicked, show the employee form by using history.push() to change the route.
// The employee form should include an input for the person's name, their repair specialty, and a button at the end labeled "Finish Hiring".
// When the "Finish Hiring" button is clicked on the form, create a new employee object and POST it to the API.
// Once the employee is saved, re-route the user to the list of employees.




import React, { useState } from "react"
import { useHistory } from "react-router-dom"

export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: "",
         specialty: ""
    });

    // can give use state initial values to capture more than one thing. 

    const history = useHistory() // hook that allows you to push to browser history


// save ticket uses the state variables to create an object to post to api

    const hireEmployee = (event) => { // invoked when you push submit button
        event.preventDefault() // prevents form from being submitted without being able to see your fetch
        const newTicket ={
            name: employee.name, // got this from state
            specialty: employee.specialty,
            
        }
       const fetchOption = {
           method: "POST", //have to write options for fetch before writign fetch call
           headers: { // needs headers or json won't work. only need content type
               "Content-Type": "application/json"
           },
           body: JSON.stringify(newTicket) // sends body of reqest. hast to be sent as string. cant be javascript objects
       }
    
    return fetch("http://localhost:8088/employees", fetchOption)
       .then(() => {
            history.push("/employees") // after you post a ticket, you are redirected to service tickets
       })
    }
    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="First and last name"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                setEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Specialty:</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Specialty"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                setEmployee(copy)
                            }
                        } 
                       />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={hireEmployee}> 
               Hire Employee
            </button>
        </form>
    )
}