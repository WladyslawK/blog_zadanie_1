import React from 'react';
import cs from '../../common/styles/CommonStyles.module.css'
import {posts} from "../../data/Posts";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../constants/routePaths.enum";
import s from './Blog.module.css'

export const Blog = () => {

  const navigate = useNavigate()

  const openArticleHandler = (slug: string) => {
    navigate(`${PATH.BLOG}/${slug}`)
  }


  const postsList = posts.map(post => <li key={post.slug} className={s.listItems} onClick={() => openArticleHandler(post.slug)}>{post.title}</li>)


  return (
    <div className={cs.mainContainer}>
      <h1>Blog</h1>
      <h3>List of posts: </h3>
      <ul className={s.list}>
        {
          postsList
        }
      </ul>

    </div>
  );
}