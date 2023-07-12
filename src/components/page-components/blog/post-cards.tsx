import { Post } from "@/contexts/blog/posts";
import { formatDate, formatPostDescription } from "@/utils";
import { translateBlogTags } from "@/utils/translate";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiFillCalendar, AiFillClockCircle } from "react-icons/ai";

interface PostCardsProps {
  posts: Post[];
}

const PostCards: React.FC<PostCardsProps> = ({ posts }) => {
  const router = useRouter();

  return (
    <div className="post-container">
      <div className="post-content">
        {(
          posts.map((post: Post) => {
            return (
              <div key={post.friendlyId} className="post-card" onClick={() => router.push(`/blog/post/${post.friendlyId}`)}>
                <div className="w-4/5 p-4">
                  <div className="h-3/4">
                    <h1 className="post-card-title ">{post.title}</h1>
                    <p className="post-card-description">{formatPostDescription(post.description)}</p>
                  </div>
                  <div className="post-card-content">
                    <div className="flex items-center">
                      <AiFillCalendar size={14} className="inline-block mr-1 text-dark-blue" />
                      <span className="text-sm text-gray-500">{formatDate(post.createdAt)}</span>
                    </div>
                    <p className="post-card-dot-1">•</p>
                    <div className="flex items-center">
                      <AiFillClockCircle size={14} className="mr-1 text-dark-blue hidden 2xs:flex" />
                      <span className="text-sm text-gray-500">{post.timeToRead} min.</span>
                    </div>
                    <p className="post-card-dot-2">•</p>
                    <span className="post-card-tag">
                      {translateBlogTags(post.tags[0])}
                    </span>
                  </div>
                </div>
                <div className=" w-2/5">
                  <Image src={post.thumbnail} alt={post.title} width={1000} height={1000} className="post-card-image" />
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default PostCards;