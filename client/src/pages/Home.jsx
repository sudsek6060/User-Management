import React from "react";

const Home = () => {
  return (
    <div className="h-[400px]  bg-gradient-to-t from-gray-200 to-red-100 ">
      <div className="max-w-[35%] mx-auto text-center flex flex-col gap-8">
        <p className="text-sm font-semibold mt-2">
          ERP INTEGRATION PLATFORM FOR DISTRIBUTORS
        </p>
        <h1 className="text-5xl font-bold">
          Make your systems talk to each other.
        </h1>
        <p className="text-lg">
          DCKAP Integrator connects your ERP system with online store, CRM,
          inventory, accounting, logistics, marketplaces, and other
          applications—so data flows between them automatically and in real
          time.
        </p>
        <button className="bg-red-400 rounded-full max-w-[800px] p-4 mx-auto text-xl">
          Get Demo
        </button>
      </div>
      <div className="my-6">
        <h1 className="text-center font-extrabold text-6xl">
          Why DCKAP Integrator?
        </h1>
        <div className="flex  gap-28 w-[85%] mx-auto my-8">
          <div className="flex flex-col gap-6 my-auto">
            <h1 className="text-2xl font-semibold">
              It’s surprisingly simple.
            </h1>
            <p className="text-lg">
              Connect your systems in a few clicks with our out-of-the-box
              pipelines. Or let our team customize integrations for you for any
              system that has an API.
            </p>
            <p className="text-lg">
              Easily manage exceptions, make changes, and view detailed
              analytics and forecasts.
            </p>
          </div>
          <img
            src="https://www.dckap.com/wp-content/uploads/2024/02/Simple-to-use.png"
            alt="image"
          />
        </div>
        <div className="flex gap-28 w-[85%] mx-auto my-8">
          <img
            src="https://www.dckap.com/wp-content/uploads/2024/02/API_Surprisingly-powerful.png"
            alt="image"
          />
          <div className="flex flex-col gap-6 my-auto">
            <h1 className="text-2xl font-semibold">
              And surprisingly powerful.
            </h1>
            <p className="text-lg">
              Set it, test it, and forget it. DCKAP hums reliably in the
              background, no maintenance needed.
            </p>
            <p className="text-lg">
              Automated, bi-directional transfers work in real-time, or at
              preset intervals. And there’s no limit to the amount of data you
              can sync.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
