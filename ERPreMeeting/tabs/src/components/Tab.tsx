import React from "react";
import { Welcome } from "./sample/Welcome";
import { useTeamsFx } from "./sample/lib/useTeamsFx";
import { AddIcon } from "@fluentui/react-icons-northstar";
import { Flex, Button } from "@fluentui/react-northstar";
import AddTaskCard from "./taskCard/AddTaskCard";
import TaskCard from "./taskCard/TaskCard";
import "./Tab.css";

var showFunction = Boolean(process.env.REACT_APP_FUNC_NAME);

export default function Tab() {
  const { themeString } = useTeamsFx();
  const [welcome, setWelcome] = React.useState(false);
  const [showAddTask, setShowAddTask] = React.useState(false);
  const [tasks, setTasks] = React.useState<string[]>([]);
  return (
    <div className={`container ${themeString === "default" ? "" : "dark"}`}>
      <button onClick={() => setWelcome((welcome) => !welcome)}>Switch</button>
      {welcome ? (
        <Welcome showFunction={showFunction} />
      ) : (
        <Flex column gap="gap.medium" padding="padding.medium">
          {tasks.map((task) => (
            <TaskCard tasks={tasks} task={task} setTasks={setTasks} />
          ))}
          {showAddTask ? (
            <AddTaskCard
              close={() => setShowAddTask(false)}
              tasks={tasks}
              setTasks={setTasks}
            />
          ) : (
            <AddIcon
              size="medium"
              bordered
              circular
              onClick={() => {
                setShowAddTask(true);
              }}
              className="addIcon"
            />
          )}
          <Flex className="save">
            <Button primary content="Save" onClick={() => {}} />
          </Flex>
        </Flex>
      )}
    </div>
  );
}
