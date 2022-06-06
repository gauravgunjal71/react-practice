import React from 'react'

function MemoComp(props) {
    console.log("Functional memo component")
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default React.memo(MemoComp)
