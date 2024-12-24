import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import "./index.css";

const AutoScrollCarousel = (props) => {

  const { slides, options } = props

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, align: 'center' })
  ])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll

    if (!autoScroll) return

    autoScroll.play()
  }, [])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item) => (
            <div className="embla__slide" key={item.key}>
              <div className="embla__slide__number">
                <img src={item.image}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default AutoScrollCarousel;
