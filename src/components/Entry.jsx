import React from "react";

function Entry(inputs) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={inputs.name}>
          {inputs.emoji}
        </span>
        <span>{inputs.name}</span>
      </dt>
      <dd>{inputs.content}</dd>
      <dd>{inputs.category}</dd>
    </div>
  );
}

export default Entry;
