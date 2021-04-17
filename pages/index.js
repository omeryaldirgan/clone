import Head from 'next/head'
import { signIn, signOut, useSession } from 'next-auth/client'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen"
         style={{
            'background-image':
               'linear-gradient(rgb(0 0 0 / 60%), rgb(0 0 0 / 60%)), url(/hero.jpeg)',
         }}
    >
      <Head>
        <title>Netflix Clone App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
         <h1 className="text-5xl font-bold text-white my-4 max-w-lg">Unlimited movies, TV shows, and more.</h1>
         <h6 className='text-2xl text-white mt-4 mb-8'>Watch anywhere. Cancel anytime.</h6>
         <p className='text-white'>
            Ready to watch? Enter your email to create or restart your membership.
         </p>

         <div className='flex mt-4'>
           <input placeholder='E-mail adress' className='bg-white p-4  min-w-[400px]'/>
           <button className='bg-[#e50914] text-white text-xl px-4 py-4 flex items-center'>Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
           </button>
         </div>
      </main>

    </div>
  )
}
