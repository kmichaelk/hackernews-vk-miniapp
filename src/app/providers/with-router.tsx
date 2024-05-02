import { ReactNode } from 'react';

import { RouterProvider } from '@vkontakte/vk-mini-apps-router';

import { router } from '@/pages/router';

export const withRouter = (component: () => ReactNode) => () => {
  return <RouterProvider router={router}>{component()}</RouterProvider>;
};
