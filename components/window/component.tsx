import { useRouter } from "next/router";

function MacOSWindow({
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
      className={`border border-white rounded-3xl overflow-hidden bg-[#2A303C] `}
      style={{
        width: full ? "100%" : `${size}%`,
        height: full ? "100%" : `${size}%`,
      }}
    >
        <div
          className="h-6 flex justify-between"
          style={{
            width: size <= 10 ? `10px` : "4%",
            marginTop: size >= 50 ? `${16 * (size / 100)}px` : "10px",
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
{children}
    </div>
  );
}

export default MacOSWindow;
