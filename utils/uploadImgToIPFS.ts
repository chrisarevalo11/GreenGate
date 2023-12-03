import axios from "axios";

export const uploadImgToIPFS = async (imageFile: File) => {
  const formData = new FormData();
  formData.append("file", imageFile);

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

  const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
  return ImgHash;
};
