import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { createClient } from 'contentful';
import Link from 'next/link';


const GalleryItem = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const client = createClient({
      space: 'b80vzvhdgw0j',
      accessToken: 'Mwv9--O7Gf5LHvE3jRfvYiJ6wFqw4cB26TRSkJK5its',
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
    return <p>Image not found</p>;
  }

  return (
    <div className="flex w-[100%]">     
      <div className="flex w-flex-wrap sm:flex-row gap-4 ">

        <div className="flex max-w-[60%]  pointer-events-none border-2 border-pink-500" >  
        <Image src={post.fields?.image?.fields?.file?.url} alt='Logo' width={800} height={600} objectfit="contain" className=' pointer-events-none'/>        
          </div>

        <div className="flex flex-col max-w-[30%] md:text-left  border-2 border-green-500 ">

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
