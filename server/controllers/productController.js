const axios = require("axios");

const allProducts = async (req, res) => {
  try {
    const result = await axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    });

    // custom pagination as per requirement

    const pageNumber = req.query.page || 1;
    const limit = req.query.limit || 5;
    // const first = (pageNumber - 1) * limit;
    const first = 0;
    const last = pageNumber * limit;
    const dataToSend = result.data.splice(first, last);
    res.send(dataToSend);
  } catch (e) {
    console.log(e);
  }
};

module.exports = { allProducts };
