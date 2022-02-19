import React from "react";
import blogData from "../data/blog";
import Header from "/Users/robertedmonds/Development/code/Mod2/React_Basics/react-hooks-component-props-mini-project/src/components/Header.js";
import About from "/Users/robertedmonds/Development/code/Mod2/React_Basics/react-hooks-component-props-mini-project/src/components/About.js";
import ArticleList from "/Users/robertedmonds/Development/code/Mod2/React_Basics/react-hooks-component-props-mini-project/src/components/ArticleList.js";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About  image={blogData.image} about={blogData.about}/>
      <ArticleList article={blogData.posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
