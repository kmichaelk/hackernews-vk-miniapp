import { FC, useEffect, useState } from 'react';
import {
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  PanelHeaderButton,
  Placeholder,
  Spinner,
} from '@vkontakte/vkui';
import { useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Icon28RefreshOutline, Icon56CommentsOutline } from '@vkontakte/icons';
import { StoryDetails, storyModel } from '@/entities/story';
import { CommentNode } from '@/features/comment-node';

export type StoryPageProps = NavIdProps;

export const StoryPage: FC<StoryPageProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const { id: storyIdStr } = useParams<'id'>()!;

  const storyId = parseInt(storyIdStr!);

  const [trigger, { data, error, isFetching }] = storyModel.useLazyFetchStoryQuery()

  const [updateTime, setUpdateTime] = useState<number>(Date.now())
  useEffect(() => {
    trigger(storyId)
  }, [storyId, trigger])

  const invalidate = () => setUpdateTime(Date.now())

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
        after={
          <PanelHeaderButton
            aria-label="Обновить"
            onClick={invalidate}
          >
            <Icon28RefreshOutline />
          </PanelHeaderButton>
        }
      >
        Новость
      </PanelHeader>
      {isFetching && !data && (
        <Placeholder stretched>
          <Spinner />
        </Placeholder>
      )}
      {!!error && 'Ошибка'}
      {data && (
        <>
          <Group mode="plain">
            <StoryDetails data={data} />
          </Group>
          {data.kids?.map((commentId, idx) => (
            <Group key={idx}>
              <CommentNode commentId={commentId} updateTime={updateTime} />
            </Group>
          )) ?? (
            <Group>
              <Placeholder icon={<Icon56CommentsOutline />}>Комментариев пока нет</Placeholder>
            </Group>
          )}
        </>
      )}
    </Panel>
  );
};
