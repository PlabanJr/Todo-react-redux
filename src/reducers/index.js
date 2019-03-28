const todo = (
  state = {
    filter: "",
    todoArr: [
      {
        caption: "test1",
        isCompleted: false
      },
      {
        caption: "test2",
        isCompleted: true
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case "ADD":
      state = {
        filter: state.filter,
        todoArr: [
          ...state.todoArr,
          { caption: action.caption, isCompleted: false }
        ]
      };

      break;
    case "DELETE":
      state.todoArr.splice(action.id, 1);
      state = {
        filter: state.filter,
        todoArr: [...state.todoArr]
      };
      break;
    case "TOGGLE":
      state.todoArr[action.id].isCompleted = !state.todoArr[action.id]
        .isCompleted;

      state = {
        filter: state.filter,
        todoArr: [...state.todoArr]
      };
      break;
    case "UPDATE":
      state.todoArr[action.id].caption = action.caption;
      state = {
        filter: state.filter,
        todoArr: [...state.todoArr]
      };
      break;
    case "MARK_ALL":
      var done = 0;
      state.todoArr.map((task, i) => {
        if (!task.isCompleted) {
          task.isCompleted = !task.isCompleted;
          done++;
        }
      });

      if (done === 0) {
        state.todoArr.map((task, i) => {
          task.isCompleted = !task.isCompleted;
        });
      }

      state = {
        filter: state.filter,
        todoArr: [...state.todoArr]
      };
      break;
    default:
      state = {
        filter: state.filter,
        todoArr: [...state.todoArr]
      };
      break;
  }

  switch (action.filter) {
    case "SHOW_ALL":
      state = {
        filter: "SHOW_ALL",
        todoArr: [...state.todoArr]
      };
      break;
    case "SHOW_DONE":
      state.filter = "SHOW_DONE";
      state = {
        filter: "SHOW_DONE",
        todoArr: [...state.todoArr]
      };
      break;
    case "SHOW_INCOMPLETE":
      state = {
        filter: "SHOW_INCOMPLETE",
        todoArr: [...state.todoArr]
      };
      break;
    default:
      state = {
        filter: "",
        todoArr: [...state.todoArr]
      };
      break;
  }
  return state;
};

export default todo;
