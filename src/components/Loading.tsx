import TextTitle from "./TextTitle";

export default function Loading() {
  return (
    <div className="m-4 bg-purple flex flex-col items-center justify-center w-72 h-96 p-4 text-center rounded">
      <TextTitle className="mb-6 px-6 "> </TextTitle>
      <p className=" p-6 mb-6 text-sm"></p>

      <div className="flex items-center ">
        <p className="p-2 px-4"></p>
      </div>
    </div>
  );
}
