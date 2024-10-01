import Image from "next/image";
import { PreviewImage } from "../types";

export const Preview = ({ previewImage, promoTitle }: { previewImage: PreviewImage, promoTitle: string }) => (
  <div>
  <span className="left bg-white text-red-500 text-xs font-semibold inline-block align-middle relative top-12 w-2/3 h-8">
    { promoTitle }
  </span>
  <Image 
    src={previewImage.url} 
    alt={previewImage.caption}
    width={150}
    height={150}
  />
</div>
)