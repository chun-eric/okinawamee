const NotFound = () => {
  return (
    <div className='bg-[#ffffff] flex flex-col gap-4 justify-center items-center  min-h-screen w-full'>
      <div className='flex  flex-col gap-4 px-4 text-center'>
        <h2 className='text-3xl font-bold font-monospace'>
          Oops! It's a 404 error...
        </h2>
        <p className='text-md text-gray-600'>
          {" "}
          It seems like your page has gone missing.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
