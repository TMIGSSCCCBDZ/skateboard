import {create} from 'zustand'

interface ModalStore {
    wheelTexture: string,
    deckTexture: string,
    boltColor: string,
    truckColor: string,
    setWheelTexture: (wheelTexture: string) => void,
    setDeckTexture: (deckTexture: string) => void,
    setTruckColor: (truckColor: string) => void,
    setBoltColor: (boltColor:string) => void,
}

export const useStore = create<ModalStore>( (set,get) => ({
    wheelTexture:'/wheel-red.png',
    deckTexture:'red-black-complete.png',
    boltColor:'black',
    truckColor:'black',
    setWheelTexture: (wheelTexture) => {
        if (get().wheelTexture !== '') {
            set({wheelTexture:''})
        }
        set({wheelTexture})
    },
      setDeckTexture: (deckTexture) => {
        if (get().deckTexture !== '') {
            set({deckTexture:''})
        }
        set({deckTexture})
    }
,
  setBoltColor: (boltColor) => {
        if (get().boltColor !== '') {
            set({boltColor:''})
        }
        set({boltColor})
    },
      setTruckColor: (truckColor) => {
        if (get().truckColor !== '') {
            set({truckColor:''})
        }
        set({truckColor})
    }
}))