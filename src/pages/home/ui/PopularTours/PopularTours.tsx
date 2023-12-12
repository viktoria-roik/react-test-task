import { CardSlider } from '../CardSlider';
import './PopularTours.scss';

import { ReactComponent as LeftArrow } from '../../../../assets/icons/arrow-left.svg';
import { ReactComponent as RightArrow } from '../../../../assets/icons/arrow-right.svg';

export const PopularTours = () => {
  return (
    <section className="tours" id="tours">
      <div className="tours__container">
        <div className="tours__top">
          <h2 className="tours__title">popular tours</h2>

          <div className="tours__arrows">
            <div className="tours__arrow-left tours__arrows-icons">
              <LeftArrow className="tours__arrows-icons-arrow" />
            </div>

            <div className="tours__arrow-right tours__arrows-icons">
              <RightArrow className="tours__arrows-icons-arrow" />
            </div>
          </div>
        </div>
        <CardSlider
          leftArrowName="tours__arrow-left"
          rightArrowName="tours__arrow-right"
        />
      </div>
    </section>
  );
};
