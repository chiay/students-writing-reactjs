import React from 'react'
import Layout from '../components/Layout'

export default function promptList() {
   return (
      <Layout title="Students Writing: Prompts">
         Prompts
      </Layout>
   )
}

export async function getStaticProps(context) {
   return {
      props: {}
   }
}
