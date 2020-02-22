export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e51958efa14ebe274c915fa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iayehhfg',
                  apiId: '80512d4c-eaea-4c6f-bdf6-995ccee05db2'
                },
                {
                  buildHookId: '5e51958ef12c2df431fa62f9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-z28k2hx4',
                  apiId: '342570d5-6d16-43fb-9d0a-176c41f3c505'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterKerins/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-z28k2hx4.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
