import { Checkbox, Row, Tag } from 'antd'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTodo } from '../TodoList/todoListSlice'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

Todo.propTypes = {
  name: PropTypes.string,
  priority: PropTypes.string,
  id: PropTypes.string,
  completed: PropTypes.bool,
}

function Todo({ name, priority, id, completed }) {
  const [checked, setChecked] = useState(completed)

  const dispatch = useDispatch()

  const toggleCheckbox = () => {
    setChecked(!checked)
    dispatch(toggleTodo(id))
  }

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {priority}
      </Tag>
    </Row>
  )
}

export default Todo
