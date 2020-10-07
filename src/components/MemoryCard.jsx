import React, { Component } from 'react';
import  './MemoryCard.css';

class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    }
    clickHandler() {
        this.setState({ isFlipped: !this.state.isFlipped });
    }
    render() {
        let memoryCardInnerClass = 'MemoryCardInner'
        if (this.state.isFlipped) {
            memoryCardInnerClass += ' flipped '
        }
        return (
            <div className='MemoryCard' onClick={ this.clickHandler.bind(this) }>
                <div className={memoryCardInnerClass}>
                    <div className='MemoryCardBack'>
                        <img className="DCLogo" src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png' alt='DigitalCrafts Logo' />
                    </div>
                    <div className='MemoryCardFront'>
                        ∆
                    </div>
                </div>
            </div>
        );
    }
}

export default MemoryCard;