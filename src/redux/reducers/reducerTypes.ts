import { JWKInterface } from 'arweave/web/lib/wallet';

export interface ITodo {
  id: number;
  title: string;
  name: string;
  completed: boolean;
}

//export interface IWallet <- single object already defined by JWKInterface

export interface IPsnapPhoto {
	dataUri: string //full pic data here
  exif?: any
  description?: string
  tags?: string[]
} 

// this is the interface for use in useSelector
export interface IStoreState {
  todos: ITodo[];
  wallet: JWKInterface | {}; // remove these nulls later
  currentPhoto: IPsnapPhoto //only 1 of these
}

