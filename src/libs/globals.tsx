/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               globals.tsx created 2024/12/19                                 *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


export const USER = "NotsOverflow";
export const REPO = "notsnotes";
export const BRANCH = "master";

export const WEB_NAME = "Richard JUAN";

export const EMAIL = "contact@richard-juan.com";

export const EMPTY_TITLE: string = "Loading...";
export const EMPTY_IMAGE: string = "./src/assets/default_article_icon.svg";
export const EMPTY_DESCRIPTION: string = [
    "some description really longer description just to try to see how it wraps",
    "some more description",
    "yes some more description to see how it really wraps around all this"
].join(" ");




export enum ContentType{
    text,
    code,
    title1,
    title2,
    title3,
    title4,
    title5,
    list,
    array,
    space,
    raw,
    bullet,
    image,
    quote,
    table,
    link
}

export interface Content{
    type: ContentType;
    content: any;
}

export interface Code{
    language: string;
    code: string;
}
export interface Link{
    display: string;
    href: string;
}

export interface IArticle{
    image: string;
    title: string;
    desc: string;
    link: string;
    content: Content[];
    malformed: boolean;
    fully_parsed: boolean;
    empty: boolean;
}



export const EMPTY_LINK: string = "#";
export const EMPTY_CONTENT: Content = {
    type: ContentType.text,
    content: "some content"
};
export const RAW_LINK: string =
    "https://raw.githubusercontent.com/"+USER+"/"+REPO+"/refs/heads/"+BRANCH+"/";

export var all_articles_loaded : boolean = false ;
export var articles_list: string[] = []
export var articles : IArticle[] = [];

export const EMPTY_ARTICLE: IArticle = {
        image : EMPTY_IMAGE,
        title : EMPTY_TITLE,
        desc : EMPTY_DESCRIPTION,
        link: EMPTY_LINK,
        content: [EMPTY_CONTENT],
        malformed: true,
        empty: true,
        fully_parsed: false
    };

export const  updateArticleList = ( list: string[]) =>{
    articles_list = list;
}
export const addArticle = (article: IArticle) => {
    var result: IArticle[] = [];
    for(var item of articles){
        if(article.link != item.link){
            result.push(item);
        }
    } 
    result.push(article);
    articles = result;
    if(articles.length == articles_list.length){
        all_articles_loaded = true;
    } 
}
export const fetchArticleFromArticles = (link: string) : IArticle => {
    for (let elem of articles){
        if(elem.link == link) return elem;
    }
    var article : IArticle = { ...EMPTY_ARTICLE, content: {...EMPTY_ARTICLE.content}};
    return article;
}

export const getHash = () => {
    return window.location.hash.replace('#', '') || 'default';
};
