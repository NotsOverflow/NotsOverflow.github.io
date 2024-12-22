/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               article_Header_parser.tsx created 2024/12/19                   *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/

import { ContentType, IArticle } from "./globals";
import { IMAGE_REG, QUOTE_REG, TITLE1_REG } from "./regexs";


enum ParseState{
    mainImage,
    title,
    description,
    content,
}

export const parseArticle = (link: string ,article: string) : IArticle => {
    const lines: string[] = article.split(/\r?\n/);
    let result: IArticle = {
        image : "",
        title : "",
        desc : "",
        link: link,
        content: [],
        empty: true,
        malformed: true,
        fully_parsed: false,
    };

    var parse_state: ParseState = ParseState.mainImage;
    var in_raw: boolean = false;
    for (var item of lines) {
        if(!in_raw){
            item = item.trim();
            if(item == ""){
                if(parse_state.valueOf() == ParseState.description && result.desc != "" ){
                    parse_state = ParseState.content;
                    in_raw = true;
                }
                continue;
            }
        }
        if(parse_state.valueOf() == ParseState.content){
            result.content.push({
                type: ContentType.raw,
                content: item
            });
        }
        else{
            if(parse_state.valueOf() == ParseState.mainImage && IMAGE_REG.test(item)){
                result.image = item.replace(IMAGE_REG,'$1$2$3');
                parse_state = ParseState.title;
            }
            else if(parse_state.valueOf() == ParseState.title && TITLE1_REG.test(item)){
                result.title = item.replace(TITLE1_REG, "$1");
                parse_state = ParseState.description;
            }
            else if(parse_state.valueOf() == ParseState.description && QUOTE_REG.test(item)){
                result.desc = result.desc + " " + item.replace(QUOTE_REG,'$1');
            }
            else return result;
        }
        
        
     }
    result.malformed = false;
    result.empty = false;
    return result;
};