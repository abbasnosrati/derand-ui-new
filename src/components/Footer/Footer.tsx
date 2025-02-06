import { useState } from "react";
import ScrambleText from "../../helper/ScrambleText";

// font-quantico
const Footer = () => {
  const [hoverDiscord, setHoverDiscord] = useState(false);
  const [hoverTwitter, setHoverTwitter] = useState(false);
  const [hoverGitHub, setHoverGitHub] = useState(false);
  const [hoverMedium, setHoverMedium] = useState(false);
  return (
    <div className="text-whiteColor m-0 w-full above-lg:h-[620px] h-[240px] footer">
      <div className="flex w-full h-full border-b border-opacity bf-">
        <div className="w-full h-full border-r  border-opacity flex flex-col justify-end">
          <div className="footer-row-h  border-b border-opacity flex b-">
            <div className="w-full h-full"></div>
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full"></div>
          </div>
          <div className="footer-cel">
            <div className="w-full h-full"></div>
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full"></div>
          </div>
          <div className=" flex w-ful p-0 above-lg:pl-1">
            <div className="w-[66.5%] border-opacity border-b flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center relative">
                <img
                  src="./assets/images/footer/derand-logo-footer.svg"
                  alt=""
                  width={"60%"}
                />
                <p className="footer-text !font-montserrat absolute bottom-1 sm:right-28 right-6">
                  By muon
                </p>
              </div>
            </div>
            <div className="w-[33.5%]  border-l border-opacity">
              <div className="footer-row-h w-full  border-b border-opacity "></div>
              <div className=" footer-row-h w-full border-b border-opacity "></div>
            </div>
          </div>

          <div className="footer-cel">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style footer-txt-container ">
              {/* <p className="footer-text !font-montserrat">By muon</p> */}
            </div>
            <div className="w-full h-full"></div>
          </div>
          <div className="footer-row-h   flex">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full"></div>
          </div>
        </div>
        {/* Right side */}
        <div className="w-full h-full flex flex-col justify-end">
          <div className="footer-cel">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full "></div>
            <div className="w-full h-full footer-border-style"></div>
          </div>
          <div className="footer-cel">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style footer-txt-container">
              <p
                onClick={() => window.open("https://x.com/DeRand_dev")}
                className="footer-text cursor-pointer"
                onMouseEnter={() => setHoverTwitter(true)}
                onMouseLeave={() => setHoverTwitter(false)}
              >
                {hoverTwitter ? (
                  <ScrambleText isAlphabet={true} value="X" />
                ) : (
                  "X"
                )}
              </p>
            </div>
            <div className="w-full h-full footer-border-style"></div>
          </div>
          <div className="footer-row-h flex">
            <div className="w-full h-full border-r border-b border-opacity"></div>
            <div className="w-full h-full border-r border-b  border-opacity footer-txt-container">
              <p
                onClick={() => window.open("https://discord.gg/muonnetwork")}
                className="footer-text cursor-pointer"
                onMouseEnter={() => setHoverDiscord(true)}
                onMouseLeave={() => setHoverDiscord(false)}
              >
                {hoverDiscord ? (
                  <ScrambleText isAlphabet={true} value="Discord" />
                ) : (
                  "Discord"
                )}
              </p>
            </div>
            <div className="w-full h-full border-r border-b  border-opacity"></div>
          </div>
          <div className="footer-row-h border-b border-opacity flex">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style footer-txt-container">
              <p
                className="footer-text cursor-pointer"
                onMouseEnter={() => setHoverMedium(true)}
                onMouseLeave={() => setHoverMedium(false)}
              >
                {hoverMedium ? (
                  <ScrambleText isAlphabet={true} value="Medium" />
                ) : (
                  "Medium"
                )}
              </p>
            </div>
            <div className="w-full h-full footer-border-style"></div>
          </div>
          <div className="footer-cel">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style footer-txt-container">
              <p
                onClick={() => window.open("https://x.com/DeRand_dev")}
                className="footer-text cursor-pointer"
                onMouseEnter={() => setHoverGitHub(true)}
                onMouseLeave={() => setHoverGitHub(false)}
              >
                {hoverGitHub ? (
                  <ScrambleText isAlphabet={true} value="Github" />
                ) : (
                  "Github"
                )}
              </p>
            </div>
            <div className="w-full h-full footer-border-style"></div>
          </div>
          <div className="footer-row-h   flex">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
