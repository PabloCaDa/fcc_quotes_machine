import React, { Component } from 'react'
import './QuoteBox.css'

import Loader from '../../Loader/Loader'
// import { COLORS } from '../../../constants'

const COLORS =  [
    '#A1C5AA', '#82BF94', '#E7D27C', '#B46858', '#126D43', '#6BB8A0', '#B9BAB8', '#B98F69', '#C25755', '#BD4948'
]

export default class QuoteBox extends Component {
    state = {
        quotes: [],
        author: '',
        quote: '',
        colors: [
            '#A1C5AA', '#82BF94', '#E7D27C', '#B46858', '#126D43', '#6BB8A0', '#B9BAB8', '#B98F69', '#C25755', '#BD4948'
        ]
    }

    componentDidMount = () => {
        setTimeout( async() => {
            const api_quotes = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            const {quotes} = await api_quotes.json()
            await this.setState({quotes: quotes})
            await this.chooseQuote()
        }, 1000)
        
    }

    chooseQuote = () => {
        const quote_textBox = document.querySelector('.fading');
        quote_textBox.classList.add("fadeOut");
        quote_textBox.classList.remove("fadeIn");
        void quote_textBox.offsetWidth;
        const styleSheet = document.styleSheets[2].rules[0].style;
        setTimeout(() => {
            const index = Math.floor(Math.random() * this.state.quotes.length);
            this.setState ({
                quote: this.state.quotes[index].quote,
                author: this.state.quotes[index].author
            }, () => {  
                styleSheet.setProperty('--main-brand-color', this.state.colors[Math.floor(Math.random() * COLORS.length)])
                quote_textBox.classList.remove("fadeOut");
                quote_textBox.classList.add("fadeIn");
            })
        }, 900)
    }

    render() {
        return (
        <div className="row d-flex justify-content-center">
            <div id="quote-box" className='quote__box d-flex flex-column'>
                <div className="d-flex flex-column fading">
                    <div id="quote__text-box" className="d-flex justify-content-center quote__text-container">
                        {this.state.quotes.length === 0 && <Loader />}
                        {this.state.quote && <i className="fas fa-quote-left quote__icon color-trans"></i>}
                        <span id="text" className="quote__text color-trans">{this.state.quote}</span>
                    </div>
                    <small id="author" className="quote__author color-trans">- {this.state.author}</small>
                </div>
                <div className="quote__action d-flex justify-content-between align-items-center">
                    <div className="quotes__action--social">
                        <a id="tweet-quote" className="qoute__button bg-trans" href="twitter.com/intent/tweet">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="qoute__button quote__button--tumblr" href="https://www.tumblr.com/share">
                            <i className="fab fa-tumblr"></i>
                        </a>
                    </div>
                    <button id="new-quote" className="qoute__button bg-trans" onClick={this.chooseQuote}>New Quote</button>
                </div>
            </div>
        </div>
        )
    }
}
