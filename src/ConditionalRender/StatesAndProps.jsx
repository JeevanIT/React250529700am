import React from 'react'
import ConditionRender03 from './ConditionRender03';

const StatesAndProps = () => {
    const condition01= false;
  return (
    <div>
        <h3>StatesAndProps Condition Test</h3>
        <ConditionRender03 
        con1={condition01}
        error={false}
    
        />
    </div>
  )
}

export default StatesAndProps