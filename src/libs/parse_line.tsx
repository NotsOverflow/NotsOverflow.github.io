/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               parse_line.tsx created 2024/12/21                              *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/

import { INNERBOLD_REG, INNERCODE_REG, INNERITALIC_REG, INNERITALICBOLD_REG, INNERLINERETURN_REG, INNERLINK_REG } from "./regexs";


export enum MarkdownType{
    text,
    link,
    italic,
    bold,
    italicbold,
    code,
    line_return
}

export interface MarkdownElement{
    type: MarkdownType;
    text: string;
    link?: string;
}
const addText: Function = (text: string): MarkdownElement => {
    return {type:MarkdownType.text, text: text};
};
export const parseToMarkdownElements: Function = (markdown: string) : MarkdownElement[] => {
    var result: MarkdownElement[] = [];
    var lastIndex = 0;
    var lastMatchIndex = 0;
    while(lastIndex < markdown.length){
        var slice = markdown.slice(lastIndex);
        var match = null;
        var tmp = "";
        if(match = INNERLINK_REG.exec(slice)){
            tmp = markdown.slice(lastMatchIndex,lastIndex);
            if(tmp != "") result.push(addText(tmp));
            result.push({type:MarkdownType.link, text: match[1], link: match[2]});
            lastIndex +=  match[0].length;
            lastMatchIndex = lastIndex;
        }
        else if(match = INNERCODE_REG.exec(slice)){
            tmp = markdown.slice(lastMatchIndex,lastIndex);
            if(tmp != "") result.push(addText(tmp));
            result.push({type:MarkdownType.code, text: match[1]});
            lastIndex +=  match[0].length;
            lastMatchIndex = lastIndex;
        }
        else if(match = INNERITALICBOLD_REG.exec(slice)){
            tmp = markdown.slice(lastMatchIndex,lastIndex);
            if(tmp != "") result.push(addText(tmp));
            result.push({type:MarkdownType.italicbold, text: match[1]});
            lastIndex +=  match[0].length;
            lastMatchIndex = lastIndex;
        }
        else if(match = INNERBOLD_REG.exec(slice)){
            tmp = markdown.slice(lastMatchIndex,lastIndex);
            if(tmp != "") result.push(addText(tmp));
            result.push({type:MarkdownType.bold, text: match[1]});
            lastIndex +=  match[0].length;
            lastMatchIndex = lastIndex;
        }
        else if(match = INNERITALIC_REG.exec(slice)){
            tmp = markdown.slice(lastMatchIndex,lastIndex);
            if(tmp != "") result.push(addText(tmp));
            result.push({type:MarkdownType.italic, text: match[1]});
            lastIndex +=  match[0].length;
            lastMatchIndex = lastIndex;
        }
        else if(match = INNERLINERETURN_REG.exec(slice)){
            tmp = markdown.slice(lastMatchIndex,lastIndex);
            if(tmp != "") result.push(addText(tmp));
            result.push({type:MarkdownType.line_return, text: ""});
            lastIndex +=  1;
            lastMatchIndex = lastIndex;
        }
        else lastIndex++;
    }
    if(lastMatchIndex < markdown.length) result.push(addText(markdown.slice(lastMatchIndex)));
    return result;
};