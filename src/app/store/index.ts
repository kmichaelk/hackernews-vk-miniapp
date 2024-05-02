import { configureStore } from '@reduxjs/toolkit';

import { storyModel } from '@/entities/story';
import { commentModel } from '@/entities/comment';

export const store = configureStore({
  reducer: {
    stories: storyModel.api.reducer,
    comments: commentModel.api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storyModel.api.middleware).concat(commentModel.api.middleware),
});
