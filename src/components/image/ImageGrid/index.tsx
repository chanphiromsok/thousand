import { Freeze } from "react-freeze";
import Stack from "../../views/Stack";
import One from "./One";
import Others from "./Others";
import Three from "./Three";
import Two from "./Two";

const ImageGrid = ({ images, type, onViewImage }: ImageGridProps) => {
  const countImage = images.length;

  return <One onViewImage={onViewImage} images={images} />;
  return (
    <Stack className="overflow-hidden rounded-lg">
      <Freeze freeze={countImage === 1 ? false : true}>
        <One onViewImage={onViewImage} images={images} />
      </Freeze>
      <Freeze freeze={countImage === 2 ? false : true}>
        <Two onViewImage={onViewImage} type={type} images={images} />
      </Freeze>
      <Freeze freeze={countImage === 3 ? false : true}>
        <Three onViewImage={onViewImage} type={type} images={images} />
      </Freeze>
      <Freeze freeze={countImage > 3 ? false : true}>
        <Others onViewImage={onViewImage} type={type} images={images} />
      </Freeze>
    </Stack>
  );
};

export default ImageGrid;
type GridType = "row" | "col";
export type ImageGridProps = {
  images: string[];
  type: GridType;
  onViewImage: (selectedAtIndex: number) => void;
};

export type GridProps = {
  images: string[];
  onViewImage: (selectedAtIndex: number) => void;
};
