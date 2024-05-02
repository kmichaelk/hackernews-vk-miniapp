import { storiesListsNames } from '@/entities/story/lib';
import { StoriesList } from '@/shared/api';
import { SegmentedControl } from '@vkontakte/vkui';
import { FC } from 'react';

export type StoryListPickerProps = {
  value: StoriesList;
  onChange: (value: StoriesList) => void;
};

export const StoryListPicker: FC<StoryListPickerProps> = ({ value, onChange }) => {
  return (
    <SegmentedControl
      value={value.toString()}
      onChange={(v) => onChange(v as StoriesList)}
      options={Object.entries(storiesListsNames).map(([key, value]) => ({
        label: value,
        value: key,
      }))}
    />
  );
};
