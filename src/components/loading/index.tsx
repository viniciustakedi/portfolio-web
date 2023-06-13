import { Player } from "@lottiefiles/react-lottie-player";
import Head from "next/head";
import LoadingLottieFile from '@/assets/lottie-files/loading.json'

export default function Loading() {
  return (
    <>
      <Head>
        <title>Carregando • Takedi</title>
        <meta
          name="description"
          content="Carregando.."
          key="desc"
        />
      </Head>
      <main className="min-h-screen bg-gradient-to-r from-dark-black to-dark-blue">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex w-full justify-center items-center">
            <Player
              src={LoadingLottieFile}
              autoplay
              loop
            />
          </div>
        </div>
      </main>
    </>
  )
}