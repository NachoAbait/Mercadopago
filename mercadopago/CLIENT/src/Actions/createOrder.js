import axios from "axios";
import { cleanOrder } from "./cleanOrden";

export function createOrder(producto) {
  return async function (dispatch) {
    console.log("en la action");
    console.log(producto);
    try {
      dispatch(cleanOrder());
      var data = await axios.post(`/create-orden`, producto);
      console.log("action recibiendo");
      return dispatch({
        type: "CREATE_ORDER",
        payload: data.data.init_point,
      });
    } catch (error) {
      return { msg: "Ha ocurrido un error" };
    }
  };
}
