import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '61ddc900513ca8ba00b5fbcf6a8a9889',
    lat: '-34.427811',
    lon: '150.893066',
    lang: 'en',
    unit: 'metric', 
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Wollongong"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};
export default Weather;