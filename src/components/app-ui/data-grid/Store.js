import { createStore, useScopedTreble, useTreble } from 'treble-gsm';

export const dataGridContext = useScopedTreble();

export const useDataGridTreble = () => useTreble(dataGridContext);

export const Store = createStore([
  {
    action: 'updateColumns',
    state: { columnsState: [] }
  },
  {
    action: 'updateRowData',
    state: { rowDataState: [] }
  },
  {
    action: 'loadingState',
    state: { loadingState: false }
  }
], { context: dataGridContext });