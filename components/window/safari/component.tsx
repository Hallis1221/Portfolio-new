import { useRouter } from "next/router";
import { GiPadlock } from "react-icons/gi";

function SafariWindow({
  children,
  full = false,
  size = 100,
}: {
  children?: React.ReactNode;
  full?: boolean;
  size?: number;
}): JSX.Element {
  const router = useRouter();
  return (
    <div
      className={`border border-white rounded-3xl overflow-hidden bg-projects `}
      style={{
        width: full ? "100%" : `${size}%`,
        height: full ? "100%" : `${size}%`,
      }}
    >
      <div className="bg-white flex">
        <div
          className="h-10 flex justify-between "
          style={{
            width: size <= 10 ? `10px` : "4%",
            paddingTop: size >= 50 ? `${16 * (size / 100)}px` : "10px",
            marginLeft: size >= 50 ? `${30 * (size / 100)}px` : "12px",
          }}
        >
          <div
            className={` rounded-full bg-[#FC5753] border-[#DF4744] hover:bg-[#DF4744] hover:cursor-pointer`}
            style={{
              width: `${16 * (size / 100)}px`,
              height: `${16 * (size / 100)}px`,
              borderWidth: size >= 10 ? `1px` : "",
            }}
            onClick={() => {
              router.push("/");
              setTimeout(() => {
                window.scrollTo(0, 5000);

                setTimeout(() => {
                  function scrollTo(pos: number) {
                    window.scrollTo(0, pos);
                    if (pos > 0) setTimeout(() => scrollTo(pos - 10), 1);
                  }
                  scrollTo(window.scrollY - 1);
                }, 0);
              }, 10);
            }}
          />
          <div
            className={` bg-[#FDBF2D] border-[#E0A12D] rounded-full hover:bg-[#E0A12D] hover:cursor-pointer`}
            style={{
              width: `${16 * (size / 100)}px`,
              height: `${16 * (size / 100)}px`,
              borderWidth: size >= 10 ? `1px` : "",
            }}
          />
          <div
            className={`bg-[#2ED47A] border-[#1FB86B] rounded-full hover:bg-[#1FB86B] hover:cursor-pointer`}
            style={{
              width: `${16 * (size / 100)}px`,
              height: `${16 * (size / 100)}px`,
              borderWidth: size >= 10 ? `1px` : "",
            }}
          />
        </div>
        <div
          className="h-full w-full  flex justify-center "
          style={{
            paddingTop: size >= 50 ? `${8 * (size / 100)}px` : "5px",
            paddingBottom: size >= 50 ? `${8 * (size / 100)}px` : "5px",
            marginRight: size <= 10 ? `10px` : "4%",
          }}
        >
          <div className="outline outline-1 p-2 rounded-lg w-[50%] text-center text-lg">
            <GiPadlock className="inline mr-1 mb-1" />
            halvor.codes
          </div>
        </div>
      </div>
      <div className="backdrop-blur-sm h-full w-full">{children}</div>
    </div>
  );
}

export default SafariWindow;
