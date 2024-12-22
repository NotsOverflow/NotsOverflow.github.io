/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               article_parser.tsx created 2024/12/19                          *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import { Code, Content, ContentType, IArticle } from "./globals";
import { BULLET_REG, CODE_REG, IMAGE_REG, LINK_REG, QUOTE_REG, SIMPLETABLE_REG, TEXT_REG, TITLE1_REG, TITLE2_REG, TITLE3_REG, TITLE4_REG, TITLE5_REG } from "./regexs";


export const fullyParseArticle = (article: IArticle) : IArticle => {
    const the_content: Content[] = article.content;
    var final_content: Content[] = [];
    var temp_text: string = "";
    const save_text: Function = ()=>{
        if(temp_text != ""){
            final_content.push({
                type: ContentType.text,
                content: temp_text.slice(0,-1)
            });
            temp_text = "";
        }
    };
    for(let i = 0; i < the_content.length; i++){
        if(the_content[i].type != ContentType.raw){
            final_content.push(the_content[i]);
            continue;
        }
        the_content[i].content = the_content[i].content.trim()
        if(the_content[i].content == ""){
            save_text();
            final_content.push({
                type: ContentType.space,
                content: ""
            }); 
        }
        else if(TITLE1_REG.test(the_content[i].content)){
            save_text();
            final_content.push({
                type: ContentType.title1,
                content: the_content[i].content.replace(TITLE1_REG, "$1")
            });     
        }
        else if(TITLE2_REG.test(the_content[i].content)){
            save_text();
            final_content.push({
                type: ContentType.title2,
                content: the_content[i].content.replace(TITLE2_REG, "$1")
            });     
        }
        else if(TITLE3_REG.test(the_content[i].content)){
            save_text();
            final_content.push({
                type: ContentType.title3,
                content: the_content[i].content.replace(TITLE3_REG, "$1")
            });     
        }
        else if(TITLE4_REG.test(the_content[i].content)){
            save_text();
            final_content.push({
                type: ContentType.title4,
                content: the_content[i].content.replace(TITLE4_REG, "$1")
            });     
        }
        else if(TITLE5_REG.test(the_content[i].content)){
            save_text();
            final_content.push({
                type: ContentType.title5,
                content: the_content[i].content.replace(TITLE5_REG, "$1")
            });     
        }
        else if(BULLET_REG.test(the_content[i].content)){
            save_text();
            var bullets: string[] = [the_content[i].content.replace(BULLET_REG, "$1")];
            i++;
            while(i < the_content.length && BULLET_REG.test(the_content[i].content)){
                bullets.push(the_content[i].content.replace(BULLET_REG, "$1").trim());
                i++;
            }
            i--;
            final_content.push({
                type: ContentType.bullet,
                content: bullets
            });     
        }
        else if(IMAGE_REG.test(the_content[i].content)){
            save_text();
            final_content.push({
                type: ContentType.image,
                content: the_content[i].content.replace(IMAGE_REG,'$1$2$3')
            });     
        }
        else if(QUOTE_REG.test(the_content[i].content)){
            save_text();
            var quotes: string = the_content[i].content.replace(QUOTE_REG, "$1") + "\n";
            i++;
            while(i < the_content.length && QUOTE_REG.test(the_content[i].content.trim())){
                quotes += the_content[i].content.replace(QUOTE_REG, "$1").trim() + "\n";
                i++;
            }
            i--;
            final_content.push({
                type: ContentType.quote,
                content: quotes.slice(0,-1)
            });     
        }
        else if(SIMPLETABLE_REG.test(the_content[i].content)){
            save_text();
            var table: string = the_content[i].content + "\n";
            i++;
            while(i < the_content.length && SIMPLETABLE_REG.test(the_content[i].content.trim())){
                table+= the_content[i].content.trim() + "\n";
                i++;
            }
            i--;
            final_content.push({
                type: ContentType.table,
                content: table
            });
        }
        else if(CODE_REG.test(the_content[i].content)){
            save_text();
            var result: Code = {
                language: the_content[i].content.replace(CODE_REG, "$1"),
                code: ""
            };
            i++;
            while(i < the_content.length && the_content[i].content.trim() != "```"){
                result.code = result.code + the_content[i].content + "\n";
                i++;
            }
            if(i == the_content.length){
                article.malformed = true;
                break;
            }
            result.code = result.code.slice(0,-1);
            final_content.push({
                type: ContentType.code,
                content: result
            });
        }
        else if(LINK_REG.test(the_content[i].content)){
            save_text();
            final_content.push({
                type: ContentType.link,
                content: {
                    display: the_content[i].content.replace(LINK_REG, "$1").trim(),
                    href: the_content[i].content.replace(LINK_REG, "$2").trim()
                }
            });     
        }
        else if(TEXT_REG.test(the_content[i].content)){
            temp_text += the_content[i].content + "\n";
        }
        
        
    }
    save_text();
    article.content = final_content;
    article.fully_parsed = true;
    return article;
};

export default fullyParseArticle;