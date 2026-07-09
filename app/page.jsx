export default function Home() {
  return (
    <section className='h-full'>
      <div className='max-w-7xl mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left'>
            <span>Web Developer</span>
            <h1 className='h1'>
              Hello {"I'm"} <br />
              <span> Fayzur Rahman</span>
            </h1>
          </div>

          {/* poto */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}
