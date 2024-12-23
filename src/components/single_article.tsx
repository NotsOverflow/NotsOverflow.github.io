/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               single_article.tsx created 2024/12/19                          *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import { useEffect, useState } from "react";
import { addArticle, fetchArticleFromArticles, IArticle } from "../libs/globals"
import { RAW_LINK } from "../libs/globals"
import axios from "axios";
import { parseArticle } from "../libs/article_Header_parser"
import LoadingArticle from "./loading_article";
import ArticleHeader from "./article_header";

interface ISingleArticleProps {
    link: string;
    right?: boolean;
}

export const SingleArticle: React.FC<ISingleArticleProps> = ({
    link,
    right = false
    }) => {
    
    
    var article : IArticle = fetchArticleFromArticles(link);

    const [doneLoading, setDoneLoading] = useState(false);

    const getArticle = async () => {
        try{
            await axios
                .get(RAW_LINK+link)
                .then(res => {
                    article = parseArticle(link, res.data);
                    addArticle(article);
                });
        } catch (e) {
            console.log(e);
        }
        setDoneLoading(true);
    }
    useEffect(() => {
        if(article.empty) getArticle();
    }, []);
    return (
       !article.empty || doneLoading ? <ArticleHeader article={article} right={right}/> : <LoadingArticle right={right} />
    );
}

export default SingleArticle;