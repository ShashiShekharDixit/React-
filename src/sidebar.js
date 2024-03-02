const ImageElement = ({ src, altText, aspectRatio }) => (
  <img loading="lazy" src={src} alt={altText} className={`mt-10 aspect-${aspectRatio} w-[58px]`} />
);

const ImageGallery = () => {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7058328124135bfa72c43f164cc73e07fdf741ecf79e9ad5446b615af6ca8041?apiKey=8e2294479e31469089474744708d19eb&", alt: "Image description 1", aspectRatio: "square" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/508a38c57454a8215ec6c42a992172c2450febd50318b4d4215de34a258739e1?apiKey=8e2294479e31469089474744708d19eb&", alt: "Image description 2", aspectRatio: "[1.02]" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e75ae1ceaab386a8af51fb4662be72b555d8bcf4d1f8d83b0d38f4e189db3ab7?apiKey=8e2294479e31469089474744708d19eb&", alt: "Image description 3", aspectRatio: "[1.16]" },
  ];

  return (
    <nav className="flex flex-col flex-1 items-center self-start pb-12 mt-16 max-md:hidden max-md:mt-10">
      {images.map((img, index) => (
        <ImageElement key={index} src={img.src} altText={img.alt} aspectRatio={img.aspectRatio} />
      ))}
    </nav>
  );
};

const Microsoft365UI = () => {
  return (
    <section className="flex relative gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
      <ImageGallery />
      <div className="flex-auto my-auto font-bold tracking-tighter leading-[193px] text-[183px] text-[NeutralForeground1.Rest] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Microsoft 365 UI Kit
      </div>
    </section>
  );
};

export default Microsoft365UI;