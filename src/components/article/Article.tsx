import React from 'react';
import cs from '../../common/styles/CommonStyles.module.css'
import {useParams} from "react-router-dom";
import {posts} from "../../data/Posts";
import s from './Article.module.css'

export const Article = () => {

  const {slug} = useParams()

  const post = posts.find(post => post.slug === slug)

  console.log(Boolean(post))

  return (
    <div className={cs.mainContainer}>
      {
        post ?
          <div className={s.postContainer}>
            <h2>{post.title}</h2>
            <p><strong>author:</strong> {post.author}</p>
            <p>{post.date}</p>
            <p>{post.content}</p>
          </div> :
          'The post does not exist'

      }
    </div>
  );
}