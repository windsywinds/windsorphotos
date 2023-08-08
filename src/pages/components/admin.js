import React, { useState } from 'react';
import { createClient } from 'contentful';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.NEXT_PUBLIC_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
});

const EntryForm = () => {
  const [title, setTitle] = useState('');
  const [shopLink, setShopLink] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (event) => {
    // Handle image selection and set the 'image' state accordingly
    // e.g., setImage(event.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new entry in the Contentful CMS using the client
      const entry = await client.createEntry('photos', {
        fields: {
          title,
          shopLink,
          tags: tags.split(',').map((tag) => tag.trim()),
          image: {
            'en-US': {
              fields: {
                file: {
                  'en-US': {
                    contentType: image.type,
                    fileName: image.name,
                    url: 'URL_TO_IMAGE', // Use Contentful API to upload image and get URL
                  },
                },
              },
            },
          },
        },
      });

      setMessage('Entry added successfully!');
      console.log('Entry created:', entry);
    } catch (error) {
      setMessage('Error creating entry.');
      console.error('Error creating entry:', error);
    }
  };

  return (
    <div>
      <h1>Create New Entry</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for title, shopLink, tags, and image */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={shopLink}
          onChange={(e) => setShopLink(e.target.value)}
          placeholder="Shop Link"
          required
        />
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Tags (comma-separated)"
          required
        />
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default EntryForm;
