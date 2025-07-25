import type { BaseComponent } from '@/shared/types/common-types.ts'
import type { FC } from 'react'
import { carouselData } from './constructor'
import { Carousel, Flex, Grid } from 'antd'
import { useMemo } from 'react'
import { AppTitle } from '@/shared/components/ui/AppTitle/AppTitle.tsx'
import { CarouselCard } from '@/shared/components/ui/CarouselCard/CarouselCard'
import './MainPageCarousel.scss'

interface IDataProps {
  id: number
  title: string
  image: string
}

interface Props extends BaseComponent {}

const { useBreakpoint } = Grid

export const MainPageCarousel: FC<Props> = ({ testId = 'main-page-carousel' }) => {
  const screens = useBreakpoint()

  const cardsPerSlide: number = useMemo(() => {
    if (!screens.sm)
      return 1
    if (!screens.md)
      return 2
    return 4
  }, [screens])

  const chunkArray = (array: IDataProps[], size: number): Array<{ id: number, chunk: IDataProps[] }> => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => ({
      id: i,
      chunk: array.slice(i * size, i * size + size),
    }))
  }

  const slides = chunkArray(carouselData, cardsPerSlide)

  return (
    <Flex vertical gap="large" data-testid={testId} style={{margin: "40px 0"}}>
      <AppTitle level={3}>CHOOSE YOUR STYLE</AppTitle>
      <Carousel autoplay draggable style={{ width: '100%' }} className='main-carousel'>
        {slides.map(slide => (
          <div key={slide.id}>
            <Flex gap="large" justify={screens.xs ? 'center' : 'space-between'}>
              {slide.chunk.map(card => (
                <CarouselCard key={card.id} title={card.title} image={card.image} />
              ))}
            </Flex>
          </div>
        ))}
      </Carousel>
    </Flex>
  )
}