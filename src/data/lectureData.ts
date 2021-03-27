export type Lecture = {
  title: string;
  summary: string;
  link: string;
  id: number;
  stack: Stack;
};
export type Stack = {
  redux?: boolean;
  redux_saga?: boolean;
  github?: boolean;
};

export const lectures: Lecture[] = [
  {
    id: 1,
    title: '카운터',
    summary: '리덕스를 이용해서 투두리스트를 만드는 방법에 대해서 알아봅시다. ',
    link: '/counter',
    stack: {
      redux: true,
      redux_saga: false,
    },
  },
  {
    id: 2,
    title: '투두리스트',
    summary: '리덕스를 통해서 투두리스트를 만드는 방법에 대헤서 알아봅시다.',
    link: '/todo',
    stack: {
      redux: true,
      redux_saga: false,
    },
  },
  {
    id: 3,
    title: 'API CALL',
    summary: 'Redux , Redux-saga를 이용해서 API를 fetch하는 방법에 대해서 알아봅시다.',
    link: '/jsonplaceholder',
    stack: {
      redux: true,
      redux_saga: true,
    },
  },
  {
    id: 4,
    title: 'Github API',
    summary:
      'Redux , Redux-saga를 이용해서 깃허브 API를 사용하는 방법을 알아봅시다.(아직 개발중인 예제입니다.)',
    link: '/github',
    stack: {
      redux: true,
      redux_saga: true,
      github: true,
    },
  },
];
