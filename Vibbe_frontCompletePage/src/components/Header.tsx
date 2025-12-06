import LogoBlack from "@/assets/Vibbe black text logo 1.png";

const Header = () => {
  return (
    <header className="w-full">
      <div className="py-2 px-6 md:px-12 border-b border-foreground/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={LogoBlack} alt="Vibbe" className="h-15" />
          </div>

          <div>
            <button className="linear-gradient rounded px-4 py-1 text-sm font-medium border-2 border-black bg-white text-black">
              Try Beta
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;