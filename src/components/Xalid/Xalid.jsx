import React from 'react'
import './Xalid.css'
import img from '../../assets/khimg.jpg'

const stats = [
  { value: "3", label: "Locations" },
  { value: "1995", label: "Founded" },
  { value: "65+", label: "Staff Members" },
  { value: "100%", label: "Satisfied Customers" },
];

const Xalid = () => {
  return (
    <section className="bg-[#f9f9f7] px-6 py-24">
      <div className="mx-auto grid max-w-[1296px] items-center gap-12 lg:grid-cols-2">
        <div className="max-w-[610px]">
          <h2 className="font-['Playfair_Display',serif] text-5xl leading-[1.15] text-[#2b2b24] md:text-[56px]">
            A little information for our valuable guest
          </h2>

          <p className="mt-6 max-w-[540px] font-['DM_Sans',sans-serif] text-base leading-6 text-[#4a4a42]">
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex h-[174px] flex-col items-center justify-center rounded-lg border border-[#e6e6e1] bg-white"
              >
                <span className="font-['Playfair_Display',serif] text-5xl text-[#2b2b24]">
                  {item.value}
                </span>
                <span className="mt-3 font-['DM_Sans',sans-serif] text-base text-[#2b2b24]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={img}
            alt="Chef preparing fresh vegetables"
            className="h-[680px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Xalid;
