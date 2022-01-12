import React from 'react';
import PorfolioCard from './PorfolioCard';

const PorfolioCardList = ({ clients }) => {
    return (
        <div>
            {
                clients.map((user, i)=> {
                    return(
                        <PorfolioCard 
                            key={i} 
                            id={clients[i].id} 
                            name={clients[i].name}
                            businessType={clients[i].businessType}
                            testimony={clients[i].testimony}
                            clientImage={clients[i].clientImage}
                        />
                    ); 
                })
            }
        </div>
    );
}

export default PorfolioCardList;