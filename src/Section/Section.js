import React, { Component } from 'react'
import PropTypes from "prop-types";
import TextArea from './TextArea'

import styles from "./Section.module.scss";

export default class Section extends Component {
    static propTypes = {
        heading: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }
    constructor(props) {
        super(props)
    
        this.state = {
            counter: [],
        }
    }
    
    handleClick = () => {
        // let cards = document.getElementById(`cards${this.props.id}`);
        // let textArea = document.createElement('textarea');
        // textArea.setAttribute('class', 'textArea')
        // cards.appendChild(textArea);
        // textArea.focus();
        // textArea.addEventListener('keypress', (e) => {
        //     if(e.key === 'Enter') {
        //         textArea.blur()
        //     }
            
        // }, true)
        // let counter = [...this.state.counter];
        this.state.counter.push(new Date().toISOString() );
        this.setState({ counter: this.state.counter })
    }
    render() {
        return (
            <div className={styles.header}>
                    <label>{this.props.heading}</label>
                    <input className={styles.cardBtn} type="button" value="+" onClick={this.handleClick}/>
                <div id={`cards${this.props.id}`}>
                    {this.state.counter.map((card) =>{
                    return (
                       <TextArea key={card} id={card}/>
                    )
                    })}
                </div>
            </div>
        )
    }
}
