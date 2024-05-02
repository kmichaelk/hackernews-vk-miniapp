import { FC, useEffect } from 'react';
import { Panel, PanelHeader, Group, NavIdProps, Placeholder, Spinner, PanelHeaderButton, Div } from '@vkontakte/vkui';
import { Icon28RefreshOutline } from '@vkontakte/icons';
import { useSearchParams } from '@vkontakte/vk-mini-apps-router';
import { STORIES_AUTO_REFRESH_INTERVAL } from '@/shared/config';
import { StoriesList } from '@/shared/api';
import { StoryCell, StoryRating, storyModel } from '@/entities/story';
import { storiesListsNames } from '@/entities/story/lib';
import { StoryListPicker } from '@/features/list-picker';

export type HomePageProps = NavIdProps;

export const HomePage: FC<HomePageProps> = ({ id }) => {
  const [params, setParams] = useSearchParams();

  const list: StoriesList = (params.get('list') as unknown as StoriesList) ?? StoriesList.New;

  const { data, refetch, error, isFetching } = storyModel.useFetchStoriesListQuery(list);

  useEffect(() => {
    const intervalId = setInterval(refetch, STORIES_AUTO_REFRESH_INTERVAL);
    return () => clearInterval(intervalId);
  }, [refetch]);

  return (
    <Panel id={id}>
      <PanelHeader
        after={
          <PanelHeaderButton
            aria-label="Обновить"
            onClick={refetch}
          >
            <Icon28RefreshOutline />
          </PanelHeaderButton>
        }
      >
        {storiesListsNames[list]} новости
      </PanelHeader>
      <Group>
        <Div>
          <StoryListPicker
            value={list}
            onChange={(selListId) => setParams({ list: selListId.toString() })}
          />
        </Div>
        {!isFetching &&
          data &&
          data.map((story, idx) => (
            <StoryCell
              key={idx}
              data={story}
              before={
                <StoryRating
                  data={story}
                  position={idx + 1}
                />
              }
              commentsHref={`/story/${story.id}`}
            />
          ))}
        {isFetching && (
          <Placeholder
            icon={<Spinner size="medium" />}
            stretched
          >
            Загрузка новостей
          </Placeholder>
        )}
        {!!error && 'Ошибка'}
      </Group>
    </Panel>
  );
};
