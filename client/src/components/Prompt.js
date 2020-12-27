import { FramerTreeLayoutContext } from 'framer-motion';
import React from 'react';

export default function Prompt({ prompt }) {
   const date = new Date(prompt.createdOn).toLocaleString();
	return (
      <div className="prompt">
         <div className="prompt__main flex flex-jc-sb flex-ai-c">
            <h3 className="title">{prompt.title}</h3>
            <label className="metadata">
               <span>{prompt.type}</span> | <span>{date}</span>
            </label>
         </div>
         <label className="prompt__description">
            {prompt.description ? prompt.description : ''}
         </label>
      </div>
	);
}
