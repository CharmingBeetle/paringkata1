function getOrderInfo(obj) {

      const newObj = { ...obj };
      for (let key in newObj) {
        if (key !== "userId" && key !== "shippingAddress" && key !== "orderId") {
          delete newObj[key];
        }
      }
      console.log(newObj)
      return newObj;
    }
module.exports = getOrderInfo;
