// import React from 'react'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[20rem] md:h-[29rem] flex items-center justify-center">
      <img
        className="w-full h-full object-fill"
        loading="lazy"
        src="https://images.unsplash.com/photo-1485368647436-ff0fb9990605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRhbGwlMjBnbGFzcyUyMGJ1aWxkaW5nfGVufDB8fDB8fHww" alt="Background"
      />
      <div className="absolute w-full h-full bg-[#0000005f]">
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 pt-9 md:pt-[3rem] px-4">
          <h1 className="text-4xl md:text-4xl lg:text-6xl text-white font-bold font-sans max-w-[38rem] text-center">Moritz & Associates Law Firm</h1>

          <p className="text-lg md:text-2xl text-white">Your Truted Partner in Legal Matters</p>
          
          <button className="mt-[2rem] text-black bg-white hover:bg-gray-100 hover:text-black transform duration-[0.5s] w-full md:w-[16rem] py-2 rounded-lg font-serif text-lg">
            Free Case Evaluation
          </button>

        </div>
      </div>
    </section>
  )
}
