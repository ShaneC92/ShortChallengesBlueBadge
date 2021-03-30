const Grades = (props) => {
   return (
      <div>
         {props.students.map(student => {
            return <div>{student.grade}</div>
         })}
      </div>
   )
}

export default Grades;