import { mockContents } from 'mocks';

export const wait = async (noteId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { content } = mockContents.find(({ id }) => id === noteId);
      resolve(content);
    }, 500);
  });
};

export const encrypt = async (data) => {
  await wait(500);
  return data;
};

export const decrypt = async (data) => {
  await wait(500);
  return data;
};
