// const data = [
//   {
//     id: 1,
//     title: "Decentralized & Permissionless",
//     vrf: true,
//     DeRNG: true,
//     vrfDes: null,
//     DeRenDes: null,
//   },
//   {
//     id: 2,
//     title: "Multiple random numbers in one tx",
//     vrf: true,
//     DeRNG: true,
//     vrfDes: null,
//     DeRenDes: null,
//   },
//   {
//     id: 3,
//     title: "Useable on Off-chain tools",
//     vrf: false,
//     DeRNG: true,
//     vrfDes: null,
//     DeRenDes: null,
//   },
//   {
//     id: 4,
//     title: "Modular",
//     vrf: false,
//     DeRNG: true,
//     vrfDes: null,
//     DeRenDes: null,
//   },
//   {
//     id: 5,
//     title: "Multi chain Fee Structure",
//     vrf: false,
//     DeRNG: true,
//     vrfDes: null,
//     DeRenDes: null,
//   },
//   {
//     id: 6,
//     title: "Flexible (programmable)",
//     vrf: false,
//     DeRNG: true,
//     vrfDes: null,
//     DeRenDes: null,
//   },
//   {
//     id: 7,
//     title: "Protocol fee amount",
//     vrf: null,
//     DeRNG: null,
//     vrfDes: "Depends on the chain/project",
//     DeRenDes: "Flat fee for all networks",
//   },
//   {
//     id: 8,
//     title: "Supported Chains",
//     vrf: null,
//     DeRNG: null,
//     vrfDes: "7 chains only ",
//     DeRenDes: "All chains (EVM & Non-EVM)",
//   },
// ];
const Details = () => {
  return (
    <div className="details flex relative items-center justify-center lg:min-h-[1500px] lg:-mt-72 overflow-hidden">
      <img
        className="absolute right-0"
        src="./assets/images/charts/chart-bg.svg"
        alt=""
      />
      <div className="mb-40">
        <img
          className="ml-[17px] px-10 hidden above-1440:flex"
          src="./assets/images/charts/chart.svg"
          alt=""
        />

        <img
          className="md:ml-[17px] px-2 md:px-10 flex above-1440:hidden"
          src="./assets/images/charts/chart-m.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Details;
