import { formatDistanceToNow } from 'date-fns';
import { Story, StoriesList } from '@/shared/api';
import { extractNewsDisplayHost } from '@/utils';

export const storiesListsNames: Record<StoriesList, string> = {
  [StoriesList.New]: 'Последние',
  [StoriesList.Top]: 'Обсуждаемые',
  // [StoriesList.Best]: 'Лучшие',
};

export const getStorySummary = (story: Story) =>
  [
    `от ${story.by}`,
    ...(story.url ? [extractNewsDisplayHost(story.url)] : []),
    `${formatDistanceToNow(new Date(story.time * 1000))} назад`,
  ].join(' • ');
