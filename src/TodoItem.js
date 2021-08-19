import React from 'react'

class TodoItem extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   show: false
  }
  this.text = React.createRef()
 }

 buttonAction(todo) {
  const classes = ['red']
  const btnCursor = todo.status > 0 ? 'not-allowed' : 'pointer'
  classes.push(btnCursor)
  return (
   <div className='btn-action'>
    <button
     type='button'
     className={classes.join(' ')}
     disabled={todo.status > 0 ? true : false}
     onClick={(e) => this.props.DeleteTodo(todo)}
    >
     Delete
    </button>
    <button
     type='button'
     className='green pointer'
     onClick={(e) => this.props.editTodo(todo)}
    >
     Edit
    </button>
   </div>
  )
 }

 listTodo = () => {
  return this.props.todos.map((todo) => {
   return (
    <div key={todo.id}>
     <li onClick={(e) => this.props.scribbleTodo(todo)}>
      {todo.status === 1 ? <del>{todo.name}</del> : todo.name}
     </li>
     {this.buttonAction(todo)}
    </div>
   )
  })
 }
 render() {
  return (
   <div className='todo'>
    <ol>{this.listTodo()}</ol>
   </div>
  )
 }
}

export default TodoItem
