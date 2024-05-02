import { ReactNode } from 'react';

import vkBridge, { parseURLSearchParamsForGetLaunchParams } from '@vkontakte/vk-bridge';
import { useAdaptivity, useAppearance, useInsets } from '@vkontakte/vk-bridge-react';
import { AdaptivityProvider, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/cssm/styles/themes.css';

import { transformVKBridgeAdaptivity } from '@/utils';

export const withConfig = (component: () => ReactNode) => () => {
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(window.location.search);

  return (
    <ConfigProvider
      appearance={vkBridgeAppearance}
      platform={vk_platform === 'desktop_web' ? 'vkcom' : undefined}
      isWebView={vkBridge.isWebView()}
      hasCustomPanelHeaderAfter={false}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot
          mode="full"
          safeAreaInsets={vkBridgeInsets}
        >
          {component()}
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
