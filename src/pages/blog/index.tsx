import Loading from "@/components/loading";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Head from "next/head";
import { getPosts } from "@/services/get";
import { useQuery } from "react-query";
import { PostCards, PostCardsError } from "@/components/page-components/blog";

export default function Blog() {
  const { data, status, isLoading } = useQuery('posts', getPosts);

  if (isLoading) { return <Loading /> }

  return (
    <>
      <Head>
        <title>Blog • Takedi</title>
        <meta
          name="description"
          content="Olá! Esse é o meu blog pessoal, para fazer postagens sobre programação, 
            curiosidades e coisas que eu gosto, quem sabe um dia esse blog fique publico hehehe."
          key="desc"
        />
      </Head>
      <main className="main-default ">
        <Menu />
          {(
            status === 'success' && (
              <PostCards posts={data.data} />
            )
          )}
          {(
            status === 'error' && (
              <PostCardsError/>
            )
          )}
        <Footer />
      </main>
    </>
  )
}