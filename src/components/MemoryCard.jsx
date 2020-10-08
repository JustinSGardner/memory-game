import React, { Component } from 'react';
import  './MemoryCard.css';

class MemoryCard extends Component {

    render() {
        let memoryCardInnerClass = 'MemoryCardInner'
        if (this.props.isFlipped) {
            memoryCardInnerClass += ' flipped '
        }
        return (
            <div className='MemoryCard' onClick={ this.props.pickCard }>
                <div className={memoryCardInnerClass}>
                    <div className='MemoryCardBack'>
                        <img className="DCLogo" src='https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png' alt='DigitalCrafts Logo' />
                    </div>
                    <div className='MemoryCardFront'></div>
                    {this.props.symbol}
                </div>
            </div>
        );
    }
}

export default MemoryCard;