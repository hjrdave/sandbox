import { createStore, TrebleGSM, useTreble } from "treble-gsm";
import { TrebleFetchStore } from "treble-fetch";
import { ReactRouterStore } from "react-router-treble";
import TrebleListManager, { TrebleLM } from 'treble-list-manager';
import TreblePersist, { ITreblePersist } from 'treble-persist';
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
  darkMode?: boolean;
}

interface IDispatchers extends TrebleLM.Dispatchers, ITreblePersist.Dispatchers, TrebleGSM.Dispatchers { }

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
  'toggleDarkMode': string;
}
interface IFeatures extends TrebleGSM.StoreFeatures<IState, IDispatchers, IFeatures>, ITreblePersist.StoreFeatures { };

interface IMiddlewareData extends TrebleGSM.MiddlewareData<IState, IDispatchers, IFeatures> { };

interface IReducerActions extends ITrebleCore.ReducerActions { };

interface IUtilities extends TrebleGSM.Utilities<IActions, IReducerActions> { }

const Store = createStore<IState, IFeatures>(
  [
    {
      action: "runStoreSideEffect",
      state: {
        storeSideEffect: null
      },
      features: {
        //persist: false,
        run: () => console.log('Running...')
        //process: (data) => data.dispatchValue
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
        run: (data) => console.log(data.dispatchValue)
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
        //persist: true,
        //persistTimeout: 48,

      },
    },
    {
      action: "listTest2",
      state: {
        listTest2: [],
      },
    },
    {
      action: 'toggleDarkMode',
      state: {
        darkMode: false
      }
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


export const useStore = () => useTreble<IState, IDispatchers, IUtilities>();

export default Store;


