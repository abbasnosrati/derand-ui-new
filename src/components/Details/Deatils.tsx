const data = [
  {
    id: 1,
    title: "Decentralized & Permissionless",
    vrf: true,
    DeRNG: true,
    vrfDes: null,
    DeRenDes: null,
  },
  {
    id: 2,
    title: "Multiple random numbers in one tx",
    vrf: true,
    DeRNG: true,
    vrfDes: null,
    DeRenDes: null,
  },
  {
    id: 3,
    title: "Useable on Off-chain tools",
    vrf: false,
    DeRNG: true,
    vrfDes: null,
    DeRenDes: null,
  },
  {
    id: 4,
    title: "Modular",
    vrf: false,
    DeRNG: true,
    vrfDes: null,
    DeRenDes: null,
  },
  {
    id: 5,
    title: "Multi chain Fee Structure",
    vrf: false,
    DeRNG: true,
    vrfDes: null,
    DeRenDes: null,
  },
  {
    id: 6,
    title: "Flexible (programmable)",
    vrf: false,
    DeRNG: true,
    vrfDes: null,
    DeRenDes: null,
  },
  {
    id: 7,
    title: "Protocol fee amount",
    vrf: null,
    DeRNG: null,
    vrfDes: "Depends on the chain/project",
    DeRenDes: "Flat fee for all networks",
  },
  {
    id: 8,
    title: "Supported Chains",
    vrf: null,
    DeRNG: null,
    vrfDes: "7 chains only ",
    DeRenDes: "All chains (EVM & Non-EVM)",
  },
];
const Details = () => {
  return (
    <div className=" flex items-center justify-center mb-[220px] mt-[200px]">
      <img
        className="ml-[17px] px-10"
        src="./assets/images/charts/chart.svg"
        alt=""
      />
    </div>
  );
};

export default Details;
