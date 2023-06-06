import { CountryForm, BucketlistCountries, CompletedCountries, LikedCountries } from 'components';

function App() {
  return (
    <main>
      <section>
        <CountryForm />
        <BucketlistCountries />
        <CompletedCountries />
        <LikedCountries />
      </section>
    </main>
  );
}

export default App;
