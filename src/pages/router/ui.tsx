import { View } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { DEFAULT_VIEW_PANELS } from './routes';

import { HomePage } from '@/pages/HomePage';
import { StoryPage } from '@/pages/StoryPage';

export const Routing = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();

  return (
    <View activePanel={activePanel}>
      <HomePage id={DEFAULT_VIEW_PANELS.HOME} />
      <StoryPage id={DEFAULT_VIEW_PANELS.STORY} />
    </View>
  );
};
