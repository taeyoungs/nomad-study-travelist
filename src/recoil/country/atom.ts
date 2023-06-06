import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { Country } from './types';

const { persistAtom } = recoilPersist();

const COUNTRY_ATOM_KEY = 'country';

const countryAtom = atom<Country>({
  key: COUNTRY_ATOM_KEY,
  default: {
    bucketlist: [],
    completed: [],
    liked: [],
  },
  effects_UNSTABLE: [persistAtom],
});

export default countryAtom;
