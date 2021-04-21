var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/cvines528/svelte_pokedex', // Update to point to your repository  
        user: {
            name: 'Charles Vines, Jr.', // update to use your name
            email: 'cvines528@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)