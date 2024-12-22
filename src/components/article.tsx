/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               article.tsx created 2024/12/19                                 *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import { useEffect, useState } from "react";
import Spinner from "./spinner";
import { addArticle, fetchArticleFromArticles, IArticle, RAW_LINK } from "../libs/globals";
import axios from "axios";
import { parseArticle } from "../libs/article_Header_parser";
import fullyParseArticle from "../libs/article_parser";
import { ShowArticle } from "./show_article";
import NoArticles from "./no_articles";

interface Param{
  link: string;
}

export const Article: React.FC<Param> = ({link}) =>{
  link = link+".md";
  var article : IArticle = fetchArticleFromArticles(link);
  const [doneParsing, setDoneParsing] = useState(article.fully_parsed);

  const getArticle = async () => {
    try{
        await axios
            .get(RAW_LINK+link)
            .then(res => {
                article = fullyParseArticle(parseArticle(link, res.data));
                addArticle(article);
                setDoneParsing(true);
            });
    } catch (e) {
        console.log(e);
    }
  }
  useEffect(() => {
      if(article.empty) getArticle();
      else if(!doneParsing){
        addArticle(fullyParseArticle(article));
        setDoneParsing(true);
      }
  }, []);
  if(doneParsing && article.malformed) return <NoArticles message={"Oups! error Happend during article parsing"}/>
  return (
      doneParsing ? <ShowArticle article={article} /> :<Spinner /> 
  );
}
export default Article;