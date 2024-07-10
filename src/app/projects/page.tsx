import React from "react";

const page: React.FC = () => {
  return (
    <div className="mt-[80px] p-8">
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  let imageUrl =
    "https://th.bing.com/th/id/R.c47bc32645b61bccbd05d2d8af5c54ec?rik=WIk8upr%2f%2b1kX6w&pid=ImgRaw&r=0";
  let title = "sarad's to do app";
  let description =
    "this is a to do app make a card with tailwind with smooth animation which contains image, title ,description and two buttons";
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:border hover:cursor-pointer hover:border-white transition-all">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-200 text-base">{description}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Button 1
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Button 2
        </button>
      </div>
    </div>
  );
};
export default page;
