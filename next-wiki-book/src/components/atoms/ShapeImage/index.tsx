import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

type ImageShape = 'circle' | 'square'
type ShapeImageProps = ImageProps & { shape?: ImageShape }

// circle이면 원형으로
const ImageWithShape = styled(Image)<{ shape?: ImageShape }>`
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '0')};
`

/**
 * Shape Image
 */
const ShapeImage = (props: ShapeImageProps) => {
  const { shape, ...imageProps } = props
  return <ImageWithShape shape={shape} {...imageProps} />
}

export default ShapeImage
