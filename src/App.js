import * as React from "react";

const ImageTile = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const imagesData = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7058328124135bfa72c43f164cc73e07fdf741ecf79e9ad5446b615af6ca8041?apiKey=8e2294479e31469089474744708d19eb&",
    alt: "Image description 1",
    className: "aspect-square w-[58px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/508a38c57454a8215ec6c42a992172c2450febd50318b4d4215de34a258739e1?apiKey=8e2294479e31469089474744708d19eb&",
    alt: "Image description 2",
    className: "mt-10 aspect-[1.02] w-[58px]",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e75ae1ceaab386a8af51fb4662be72b555d8bcf4d1f8d83b0d38f4e189db3ab7?apiKey=8e2294479e31469089474744708d19eb&",
    alt: "Image description 3",
    className: "mt-10 aspect-[1.16] w-[58px]",
  }
];

function DesignShowcase() {
  return (
    <main className="flex flex-col justify-center">
      <section className="flex overflow-hidden relative flex-col gap-5 justify-between pr-16 w-full min-h-[1152px] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <ImageTile
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/be55d2e6c73eb4d8f03f767474c94e5740af61855a530305e0dabe5a6134d45d?apiKey=8e2294479e31469089474744708d19eb&"
          alt=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1 justify-between pl-16">
            <div className="flex flex-col flex-1 items-center self-start pb-12 mt-16 max-md:hidden max-md:mt-10">
              {imagesData.map((data) => (
                <ImageTile key={data.src} src={data.src} alt={data.alt} className={data.className} />
              ))}
            </div>
            <div className="w-16 h-[1152px] max-md:hidden" />
          </div>
          <h1 className="flex-auto my-auto font-bold tracking-tighter-[193px] text-[183px] text-[NeutralForeground1.Rest] max-md:max-w-full max-md:text-4xl max-md:leading-10">
            Microsoft 365 UI Kit
          </h1>
        </div>
        <ImageTile
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7058328124135bfa72c43f164cc73e07fdf741ecf79e9ad5446b615af6ca8041?apiKey=8e2294479e31469089474744708d19eb&"
          alt="Decorative element"
          className="self-end aspect-square mt-[1039px] w-[52px] max-md:mt-10"
        />
      </section>
    </main>
  );
}
export default DesignShowcase;