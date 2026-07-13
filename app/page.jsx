import Photo from '@/components/Photo'
import Social from '@/components/Social'
import Stats from '@/components/Stats'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

export default function Home() {
  return (
    <section className='h-full'>
      <div className='max-w-7xl mx-auto h-full mt-18 md:mt-20 xl:mt-10 lg:mt-0'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-0'>
            <span className='text-xl'>Web Developer</span>
            <h1 className='h1 mt-6 xl:mt-3 mb-6'>
              Hello {"I'm"} <br />
              <span className='text-accent'> Fayzur Rahman</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80 px-6 md:px-0 lg:px-0 xl:px-0'>
              Experienced Web Developer Focused on Responsive Design, High
              Performance, Creative User Experiences, Modern UI/UX Solutions,
              and Building Fast for Clients Worldwide.
            </p>
            {/* button and social */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center py-3  gap-2 cursor-pointer'
              >
                <span>Download CV</span>
                <FiDownload className='text-xl ' />
              </Button>
              {/* social */}
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyle={'flex items-center gap-6'}
                  iconStyle={
                    'w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition duration-500'
                  }
                />
              </div>
            </div>
          </div>

          {/* poto */}
          <div className='order-1 xl:order-0 xl:mb-0 mb-10'>
            <Photo />
          </div>
        </div>
        <Stats />
      </div>
    </section>
  )
}
