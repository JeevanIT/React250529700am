import React from 'react'

const ConditionRender03 = ({error,con1}) => {
  return (
    <div>
        ConditionRender03
        {!error && !con1 && (
            <p>
                No error and condition is false.
            </p>
        )}
        </div>
  )
}

export default ConditionRender03