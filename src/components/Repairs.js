//responsibility is to show what order things should be displayed
import React from 'react';
import { ApplicationViews } from './ApplicationViews';
import { NavBar } from './nav/NavBar';
import "./Repairs.css"

// ^ allows us to use react library


// function that renders our html, which is called jsx
export const Repairs = () => {
    return (
        <>
        <NavBar />
        <h1>Honey Rae RepairShop</h1>
       <ApplicationViews />
        </>
    )
}






