import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { createClient } from 'contentful';
import Link from 'next/link';
import loading from '../../../assets/loading.gif'


const GalleryItem = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    });

    const fetchPost = async () => {
      try {
        const entry = await client.getEntry(slug);
        setPost(entry);
      } catch (error) {
        console.log(`Error fetching photo ${error}`);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  // If the slug is not available yet, you can show a loading message
  if (!slug) {
    return <p>Loading...</p>;
  }

  if (!post) {
    // If post data is not available yet, show the loading indicator
    return (
      <div className="flex pt-8">
        
        <img src={loading} alt="Loading" />
      </div>
    );
  }

  return (
    <div className="flex max-w-screen">     
      <div className="flex flex-col md:flex-row gap-4 items-center sm:items-start">

        <div className="flex w-[90%] md:max-w-[60%] pointer-events-none" >  
        <Image src={post.fields?.image?.fields?.file?.url} alt='Logo' width={800} height={600} objectfit="contain" className='object-cover pointer-events-none'/>        
          </div>

        <div className="flex flex-col w-[90%] md:max-w-[30%] text-left justify-start items-start ">

        <h1 className="text-4xl pb-9">{post?.fields?.title}</h1>

        <p className="text-base pt-9 pb-9">{post?.fields?.description}</p>

        <div className="pt-9">
        {post.fields.shopLink ? (
  <Link href={post.fields.shopLink}>
    <button className="text-center inline-block px-4 py-2 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-slate-700 to-slate-600 drop-shadow-md hover:stroke-white">
      See in Shop
    </button>
  </Link>
) : null}

        </div>
        </div>
          </div>

      </div>
  );
};

export default GalleryItem;
