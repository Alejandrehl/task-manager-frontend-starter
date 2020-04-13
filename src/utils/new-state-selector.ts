const newStateSelector = (action: string, status: string): String => {
  switch (action) {
    case "FORWARD":
      switch (status) {
        case "OPEN":
          return "IN_PROGRESS";
        case "IN_PROGRESS":
          return "DONE";
        default:
          return status;
      }
    case "BACKWARD":
      switch (status) {
        case "DONE":
          return "IN_PROGRESS";
        case "IN_PROGRESS":
          return "OPEN";
        default:
          return status;
      }
    default:
      return status;
  }
};

export default newStateSelector;
