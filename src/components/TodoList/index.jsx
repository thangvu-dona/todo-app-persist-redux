import PropTypes from 'prop-types'
import { Button, Col, Input, Row, Select, Space, Tag } from 'antd'
import Todo from '../Todo'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todoListSlice'
import { v4 as uuidv4 } from 'uuid'
import { todoRemainingSelector } from '../../redux/selectors'

TodoList.propTypes = {}

function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoList = useSelector(todoRemainingSelector)

  const dispatch = useDispatch()

  function handleAddButtonClick() {
    const newTodo = {
      id: uuidv4(),
      name: todoName,
      priority,
      completed: false,
    }
    dispatch(addTodo(newTodo))

    // reset field
    setTodoName('')
    setPriority('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Space.Compact style={{ display: 'flex' }}>
          <Input value={todoName} onChange={(e) => setTodoName(e.target.value)} />
          <Select defaultValue="Medium" value={priority} onChange={(value) => setPriority(value)}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  )
}

export default TodoList
