export const INCREASE = 'counter/INCREASE' as const;
export const DECREASE = 'counter/DECREASE' as const;

export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});

export type CounterActions = ReturnType<typeof increase> | ReturnType<typeof decrease>;
