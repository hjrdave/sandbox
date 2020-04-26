import React from 'react';
import uniqid from 'uniqid';
import {useDataGridTreble} from '../Store';

export default function HeaderFields() {

  const [{columnsState}] = useDataGridTreble();
  return (
    <>
      <thead>
        <tr>
          {
            columnsState.map(({name}) => {
              return(
                <React.Fragment key={uniqid()}>
                  <th>{name}</th>
                </React.Fragment>
              )
            })
          }
        </tr>
      </thead>
    </>
  )
}