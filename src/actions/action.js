export function addTask(task) {
  return {
    type: "ADD",
    caption: task
  };
}

export function deleteTask(id) {
  return {
    type: "DELETE",
    id: id
  };
}

export function toggle(id) {
  return {
    type: "TOGGLE",
    id: id
  };
}

export function markAll() {
  return {
    type: "MARK_ALL"
  };
}

export function update(id, task) {
  return {
    type: "UPDATE",
    id: id,
    caption: task
  };
}

export function showAll() {
  return {
    filter: "SHOW_ALL",
    type: ""
  };
}

export function showDone() {
  return {
    filter: "SHOW_DONE",
    type: ""
  };
}

export function showIncomplete() {
  return {
    filter: "SHOW_INCOMPLETE",
    type: ""
  };
}
