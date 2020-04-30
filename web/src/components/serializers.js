import React from 'react'
import Figure from './Figure'
import SyntaxHighlighter from 'react-syntax-highlighter';

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: ({node = {} }) =>    {
      const {code, language} = node;
      if(!code){
        return null;
      }

      return <SyntaxHighlighter language={language || 'text'}>{code}</SyntaxHighlighter>
    }


  }
}

export default serializers
