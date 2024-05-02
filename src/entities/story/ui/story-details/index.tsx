import { FC } from 'react';
import { Div, Footnote, Link, Paragraph, Spacing, Text } from '@vkontakte/vkui';
import { Story } from '@/shared/api';
import { getStorySummary } from '../../lib';
import styles from './styles.module.scss';

export type StoryDetailsProps = {
  data: Story;
};

export const StoryDetails: FC<StoryDetailsProps> = ({ data }) => {
  return (
    <Div>
      <Footnote className={styles.summary}>{getStorySummary(data)}</Footnote>

      <Spacing size={4} />
      <Text>{data.title}</Text>

      <Spacing size={8} />
      {data.url && (
        <Footnote>
          <Link href={data.url}>{data.url}</Link>
        </Footnote>
      )}
      {data.text && (
        <Paragraph>
          <div dangerouslySetInnerHTML={{ __html: data.text }} />
        </Paragraph>
      )}
      <Spacing size={8} />

      <Footnote className={styles.summary}>{`${data.score} голосов • ${data.descendants} комментариев`}</Footnote>
    </Div>
  );
};
