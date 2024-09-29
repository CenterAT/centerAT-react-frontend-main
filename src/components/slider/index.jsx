import React, { useRef } from 'react'
// useCallback,
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { NewsItem } from '../news-item';
import NewsImageOne from "../../img/news-image-1.png"
import NewsImageTwo from "../../img/news-image-2.png"
import NewsImageThree from "../../img/news-image-3.png"

export const Slider = () => {
    const sliderRef = useRef(null);

  // const handlePrev = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slidePrev();
  // }, []);

  // const handleNext = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slideNext();
  // }, []);

  return (
    <Swiper
    ref={sliderRef}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <NewsItem 
            key={ 'Новая технология SLM' } 
            image={ NewsImageOne } 
            title={ 'Новая технология SLM' } 
            text={ 'Компания XYZ представила новую технологию SLM (Selective Laser Melting), которая улучшает производительность и точность в 3D-печати металлов. SLM позволяет создавать сложные металлические детали.' } 
            date={ 'от 21.03.2024' } /></SwiperSlide>
      <SwiperSlide>
        <NewsItem 
            key={ 'Новая технология SLM' } 
            image={ NewsImageTwo } 
            title={ 'Новая технология SLM' } 
            text={ 'Компания XYZ представила новую технологию SLM (Selective Laser Melting), которая улучшает производительность и точность в 3D-печати металлов. SLM позволяет создавать сложные металлические детали.' } 
            date={ 'от 21.03.2024' } /></SwiperSlide>
      <SwiperSlide>
        <NewsItem 
            key={ 'Новая технология SLM' } 
            image={ NewsImageThree } 
            title={ 'Новая технология SLM' } 
            text={ 'Компания XYZ представила новую технологию SLM (Selective Laser Melting), которая улучшает производительность и точность в 3D-печати металлов. SLM позволяет создавать сложные металлические детали.' } 
            date={ 'от 21.03.2024' } /></SwiperSlide>
      {/* <SwiperSlide>
        <NewsItem 
            key={ 'Новая технология SLM' } 
            image={ NewsImageTwo } 
            title={ 'Новая технология SLM' } 
            text={ 'Компания XYZ представила новую технологию SLM (Selective Laser Melting), которая улучшает производительность и точность в 3D-печати металлов. SLM позволяет создавать сложные металлические детали.' } 
            date={ 'от 21.03.2024' } />
      </SwiperSlide> */}
      {/* <div className='p-5 flex flex-row justify-around items-center'>
        <div className='w-5 h-5 rounded bg-mainBlue cursor-pointer' onClick={handlePrev} />
        <div className='w-5 h-5 rounded bg-mainBlue cursor-pointer' onClick={handleNext} />
      </div> */}
    </Swiper>
  )
}
