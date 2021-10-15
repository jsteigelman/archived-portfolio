import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from './Cards.js'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './CardSwiper.css'


// import Swiper core and required modules
import SwiperCore, { EffectFlip, Pagination, Navigation } from 'swiper'

// install Swiper modules
SwiperCore.use([EffectFlip, Pagination, Navigation])

export class CardSwiper extends React.Component {
  render() {
    return (
      <>
        <Swiper
          // effect={'flip'}
          // grabCursor={true}
          pagination={true}
          navigation={true}
          slidesPerView={1}
          spaceBetween={50}
          // width={300}
          className="swiper mySwiper"
        >
          <SwiperSlide className='swiper-slide'>
            <Card title='programming' />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <Card title='technologies' />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <Card title='certifications' />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
          <Card title='experience' />
        </SwiperSlide>
        </Swiper>
      </>
    )
  }
}
