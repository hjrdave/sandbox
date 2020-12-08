import { createStore, TrebleGSM, useTreble } from "treble-gsm";
import { TrebleFetchStore } from "treble-fetch";
import { ReactRouterStore } from "react-router-treble";
import TrebleListManager, { TrebleLM } from 'treble-list-manager';
import TreblePersist, { ITreblePersist } from 'treble-persist';
import { isDoStatement } from "typescript";
import { ITrebleCore } from "treble-gsm/lib/treble-core";

interface IState {
  list?: {
    level: number;
    title: string;
    lede: string;
  }[];
  listTest2?: [];
  apiData?: [];
  age?: number;
  sport?: string;
  fruit?: string;
  textColor?: boolean;
  trebleCoreData?: any;
  storeSideEffect?: null;
  car?: string;
}

interface IDispatchers extends TrebleLM.Dispatchers, ITreblePersist.Dispatchers, TrebleGSM.SubscribeAPI.Dispatchers { }

interface IActions {
  "updateTextColor": string;
  "updateCar": string;
  "updateFruit": string;
  "updateSport": string;
  "updateAge": string;
  "updateAPIData": string;
  "listTest2": string;
  "listTest": string;
  "runStoreSideEffect": string;
}
interface IFeatures<S> extends TrebleGSM.StoreFeatures<S>, ITreblePersist.StoreFeatures { };


const Store = createStore<IState, IFeatures<IState>>(
  [
    {
      action: "runStoreSideEffect",
      state: {
        storeSideEffect: null
      },
      features: {
        persist: false,
        process: (data) => {
          //data.storeItems[0].state.
          return data.dispatchValue
        }
      }
    },
    {
      action: "updateTextColor",
      state: {
        textColor: true,
      },
    },
    {
      action: "updateCar",
      state: {
        car: "bmw",
      },
    },
    {
      action: "updateFruit",
      state: {
        fruit: "apple",
      },
      features: {
        persist: false,
        process: (data) => {

          return data
        },

        // persist: true,
        // log: (data) => console.log(`logging... ${data.dispatchValue}`),
        // check: (data) => { console.log(`checking... ${data.dispatchValue}`); return true },
        // run: (data) => console.log(`running... ${data.dispatchValue}`),
        // process: (data) => { console.log(`Converted dispatch value ${data.dispatchValue} to ${data.dispatchValue} Pie`); return `${data.dispatchValue} Pie` },
        // callback: (data) => console.log(`callback... ${data.dispatchValue}`)
      },
    },

    {
      action: "updateSport",
      state: {
        sport: "baseball",
      }
    },
    {
      action: "updateAge",
      state: {
        age: 50,
      },
    },
    {
      action: "updateAPIData",
      state: {
        apiData: [],
      },
    },
    {
      action: "listTest",
      state: {
        list: [],
      },
      features: {
        persist: true,
        persistTimeout: 48,

      },
    },
    {
      action: "listTest2",
      state: {
        listTest2: [],
      },
    }
  ],
  {
    extendStore: [TrebleFetchStore, ReactRouterStore],
    modules: [
      TrebleListManager,
      TreblePersist
    ]
  }
);


export const useStore = () => useTreble<IState, IDispatchers, IActions>();

export default Store;


