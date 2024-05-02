import { ComponentProps, FC, ReactNode } from 'react';
import { Footnote, IconButton, SimpleCell } from '@vkontakte/vkui';
import { Icon24CommentOutline } from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Story } from '@/shared/api';
import { getStorySummary } from '../../lib';
import styles from './styles.module.scss';

export type StoryCellProps = {
  data: Story;
  commentsHref?: string;
  before?: ReactNode;
};

export const StoryCell: FC<StoryCellProps> = ({ data, commentsHref, ...props }) => {
  const routeNavigator = useRouteNavigator();

  const navigateComments = commentsHref ? () => routeNavigator.push(commentsHref) : undefined;

  return (
    <SimpleCell
      href={data.url}
      onClick={(!data.url && navigateComments) || undefined}
      before={props.before}
      after={
        <CommentsButton
          commentsCount={data.descendants}
          onClick={
            (navigateComments &&
              ((e) => {
                e.preventDefault();
                navigateComments();
              })) ??
            undefined
          }
          // href={(commentsHref && `#${commentsHref}`) ?? undefined}
        />
      }
      subtitle={getStorySummary(data)}
    >
      {data.title}
    </SimpleCell>
  );
};

type CommentsButtonProps = {
  commentsCount: number;
  onClick?: ComponentProps<typeof IconButton>['onClick'];
  href?: string;
};
const CommentsButton: FC<CommentsButtonProps> = ({ commentsCount, onClick, href }) => {
  return (
    <div className={styles['comments-side']}>
      {commentsCount > 0 && <Footnote className={styles['comments-count']}>{commentsCount}</Footnote>}
      <IconButton
        label="Комментарии"
        onClick={onClick}
        className={styles['comments-button-wrapper']}
        href={href}
      >
        <Icon24CommentOutline />
      </IconButton>
    </div>
  );
};
