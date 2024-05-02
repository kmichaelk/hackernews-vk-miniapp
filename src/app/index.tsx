import { SplitLayout, SplitCol } from '@vkontakte/vkui';

import { setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Routing } from '@/pages/router';

import { withProviders } from './providers';

setDefaultOptions({ locale: ru });

const App = () => {
  return (
    <SplitLayout>
      <SplitCol>
        <Routing />
      </SplitCol>
    </SplitLayout>
  );
};

const CApp = withProviders(App);

export default CApp;
