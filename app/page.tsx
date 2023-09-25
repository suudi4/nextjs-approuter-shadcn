import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>This is a just a demo site for exploring how IVR response can be shared back with client using API

        {process.env.fb_accesstoken}
      </h1>
      
    </main>
  )
}
