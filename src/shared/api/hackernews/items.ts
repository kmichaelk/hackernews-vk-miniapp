import { db as dbRoot } from './base';
import { Item } from './models';
import { child, get, onValue } from 'firebase/database';

const db = child(dbRoot, 'item/');

export const fetch = async <T extends Item>(id: number): Promise<T> => {
  const itemRef = child(db, `${id}`);

  const snapshot = await get(itemRef);
  return snapshot.val();
};

export const fetchAll = <T extends Item>(ids: number[]): Promise<T[]> => Promise.all(ids.map((id) => fetch<T>(id)));

export const subscribe = <T extends Item>(id: number, handler: (item: T) => void) =>
  onValue(child(db, `${id}`), (snapshot) => handler(snapshot.val() as T));
