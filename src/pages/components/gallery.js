import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { createClient } from "contentful";

export default function Gallery() {
    const [photo, setPhotoItems] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const client = createClient({
    space: "b80vzvhdgw0j",
    accessToken: "Mwv9--O7Gf5LHvE3jRfvYiJ6wFqw4cB26TRSkJK5its"
  });

  const filterByTag = async (tag) => {
    try {
      const entries = await client.getEntries({
        content_type: "photos",
        "fields.tags": tag
      });
      setPhotoItems(entries.items);
      setSelectedTag(tag);
    } catch (error) {
      console.log(`Error fetching photos ${error}`);
    }
  };

  const filterBySearchQuery = async (query) => {
    try {
      const entries = await client.getEntries({
        content_type: "photos",
        "fields.tags[match]": query,
        "fields.?[case_insensitive]": true
      });
      setPhotoItems(entries.items);
    } catch (error) {
      console.log(`Error fetching photos ${error}`);
    }
  };

  const getAllEntries = async () => {
    try {
      const entries = await client.getEntries({ content_type: "photos" });
      setPhotoItems(entries.items);

      // Extract unique tags from entries
      const allTags = new Set();
      entries.items.forEach((item) => {
        if (item.fields.tags) {
          item.fields.tags.forEach((tag) => {
            allTags.add(tag);
          });
        }
      });

      setTags(Array.from(allTags));
      setSelectedTag(null);
    } catch (error) {
      console.log(`Error fetching photos ${error}`);
    }
  };

  useEffect(() => {
    getAllEntries();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    if ( e.target.value === "") {
      setSelectedTag(null);
    }
    filterBySearchQuery(e.target.value);
  };

  return (
    <div >
      <div className="flex items-start flex-wrap justify-start flex-shrink-0 flex-row text-left ml-0 gap-5 ">
        <p >Filters: </p>
        <button
          onClick={() => getAllEntries()}
          className={`hover:text-blue-500 duration-500 focus:text-blue-500 ${
            selectedTag === null ? 'text-blue-500' : '' // Add CSS class if selectedTag is null (i.e., "Show All" is selected)
          }`}
        >
          Show All
        </button>
        {tags.map((tag) => (
          <button
          key={tag}
          onClick={() => filterByTag(tag)}
          className={`hover:text-blue-500 duration-500 focus:text-blue-500 ${
            selectedTag === tag ? 'text-blue-500' : '' // Add CSS class if selectedTag matches current tag
          }`}
        >
          {tag}
        </button>
        ))}
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="border-0 px-5 py-0"
            placeholder="Search by keyword..."
          />
        </div>
      </div>
      <ul className="gallery-dense">
        {photo?.map((post) => (
          <li key={post.sys.id} className="">
            
              <img
                className="block w-full h-full object-cover"
                src={`${post.fields?.image?.fields?.file?.url}?w=800&h=600&fit=fill`}
                alt={post.fields?.description}
              />
            
          </li>
        ))}
      </ul>
    </div>
  )
}
