import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { doneTodo } from "../../redux/actions";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, prioriry, isComplete }) {
  console.log("name: ", name);
  console.log("id: ", id);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(isComplete);

  const toggleCheckbox = (id) => {
    setChecked(!checked);
    dispatch(doneTodo(id));
  };
  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={() => toggleCheckbox(id)}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
