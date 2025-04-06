import { hotelData } from "@/components/data/data";
import SectionHeading from "@/components/Helper/SectionHeading";
import HotelCord from "./HotelCord";

const Hotel = () => {
  return (
    <div className="pt-20 pb-20">
      {/* Section Heading */}
      <SectionHeading Heading="Recommended Hotels" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {/* Hotel Cords */}
              {
                  hotelData.map((data) => {
                      return (
                          <div key={data.id}>
                              <HotelCord hotel={data} />
                          </div>
                      )
                  })
        }
      </div>
    </div>
  );
};

export default Hotel;
 