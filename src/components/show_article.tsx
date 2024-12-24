/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               show_article.tsx created 2024/12/19                            *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import styles from "../styles/show_article.module.sass";
import { RAW_LINK, ContentType, IArticle } from "../libs/globals";
import CodeBlock from "./codeblock";
import MarkdownString from "./markdown_string";
import MarkdownToTable from "./markdown_table";





interface Param{
    article: IArticle;
}
export const ShowArticle: React.FC<Param> = ({article}) =>{
    return(
        <>
        <img className={styles.title_image} src={RAW_LINK+""+article.image}/>
        <div className={styles.main_title}>{article.title}</div>
        <div className={styles.desc}>{article.desc}</div>
        {article.content.map( (elem, index) => {
            if(elem.type == ContentType.text) return <div key={index} className={styles.text} ><MarkdownString markdown_string={elem.content} /></div>;
            else if(elem.type == ContentType.title1) return <div key={index} className={styles.title1} ><MarkdownString markdown_string={elem.content} /></div>;
            else if(elem.type == ContentType.title2) return <div key={index} className={styles.title2} ><MarkdownString markdown_string={elem.content} /></div>;
            else if(elem.type == ContentType.title3) return <div key={index} className={styles.title3} ><MarkdownString markdown_string={elem.content} /></div>;
            else if(elem.type == ContentType.title4) return <div key={index} className={styles.title4} ><MarkdownString markdown_string={elem.content} /></div>;
            else if(elem.type == ContentType.title5) return <div key={index} className={styles.title4} ><MarkdownString markdown_string={elem.content} /></div>;
            else if(elem.type == ContentType.bullet) return <ul key={index} className={styles.bullet} >{elem.content.map((bullet: string, i: number)=>{ return <li key={i}><MarkdownString markdown_string={bullet} /></li> ;})}</ul>;
            else if(elem.type == ContentType.space) return <div key={index} className={styles.space}></div>;
            else if(elem.type == ContentType.quote) return <div key={index} className={styles.quote} ><MarkdownString markdown_string={elem.content} /></div>;
            else if(elem.type == ContentType.image) return <div className={styles.image_div}><img key={index} className={styles.image} src={`${RAW_LINK}${elem.content}`} /></div>;
            else if(elem.type == ContentType.table) return <MarkdownToTable key={index} className={styles.table} markdown={elem.content} />;
            else if(elem.type == ContentType.link) return <a key={index} className={styles.alone_link} href={elem.content.href} >{elem.content.display}</a>;
            else if(elem.type == ContentType.code) return <CodeBlock key={index} code={elem.content.code} language={elem.content.language} />;
        })}
        </>
    );
};