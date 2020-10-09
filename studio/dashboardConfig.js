export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f7fddfe123e52558572e89c',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zjqfcvqq',
                  apiId: '38373b36-a033-4de5-a34f-3429c793df9c'
                },
                {
                  buildHookId: '5f7fddfeaf8e3d5bbca6ee3d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-7o3owh9x',
                  apiId: '83bf1b5b-6433-4125-ac67-6f4b72638c14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mikebutts/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-7o3owh9x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
