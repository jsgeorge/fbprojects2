const initState = {
  projects: [
    { id: "1", author: "Jim Beam", title: "Project 1", content: " content 1" },
    {
      id: "2",
      author: "Johnny Walker",
      title: "Project 2",
      content: "content 2"
    }
  ]
};
const projReducer = (state = initState, action) => {
  switch (action.type) {
    // case "GET_PROJECTS":
    //   return state;
    case "CREATE_PROJECT":
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error");
      break;
    case "UPDATE_PROJECT":
      return state;
    case "UPDATE_PROJECT_ERROR":
      console.log("update project error");
      break;
    case "CHANGE_STATUS":
      return state;
    case "CHANGE_STATUS_ERROR":
      console.log("change status error");
      break;
    case "DELETE_PROJECT":
      return state;
    case "DELETE_PROJECT_ERROR":
      console.log("delete project error");
      break;
    default:
      return state;
  }
};
export default projReducer;
