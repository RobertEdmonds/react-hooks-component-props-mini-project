import React from "react";
import Article from "/Users/robertedmonds/Development/code/Mod2/React_Basics/react-hooks-component-props-mini-project/src/components/Article.js";

function ArticleList({article}){
    const articleArray = article.map((prop)=>{
       return(<main>
            <Article key={prop.id} title={prop.title} date={prop.date} preview={prop.preview} minute={prop.minutes}/>
           </main>)
    })
    return(
        <>
            {articleArray}
        </>
    )
}
export default ArticleList;