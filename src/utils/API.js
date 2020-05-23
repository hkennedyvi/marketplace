import axios from "axios";

export default {
    getProducts: function() {
      return axios({
        "method":"GET",
        "url":"https://amazon-price1.p.rapidapi.com/search?keywords=macbook&marketplace=US",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"amazon-price1.p.rapidapi.com",
        "x-rapidapi-key":"51ffaf1604msh7f61a0389b85241p102513jsn8af4a1abc931",
        "useQueryString":true
        },"params":{
        // "asin":"124333",
        "marketplace":"US"
        }
        })
    }
  };