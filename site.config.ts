import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '50c24804d75d41c59c0cf0c3fa48c41b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Resume',
  domain: 'resume.osean.me',
  author: 'SeongHeon Sim',

  // open graph metadata (optional)
  description: `Welcome to SeongHeon Sim's resume page.`,

  // social usernames (optional)
  // twitter: 'transitive_bs',
  github: 'osean-me',
  linkedin: 'seongheonsim',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'Home',
  //     pageId: '4ff47ea1508a46e18e6c6d895b227c93'
  //   },
  //   {
  //     title: 'Resume',
  //     pageId: '3e6c7931a4364643aa4f9c9ba80b03af'
  //   },
  //   {
  //     title: 'Blog',
  //     pageId: 'b429c38e83324c498d994cc89a059c44'
  //   }
  //   ]
})
