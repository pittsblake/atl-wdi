import React, { Component } from 'react'
import PizzaData from '../pizzaData.js'
import MenuItems from './MenuItems.jsx'

class MenuList extends Component {
    render(){
        const menuItem  = PizzaData.map((pizza, index) => {
            return <MenuItems 
                key = {index}
                image = {pizza.image}
                name = {pizza.name}
                price = {pizza.price}
                description = {pizza.description}
                 />
        })
        return (
            <div className ='menu'>
                <h1>Menu</h1>
                <div className='menu-container'>
                    {menuItem}
                </div>
            </div>
        )
    }
}

export default MenuList;