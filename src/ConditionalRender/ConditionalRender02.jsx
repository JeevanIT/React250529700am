import React from 'react'

const ConditionalRender02 = () => {

    const student1 = {
        name: 'John Doe',
        grade:90
    }
    const student2 = {
        name: 'Jane Smith',
        grade: 95
    }

    const higherGrade = student1.grade > student2.grade ? student1 : student2;

  return (
    <div>
        <h3>ConditionalRender02</h3>
        <p>
        Name : {higherGrade.name} - 
        Grade: {higherGrade.grade}
       </p>

 {higherGrade===student1 && (
        <p>
        {higherGrade.name} is doing great!.
        </p>)}
    
{higherGrade===student2 && (
        <p>
            {higherGrade.name} is doing well, but can improve.
        </p>)} 

    </div>
  )
}

export default ConditionalRender02