
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { createClient } from "contentful";




const Gallery = () => {
  const [photo, setPhotoItems] = useState([]);
  const client = createClient({ space: "dgpo6cqzt962", accessToken:"1RQEPbsg_MvNznBjdm5GLcSzmIYiMNAnNgJtXAqOBc4" });

  useEffect(() => {
    const getAllEntries = async () => {
      try {
        await client.getEntries({content_type: "photos"}).then((entries) => {
          setPhotoItems(entries);
        });
      } catch (error) {
        console.log(`Error fetching photos ${error}`);
      }
    };
    getAllEntries();
  }, []);

  return (
    <div className="">
        
        <ul className="gallery-dense">
        {photo?.items?.map((post) => (
          
            <li key={post.sys.id}>
            <NavLink to={`/photos/${post.sys.id}`}>

                  <img className="" src={`${post.fields?.image?.fields?.file?.url}?w=800&h=800`} />
               
                </NavLink>
            </li>
         
        ))}
        </ul>
    </div>
  );
};

export default Gallery;

