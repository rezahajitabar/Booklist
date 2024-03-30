
import React, { Component } from 'react'
import Header  from './components/Header/Header'
import AddForm from './components/Booklist/AddForm'
import './App.css'
export default class App extends Component {

    render() {
        return (
            <div className='container mt-4'>
                <Header></Header>
                <AddForm></AddForm>
            </div>
        )
    }
}
