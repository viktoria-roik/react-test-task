import { MainSlider } from 'components/MainSlider';
import './HomePage.scss';
import { PopularTours } from './ui/PopularTours';

export const HomePage = () => {
  return (
    <>
      <MainSlider />
      <PopularTours />
    </>
  );
};
