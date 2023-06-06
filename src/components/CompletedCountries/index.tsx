import useCountry from 'recoil/country/useCountry';

function CompletedCountries() {
  const {
    country: { completed: completedCountries },
    moveCountry,
  } = useCountry();

  const handleClickLikeButton = (country: string) => {
    moveCountry('completed', 'liked', country);
  };

  const handleClickDeleteButton = (country: string) => {
    moveCountry('completed', 'bucketlist', country);
  };

  return (
    <section>
      <h2>내가 가본 나라들</h2>
      <ul>
        {completedCountries.map((country) => (
          <li key={country}>
            <span>{country}</span>
            <button onClick={() => handleClickLikeButton(country)}>👍</button>
            <button onClick={() => handleClickDeleteButton(country)}>❌</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CompletedCountries;
