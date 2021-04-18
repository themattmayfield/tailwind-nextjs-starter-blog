import Image from 'next/image'
import CustomLink from './Link'
import WorkoutCard from './WorkoutCard'

const MDXComponents = {
  WorkoutCard,
  Image,
  a: CustomLink,
}

export default MDXComponents
