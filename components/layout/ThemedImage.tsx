import Image from "next/image";
import darkbg from "../../public/bg dark.png";
import lightbg from "../../public/bg light.png";
import { useTheme } from "next-themes";
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";

function ThemedImage() {
  const context = useContext(LanguageContext);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let src = resolvedTheme === "light" ? lightbg : darkbg;

  return (
    <Image
      className="-z-10 opacity-70 object-cover top-0 right-0 fixed h-screen w-full overflow-hidden"
      src={src}
      width={3840}
      height={2160}
      alt={
        context.siteLanguage === "en"
          ? "Still from an FPV video"
          : "Ujęcie z filmu FPV"
      }
    />
  );
}

export default ThemedImage;
