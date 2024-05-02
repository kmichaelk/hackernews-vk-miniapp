import { db } from './base';
import { StoriesList } from './models';
import { DatabaseReference, child, get, onValue, query, limitToFirst } from 'firebase/database';

const listRefs: Record<StoriesList, DatabaseReference> = {
  [StoriesList.New]: child(db, 'newstories'),
  [StoriesList.Top]: child(db, 'topstories'),
  [StoriesList.Best]: child(db, 'beststories'),
};

export const fetch = async (list: StoriesList, limit: number = 100): Promise<number[]> =>
  (await get(query(listRefs[list], limitToFirst(limit)))).val();

export const subscribe = (list: StoriesList, handler: (stories: number[]) => void, limit: number = 100) =>
  onValue(query(listRefs[list], limitToFirst(limit)), (snapshot) => handler(snapshot.val() as number[]));
