// core version + navigation, pagination modules:
import Swiper, { Navigation } from 'swiper'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Cards } from './Cards'

// configure Swiper to use modules
Swiper.use([Navigation, Pagination])

export class CardSwiper extends React.Component {
  render() {
    //init swiper
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'vertical',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })

    return (
      <div class='swiper'>

        {/* Required wrapper */}
        <div class='swiper-wrapper'>

          {/* Slides */}
          <div class='swiper-slide'>Slide 1</div>
          <div class='swiper-slide'>Slide 2</div>
          <div class='swiper-slide'>Slide 3</div>
        </div>

        {/* If we need navigation buttons */}
        <div class='swiper-button-prev'></div>
        <div class='swiper-button-next'></div>

        {/* If we need scrollbar */}

        <div class='swiper-scrollbar'></div>
      </div>
    )
  }
}
