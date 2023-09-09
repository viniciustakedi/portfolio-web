import Loading from "@/components/loadings";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Head from "next/head";
import { Publish, PublishContentError } from "@/components/page-components/blog";
import { getPostById } from "@/services/get";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export default function Post() {
  const router = useRouter()
  const { id } = router.query
  
  const { data, status, isLoading } = useQuery(['post', id], () => getPostById(id as string));

  if (isLoading) { return <Loading /> }

  return (
    <>
      <Head>
        <title>{data?.data ? data.data.title : "Post não existente"} • Takedi</title>
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
            <Publish id={id as string} data={data.data} />
          )
        )}
        {(
          status === 'error' && (
            <PublishContentError />
          )
        )}
        <Footer />
      </main>
    </>
  );
}