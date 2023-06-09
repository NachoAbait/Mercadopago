import mercadopago from "mercadopago";

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token:
      "TEST-948024641970932-060622-5e3e749cc08a1341b7acc3279437adbd-1393247038",
  });

  const producto = req.body;

  try {
    const result = await mercadopago.preferences.create({
      items: [
        {
          title: producto.titulo,
          unit_price: producto.precio,
          currency_id: "ARS",
          quantity: 1,
        },
      ],
      back_urls: {
        success: "https://prueba-mercadopago-production.up.railway.app/success",
        // failure: "http://localhost:3001/failure",
        // pending: "http://localhost:3001/pending",
      },
      notification_url: "https://8b15-181-231-63-46.sa.ngrok.io/webhook",
    });

    res.json(result.body);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const webhook = async (req, res) => {
  try {
    console.log(req.query);
    const payment = req.query;

    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
