import 'antd/dist/antd.css'
import AOS from 'aos'

import 'aos/dist/aos.css'
import './antd.css'
import './App.scss'

import '../styles/vars.css'
import '../styles/global.css'

import '../src/assets/scss/Cursor.css'
import '../src/assets/scss/AboutMe.css'
import '../src/assets/scss/Contact.css'
import '../src/assets/scss/Experience.css'
import '../src/assets/scss/Landing.css'
import '../src/assets/scss/Navbar.css'
import '../src/assets/scss/Projects.css'
import '../src/assets/scss/TechIKnow.css'
import 'react-typed/dist/animatedCursor.css'

import type { AppProps } from 'next/app'
import { Layout } from 'antd'
import React from 'react'

const { Content } = Layout

export default function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <Layout className="App">
      {/* <MainHeader /> */}
      <Layout>
        {/* <SideBar /> */}
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          {/* <Breadcrumbs /> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
