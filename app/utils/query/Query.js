import Network from "../network/Network";
import axios from "axios";
import cookieCutter from 'cookie-cutter';
import cookiesNames from "../constant";
const CryptoJS = require("crypto-js");
import Utf8 from 'crypto-js/enc-utf8';

export default function getHeaderFunction() {
  try {
      const decrypted = CryptoJS.AES.decrypt(cookieCutter.get(cookiesNames.HOW_THIS_MEASUREMENT_IS), process.env.NEXT_PUBLIC_TITLE).toString(Utf8);
    // const decrypted =
    //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XHJcbiAgXCJ1c2VyTmFtZVwiIDogXCJ0aWFzaEBhZG1pbi5jb21cIixcclxuICBcImVtcGxveWVlSWRcIiA6IDIsXHJcbiAgXCJjb21wSWRcIiA6IDEsXHJcbiAgXCJzdWJDb21wSWRcIiA6IDEsXHJcbiAgXCJyb2xlXCIgOiBcImFkbWluXCIsXHJcbiAgXCJhdXRob3JpdGllc1wiIDogWyBdXHJcbn0iLCJpYXQiOjE3MTE5NTYyODIsImV4cCI6MTc3MjQzNjI4Mn0.KLYoaKSonup-vgmjtDRf0DOK3mYP3OSkgpEnr1UlqSUFiB-ETzkEF-MDpDQq9JBOI2eqCturXRRvO4FVP02esg";
    const headers = {
      Authorization: "Bearer " + decrypted,
      Accept: "application/json",
      // ContentType: 'multipart/related',
    };
    return headers;
  } catch (error) {
    return "";
  }
}
// get

export function get(end) {
  const headers = getHeaderFunction();
  // console.log(Network.network + end, { headers })
  return axios.get(Network.network + end, { headers });
}

// custom-get

export function customget(end, data) {
  const headers = getHeaderFunction();
    console.log(Network.network + end+data, { headers })
  return axios.get(Network.network + end + data, { headers });
}

// post

export function post(end, data) {
  const headers = getHeaderFunction();
  console.log(Network.network + end, data, { headers });
  return axios.post(Network.network + end, data, { headers });
}

// put

export function put(end, data) {
  const headers = getHeaderFunction();
  return axios.put(Network.network + end, data, { headers });
}
