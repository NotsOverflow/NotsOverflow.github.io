/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               article_header.tsx created 2024/12/19                          *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import styles from "../styles/article_header.module.sass";
import { IArticle, RAW_LINK } from "../libs/globals";

interface Param{
    article: IArticle;
    right?: boolean
}

export const ArticleHeader: React.FC<Param> = ({article, right = false}) =>{
    if(article.malformed) return (
        <a className={styles.article} href="#">
            <div className={right ? styles.article_image_right : styles.article_image_left }>
                <img className={styles.article_image} src="/src/assets/error.svg"/>
            </div>
            <div className={styles.article_text }>
                <p className={right ? styles.article_title_right : styles.article_title_left}>Error!</p>
                <div className={styles.article_description}>"This header was malformed, check the markdown. eg: it should start with an image followed by a title and quotes as description... "</div>
            </div>
            <div className={right ? styles.article_empty_block_right : styles.article_empty_block_left }></div>
        </a>
    );
    return (
        <a className={styles.article} href={"#"+article.link.slice(0,-3)}>
            <div className={right ? styles.article_image_right : styles.article_image_left }>
                <img className={styles.article_image} src={RAW_LINK+""+article.image}/>
            </div>
            <div className={styles.article_text }>
                <p className={right ? styles.article_title_right : styles.article_title_left}>{article.title}</p>
                <div className={styles.article_description}>{article.desc}</div>
            </div>
            <div className={right ? styles.article_empty_block_right : styles.article_empty_block_left }></div>
        </a>
    );
}
export default ArticleHeader;