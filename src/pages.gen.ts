// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as Root_getConfig } from './pages/_root';
// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as OurStory_getConfig } from './pages/our-story';
// prettier-ignore
import type { getConfig as Packing_getConfig } from './pages/packing';
// prettier-ignore
import type { getConfig as Rsvp_getConfig } from './pages/rsvp';
// prettier-ignore
import type { getConfig as Schedule_getConfig } from './pages/schedule';
// prettier-ignore
import type { getConfig as Travel_getConfig } from './pages/travel';

// prettier-ignore
type Page =
| ({ path: '/_root' } & GetConfigResponse<typeof Root_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| ({ path: '/our-story' } & GetConfigResponse<typeof OurStory_getConfig>)
| ({ path: '/packing' } & GetConfigResponse<typeof Packing_getConfig>)
| ({ path: '/rsvp' } & GetConfigResponse<typeof Rsvp_getConfig>)
| ({ path: '/schedule' } & GetConfigResponse<typeof Schedule_getConfig>)
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
  