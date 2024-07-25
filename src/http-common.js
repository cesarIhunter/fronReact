import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5101/api/",
  headers: {
    "Content-type": "application/json",
    "Authorization": "04577BA6-3E32-456C-B528-E41E20D28D79"
  }
});
