import React, { Component } from 'react'
import './QuoteBox.css'

export default class QuoteBox extends Component {
    state = {
        quotes: [],
        author: '',
        quote: ''
    }

    componentDidMount = async () => {
        const api_quotes = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        const {quotes} = await api_quotes.json()
        console.log(quotes)
        this.setState({quotes: quotes})
        await this.chooseQuote()
    }

    chooseQuote = () => {
        const index = Math.floor(Math.random() * this.state.quotes.length);
        this.setState ({
            quote: this.state.quotes[index].quote,
            author: this.state.quotes[index].author
        })
    }

    render() {
        return (
        <div className="row d-flex justify-content-center">
            <div id="quote-box" className='quote__box d-flex flex-column'>
                <div className="d-flex justify-content-center">
                    <i class="fas fa-quote-left"></i>
                    <p id="text" className="quote__text">{this.state.quote}</p>
                </div>
                <small id="author" className="quote__author">- {this.state.author}</small>
                <div className="quote__action d-flex justify-content-between">
                    <div className="quotes__action--social">
                        <a href="twitter.com/intent/tweet"><i class="fab fa-twitter-square fa-2x"></i></a>
                        <a href="https://www.tumblr.com/share"><i class="fab fa-tumblr-square fa-2x"></i></a>
                    </div>
                    <button id="new-quote" onClick={this.chooseQuote}>New Quote</button>
                </div>
            </div>
        </div>
        )
    }
}
