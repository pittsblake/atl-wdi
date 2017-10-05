import React, { Component } from 'react'
import Location from './Location.jsx'
import LocationData from '../locationData.js'

class LocationList extends Component {
    render(){
        const location = LocationData.map((location, index) =>{
            return <Location 
                key = {index}
                name = {location.name}
                address = {location.adress}
                phone = {location.phone} />
        })
        return (
            <div id='locations'>
                <h1>Locations</h1>
                <div className='locations'>
                    {location}
                </div>
            </div>
        )
    }
}

export default LocationList;