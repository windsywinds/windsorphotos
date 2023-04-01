import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { NavLink, useParams } from "react-router-dom";

const GalleryItem = () => {


const [photo, setSinglePhoto] = useState([]);
let { id } = useParams();
const client = createClient({ space: "dgpo6cqzt962", accessToken:"1RQEPbsg_MvNznBjdm5GLcSzmIYiMNAnNgJtXAqOBc4" });

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
          <h1>Single Image Item</h1>
          <section className="project-card">
          <h1 className="scroll-effect">{photo?.fields?.title}</h1>
          <img src={`${photo?.fields?.image.fields?.file?.url}?w=1000&h=1000`} />
         
        </section>
          
      </div>
      );
}

export default GalleryItem;
