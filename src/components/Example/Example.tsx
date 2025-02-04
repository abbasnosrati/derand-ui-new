const Example = () => {
  return (
    <div className="example-section text-whiteColor text-[12px] justify-center flex font-shareTechMono relative min-h-[700px] lg:min-h-[1000px]  px-5">
      <img
        className="absolute -top-[235px] right-0"
        src="./assets/images/bg/exampleSectionBg.svg"
        alt=""
      />
      <div className=" flex flex-col items-center w-full max-w-[618px] relative border-l pt-[29px] above-lg:pl-[45px] max-h-[400px] above-lg:max-h-[450px] lg:mt-[293px] mt-5 leading-[14px]">
        <div className="w-[74px] h-[1px] bg-exampleColor absolute left-0 top-0"></div>
        <div className="w-[74px] h-[1px] bg-exampleColor absolute left-0 bottom-0"></div>

        <div className="w-[30px] h-[30px] border-t border-r absolute top-0 right-0 border-exampleColor"></div>
        <div className="w-[30px] h-[30px] border-b border-r absolute bottom-0 right-0 border-exampleColor"></div>

        <pre className="w-full max-w-[600px] font-shareTechMono overflow-x-scroll md:overflow-hidden text-[12px] text-whiteColor">
          {`
    import ”@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol”;
    import ”@chainlink/contracts/src/v0.8/vrf/VRFConsumerBaseV2.sol”;
    contract DeRandConsumerExample is VRFConsumerBaseV2
    // state vars ...
    /**
    *DeRand protocol is compatible with chainlink VRF
    *Consumer contracts.
    *The only diffrence is the Coordinator address,
    *which is specific to each network.
    *
    *DeRand’s Coordinator address on Mumbai testnet:
    *0x54213dd1052A7c1B2e8a856234227f033Aff3D8b
    */
    constructor ()
        VRFConsumerBaseV2(0x54213dd1052A7c1B2e8a856234227f033Aff3D8B)`}
        </pre>

        <div className="w-full max-w-[250px] above-lg:max-w-[460px] h-[42px] above-lg:h-[53px] border border-exampleColor text-exampleColor flex  justify-center items-center rounded-[50%] cursor-pointer text-sm above-lg:text-[18px] mt-20">
          Full example on github
        </div>
      </div>
    </div>
  );
};

export default Example;
