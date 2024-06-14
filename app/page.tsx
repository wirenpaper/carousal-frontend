export default function Home() {
  return (
    <div>
      <h1 className="text-center p-8">Project 1: Carousel</h1>
      <div className="flex justify-between px-16">
        <div className="flex items-center">
          <div className="flex justify-center bg-black p-2 rounded-full w-10 text-white">
            ⬅
          </div>
        </div>
        <div className="bg-red-100 w-8/12 flex justify-center">
          <img className="h-96" src="https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
        </div>
        <div className="flex items-center">
          <div className="flex justify-center bg-black p-2 rounded-full w-10 text-white">
            ⮕
          </div>
        </div>
      </div>
    </div>
  );
}
