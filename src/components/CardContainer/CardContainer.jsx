import React from 'react';
import './cardcontainer.css'
import Card from '../Card/Card';

function CardContainer() {
    const plans=[
        {
            Item:"Basic",
            oldPrice:'$ 89.99',
            newPrice:"$ 9.99",
            users:25,
            storage:"25Gb",
            support:'Email',
            buttonColor:'#FFE7A9'
        },
        {
            Item:"Standerd",
            oldPrice:'$ 199.99',
            newPrice:"$ 99.99",
            users:50,
            storage:"60Gb",
            support:'Email+Chat',
            buttonColor:'#FF9494'
        },
        {
            Item:"Premium",
            oldPrice:'$ 299.99',
            newPrice:"$ 199.99",
            users:75,
            storage:"100Gb",
            support:'Email+Chat+Whatsapp',
            buttonColor:'#E7A2FF'
        },
    ]
  return (
    <div className='card-container'>

        {
            plans.map((element)=>{
                return(
                    <Card item={element}/>
                )
            })
        }

    </div>
  );
}

export default CardContainer;