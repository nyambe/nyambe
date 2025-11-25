export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'nyambe'
  },
  header: {
    title: '@samiebuka',
    to: '/',
    search: false,
    colorMode: true,
    links: [{
      'label': 'articles',
      'to': '/articles'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://www.linkedin.com/in/samiebuka',
      'target': '_blank',
      'aria-label': 'LinkedIn'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://instagram.com/samiebuka',
      'target': '_blank',
      'aria-label': 'Instagram'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/samiebuka',
      'target': '_blank',
      'aria-label': 'X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nyambe',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `© ${new Date().getFullYear()} nyambe`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nyambe',
      'target': '_blank',
      'aria-label': 'GitHub'
    }, {
      'icon': 'i-simple-icons-medium',
      'to': 'https://medium.com/@samiebuka',
      'target': '_blank',
      'aria-label': 'Medium'
    }, {
      'icon': 'i-simple-icons-devdotto',
      'to': 'https://dev.to/nyambe',
      'target': '_blank',
      'aria-label': 'dev.to'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/nyambe/nyambe/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nyambe',
        target: '_blank'
      }]
    }
  }
})
