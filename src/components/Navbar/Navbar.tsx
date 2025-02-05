const Navbar = () => {
  const menuItems = ["What is DeRand", "Explore dapps"];
  const socialItems = [
    "./assets/images/socials/git.svg",
    "./assets/images/socials/discord.svg",
    "./assets/images/socials/medime.svg",
    "./assets/images/socials/x.svg",
  ];
  return (
    <div className="flex flex-col above-lg:flex-row items-center gap-5 justify-between w-full">
      <div className="ml-2 above-lg:ml-[60px] above-1440:ml-[80px] flex items-start justify-start w-full">
        <img
          // width={131}
          // height={20}
          className="w-[140px] h-[20px] above-1440:w-[196px] above-1440:h-[27px]"
          src="./assets/images/footer/derand-logo.svg"
          alt=""
        />
      </div>
      <div className="flex flex-col above-lg:flex-row gap-5 above-lg:gap-10 w-full lg:w-auto">
        <div className="flex text-[12px] z-50 justify-between md:text-base items-center pl-1 leading-normal font-shareTechMono border-b border-whiteColor text-whiteColor w-full above-lg:w-[520px] above-1440:w-[650px] h-[34px]">
          {menuItems.map((item, index) => (
            <div className="cursor-pointer" key={index}>
              {item}
            </div>
          ))}
          <div className="flex gap-3 items-end justify-end min-w-[115px] mr-2">
            {socialItems.map((item, index) => (
              <img key={index} className="cursor-pointer" src={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
