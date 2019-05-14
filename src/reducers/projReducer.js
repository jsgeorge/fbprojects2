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
    default:
      return state;
  }
};
export default projReducer;
