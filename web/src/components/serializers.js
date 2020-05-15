import React from 'react'
import Figure from './Figure'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: ({node = {} }) =>    {
      const {code, language} = node;
      if(!code){
        return null;
      }

      return <SyntaxHighlighter language={language || 'text'} style={hopscotch}>{code}</SyntaxHighlighter>
    }


  }
}

export default serializers
