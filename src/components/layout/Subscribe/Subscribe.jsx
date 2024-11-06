export const Subscribe = () => {
  return (
    <div className='bg-[#f5f5f5] w-full px-6 py-16 '>
      <div className='w-full mx-auto flex flex-col gap-6 items-center text-center'>
        <h2 className='mb-2 text-4xl font-bold'>Want MauiMee Access?</h2>
        <p className='text-[0.9rem] max-w-lg leading-relaxed font-light '>
          Join our email list to catch new limited edition prints, exclusive
          collaborations with Hawaiian artists, and all the latest Aloha vibes.
        </p>
        <div className='w-full flex flex-col md:flex-row max-w-lg gap-2'>
          <input
            aria-label='Enter Your Email Address'
            autoComplete='off'
            className='flex-1 rounded px-4 py-3 
             border 
             transition-all ease-in-out
             font-bold
             focus:border-customFooterBackground
             focus:ring-1 focus:ring-customFooterBackground
             focus:outline-none text-[0.9rem] tracking-[1.4px]'
            type='text'
            placeholder='Enter Your Email Address'
          />
          <button className='rounded font-bold text-sm font-inter uppercase transition-all bg-customFooterBackground text-white px-5 py-3 hover:bg-primary tracking-[1.7px]'>
            Sign Up
          </button>
        </div>
        <span className='text-sm'>
          Note: You can opt-out at any time. See our{" "}
          <strong className='underline'>Privacy Policy</strong> and{" "}
          <strong className='underline'>Terms</strong>.
        </span>
      </div>
    </div>
  );
};
