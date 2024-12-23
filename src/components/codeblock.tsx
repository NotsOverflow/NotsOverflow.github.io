/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               codeblock.tsx created 2024/12/19                               *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import styles from "../styles/codeblock.module.sass";
import hljs from 'highlight.js/lib/common';
import powershell from 'highlight.js/lib/languages/powershell';
import 'highlight.js/styles/panda-syntax-dark.min.css';
import { useEffect, useRef } from "react";

type Props = {
  code: string;
  language: string;
};
export const CodeBlock: React.FC<Props> = ({language, code }) => {
  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeRef.current) {
      if(language == "powershell") hljs.registerLanguage('powershell', powershell);
      hljs.highlightElement(codeRef.current);
    }
    return () => {
      if (codeRef.current  && 'highlighted' in codeRef.current.dataset) {
        codeRef.current.dataset.highlighted = 'no';
        if(language == "powershell") hljs.unregisterLanguage('powershell');
      }
    };
  }, []);
  return (
    <pre>
      <code ref={codeRef} className={`${styles.code} ${language != "" ? "language-"+language : ""}`}>
        {code}
      </code>
    </pre>
  );
}
export default CodeBlock;