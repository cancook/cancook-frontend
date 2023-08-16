import { YoutubeCategory } from '@/types/youtube';
import CardCarousel from '@/components/common/Carousel/CardCarouselContainer';

type CategoryProps = {
  data: YoutubeCategory[];
};

const Category = ({ data }: CategoryProps) => {
  return (
    <>
      {data?.map((category) => (
        <CardCarousel key={`category-${category.title}`} contents={category} />
      ))}
    </>
  );
};

export default Category;
