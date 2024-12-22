/*
*                                                                              *
*               ╔╗╔┌─┐┌┬┐┌─┐╔═╗┬  ┬┌─┐┬─┐┌─┐┬  ┌─┐┬ ┬                          *
*               ║║║│ │ │ └─┐║ ║└┐┌┘├┤ ├┬┘├┤ │  │ ││││                          *
*               ╝╚╝└─┘ ┴ └─┘╚═╝ └┘ └─┘┴└─└  ┴─┘└─┘└┴┘                          *
*                                                                              *
*               App.tsx created 2024/12/19                                     *
*               by Richard JUAN (contact@richard-juan.com)                     *
*                                                                              *
*               Copyright © 2024 Richard JUAN. All rights reserved             *
*                                                                              *
*/


import React, { useEffect, useState } from 'react';
import '../styles/body.sass'
import Articles from './articles'
import Article from './article';
import { getHash } from '../libs/globals';

const Body: React.FC = () => {
    const [currentHash, setCurrentHash] = useState(getHash());

    useEffect(() => {
        const handleHashChange = () => {
            setCurrentHash(getHash());
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
        };
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange();
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderContent = () => {

      return (
        currentHash == "default" ? <Articles/> : <Article link={currentHash} />
      );
    };

    return renderContent();
};


export default Body;

