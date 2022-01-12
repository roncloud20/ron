import React from 'react';
// import gcflogo from './assets/clients/gcflogo.png';  

const PorfolioCard = ({id, name, businessType, testimony, clientImage}) => {
    return (
        // <div className="Card grow pa3 bw3 shadow-5" style={{ backgroundImage:`url(${imageUrl})` }}>
        //   <li className="Likes"><span>&hearts;</span> {likes}</li>
        //   <li className="Add"><div>+ Use</div> </li>
        //   <li className="Style-name">{stylename}</li>
        // </div>
        
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={clientImage} alt={name} />
                </div>
                <div class="flip-card-back">
                    <h3>{name}</h3>
                    <p>{businessType}</p>
                    <p>{testimony}</p>
                </div>
            </div>
        </div>
    );
}

export default PorfolioCard;