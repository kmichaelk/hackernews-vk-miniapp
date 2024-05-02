import compose from 'compose-function';

import { withStore } from './with-store';
import { withConfig } from './with-config';
import { withRouter } from './with-router';

export const withProviders = compose(withStore, withConfig, withRouter);
