import { FC } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Div, Footnote, Paragraph, Spacing, Spinner } from '@vkontakte/vkui';
import { Comment } from '@/shared/api';
import styles from './styles.module.scss';

type CommentBlockProps = {
  data: Comment;
  isRefreshing?: boolean;
};

export const CommentBlock: FC<CommentBlockProps> = ({ data, isRefreshing }) => {
  return (
    <Div>
      <Footnote className={styles.summary}>
        {data.by ?? 'Удаленный комментарий'} • {formatDistanceToNow(new Date(data.time * 1000))} назад
        {isRefreshing && (
          <Spinner
            size="small"
            className={styles.spinner}
          />
        )}
      </Footnote>
      <Spacing size={8} />
      <Paragraph>
        <div dangerouslySetInnerHTML={{ __html: data.text }} />
      </Paragraph>
    </Div>
  );
};
