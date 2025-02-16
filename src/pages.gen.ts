// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as Itinerary_getConfig } from './pages/itinerary';
// prettier-ignore
import type { getConfig as OurStory_getConfig } from './pages/our-story';
// prettier-ignore
import type { getConfig as Rsvp_getConfig } from './pages/rsvp';
// prettier-ignore
import type { getConfig as Travel_getConfig } from './pages/travel';

// prettier-ignore
type Page =
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| ({ path: '/itinerary' } & GetConfigResponse<typeof Itinerary_getConfig>)
| ({ path: '/our-story' } & GetConfigResponse<typeof OurStory_getConfig>)
| ({ path: '/rsvp' } & GetConfigResponse<typeof Rsvp_getConfig>)
| ({ path: '/travel' } & GetConfigResponse<typeof Travel_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  