import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { NavLink, useParams } from "react-router-dom";

const GalleryItem = () => {


const [photo, setSinglePhoto] = useState([]);
let { id } = useParams();
const client = createClient({
  space: "b80vzvhdgw0j",
  accessToken: "Mwv9--O7Gf5LHvE3jRfvYiJ6wFqw4cB26TRSkJK5its"
});

  useEffect(() => {
    const getEntryById = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setSinglePhoto(entries);
        });
      } catch (error) {
        console.log(`Error fetching authors ${error}`);
      }
    };
    getEntryById();
  }, [id]);

    return (
      <div>
        
        
          <div className="flex flex-row flex-wrap justify-between w-[80vw]">
          <section className="w-[100%] md:w-[70%] bg-cover bg-no-repeat flex flex-col pointer-events-none" style={{ backgroundImage: `url(${photo?.fields?.image.fields?.file?.url}?w=1500&h=1500)`, height: "calc(70vh - 0px)" }}>          
        </section>
        <div className="md: text-left justify-center items-center w-[25%]">

        <h1 className="text-4xl pb-9">{photo?.fields?.title}</h1>

        <p className="text-base pt-9 pb-9">{photo?.fields?.description}</p>

        <div className="pt-9">
          <NavLink to="/prints#!/TestPicture/p/543438695/category=0">
        <button className="text-center inline-block px-4 py-2 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-slate-700 to-slate-600 drop-shadow-md hover:stroke-white">See in Shop</button></NavLink>
        </div>
        </div>
          </div>

      </div>
      );
}

export default GalleryItem;
