/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               header.tsx created 2024/12/19                                  *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import styles from "../styles/header.module.sass"
import { EMAIL, getHash, WEB_NAME } from "../libs/globals";
import { useEffect, useRef } from "react";

interface Param{
    email: string;
    subject?: string;
    body?: string;
}

const ArrowBack: React.FC = () => {
    const arrow = useRef<HTMLAnchorElement>(null);
    const handleTransitionEnd = (event: TransitionEvent) => {
        if (arrow.current) {
            if (event.propertyName === 'opacity' && event.target === arrow.current) {
                if (getHash() == "default") {
                    arrow.current.style.pointerEvents = "none";
                }
            }
        }
    };
    const handleTransitionStart = (event: TransitionEvent) => {
        if (arrow.current) {
            if (event.propertyName === 'opacity' && event.target === arrow.current) {
                if (getHash() != "default") {
                    arrow.current.style.pointerEvents = "auto";
                }
            }
        }
    };
    useEffect(() => {
        if (arrow.current) {
            arrow.current.addEventListener('transitionend', handleTransitionEnd);
            arrow.current.addEventListener('transitionstart', handleTransitionStart);
            if (getHash() == "default") arrow.current.style.pointerEvents = "none";
            else arrow.current.style.pointerEvents = "auto";
        }
        return () => {
            if (arrow.current) {
                arrow.current.removeEventListener('transitionend', handleTransitionEnd);
                arrow.current.removeEventListener('transitionstart', handleTransitionStart);
            }
        };
    }, []);
    return (
        <a ref={arrow} className={styles.left_arrow} href="#">{"<"}</a>
    );
};

const Mailto: React.FC<Param> = ({ email, subject, body }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a target="_blank" className={styles.email_link} href={`mailto:${email}${params}`}>
                    <img className={styles.email_icon} src='/assets/email_icon.svg'/>
                    <div className={styles.email_link_text}>Contact</div>
                </a>;
};

const chouse_class: Function = () : string => {
    return getHash() == "default" ? styles.extended_header : styles.reduced_header;
}

export const Header: React.FC = () =>{
    const header_ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
            const changeBarStyle = () => {
                if (header_ref.current) {
                    header_ref.current.className = chouse_class();
                }
            };
            window.addEventListener('hashchange', changeBarStyle);
            return () => {
                window.removeEventListener('hashchange', changeBarStyle);
            };
        }, []);
    return (
        <div ref={header_ref} className={styles.main_container+" " +chouse_class()}>
            <div className={styles.left_container}>
                <ArrowBack />
            </div>
            <div className={styles.midle_header}>
                <img className={styles.avatar} src="/assets/avatar.svg"/>
                <div className={styles.title}>{WEB_NAME.toUpperCase()}</div>
            </div>
            <div className={styles.right_container}>
                <Mailto email={EMAIL}/>
            </div>
        </div>
    );
}
export default Header;