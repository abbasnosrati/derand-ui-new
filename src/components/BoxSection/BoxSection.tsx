const BoxSection = () => {
  return (
    <div>
      <div className="text-exampleColor hidden lg:flex text-sm font-shareTechMono -mt-[300px] above-1440:-mt-[250px] relative md:min-h-[1400px] box-section select-none z-30">
        <div className="box-container absolute right-[42.5%] top-[27%] custom-lg:right-[35%]">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex gap-5 items-end ">
              <div className="w-[124px] h-[124px] box-style">
                <BorderAnimate />
                <div>Chain-Agnostic</div>
              </div>
              <div className="max-w-[285px] font-lato -mb-[5px] leading-[16px]">
                Generate a random number on one chain and use it on any EVM and
                non-EVM chains. Thanks to Muon’ intrinsic chain-independant
                nature.
              </div>
            </div>
            <div className="number-box absolute left-[175px] top-[212px]">
              1
            </div>
            <div className=" w-[232px]  number-box-border rotate-[65deg] top-[107px] left-[58px]"></div>
            <div className=" w-[172px]  number-box-border rotate-[54deg] top-[190px] left-[87px]"></div>
            <div className=" w-[220px]  number-box-border rotate-[38deg] top-[192px] -left-[22px]"></div>
          </div>
        </div>

        <div className="box-container absolute right-[17%] above-1440:right-[25%] top-[32%] custom-lg:right-[7%] ">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col gap-5 ">
              <div className="w-[124px] h-[124px] box-style">
                <BorderAnimate />
                <div>Flexible</div>
              </div>
              <div className="max-w-[270px] font-lato -mb-[5px]">
                Due to the innate flexibility of MuonApps, devs can customize
                the generation process according to their unique needs.
              </div>
            </div>
            <div className="number-box absolute -left-[105px] top-[175px]">
              2
            </div>
            <div className=" w-[200px]  number-box-border -rotate-[59deg] top-[85px] -left-[152px]"></div>
            <div className=" w-[134px]  number-box-border -rotate-[43deg] top-[170px] -left-[116px]"></div>
            <div className=" w-[204px]  number-box-border -rotate-[28deg] top-[172px] -left-[67px]"></div>
          </div>
        </div>

        <div className="box-container absolute left-[16%] top-[42%]  ">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col gap-5 ">
              <div className="w-[124px] h-[124px] box-style">
                <BorderAnimate />
                <div>Tamper-Proof</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Leveraging Muon modular security stack (Muon TSS, EigenLayer , &
                a Shield Server) makes the random number highly
                tamper-resistant.
              </div>
            </div>

            <div className="number-box absolute left-[401px] top-[132px] custom-lg:left-[280px] custom-lg:top-[118px]">
              3
            </div>
            <div className=" w-[350px] custom-lg:w-[230px] number-box-border rotate-[22deg] top-[65px] left-[112px] custom-lg:rotate-[30deg] custom-lg:top-[60px] custom-lg:left-[112px]"></div>
            <div className=" w-[315px] custom-lg:w-[195px] number-box-border rotate-[10deg] top-[150px] custom-lg:top-[144px] left-[130px]"></div>
            <div className=" w-[400px] custom-lg:w-[280px] number-box-border rotate-[8deg] top-[152px] custom-lg:top-[144px] left-[0]"></div>
          </div>
        </div>

        <div className="box-container absolute right-[19%] top-[55%] above-1440:right-[24%] custom-lg:right-[8%] custom-lg:top-[52%]">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col gap-5 ">
              <div className="w-[130px] h-[130px] box-style">
                <BorderAnimate />
                <div>Cost-Efficient</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Generating random numbers on DeRand is almost free. Just pay the
                gas fee for the blockchain and Muon.
              </div>
            </div>
            <div className="number-box absolute -left-[100px] top-[15px]">
              4
            </div>
            <div className=" w-[100px] number-box-border -rotate-[8deg] top-[7px] -left-[100px]"></div>
            <div className=" w-[180px] number-box-border -rotate-[5deg] top-[7px] -left-[50px]"></div>
            <div className=" w-[118px] number-box-border rotate-[34deg] top-[95px] -left-[110px]"></div>
          </div>
        </div>

        <div className="box-container absolute right-[52%] top-[69%] custom-lg:right-[50%] custom-lg:top-[65%]">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col  gap-5 custom-lg:flex-col custom-lg:items-start">
              <div className="w-[170px] h-[170px] box-style">
                <BorderAnimate />
                <div>Decentralized & Permission less</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Built on a network with hundreds of nodes, there is no central
                authority and different parties can run different components.
              </div>
            </div>
            <div className="number-box absolute left-[180px] -top-[100px]">
              5
            </div>
            <div className=" w-[196px] number-box-border -rotate-[29deg] -top-[50px] -left-[6px]"></div>
            <div className=" w-[108px] number-box-border -rotate-[60deg] -top-[52px] left-[146px]"></div>
            <div className=" w-[222px] number-box-border -rotate-[75deg] top-[58px] left-[88px]"></div>
          </div>
        </div>
        <div className="box-container absolute right-[25%] top-[77%] custom-lg:right-[17%] custom-lg:top-[72%] above-1440:right-[31%] above-1440:top-[77%]">
          <div className=" flex relative max-w-[500px]">
            <div className="box-1 flex flex-col gap-5 ">
              <div className="w-[168px] h-[168px] box-style">
                <BorderAnimate />
                <div>Easy-Implementation</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Implement DeRand with minimal code changes. The protocol
                structure is compatible with other VRF platforms including
                Chainlink.
              </div>
            </div>
            <div className="number-box absolute -left-[75px] -top-[180px]">
              6
            </div>
            <div className=" w-[258px] number-box-border rotate-[43deg] -top-[92px] -left-[60px]"></div>
            <div className=" w-[188px] number-box-border rotate-[68deg] -top-[88px] -left-[130px]"></div>
            <div className=" w-[300px] number-box-border rotate-[76deg] top-[15px] -left-[188px]"></div>
          </div>
        </div>
      </div>

      <div className="flex sm:justify-center pl-5 sm:md-0 flex-wrap items-center justify-center flex-row w-full lg:hidden text-whiteColor gap-10 mt-40 mb-40">
        <div className="box-container">
          <div className="">
            <div className="small_box">
              <div className="w-[124px] h-[124px] box-style-small">
                <BorderAnimate />
                <div>Chain-Agnostic</div>
              </div>
              <div className="max-w-[285px] font-lato -mb-[5px]">
                Generate a random number on one chain and use it on any EVM and
                non-EVM chains. Thanks to Muon’ intrinsic chain-independent
                nature.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box">
              <div className="w-[124px] h-[124px] box-style-small">
                <BorderAnimate />
                <div>Flexible</div>
              </div>
              <div className="max-w-[270px] font-lato -mb-[5px]">
                Due to the innate flexibility of MuonApps, devs can customize
                the generation process according to their unique needs.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box ">
              <div className="w-[124px] h-[124px] box-style-small">
                <BorderAnimate />
                <div>Tamper-Proof</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Leveraging Muon modular security stack (Muon TSS, EigenLayer , &
                a Shield Server) makes the random number highly
                tamper-resistant.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box ">
              <div className="w-[124px] h-[124px] box-style-small">
                <BorderAnimate />
                <div>Cost-Efficient</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Generating random numbers on DeRand is almost free. Just pay the
                gas fee for the blockchain and Muon.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box">
              <div className="w-[124px] h-[124px] box-style-small">
                <BorderAnimate />
                <div>Decentralized & Permission less</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Built on a network with hundreds of nodes, there is no central
                authority and different parties can run different components.
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="">
            <div className="small_box">
              <div className="w-[124px] h-[124px] box-style-small">
                <BorderAnimate />
                <div>Easy-Implementation</div>
              </div>
              <div className="max-w-[264px] font-lato -mb-[5px]">
                Implement DeRand with minimal code changes. The protocol
                structure is compatible with other VRF platforms including
                Chainlink.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxSection;

const BorderAnimate = () => {
  return (
    <div>
      <span className="animation-border-spin-x  dashing absolute left-0 top-0 border-whiteColor border-t border-dashed w-[200%] h-full opacity-40"></span>
      <span className="animation-border-spin-y border-r border-dashed top-0 left-0 absolute w-full h-[200%] border-whiteColor opacity-40"></span>
      <span className="animation-border-spin-yy animation-test  dashing absolute left-0 top-0  border-l border-dashed w-full h-[200%] border-whiteColor opacity-40"></span>
      <span className="animation-border-spin-xx absolute left-0 bottom-0 border-b border-dashed w-[200%] h-full border-whiteColor opacity-40"></span>
    </div>
  );
};
