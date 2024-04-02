import React, { Component } from 'react'
import { FaBookOpen } from "react-icons/fa6";
export default class Header extends Component {
    render() {
        return (
            <div>
                 
               <h1 className="display-4 text-center">
               <FaBookOpen className='book'/> 
                <i className="fas fa-book-open text-warning">
                </i> SabzLearn Js
                <span className="text-warning">Book</span>List
            </h1>
            </div>
           
        )
    }
}