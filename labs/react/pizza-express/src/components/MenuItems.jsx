import React, { Component } from 'react'

class MenuItems extends Component {
    render(){
        
        return (
                <div id="menu" className= 'menu-item'>
                    <img src={this.props.image} alt="pizza pic" />
                    <div className='menu-description'>
                        <div className='menu-item-name'>{this.props.name}</div>
                        <div><strong>Price:</strong>{this.props.price}</div>
                        <div>{this.props.description}</div>
                    </div>
                  
                </div>
        );
    }
}

export default MenuItems;