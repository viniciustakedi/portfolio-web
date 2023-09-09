import Footer from "@/components/footer";
import Menu from "@/components/menu";
import Head from "next/head";
import { getPosts } from "@/services/get";
import { useQuery } from "react-query";
import { PostCards, PostCardsError } from "@/components/page-components/blog";
import { Post, postsAtom } from "@/contexts/blog/posts";
import { useAtom } from "jotai";
import BlogPostSkeleton from "@/components/loadings/skeletons/blog-post";

export default function Blog() {
  const { data, status, isLoading } = useQuery("posts", () => getPosts());
  const [_, setPosts] = useAtom(postsAtom);

  if (status === "success" && data.length > 0) {
    setPosts(data);
  }

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
      <main className="main-default">
        <Menu />
        {isLoading ? (
          <div className="post-container">
            <div className="post-content">
              <BlogPostSkeleton />
            </div>
          </div>
        ) : (
          <>
            {status === "success" && <PostCards posts={data as Post[]} />}
            {status === "error" && <PostCardsError />}
          </>
        )}
        <Footer />
      </main>
    </>
  );
}
