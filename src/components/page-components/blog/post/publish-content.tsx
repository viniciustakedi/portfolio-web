import { Post } from "@/contexts/blog/posts";
import { likePost } from "@/services/post";
import { formatDate } from "@/utils";
import { translateBlogTags } from "@/utils/translate";
import parse from 'html-react-parser';
import Image from "next/image";
import { enqueueSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { AiFillCalendar, AiFillClockCircle, AiOutlineHeart } from "react-icons/ai";

interface PublishProps {
  data: Post;
  id: string;
}

const Publish:React.FC<PublishProps> = ({id, data}) => {
  const [lockButton, setLockButton] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);
  
  useEffect(() => {
    if (data) {
      setLikes(data.likes);
    }
  }, [data])
  
  const handleLikePost = async () => {
    if (lockButton) { return; }

    const likeResponse = await likePost(id as string);
    
    if (likeResponse.statusCode === 200) {
      setLikes(state => state + 1);
      setLockButton(true);
      enqueueSnackbar('Publicação curtida com sucesso!', { variant: 'success' });
    } else {
      enqueueSnackbar('Erro ao curtir publicação!', { variant: 'error' });
    }
  }

  return (
    <div className="publish-container">
      <div className="publish-content publish-content-data">
        <h1 className='publish-title'>
          {data.title}
        </h1>
        <div className="publish-some-details">
          <hr className="publish-line" />
          <div className="publish-details-flex">
            <div className="flex items-center">
              <AiOutlineHeart size={16} className="mr-1 text-dark-blue cursor-pointer" onClick={handleLikePost} />
              <span className="text-sm text-gray-500">{likes}</span>
            </div>
            <div className="post-card-content">
              <div className="flex items-center">
                <AiFillCalendar size={14} className="inline-block mr-1 text-dark-blue" />
                <span className="text-sm text-gray-500">{formatDate(data.createdAt)}</span>
              </div>
              <p className="post-card-dot-1">•</p>
              <div className="flex items-center">
                <AiFillClockCircle size={14} className="mr-1 text-dark-blue hidden 2xs:flex" />
                <span className="text-sm text-gray-500">{data.timeToRead} min.</span>
              </div>
            </div>
          </div>
          <hr className="publish-line" />
        </div>
        <Image src={data.thumbnail} alt={data.title} className="publish-image" width={1000} height={1000} />
        <div className="ql-tags-container text-black text-lg mt-4 w-full">
          {parse(data.content)}
        </div>
        <div className="w-full">
          <hr className="publish-line" />
          {(
            data.tags.length > 0 && (
              <div className="my-4 w-full">
                {data.tags.map((tag, index) => (
                  <span className="publish-tag mx-1" key={index}>
                    {translateBlogTags(tag)}
                  </span>
                ))}
              </div>
            )
          )}
          <hr className="publish-line" />
        </div>
        <div className="publish-details-flex">
          <div className="flex items-center">
            <AiOutlineHeart size={16} className="mr-1 text-dark-blue cursor-pointer" onClick={handleLikePost} />
            <span className="text-sm text-gray-500">{likes}</span>
          </div>
          <div className="post-card-content">
            <div className="flex items-center">
              <AiFillCalendar size={14} className="inline-block mr-1 text-dark-blue" />
              <span className="text-sm text-gray-500">{formatDate(data.createdAt)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publish;