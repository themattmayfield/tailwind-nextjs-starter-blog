import siteMetadata from '@/data/siteMetadata'
import { PageSeo } from '@/components/SEO'
import _ from 'lodash';

const reading = [{
  id: 0,
  title: 'Some title',
  author: 'Some authot',
  link: '',
  isRead: false,
  type: 'reading'
},{
  id: 1,
  title: 'Some title',
  author: 'Some authot',
  link: '',
  isRead: false,
  type: 'read'
},{
  id: 1,
  title: 'Some title',
  author: 'Some authot',
  link: '',
  isRead: true,
  type: 'upcoming'
}]

export default function Projects() {
  return (
    <>
      <PageSeo
        title={`Read - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/read`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Read
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Read the books I've been reading! Guaranteed bangers!
          </p>
        </div>
        {_.filter(reading, {type: 'reading'}).length && <div className="container py-12">
          <div>
            <p className="text-2xl font-bold leading-8 tracking-tight">Currently Reading</p>
          </div>
          <div className="">
            {_.filter(reading, {type: 'reading'}).map((item) => (
              <div key={item.id}>
                <a href={item.link} className={`mb-12 cursor-pointer`}>{item.title} by {item.author}</a>
                </div>
            ))}
          </div>
        </div>}
        {_.filter(reading, {type: 'upcoming'}).length > 0 && <div className="container py-12">
          <div>
            <p className="text-2xl font-bold leading-8 tracking-tight">Upcoming Reads</p>
          </div>
          <div className="">
            {_.filter(reading, {type: 'upcoming'}).map((item) => (
              <div key={item.id}>
                <a href={item.link} className={`mb-12 cursor-pointer`}>{item.title} by {item.author}</a>
                </div>
            ))}
          </div>
        </div>}
        {_.filter(reading, {type: 'read'}).length > 0 && <div className="container py-12">
          <div>
            <p className="text-2xl font-bold leading-8 tracking-tight">Finished Reading</p>
          </div>
          <div className="">
            {_.filter(reading, {type: 'read'}).map((item) => (
              <div key={item.id}>
                <a href={item.link} className={`mb-12 cursor-pointer`}>{item.title} by {item.author}</a>
                </div>
            ))}
          </div>
        </div>}
      </div>
    </>
  )
}
