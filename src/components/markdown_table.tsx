/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               markdown_table.tsx created 2024/12/22                          *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/

import styles from "../styles/markdown_table.module.sass";

interface MarkdoownProp{
    markdown: string;
    className?: string;
}


const MarkdownToTable: React.FC<MarkdoownProp> = ({markdown, className=""}) => {

    const rows = markdown.split('\n');
    return(
        <table className={className}>{rows.filter((elem)=>{
            if(elem.includes('---')) return false;
            return true;
        }).map((elem, index: number)=>{
                if(index == 0){
                    return(
                        <thead key={index}>
                            <tr>
                                {elem.split("|").slice(1, -1).map((cell, sub_index)=>{
                                    return <th key={"sub_tr_"+sub_index}>{cell.trim()}</th>;
                                })}
                            </tr>
                        </thead>
                    );
                }
                else {
                    return(
                        <tbody key={index}>
                            <tr className={index % 2 ? styles.odd_table_line : styles.even_table_line}>
                                {elem.split('|').slice(1, -1).map((cell, sub_index)=>{
                                    return <td key={"sub_td_"+sub_index}>{cell.trim()}</td>;
                                })}
                            </tr>
                        </tbody>
                    );
                }
            })}</table>
    );
}

export default MarkdownToTable;