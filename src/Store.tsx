import { createStore, TUseTreble, IMiddlewareData } from "treble-gsm";
import { TrebleFetchStore } from "treble-fetch";
import { ReactRouterStore } from "react-router-treble";

export interface IState {
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
}

export interface IActions {
  "updateTextColor": string;
  "updateCar": string;
  "updateFruit": string;
  "updateSport": string;
  "updateAge": string;
  "updateAPIData": string;
  "listTest2": string;
  "listTest": string;
}

const Store = createStore(
  [
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
        call: (subscribeData: IMiddlewareData<IState>) => console.log(subscribeData),
        // check: (subscribeData) => {
        //   console.log(subscribeData)
        //   return true;
        // },
        // process: (subscribeData) => {
        //   let newDispatchValue = `${subscribeData.dispatchValue}es are amazing!`;
        //   console.log(subscribeData)
        //   let i = 0;
        //   return newDispatchValue;
        // },
        // callback: (subscribeData) => console.log(subscribeData)
      },
    },

    {
      action: "updateSport",
      state: {
        sport: "baseball",
      },
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
        list: [
          {
            level: 67,
            title: "Tom Hook",
            lede: "Hook me a FooFish",
          },
        ],
      },
      features: {
        // call: (subscribeData) => console.log(subscribeData)
        // call: (subscribeData) => {
        //   console.log(subscribeData);
        //   subscribeData.subscribeAPI.update('listTest2', [
        //     {
        //       level: 234234,
        //       title: 'It works!!',
        //       lede: 'Yo Bro Mo So Fo'
        //     }
        //   ])
        // },
      },
    },
    {
      action: "listTest2",
      state: {
        listTest2: [],
      },
    },
    // {
    //   action: "addSubcribeAPIToMiddleware",
    //   state: {
    //     TrebleSubscribeAPI: null
    //   },
    // },
  ],
  {
    extendStore: [TrebleFetchStore, ReactRouterStore],
  }
);

export type TStore = TUseTreble<IState, IActions>

export default Store;
