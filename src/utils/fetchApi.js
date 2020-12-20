import axios from "axios";
const fetchApi = async (resource, options = {}) => {
  const { params, data, method = "GET" } = options;

  return axios({
    baseURL: "https://supdevinci.nine1000.tech/",
    url: resource,
    method: method,
    data,
    params,
    headers: {
      "x-token":
        "3396fdc46637a8d8b88ea41bd4798aa11ae389e41345c15c7fcaa9fc413a855223e93e906e35537ec2ac7490fb193c3e594f4b0ba8e2daef738076c801952f4c3c87528ef0e62cd7ad78093cc8822ad7f1d6ba7a2a734203257c39534099b5d306bc0e9039b99f0698946b29890e9d20d3f9c73fa08f4bdf980a81ff9a03221b39be6267f5e8f16671b5cf9c0a6314c8ce41869f0b7f8aa107f8b0753aaabbb35966ca98c155554721857e8fb066315978c82b1501ae4c891da2e02f1878f886f219ebe8f7a25a6b0f5ba861fe5f169e852ca6de19a9cafd6916e39dd9e26686f0412b0d7f813ed1ecd250a41a6241c18d6c07119f37d2acd40b88f7a2cf7676"
    }
  }).then((res) => res.data);
};
export default fetchApi;
