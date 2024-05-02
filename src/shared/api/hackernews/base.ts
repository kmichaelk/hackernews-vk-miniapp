import { initializeApp } from 'firebase/app';
import { HN_API_BASE_URL, HN_API_VERSION } from '@/shared/config';
import { getDatabase, ref } from 'firebase/database';

const firebaseApp = initializeApp({
  databaseURL: HN_API_BASE_URL,
});

const dbRoot = getDatabase(firebaseApp);
export const db = ref(dbRoot, HN_API_VERSION);
