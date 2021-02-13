import React from 'react';

const dog = (props) => {
  return (
    <div>
      <p>Hello.  My name is {props['name']}.  I am {props['age']} years old. I'm a sweet dog.</p>
      <p>{props['children']}</p>
    </div>
  )
}

export default dog;