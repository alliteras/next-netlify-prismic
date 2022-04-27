import Head from 'next/head'

// import { client } from 'utils/prismicPosts'

import Header from '@components/Header'
import Footer from '@components/Footer'
import Post from '@components/Post'
import { createClient } from '../prismicio'
console.log(createClient);

// export default function Home({ page }) {
//   console.log( page );
//   return (
//     <div className="container">
//       <Head>
//         <title>Next.js Starter!</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//
//       <main>
//         <Header title="Welcome to my app!" />
//
//       </main>
//
//       <Footer />
//     </div>
//   )
// }

// // at the bottom of your component file
// export async function getStaticProps() {
//   // query() is empty on purpose!
//   // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
//   const res = await client.query('')
//
//   const posts = res.results.map((p) => {
//     return p.data
//   })
//
//   return {
//     props: {
//       posts,
//     },
//   }
// }

// pages/[uid].js


export default function Homepage({ page }) {
  return <h1>{page.uid}</h1>
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', 'home')

  return {
    props: { page },
  }
}
