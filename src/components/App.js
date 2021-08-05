import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <>
      <Header />
      <Main />
      {/* 
      <TaskForm />
      <Filter ident='tasks' callBack={setTaskFilter} />
      <TaskList />  */}
    </>
  );
};

export default App;
