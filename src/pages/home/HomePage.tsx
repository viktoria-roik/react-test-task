import { MainSlider } from 'components/MainSlider';
import './HomePage.scss';
import { PopularTours } from './ui';
import { ToursCard } from 'components/ToursCard';

export const HomePage = () => {
  return (
    <>
      <MainSlider />
      <PopularTours />
      <ToursCard />
    </>
  );
};
