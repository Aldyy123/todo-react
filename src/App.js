import './App.css'
import React from 'react'
import TodoItem from './TodoItem'
import Filter from './Filter'
class App extends React.Component {
 constructor(props) {
  super(props)
  this.state = {
   todos: [
    {
     id: 1,
     name: 'makan',
     status: 0
    },
    {
     id: 2,
     name: 'tidur',
     status: 1
    },
    {
     id: 3,
     name: 'game',
     status: 0
    }
   ],
   newTodo: {},
   valueInput: ''
  }
 }

 addTodos() {
  const { todos, newTodo, valueInput } = this.state

  if (!valueInput || !valueInput.trim()) {
   alert('Maaf List todo harus di isi')
  } else {
   const todoInSome = todos.some((todo) => todo.name === valueInput.toLowerCase())
   if (!todoInSome) {
    todos.push(newTodo)
    this.setState({
     todos: todos,
     valueInput: ''
    })
   } else {
    alert('Todo sudah ada')
   }
  }
 }

 handleKeyPressAddTodo(e) {
  if (e.key === 'Enter') {
   this.addTodos()
  }
 }

 changeInputTodo(event) {
  this.setState({
   newTodo: {
    id: this.state.todos.length + 1,
    name: event.target.value.toLowerCase(),
    status: 0
   },
   valueInput: event.target.value
  })
 }

 deleteTodo(todo) {
  const filtered = this.state.todos.filter((item) => item.name !== todo.name)
  this.setState({
   todos: filtered
  })
 }

 scribbleTodo(todo) {
  const { todos } = this.state
  const updateTodos = [...todos]
  if (todo.status > 0) {
   todo.status--
   this.setState({
    todos: updateTodos
   })
  } else {
   todo.status++
   this.setState({
    todos: updateTodos
   })
  }
 }

 editTodo(todo) {
  const editTodoText = prompt('Edit your Todo')
  const filtered = this.state.todos.filter((item) => {
   if (item.id === todo.id) {
    item.name = editTodoText || item.name
    item.status = 0
   }
   return item
  })
  this.setState({ todos: filtered })
 }

 sortingTodos(status) {
  const sorting = this.state.todos.sort((a, b) => a.status - b.status)
  if (status === 'ASC') {
   this.setState({ todos: sorting })
  } else {
   sorting.reverse()
   this.setState({ todos: sorting })
  }
 }

 render() {
  return (
   <div className='app'>
    <div className='input-todo'>
     <div className='input-group'>
      <input
       type='text'
       placeholder='Input your todo'
       value={this.state.valueInput}
       onChange={this.changeInputTodo.bind(this)}
       onKeyPress={this.handleKeyPressAddTodo.bind(this)}
      />

      <button type='button' onClick={this.addTodos.bind(this)}>
       Submit
      </button>
     </div>
     <Filter sortingTodos={this.sortingTodos.bind(this)} />
    </div>

    <div className="todos-container">
    <TodoItem
     todos={this.state.todos}
     DeleteTodo={this.deleteTodo.bind(this)}
     scribbleTodo={this.scribbleTodo.bind(this)}
     editTodo={this.editTodo.bind(this)}
    />
    </div>
   </div>
  )
 }
}

export default App
