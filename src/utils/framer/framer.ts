export const globalOpacity = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    duration: i || 0.75
  }),
  exit: (i) => ({
    opacity: 0,
    duration: i || 0.75
  })
};