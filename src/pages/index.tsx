import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
        <main>
          <h1 className="font-mono text-xl code">
            Welcome to <span className="text-purple-700">Nextjs</span>, <span className="text-indigo-700">TailwindCSS</span> and <span className="text-gray-700">TypeScript</span>
          </h1>
        </main>
      </div>
    </>
  )
}
