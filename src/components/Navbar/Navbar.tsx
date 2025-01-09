const Navbar = () => {
  const menuItems = ["What is Derand", "Explore dapps"];
  const socialItems = [
    "./assets/images/socials/git.svg",
    "./assets/images/socials/discord.svg",
    "./assets/images/socials/medime.svg",
    "./assets/images/socials/x.svg",
  ];
  return (
    <div className="flex text-[12px] z-50 justify-between md:text-base items-center pl-1 leading-normal font-shareTechMono border-b border-whiteColor text-white w-full max-w-[455px] h-[34px]">
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
  );
};

export default Navbar;
