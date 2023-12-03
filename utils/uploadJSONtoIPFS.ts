import axios from "axios";

export const uploadJsonToIPFS = async (jsonData: object) => {
  const jsonString = JSON.stringify(jsonData);
  const jsonBlob = new Blob([jsonString], { type: "application/json" });

  const formData = new FormData();
  formData.append("file", jsonBlob, "data.json");

  const resFile = await axios({
    method: "post",
    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    data: formData,
    headers: {
      pinata_api_key: `${process.env.NEXT_PUBLIC_PINATA_API_KEY}`,
      pinata_secret_api_key: `${process.env.NEXT_PUBLIC_PINATA_API_SECRET}`,
      "Content-Type": "multipart/form-data",
    },
  });

  const jsonHash = `ipfs://${resFile.data.IpfsHash}`;
  return jsonHash;
};
