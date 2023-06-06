import { SubmitHandler, useForm } from 'react-hook-form';

import useCountry from 'recoil/country/useCountry';

interface CountryFormValue {
  countryName: string;
}

function CountryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CountryFormValue>({ defaultValues: { countryName: '' } });
  const { addCountry } = useCountry();

  const onSubmit: SubmitHandler<CountryFormValue> = ({ countryName }) => {
    addCountry('bucketlist', countryName);

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>내가 가고싶은 나라들</h1>
      <input {...register('countryName', { required: true })} placeholder="이름" defaultValue="" />
      <div>{errors.countryName && <span>😫 Required!</span>}</div>
      <button>가자!</button>
    </form>
  );
}

export default CountryForm;
