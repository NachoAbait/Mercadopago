import mercadopago from "mercadopago";

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token:
      "TEST-948024641970932-060622-5e3e749cc08a1341b7acc3279437adbd-1393247038",
  });

  const result = await mercadopago.preferences.create({
    items: [
      {
        title: "Zapatilas nike",
        unit_price: 5000,
        currency_id: "ARS",
        quantity: 1,
      },
    ],
    back_urls: {
      success: "http://localhost:3001/success",
      failure: "http://localhost:3001/failure",
      pending: "http://localhost:3001/pending",
    },
    notification_url: "",
  });
  console.log("hola?")
  res.status(200).send(result.body);
};

export const webhook = (req, res) => {
  console.log("entre al webhook y este es el req.qery")
  console.log(req.query)
  res.send("webhook");
};
