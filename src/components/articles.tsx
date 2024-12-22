/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               articles.tsx created 2024/12/19                                *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import { useEffect, useState } from "react";
import { USER, REPO, BRANCH, updateArticleList, all_articles_loaded } from "../libs/globals"
import { Spinner } from "./spinner"
import axios from "axios";
import DisplayArticles from "./articles_display";



interface RepoData{
  path: string;
  mode: string;
  type: string;
  sha: string;
  size: string;
  url: string;
}

export const Articles: React.FC = () => {
  const [doneLoading, setDoneLoading] = useState(all_articles_loaded);
  const getArticles = async () => {
    try{
      await axios
      .get("https://api.github.com/repos/"+USER+"/"+REPO+"/git/trees/"+BRANCH+"?recursive=1")
      .then(res => {
        updateArticleList(res.data.tree
          .filter((item : RepoData) => item.path.endsWith(".md"))
          .map((item : RepoData) => item.path));
        setDoneLoading(true);
      });
    } catch (e) {
      console.log(e);
    }
  } 
  useEffect(() => {
    if(!all_articles_loaded) getArticles();
  }, []);
    return (
      <>
        {doneLoading ? <DisplayArticles/> : <Spinner/>}
      </>
    );
}

export default Articles;