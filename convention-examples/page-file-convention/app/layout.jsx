/* eslint-env node */

// From https://nextra.site/docs/docs-theme/start#create-the-root-layout

import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {
  title: {
    template: 'Page File Convention',
  },
  description: 'Page File Convention Example',
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Example:</b>{' '}
          <span style={{ opacity: '60%' }}>Page File Convention</span>
        </div>
      }
    />
  );
  return (
    <html
      lang='en'
      dir='ltr'
      suppressHydrationWarning
    >
      <Head faviconGlyph='✦' />
      <body>
        <Layout
          navbar={navbar}
          footer={<Footer>Footer Content</Footer>}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
