import axios from "axios";

const get = async (url) => {
    const respone = await axios.get(url, {
        headers: {
            Accept: "application/json",
            "Accept-Encoding": "identify"
        }
    });
    return respone.data;
}

export default { get };