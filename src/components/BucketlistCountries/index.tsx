import useCountry from 'recoil/country/useCountry';

function BucketlistCountries() {
  const {
    country: { bucketlist: bucketlistCountries },
    moveCountry,
    deleteCountry,
  } = useCountry();

  const handleClickCheckButton = (country: string) => {
    moveCountry('bucketlist', 'completed', country);
  };

  const handleClickDeleteButton = (country: string) => {
    deleteCountry('bucketlist', country);
  };

  return (
    <ul>
      {bucketlistCountries.map((country) => (
        <li key={country}>
          <span>{country}</span>
          <button onClick={() => handleClickCheckButton(country)}>✅</button>
          <button onClick={() => handleClickDeleteButton(country)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
}

export default BucketlistCountries;
