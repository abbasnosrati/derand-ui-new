const Footer = () => {
  return (
    <div className="text-whiteColor m-0 w-full above-lg:h-[420px] h-[200px] -mt-10 footer">
      <div className="flex w-full h-full border-b border-opacity ">
        <div className="w-full h-full border-r  border-opacity flex flex-col justify-end">
          <div className="footer-row-h  border-b border-opacity flex">
            <div className="w-full h-full"></div>
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full"></div>
          </div>
          <div className="footer-cel">
            <div className="w-full h-full"></div>
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full"></div>
          </div>
          <div className="footer-row-h  flex">
            <div className="w-full h-full "></div>
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full border-b border-opacity"></div>
          </div>
          <div className="footer-row-h   border-b border-opacity flex">
            <div className="w-full h-full "></div>
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full "></div>
          </div>
          <div className="footer-cel">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style footer-txt-container ">
              <p className="footer-text">By muon</p>
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
        <div className="w-full h-full  flex flex-col justify-end">
          <div className="footer-cel">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full "></div>
            <div className="w-full h-full footer-border-style"></div>
          </div>
          <div className="footer-cel">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style footer-txt-container">
              <p className="footer-text">Mediume</p>
            </div>
            <div className="w-full h-full footer-border-style"></div>
          </div>
          <div className="footer-row-h  flex">
            <div className="w-full h-full border-r border-b border-opacity"></div>
            <div className="w-full h-full border-r border-b  border-opacity footer-txt-container">
              <p className="footer-text">Discord</p>
            </div>
            <div className="w-full h-full border-r border-b  border-opacity"></div>
          </div>
          <div className="footer-row-h   border-b border-opacity flex">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style footer-txt-container">
              <p className="footer-text">Github</p>
            </div>
            <div className="w-full h-full footer-border-style"></div>
          </div>
          <div className="footer-cel">
            <div className="w-full h-full footer-border-style"></div>
            <div className="w-full h-full footer-border-style footer-txt-container">
              <p className="footer-text">Twitter</p>
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