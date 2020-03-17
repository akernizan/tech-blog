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
                  buildHookId: '5e70fa8e3b9d7101ae47f78c',
                  title: 'Sanity Studio',
                  name: 'tech-blog-studio',
                  apiId: '3a9cd7a1-4983-4993-a585-a5cde2616c59'
                },
                {
                  buildHookId: '5e70fa8e7a0e6dd73a56dd56',
                  title: 'Blog Website',
                  name: 'tech-blog',
                  apiId: '2980d751-3f42-4ebd-9693-f6d839e479cb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/akernizan/tech-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://tech-blog.netlify.com', category: 'apps' }
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
