import { screen } from "@testing-library/dom"
import { PreviewImage, ImageType } from "../types"
import { render } from "@testing-library/react"
import { Preview } from "./Preview"

describe("Preview", () => {
  const previewData : PreviewImage = {
    url: "https://unsplash.it/145/125/?random",
    caption: "Caption",
    imageType: ImageType.PRIMARY
  }

  const promoTitle = "Title"

  describe("with image and title", () => {
    it("renders with the Image and title", async () => {
      render(<Preview previewImage={previewData} promoTitle={promoTitle}/>)
      expect(screen.queryByText("Title")).toBeInTheDocument()
    })
  })
})