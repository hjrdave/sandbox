import React, { useEffect, Suspense, lazy } from 'react';
import { withTreble, updateStore } from 'treble-gsm';
import { Table } from 'react-bootstrap';
import HeaderFields from './header-fields';
import Header from './header';
import { Store, useDataGridTreble } from './Store';
import './_data-grid.scss';

const RowData = React.lazy(() => import('./row-data'));

export function Grid({ columns, rowData }) {

  //connects to DataGrid Store
  const [{}, dispatch] = useDataGridTreble();

  //put prop data in DataGrid Store
  useEffect(() => {
    updateStore('updateColumns', columns, dispatch);
  }, []);

  //put row data into store every time it updates
  useEffect(() => {
    updateStore('updateRowData', rowData, dispatch);
  },[rowData]);

  return (
    <>
      <div className='data-grid mb-4'>
        <Header/>
        <Table striped bordered hover>
          <HeaderFields />
            <Suspense fallback={<tr><td>Loading...</td></tr>}>
              <RowData />
            </Suspense>
        </Table>
      </div>
    </>
  )
}
const DataGrid = withTreble(Grid, { store: Store })
export default DataGrid;