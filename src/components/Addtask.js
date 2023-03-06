function addtask(props) {
  function handleSubmit(event) {
    event.preventDefault();
    let addtaskinput = document.querySelector("#floatingInput").value;
    if (addtaskinput === "") {
      return;
    } else {
      const listContainer = document.querySelector("#task-list");
      const taskList = document.createElement("li");
      taskList.setAttribute("id", "list-item");
      taskList.setAttribute("class", "bg-transparent");
      listContainer.appendChild(taskList);
      const firstdiv = document.createElement("div");
      firstdiv.setAttribute("class", "input-group mb-3");
      taskList.appendChild(firstdiv);
      const seconddiv = document.createElement("div");
      seconddiv.setAttribute("class", "input-group-text bg-transparent");
      firstdiv.appendChild(seconddiv);
      const checkbox = document.createElement("input");
      checkbox.setAttribute("class", "form-check-input mt-0");
      checkbox.setAttribute("id", "checkbox");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("value", "");
      checkbox.setAttribute("arial-label", "Checkbox for following text input");
      seconddiv.appendChild(checkbox);
      const taskinput = document.createElement("input");
      taskinput.setAttribute("type", "text");
      taskinput.setAttribute(
        "class",
        "form-control bg-transparent text-success"
      );
      taskinput.setAttribute("arial-label", "Text input with checkbox");
      taskinput.setAttribute("id", "task");
      taskinput.setAttribute("readonly", true);
      taskinput.setAttribute("value", addtaskinput);
      firstdiv.appendChild(taskinput);
      const editbutton = document.createElement("button");
      editbutton.setAttribute("class", "btn btn-success mx-2");
      const editText = document.createTextNode("Edit");
      editbutton.appendChild(editText);
      firstdiv.appendChild(editbutton);
      const deletebutton = document.createElement("button");
      deletebutton.setAttribute("class", "btn btn-danger");
      const deleteText = document.createElement("i");
      deleteText.setAttribute("class", "fa fa-trash");
      deletebutton.appendChild(deleteText);
      firstdiv.appendChild(deletebutton);
      const totalItems = document.querySelectorAll("#list-item").length;
      const totalcount = document.querySelector("#totalTasks");
      totalcount.innerText = totalItems;
    }
    document.addtask.reset();
  }
  return (
    <>
      <div className="container bg-transparent">
        <form name="addtask" onSubmit={handleSubmit}>
          <div className="form-floating mb-3 text-center">
            <input
              type="text"
              className={`form-control my-4 bg-transparent text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              id="floatingInput"
              placeholder="Create a new Task ..."
            />
            <label htmlFor="floatingInput">Create a new Task ...</label>
          </div>
        </form>
      </div>
    </>
  );
}

export default addtask;
