export const parksMetadata: parksMetadataType[] = [
  {
    id: 1,
    image:
      "https://w3s.link/ipfs/bafybeicvriea4bd2537kcudmhelee6p7ia7bvqmlbzgp73yimzvsyev2oy",
    name: "Tayrona Natural Park",
    location: "Santa Marta",
    ownerAddress: "0xa653d77d16e944508DC087948bBb59668C383351",
  },
  {
    id: 2,
    image:
      "https://w3s.link/ipfs/bafkreifwzl6rkjylf76u6kdxhrsge2widbyosfxxpmcjp2uhh7gosn3ej4",
    name: "Guácharos Park",
    location: "Huila",
    ownerAddress: "0x40328690745e4Fd4ac3F469cAAd0705604C8277b",
  },
  {
    id: 3,
    image:
      "https://w3s.link/ipfs/bafkreid7k27qtrbmbhuwhxc33zd3irzlvh7mxdststjjm3tls2jarg6viq",
    name: "Gorgona National Natural Park",
    location: "Cauca",
    ownerAddress: "0x9d19c41De1D71Be072FAeCE30E5AB6519382E23C",
  },
];

type parksMetadataType = {
  id: number;
  image: string;
  name: string;
  location: string;
  ownerAddress: string;
};
