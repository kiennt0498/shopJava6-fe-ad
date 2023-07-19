export const insterCategory = (category, navigate) => async (dispatch) => {
  try {
    console.log("insert: " + category);
  } catch (error) {
    console.log("error: " + error);
  }
  navigate("/category/list");
};
