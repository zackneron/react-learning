import React from 'react';
import Styles from './MessageCard.css'

let MessageCard = function(props){
    return (
        <React.Fragment>
            <div className='card'>
                <div className='card-body'>
                    <h2>Welcome to {props.name}</h2>
                    <p>Lorem ipsum dolor sit amet sunt nulla deserunt proident laboris eu laboris deserunt aute in enim Lorem enim mollit esse

                    dolor aliqua aute pariatur cupidatat eu Ut aliqua labore quis reprehenderit anim nostrud ut ut sed ullamco ut labore deserunt
                    
                    dolor magna cupidatat id dolore officia ut aliquip in reprehenderit in qui fugiat aliqua ipsum in reprehenderit consequat eiusmod deserunt
                    
                    elit ea eiusmod exercitation cillum Ut anim aliqua cillum ea deserunt Lorem esse adipiscing eiusmod consectetur non proident proident minim
                    
                    magna nisi aliquip veniam veniam occaecat est eiusmod pariatur nostrud commodo adipiscing mollit officia laboris est labore quis ut aute</p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default MessageCard;