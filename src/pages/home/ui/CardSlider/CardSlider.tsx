import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery, gql } from '@apollo/client';
import './CardSlider.scss';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ToursCard } from 'components/ToursCard';

import 'swiper/css';
import 'swiper/css/navigation';
import './CardSlider.scss';
import { Rocket } from 'types/rocket';

const ROCKETS_QUERY = gql`
  query ExampleQuery {
    rockets {
      id
      description
      name
    }
  }
`;

type Props = {
  leftArrowName: string;
  rightArrowName: string;
};

export const CardSlider: React.FC<Props> = ({
  leftArrowName,
  rightArrowName,
}) => {
  const { loading, error, data } = useQuery(ROCKETS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Swiper
      className="swiper-cards"
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
      speed={800}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      navigation={{
        prevEl: `.${leftArrowName}`,
        nextEl: `.${rightArrowName}`,
      }}
      loop
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        880: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      pagination={{
        clickable: true,
        bulletClass: 'card-slider__bullet',
      }}
    >
      {data.rockets.map((rocket: Rocket, index: number) => (
        <SwiperSlide className="swiper-cards-slide" key={rocket.id}>
          <ToursCard rocket={rocket} cardIndex={index + 1} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
