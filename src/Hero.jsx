import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-2xl py-32 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">Data to enrich your online business</h1>
        <p className="mt-4 text-lg text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
        <div className="mt-8 flex items-center justify-center gap-x-6">
          <a href="#" className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400">Get started</a>
          <a href="#" className="text-sm font-semibold text-white">Learn more →</a>
        </div>
      </div>
    </section>
  )
}

export default Hero