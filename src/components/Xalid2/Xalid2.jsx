import React from 'react'
import './Xalid2.css'

const reviews = [
  {
    title: "“The best restaurant”",
    text: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    name: "Sophire Robson",
    city: "Los Angeles, CA",
    avatar: "https://i.pravatar.cc/140?img=47",
  },
  {
    title: "“Simply delicious”",
    text: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
    name: "Matt Cannon",
    city: "San Diego, CA",
    avatar: "https://i.pravatar.cc/140?img=12",
  },
  {
    title: "“One of a kind restaurant”",
    text: "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
    name: "Andy Smith",
    city: "San Francisco, CA",
    avatar: "https://i.pravatar.cc/140?img=45",
  },
];

const Xalid2 = () => {
  return (
    <section className="w-[100%] bg-white px-6 py-24 flex justify-center bg-red-400">
      <div className="flex justify-center flex-col">
        <h2 className="text-center font-['Playfair_Display',serif] text-5xl text-[#2b2b24] md:text-[56px]">
          What Our Customers Say
        </h2>

        <div className="w-[100%]  mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 gap-[90px] mx-auto">
          {reviews.map((item) => (
            <div
              key={item.name}
              className="flex flex-col rounded-2xl bg-[#f9f9f7] p-9 "
            >
              <h3 className="font-['DM_Sans',sans-serif] text-2xl font-medium text-[#a8303f]">
                {item.title}
              </h3>

              <p className="mt-6 flex-1 font-['DM_Sans',sans-serif] text-lg leading-7 text-[#4a4a42]">
                {item.text}
              </p>

              <div className="mt-8 flex items-center gap-5 border-t border-[#e6e6e1] pt-8">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-[70px] w-[70px] rounded-full object-cover"
                />
                <div className="font-['DM_Sans',sans-serif]">
                  <p className="text-base font-bold text-[#2b2b24]">
                    {item.name}
                  </p>
                  <p className="mt-1 text-base text-[#4a4a42]">{item.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Xalid2;
