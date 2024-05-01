//
//    Bento-Next
//    Config file
//
//
//    https://github.com/migueravila/Bento - upstream

import { Config } from './src/types/config';

// Bento-next config
// Use an editor with Typescript support to get autocomplete and validity checking!
export const config: Config = {
  // General
  name: 'Matteo',
  openInNewTab: true,
  title: 'Bento',

  // Clock
  twelveHourFormat: false,
  flashSeparator: false,

  // Font Family
  font: {
    // 'google' or 'local'
    source: 'google',
    // Font name, e.g. 'Roboto' (case sensitive)
    name: 'Inter',
  },

  // Theme
  theme: 'bento',

  // Place a background image in ./src/assets/images/ and provide the file name.
  // Alternatively, provide a URL to an image. If the page is served over https, you may have issues loading images from insecure origins.
  // Set to "" to disable.
  backgroundImage: 'https://github.com/nisby/Bento/blob/master/assets/background.jpg',
  themes: [
    // List of installed themes, add your own themes in ./src/assets/css/themes and include it in the array below.
    'arc',
    'bento',
    'catppuccin-frappe',
    'catppuccin-macchiato',
    'catppuccin-mocha',
    'conceptdark', // dark mode only
    'monokai',
    'nord',
    'sakura',
    'solarized',
  ],

  // Search Bar
  searchBar: true,
  searchEngine: 'google', // google, ddg
  barPlaceholder: '', // if blank, use search engine name. Set to ' ' for no placeholder.
  autoFocusBar: true,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Sweet dreams,',

  // Layout
  layout: 'buttons', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: import.meta.env.VITE_API_KEY, // Set your OpenWeatherMap key in .env - Move the included .env.example to .env
  weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // Request location from the browser. If false, or location is denied, use the coordinates below.
  defaultLatitude: '43.764',
  defaultLongitude: '13.147',

  // Automatic theme switching:
  // "system" - Switches based on OS color preference
  // "location" - Switches based on local sunrise/sunset (requires OpenWeatherMap API key)
  // "preset" - Switches based on set hours
  // "none" - No automatic switching
  autoTheme: 'system',

  // If autoTheme is set to "preset", set the hours below.
  darkModeOnTime: '18:30',
  lightModeOnTime: '07:00',

  // Set any of the below options to false to disable drawing the component on the page.
  // If themeButton is set to false, the theme can only be set in this file.
  // Disabling the weather component may cause issues with location-based light/dark switching.
  componentsEnabled: {
    searchBar: false,
    themeButton: true,
    clock: true,
    greeter: true,
    date: true,
    weather: true,
  },

  // Buttons
  buttons: [
    // First buttons group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        name: 'Reddit', // set the name of the card
        icon: 'fab-reddit', // provide a FontAwesome icon name. Regular icons (fa-) don't require a prefix, while FA-Brands icons must be prefixed with "fab-"
        url: 'https://reddit.com', // provide a link to the page.
      },
      {
        name: 'Navidrome',
        icon: 'headphones',
        url: 'http://music.nisby44.duckdns.org',
      },
      {
        name: 'Spotify',
        icon: 'fab-spotify',
        url: 'https://open.spotify.com',
      },
      {
        name: 'Calendar',
        icon: 'calendar',
        url: 'https://calendar.google.com/calendar/r',
      },
      {
        name: 'Feedly',
        icon: 'rss-square',
        url: 'https://feedly.com/i/my',
      },
      {
        name: 'YouTube',
        icon: 'fab-youtube',
        url: 'https://youtube.com/',
      },
    ],
    // Second buttons group
    // You muse use the 'buttons' layout to use this group.
    [
      {
        name: 'Tenda',
        icon: 'broadcast-tower',
        url: 'http://tenda.nisby44.duckdns.org/',
      },
      {
        name: 'casaOS',
        icon: 'server',
        url: 'http://casaos.nisby44.duckdns.org/#/',
      },
      {
        name: 'Pi-hole',
        icon: 'apple-whole',
        url: 'pihole.nisby44.duckdns.org',
      },
      {
        name: 'Amazon',
        icon: 'fab-amazon',
        url: 'https://amazon.it/',
      },
      {
        name: 'Hashnode',
        icon: 'fab-hashnode',
        url: 'https://hashnode.com/',
      },
      {
        name: 'calcio',
        icon: 'trophy',
        url: 'https://calcio.skin/streaming-gratis-calcio-1.php',
      },
    ],
  ],

  // Lists
  lists: [
    // First list group
    // If you're using the 'bento' layout, this is the only group that will be used.
    [
      {
        icon: 'music', // Icon for the list to use. The same as the buttons.
        links: [
          {
            name: 'Inspirational', // Display text for the link
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // URL to the page
          },
          {
            name: 'Classic',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
          {
            name: 'Oldies',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
          {
            name: 'Rock',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        ],
      },
      {
        icon: 'coffee',
        links: [
          {
            name: 'Linkedin',
            url: 'https://www.linkedin.com',
          },
          {
            name: 'Dribbble',
            url: 'https://www.dribbble.com',
          },
          {
            name: 'Trello',
            url: 'https://www.trello.com',
          },
          {
            name: 'Slack',
            url: 'https://www.slack.com',
          },
        ],
      },
    ],
    // Second list group
    // You muse use the 'lists' layout to use this group.
    [
      {
        icon: 'house-user',
        links: [
          {
            name: 'Spotify',
            url: 'https://www.spotify.com',
          },
          {
            name: 'Reddit',
            url: 'https://www.reddit.com',
          },
          {
            name: 'Hashnode',
            url: 'https://www.hashnode.com',
          },
          {
            name: 'Pocket',
            url: 'https://www.pocket.com',
          },
        ],
      },
      {
        icon: 'fab-github',
        links: [
          {
            name: 'Front',
            url: 'https://www.reddit.com/r/Frontend/',
          },
          {
            name: 'Rust',
            url: 'https://www.reddit.com/r/rust/',
          },
          {
            name: 'Go',
            url: 'https://www.reddit.com/r/golang/',
          },
          {
            name: 'Repos',
            url: 'https://github.com/migueravila',
          },
        ],
      },
    ],
  ],
};
