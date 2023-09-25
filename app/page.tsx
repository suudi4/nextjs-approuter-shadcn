import Image from 'next/image'

export default function Home() {
  console.log(process.env.FB_ACCESSTOKEN)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1>This is a just a demo site for exploring how IVR response can be shared back with client using API

        
      </h1>
      
    </main>
  )
}
