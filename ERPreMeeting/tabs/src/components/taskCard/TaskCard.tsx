import React from "react";
import { Text, Card } from "@fluentui/react-northstar";
import { TrashCanIcon, EditIcon } from "@fluentui/react-icons-northstar";
import AddTaskCard from "./AddTaskCard";
import "./Card.css";

interface IProps {
  tasks: string[];
  task: string;
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function TaskCard(props: IProps) {
  const { tasks, task, setTasks } = props;
  const [edit, setEdit] = React.useState<boolean>(false);
  const deleteTask = () => {
    setTasks((tasks) => tasks.filter((t) => t !== task));
  };
  if (edit) {
    return (
      <AddTaskCard
        close={() => setEdit(false)}
        tasks={tasks}
        setTasks={setTasks}
        propValue={task}
      />
    );
  }
  return (
    <Card
      elevated
      inverted
      styles={{ height: "auto", width: "330px", wordWrap: "break-word" }}
    >
      <Text align="center" content={task} />
      <div className="cardIcons">
        <EditIcon
          size="small"
          onClick={() => setEdit(true)}
          className="cardIcon"
        />
        <TrashCanIcon
          size="small"
          onClick={() => deleteTask()}
          className="cardIcon"
        />
      </div>
    </Card>
  );
}
