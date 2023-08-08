import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="en">
      
      <Head>
      <title>Sam Windsor - Fine Art Photography</title>
      <meta name="color-scheme" content="light only" />
      <meta name='description' content='Fine art photography by Sam Windsor, New Zealand Photographer'/>
      <meta
          name="keywords"
          content="Sam Windsor, Landscape photography, Nature photography, Landscape prints, Fine art photography, Landscape art, Landscape wall art, Landscape prints for sale, Landscape artwork, Landscape posters, Scenic photography, Landscape canvas prints, Landscape pictures, Nature prints, Outdoor photography, Nature wall art, Landscape photography prints, Landscape decor, Landscape photography for sale, Beautiful landscapes, Landscape scenery"
        />
      
      <link rel='icon' href='/favicon.png' />
      <link rel='shortcut icon' href='/favicon.png' />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          
        </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
