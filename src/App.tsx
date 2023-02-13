import React from 'react';
import './App.css';
import {Navbar} from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {PATH} from "./constants/routePaths.enum";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Main} from "./components/main/Main";
import {Blog} from "./components/blog/Blog";
import {Article} from "./components/article/Article";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path={'/'} element={<Main/>}/>
          <Route path={PATH.ABOUT_ME} element={<AboutMe/>}/>
          <Route path={PATH.BLOG} element={<Blog/>}/>
          <Route path={PATH.BLOG} element={<Article/>}>
            <Route path={PATH.ARTICLE_SLUG} element={<Article/>}/>
            </Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;
