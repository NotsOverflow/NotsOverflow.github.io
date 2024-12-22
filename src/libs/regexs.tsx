/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               regexs.tsx created 2024/12/19                                  *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


export const IMAGE_REG: RegExp = /^!\[[a-z0-9\-\s!?;)(+%#@]*\]\((images\/)?([\w\-]+\/)?([\w\-]+\.[a-z]{3,4})\)$/ig;
export const QUOTE_REG: RegExp = /^>\s+([\x20-\x7E]+)$/ig;

export const TITLE1_REG: RegExp = /^#\s+([\x20-\x7E]+)$/ig;
export const TITLE2_REG: RegExp = /^##\s+([\x20-\x7E]+)$/ig;
export const TITLE3_REG: RegExp = /^###\s+([\x20-\x7E]+)$/ig;
export const TITLE4_REG: RegExp = /^####\s+([\x20-\x7E]+)$/ig;
export const TITLE5_REG: RegExp = /^#####\s+([\x20-\x7E]+)$/ig;

export const LINK_REG = /^\[(.*?)\]\((.*?)\)$/g;
export const BULLET_REG: RegExp = /^-\s+([\x20-\x7E]+)$/ig;
export const TEXT_REG: RegExp = /^[\x20-\x7E]+$/i;

export const CODE_REG: RegExp = /^```([a-z]+)?$/ig;

export const SIMPLETABLE_REG = /^\|[^|]*\|/;
export const TABLE_REG = /(?:\s*)(?:\|.*\|)\s*(?:\n(?:\|.*\|)\s*)*/g;

export const INNERLINK_REG = /^\[([\x20-\x5C\x5E-\x7E]+)\]\(([\x20-\x28\x2A-\x7E]+)\)/g;
export const INNERCODE_REG = /^\`([\x20-\x7E]+)\`/g;
export const INNERITALICBOLD_REG = /^\*\*\_([\x20-\x7E]+)\_\*\*/g;
export const INNERBOLD_REG = /^\*\*([\x20-\x7E]+)\*\*/g;
export const INNERITALIC_REG = /^\_([\x20-\x7E]+)\_/g;
export const INNERLINERETURN_REG = /^(\n)/g;