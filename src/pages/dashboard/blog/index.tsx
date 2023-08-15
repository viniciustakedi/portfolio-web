import Loading from "@/components/loading";
import { getToken, isJwtValid } from "@/configs";
import { postsAtom } from "@/contexts/blog/posts";
import { isLoadingAtom } from "@/contexts/global";
import { IsUserAuthorized } from "@/contexts/users";
import { getPosts } from "@/services/get";
import { formatDate } from "@/utils";
import { translateBlogTags } from "@/utils/translate";
import { useAtom } from "jotai";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useQuery } from "react-query";
import { Post } from "@/contexts/blog/posts";

export default function ListPosts() {
  const [isUserAuthorized, setIsUserAuthorized] = useAtom(IsUserAuthorized);
  const [posts, setPosts] = useAtom(postsAtom);
  const router = useRouter();

  const { data, status, isLoading } = useQuery(['posts', posts], () => getPosts(posts));

  useEffect(() => {
    Promise.resolve().then(async () => {
      if (!await isJwtValid(getToken())) {
        router.push('/login');
        return;
      }

      setIsUserAuthorized(true);
    });
  }, [])

  if (!isUserAuthorized || isLoading) { return <Loading /> }

  return (
    <>
      <Head>
        <title> Dashboard Blog • Takedi</title>
        <meta
          name="description"
          content="Lista de postagens referente ao blog."
          key="desc"
        />
      </Head>
      <main className="main-default 2xs:p-2 md:p-6">
        <div className="table-container">
          <table className="table">
            <thead className="table-head">
              <tr>
                <th scope="col" className="table-head-th">
                  Nome do post
                </th>
                <th scope="col" className="table-head-th">
                  Categoria
                </th>
                <th scope="col" className="table-head-th">
                  Temp. de leitura
                </th>
                <th scope="col" className="table-head-th">
                  Criado em
                </th>
                <th scope="col" className="table-head-th">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {(
                data && data.map((post, index) => (
                  <tr className="table-body-tr" key={index}>
                    <th scope="row" className="table-body-th">
                      {post.title}
                    </th>
                    <td className="table-body-th">
                      {translateBlogTags(post.tags[0])}
                    </td>
                    <td className="table-body-th">
                      {post.timeToRead} min
                    </td>
                    <td className="table-body-th">
                      {formatDate(post.createdAt)}
                    </td>
                    <td className="table-body-th">
                      <Link href="/dashboard/blog/edit" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        Editar
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <Link className="new-post-button" href="/dashboard/blog/new">
            <AiOutlinePlus className="text-2xl text-dark-blue" />
          </Link>
        </div>
      </main>
    </>
  )
}