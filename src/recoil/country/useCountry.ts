import { useRecoilState } from 'recoil';

import countryAtom from './atom';
import { CountryType } from './types';

function useCountry() {
  const [country, setCountry] = useRecoilState(countryAtom);

  const addCountry = (type: CountryType, newCountry: string) => {
    setCountry({ ...country, [type]: [...country.bucketlist, newCountry] });
  };

  const deleteCountry = (type: CountryType, selectedCountry: string) => {
    const countries = country[type];
    const filteredCountries = countries.filter((country) => country !== selectedCountry);

    setCountry({ ...country, [type]: filteredCountries });
  };

  const moveCountry = (
    previousType: CountryType,
    nextType: CountryType,
    selectedCountry: string
  ) => {
    if (previousType === nextType) {
      throw new Error('The previous country group and the next country group cannot be the same.');
    }

    const previousCountryGroup = country[previousType];
    const nextCountryGroup = country[nextType];

    const filteredPreviousCountryGroup = previousCountryGroup.filter(
      (country) => country !== selectedCountry
    );
    const filteredNextCountryGroup = nextCountryGroup.filter(
      (country) => country !== selectedCountry
    );

    setCountry({
      ...country,
      [previousType]: filteredPreviousCountryGroup,
      [nextType]: [...filteredNextCountryGroup, selectedCountry],
    });
  };

  return { country, moveCountry, addCountry, deleteCountry };
}

export default useCountry;
