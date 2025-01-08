import React from 'react'

const FormatMessage = ({message}) => {
    const lines = message.split("\n");
  return (
    <ul>
    {lines.map((line, index) => {
      // Handle bold and bullet points
      if (line.trim().startsWith("* ")) {
        const match = line.match(/\*\*(.*?)\*\*(.*)/);
        if (match) {
          return (
            <li key={index}>
              <strong>{match[1]}:</strong> {match[2]}
            </li>
          );
        }
        return <li key={index}>{line.trim().substring(2)}</li>;
      }
      return <p key={index}>{line}</p>;
    })}
  </ul>
  )
}

export default FormatMessage