import React, { Component } from 'react'
import Book from './Book'
import { toBeEmpty } from '@testing-library/jest-dom/dist/matchers'

export default class AddForm extends Component {

    constructor() {
        super()

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }

        this.titleHandler=this.titleHandler.bind(this)
        this.authorHandler=this.authorHandler.bind(this)
        this.yearHandler=this.yearHandler.bind(this)
        this.submitHandler=this.submitHandler.bind(this)
    }

    titleHandler(event){
        this.setState({
            title:event.target.value
        })
    }

    authorHandler(event){
        this.setState({
            author:event.target.value
        })
    }

    yearHandler(event){
        this.setState({
            year:event.target.value
        })
    }

    submitHandler(event){
        event.preventDefault();

        let {title,author,year}=this.state

        if(title && author && year){
            let newBook={
                id: this.state.books.length + 1,
                title,
                author,
                year
            }
            this.setState({
                books:[...this.state.books,newBook]
            })

            this.setState({
                title:'',
                author:'',
                year:''
            })
        }
    }

    render() {
        return (
            <>
                <form className='book-mark' id="book-form" autocomplete="off" onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="form-control"  value={this.state.title} onChange={this.titleHandler}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input type="text" id="author" className="form-control" value={this.state.author} onChange={this.authorHandler}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input type="text" id="year" className="form-control" value={this.state.year} onChange={this.yearHandler}/>
                    </div>
                    <input type="submit" id='addbook' value="Add Book" className="btn btn-warning btn-block add-btn" />
                </form>
                <hr />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                       
                    </thead>
                   
                    <tbody id="book-list">
                        {this.state.books.map(book => (
                            <Book {...book} key={book.id}/>
                        ))}
                    
                        
                    </tbody>
                </table>


            </>
        )
    }
}