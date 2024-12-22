/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               markdown_string.tsx created 2024/12/21                         *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/

import { parseToMarkdownElements, MarkdownType, MarkdownElement } from "../libs/parse_line";
import styles from "../styles/markdown_string.module.sass";
interface Props{
    markdown_string: string;
}

export const MarkdownString: React.FC<Props> = ({markdown_string}) =>{
    return (
        parseToMarkdownElements(markdown_string).map((elem: MarkdownElement, index: number) => {
            switch (elem.type) {
                case MarkdownType.text:
                    return <span key={index} className={styles.text} >{elem.text}</span>;
                case MarkdownType.link:
                    return <a key={index}  className={styles.link} href={elem.link} target="_blank" rel="noopener noreferrer">{elem.text}</a>;
                case MarkdownType.code:
                    return <code key={index}  className={styles.code} >{elem.text}</code>;
                case MarkdownType.bold:
                    return <strong key={index}  className={styles.strong} >{elem.text}</strong>;
                case MarkdownType.italic:
                    return <em key={index}  className={styles.em} >{elem.text}</em>;
                case MarkdownType.italicbold:
                    return <strong key={index}  className={styles.strong_italic} ><em>{elem.text}</em></strong>;
                case MarkdownType.line_return:
                    return <br key={index}  className={styles.br} />;
                
            }
        })
    );
}
export default MarkdownString;