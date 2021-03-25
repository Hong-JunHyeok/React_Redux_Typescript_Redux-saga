export type Lecture = {
  title: string;
  summary: string;
  link: string;
};

export const lectures: Lecture[] = [
  {
    title: '카운터',
    summary: '리덕스를 이용해서 투두리스트를 만드는 방법에 대해서 알아봅시다. ',
    link: '/counter',
  },
  {
    title: '투두리스트',
    summary: '리덕스를 통해서 투두리스트를 만드는 방법에 대헤서 알아봅시다.',
    link: '/todo',
  },
  {
    title: '개발중...',
    summary: '아직 개발중인 강좌입니다.',
    link: '/',
  },
];
