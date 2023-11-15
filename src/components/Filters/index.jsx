import PropTypes from 'prop-types'
import { Col, Radio, Row, Select, Tag, Typography } from 'antd'
import Search from 'antd/lib/input/Search'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { priorityFilterchange, searchFilterChange, statusFilterChange } from './FiltersSlice'

Filters.propTypes = {}

function Filters() {
  const [searchText, setSearchText] = useState('')
  const [status, setStatus] = useState('All')
  const [priorities, setPriorities] = useState([])

  const dispatch = useDispatch()

  function handleSearchTextChange(e) {
    setSearchText(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  }

  function handleStatusChange(e) {
    setStatus(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  function handlePriorityChange(values) {
    setPriorities(values)
    dispatch(priorityFilterchange(values))
  }

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={status} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
          onChange={handlePriorityChange}
        >
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
      </Col>
    </Row>
  )
}

export default Filters
