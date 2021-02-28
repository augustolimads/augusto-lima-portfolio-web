import Head from 'next/head'
import GalleryPost from '../components/GalleryPost'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <GalleryPost />
      <GalleryPost />
      <GalleryPost />
      <GalleryPost />
      <GalleryPost />
      <GalleryPost />
      <GalleryPost />
    </Layout>
  )
}
