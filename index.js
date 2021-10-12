const search = document.querySelector(".searchbox");
const articles = document.querySelectorAll(".article");


const searchKeyword = (list, keyword) => {
  list.forEach(article => {
    //Turn Element into String
    const elementHTML = article.outerHTML;
    //Create new regexp for case insensitivity
    const keywordRE = new RegExp(keyword, "i");
    if(elementHTML.match(keywordRE)){
      if(article.querySelector("h1") && article.querySelector("h1").innerHTML.match(keywordRE)){
        //If above is true then this search will include the main title else it should recurse.
      } else if(article.querySelectorAll(".innerArticle")){
        searchKeyword(article.querySelectorAll(".innerArticle"), keyword);
      }
    } else {
      article.classList.add("hidden");
    }
  });
};

const reset = () => {
  articles.forEach(article => {
    const innerArticles = article.querySelectorAll(".innerArticle");
    innerArticles.forEach(innerArticle => {
      innerArticle.classList.remove("hidden");
    });
    article.classList.remove("hidden");
  });
};

search.addEventListener("input", (e) => {
  reset();
  searchKeyword(articles, search.value);
});
