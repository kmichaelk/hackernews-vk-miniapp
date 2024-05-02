import { FC, useEffect, useState } from 'react';
import { CommentBlock, commentModel } from '@/entities/comment';
import styles from './styles.module.scss';
import { Button, Div, Spinner } from '@vkontakte/vkui';

export type CommentNodeProps = {
  commentId: number;
  updateTime: number;
};

export const CommentNode: FC<CommentNodeProps> = ({ commentId, updateTime }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const [trigger, { data, error, isFetching }] = commentModel.useLazyFetchCommentQuery();

  useEffect(() => {
    trigger(commentId);
  }, [commentId, trigger, updateTime]);

  if (isFetching && !data) {
    return <Spinner />;
  }

  if (!data) {
    return 'Ошибка при загрузке комментария: ' + error?.toString();
  }

  return (
    <div>
      <CommentBlock
        data={data}
        isRefreshing={isFetching}
      />
      {!collapsed && (
        <div className={styles['tree-root']}>
          {data.kids?.map((kidId, idx) => (
            <CommentNode
              key={kidId}
              commentId={kidId}
              updateTime={updateTime}
            />
          ))}
        </div>
      )}
      {collapsed && data.kids?.length && (
        <Div>
          <Button
            appearance="neutral"
            size="s"
            onClick={() => setCollapsed(false)}
          >
            Развернуть ветку ({data.kids.length})
          </Button>
        </Div>
      )}
    </div>
  );
};
