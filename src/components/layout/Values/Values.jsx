const Values = () => {
  // dummy data
  const values = [
    {
      title: "Island-Ready Comfort",
      description:
        "Breathable, flowing, and naturally relaxed, MauiMee shirts bring paradise to your everyday wardrobe. Button up, roll the sleeves, or leave it loose – our shirts move with you from beach to bistro.",
    },
    {
      title: "Heritage in Every Pattern",
      description:
        "From traditional motifs to modern designs, each print tells a story of Hawaiian culture. We collaborate with local artists and respect traditional patterns, ensuring every shirt carries authentic island spirit.",
    },
    {
      title: "Fabrics That Feel Like Paradise",
      description:
        "We choose premium natural fibers that embrace the island lifestyle. Our signature cotton-blend feels light as the trade winds, while our premium silk collection drapes like gentle ocean waves. ",
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-6 py-16 bg-[#ffffff] '>
      <h2 className='text-left font-mono font-bold md:text-4xl mb-5 '>
        The MauiMee Way
      </h2>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 text-left'>
        {values.map((value, index) => (
          <div key={index} className=''>
            <h3 className=' font-bold font-mono text-lg mb-2'>{value.title}</h3>
            <p className='text-[0.9rem] max-w-md mb-1 leading-relaxed  '>
              {value.description}
            </p>
            <a
              href='#'
              className='font-medium text-sm underline mt-auto tracking-widest hover:bg-primary transition-colors'
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
