import { Devvit } from '@devvit/public-api';

// Configure Devvit's plugins
Devvit.configure({
  redditAPI: true,
});

// Adds a new menu item to the subreddit allowing to create a new post
Devvit.addMenuItem({
  label: 'Create New Letter Labyrinth Post (with Web View)',
  location: 'subreddit',
  onPress: async (_event, context) => {
    const { reddit, ui } = context;
    const subreddit = await reddit.getCurrentSubreddit();
    const post = await reddit.submitPost({
      title: 'Letter Labyrinths',
      subredditName: subreddit.name,
      // The preview appears while the post loads
      preview: (
        <vstack height="100%" width="100%" alignment="middle center">
          <text size="large">Navigating ...</text>
        </vstack>
      ),
    });
    ui.showToast({ text: 'Created post!' });
    ui.navigateTo(post);
  },
});
