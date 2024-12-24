/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               footer.tsx created 2024/12/19                                  *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import { EMAIL, WEB_NAME } from "../libs/globals";
import styles from "../styles/footer.module.sass";

export const Footer: React.FC = () =>{
    return (
        <div className={styles.footer}>
            <div >Copyright © 2024 {WEB_NAME}. All rights reserved</div>
            <div >{EMAIL}</div>
        </div>
    );
}
export default Footer;