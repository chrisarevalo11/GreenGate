export const createSeasonABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newCollection",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "idEvent",
        type: "uint256",
      },
    ],
    name: "CollectionCreated",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "uint8", name: "maxTickets", type: "uint8" },
      { internalType: "address", name: "addressMarkert", type: "address" },
    ],
    name: "createEvent",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "idEvent",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "seassons",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
];
