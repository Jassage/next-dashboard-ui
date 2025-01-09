import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/*SEARCH BAR*/}
      <div className="hidden md:flex items-center gap-2 rounded-full text-xs ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          className=" w-[200px] outline-none p-2 bg-transparent"
          type="text"
          placeholder="Search..."
        />
      </div>
      {/* ICON AND USER PROFILE*/}
      <div className="flex items-center gap-4 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="bell" width={20} height={20} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/announcement.png" alt="bell" width={20} height={20} />
          <div className="-top-3 -right-3 w-5 h-5 bg-purple-500 rounded-full absolute text-white text-xs flex items-center justify-center">
            1
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-sm leading-3 font-medium">Jaslin</span>
          <span className="text-[10px] text-gray-400 text-right">Admin</span>
        </div>
        <Image
          src="/avatar.png"
          alt="profile"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
