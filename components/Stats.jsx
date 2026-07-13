'use client'

import CountUp from 'react-countup'

const stats = [
  {
    number: 12,
    text: 'Years of experience',
  },
  {
    number: 26,
    text: 'Project conpleted',
  },
  {
    number: 8,
    text: 'Technologies mastered',
  },
  {
    number: 500,
    text: 'Code commits',
  },
]

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8'>
        {stats.map((item, idx) => (
          <div
            key={idx}
            className='flex items-center gap-4 justify-center lg:justify-start'
          >
            <CountUp
              end={item.number}
              duration={3}
              className='text-4xl xl:text-6xl font-extrabold'
            />
            <p
              className={`leading-snug text-white/80 ${
                item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
