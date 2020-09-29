import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import {useDataGridTreble} from '../Store';
import Row from './row';

export default function RowData() {

  const [{columnsState, rowDataState}, Store] = useDataGridTreble();
  const [lazyLoadRows, setLazyLoadRows] = useState(rowDataState);

  const handleLazyLoad = () => {
    let rowItems = [];
    let buildLazyLoad = () => rowDataState?.forEach((row, index) => {
      setTimeout(() => {
        let i = (index + 1);
        let lazyRows = Array.from({length: 100}, () => {
          return {lazy: 'Loading...'}
        });
        rowItems = [...rowItems, row];
        if((i % 400) == 0 ){
            setLazyLoadRows([...rowItems, ...lazyRows]);
        }
        else if(i === rowDataState?.length){
          setLazyLoadRows(rowItems);
          Store.update('loadingState', false);
        }
      },0);
    })
    buildLazyLoad();
  }

  // useEffect(() => {
  //   updateStore('loadingState', true, dispatch);
  //   handleLazyLoad();
  // },[rowDataState]);

  // useEffect(() => {
  //   console.log(lazyLoadRows);
  // },[lazyLoadRows])

  return (
    <>
      <tbody>
        {
          rowDataState?.map((row) => {
            let key = uniqid();
            return(
              <React.Fragment key={key}>
                <Row columnsState={columnsState} row={row}/>
              </React.Fragment>
            )
          })
        }
      </tbody>
    </>
  )
}