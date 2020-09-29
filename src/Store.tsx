import { createStore } from "treble-gsm";
import { TrebleFetchStore } from "treble-fetch";
import { ReactRouterStore } from "react-router-treble";

export interface IStore {
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
        //call: (dispatchValue) => alert(dispatchValue),
        // check: (dispatchValue) => {
        //     if (dispatchValue === 'Apple') {
        //         return false
        //     }
        //     return true;
        // },
        process: (dispatchValue) => {
          let newDispatchValue = `${dispatchValue}es are amazing!`;
          let i = 0;
          // while(i < 10000){
          //     console.log('running test');
          //     i++;
          // }
          return newDispatchValue;
        },
        // callback: (dispatchValue) => alert(dispatchValue)
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
        keys: true,
      },
    },
    {
      action: "listTest2",
      state: {
        listTest2: [],
      },
    },
  ],
  {
    extendStore: [TrebleFetchStore, ReactRouterStore],
  }
);

export default Store;
