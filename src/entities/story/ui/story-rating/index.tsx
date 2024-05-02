import { FC } from 'react';
import { Caption, Headline } from '@vkontakte/vkui';
import { Icon12ArrowUp } from '@vkontakte/icons';
import { Story } from '@/shared/api';
import styles from './styles.module.scss';

export type StoryRatingProps = {
  data: Story;
  position: number;
};

export const StoryRating: FC<StoryRatingProps> = ({ data, position }) => {
  return (
    <div className={styles.root}>
      <Headline className={styles.position}>{position}</Headline>
      <span className={styles['rating-wrapper']}>
        <Icon12ArrowUp />
        <Caption weight="1">{data.score}</Caption>
      </span>
    </div>
  );
};
