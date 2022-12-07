import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import Todo from "../Todo";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions";
import { todoListRemaining } from "../../redux/Selectors";

export default function TodoList() {
  const dispatch = useDispatch();

  const todoList = useSelector(todoListRemaining);

  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleAddButtonClick = () => {
    const todo = {
      id: uuidv4(),
      name: todoName,
      priority: priority,
      isComplete: false,
    };
    dispatch(addTodo(todo));
    setTodoName("");
    setPriority("Medium");
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item, index) => {
          return <Todo key={index} name={item.name} prioriry={item.priority} />;
        })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />

          <Select value={priority} onChange={handlePriorityChange}>
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

          <Button onClick={handleAddButtonClick} type="primary">
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
