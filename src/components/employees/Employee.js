import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom" // allows you to do object destructuring

export const Employee = (props) => {
    console.log(props)
    const [ employee, setEmployee ] = useState({}) // need to hold our fetch as a variable in order to use it later in our code. it will be an object.  

    const { employeeId } = useParams() // object destructuring. Have to name the variable in curly brackets the same as what you named the variable in your route for app views. can use to capture this component in browser, not just URL

    useEffect(
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`) // you are requesting an array of ticketId objects? this ic called the query string parameter. can imbed foreign keys in object
            .then(response => response.json()) // make request and converts data back into a javascript object
            .then((data) => {
                setEmployee(data) // the data will be the indivicual tickets. invoke the function when you click on different tickets

            })
        },

        [ employeeId ] // you want this function to re render your jsx any time your ticket id changes, so you need to watch your ticket Id array. Did we get this from useParams? 
    )

    // have to fetch an object because otherwise you'd have to iterate over an array of objects

    return (
        <>
            <h2>Employee Details</h2>
            <section className="employee">
                <h3 className="employee__name" key={`employee--${employee.id}`}>{employee.name}</h3>
                <div className="employee__specialty" key={`specialty--${employee.id}`}>Their specialty is {employee.specialty}.</div>
            </section>
        </>
    )
}

// are my keys repeptitive because I interpolated ids like

//Dynamic routing is used to view individual items rather than a whole list. 
//?. is optional chaining . on original rendering, the customer and employees are undefined so you can't access them yet. use optional chaining to workaround
// 1.) make ticket.js for individual tickets.
// 2.) convert some text into a hyperlink in TicketList using link componenent. 
// wrap the link component around what you want to be a hyperlink. the to= is a dynamic route. 
//that is how you pick what url the browser url should change to using link. We interpolated because the url will change to the primary key depending on what you click on
//3.) go to application views and write matching route to what you wrote in ticket list
// 4.) fetch that ticket, set state when request comes back, use optional chaining to make sure code doesn't blow up. and capture pk to be able to render 
// Why did we have to fetch the ticketId and not the list of tickets?

//In application views- tell it to invoke the ticket function render that component when the url is tickets/{ticketId}. can use (\d+) to make sure it's a number
// when exact path render the indv ticket
// fetch that ticket
// use optional chaining for nested properties


//I didn't get errors even if I didn't use optional chaining. 