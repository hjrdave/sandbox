import React from 'react';
import {useScopedCompTreble} from '../Store';

export default function ListOne(){
    const [{listOne}] = useScopedCompTreble();
    return(
        <>
            <h5>List One</h5>
            {
                listOne.map((item, index) => {
                    return(
                        <p key={index}>{item}</p>
                    )
                })
            }
        </>
    )
}