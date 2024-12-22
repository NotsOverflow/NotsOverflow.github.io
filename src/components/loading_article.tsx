/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               loading_article.tsx created 2024/12/19                         *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import styles from "../styles/loading_article.module.sass";

interface Param{
    right?: boolean;
}

export const LoadingArticle: React.FC<Param> = ({right = false}) =>{
    return (
        <div className={styles.article}>
            <div className={right ? styles.article_image_right : styles.article_image_left }>
                <div className={styles.article_image} ></div>
            </div>
            <div className={right ? styles.article_text_right : styles.article_text_left }>
                <div className={right ? styles.loading_title_right : styles.loading_title_left }>
                    <div className={styles.loading_title}></div>
                </div>
                <div className={styles.loading}></div>
                <div className={styles.loading}></div>
                <div className={styles.loading}></div>
            </div>
            <div className={right ? styles.article_empty_block_right : styles.article_empty_block_left }></div>
        </div>
    );
}
export default LoadingArticle;