import axios from "axios";

export function createOrder(producto) {
  return async function (dispatch) {
    console.log("action este");
    console.log(producto);
    try {
      var data = await axios.post(`/create-orden`, producto);
      return dispatch({
        type: "CREATE_ORDER",
        payload: data.data.init_point,
      });
    } catch (error) {
      return { msg: "Ha ocurrido un error" };
    }
  };
}
