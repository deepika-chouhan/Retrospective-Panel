import React, { Fragment, Component } from 'react';

import styles from "./Section.module.scss"    
    export default class TextArea extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0,
            }
        }
        
        handleClick = () => {
            this.setState({ count: this.state.count + 1});
        }
        render() {
            return (
                <Fragment>
                    <input type="button" value={`+ ${this.state.count}`} onClick={this.handleClick} className={styles.voteBtn}/>
                    <textarea />
                </Fragment>
            )
        }
    }
    
