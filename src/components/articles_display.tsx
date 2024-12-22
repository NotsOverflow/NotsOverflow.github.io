/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               articles_display.tsx created 2024/12/19                        *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import { articles_list } from "../libs/globals";
import NoArticles from "./no_articles";
import SingleArticle from "./single_article";



export const DisplayArticles: React.FC = () => {
    var articles_count = articles_list.length;
    if(articles_count == 0){
        return (
            <NoArticles message="No Articles"></NoArticles>
        );
    }
    return articles_list.map( elem => {
        articles_count--;
        return <SingleArticle key={articles_count} link={elem} right={articles_count % 2 == 0}/>;
    });
}

export default DisplayArticles;