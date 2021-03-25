export type Lecture = {
  title: string;
  summary: string;
  link: string;
  id: number;
};

export const lectures: Lecture[] = [
  {
    id: 1,
    title: '카운터',
    summary: '리덕스를 이용해서 투두리스트를 만드는 방법에 대해서 알아봅시다. ',
    link: '/counter',
  },
  {
    id: 2,
    title: '투두리스트',
    summary: '리덕스를 통해서 투두리스트를 만드는 방법에 대헤서 알아봅시다.',
    link: '/todo',
  },
  {
    id: 3,
    title: '개발중...',
    summary: '아직 개발중인 강좌입니다.',
    link: '/',
  },
];
