import axios from "axios";

export function createOrder() {
  return async function (dispatch) {
    try {
      console.log("entre en la action");
      var data = await axios.post(`http://localhost:3001/create-orden`);
      console.log(data.data);

      return dispatch({
        type: "CREATE_ORDER",
        payload: data.data.init_point,
      });
    } catch (error) {
      return { msg: "Ha ocurrido un error" };
    }
  };
}
