import Addtask from "./Addtask";
import Sorting from "./Sorting";
import Search from "./Search";
import Tasklist from "./Tasklist";
import Counter from "./Counter";
function Todopackage(props) {
  return (
    <>
      <Addtask mode={props.mode} />
      <Search mode={props.mode} />
      <Sorting mode={props.mode} />
      <Tasklist mode={props.mode} />
      <Counter mode={props.mode} />
    </>
  );
}

export default Todopackage;
