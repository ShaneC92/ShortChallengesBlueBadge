const Names = (props) => {
   return (
      <div>
         {props.students.map(student => {
            return <div>{student.name}</div>
         })}
      </div>
   )
}

export default Names;