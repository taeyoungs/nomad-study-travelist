import useCountry from 'recoil/country/useCountry';

function LikedCountries() {
  const {
    country: { liked: likedCountries },
    moveCountry,
  } = useCountry();

  const handleClickDislikeButton = (country: string) => {
    moveCountry('liked', 'completed', country);
  };

  return (
    <section>
      <h2>내가 좋아하는 나라들</h2>
      <ul>
        {likedCountries.map((country) => (
          <li key={country}>
            <span>{country}</span>
            <button onClick={() => handleClickDislikeButton(country)}>👎</button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LikedCountries;
