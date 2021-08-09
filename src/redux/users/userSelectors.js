import { createSelector } from "reselect";

const isLoadingSelector = (state) => state.projectUsers.isLoading;
const errorSelector = (state) => state.projectUsers.error;
const projectUsers = (state) => state.projectUsers.items;
const usersFilter = (state) => state.projectUsers.filter;

const usersSelector = (state) =>
  state.projectUsers.items.filter(({ email }) =>
    [email].some((item) =>
      item.toLowerCase().includes(state.projectUsers.filter.toLowerCase())
    )
  );

const memoizeUsersSelector = createSelector(
  [projectUsers, usersFilter],
  (users, filter) =>
    users.filter(({ email }) =>
      [email].some((item) => item.toLowerCase().includes(filter.toLowerCase()))
    )
);
export {
  isLoadingSelector,
  errorSelector,
  usersSelector,
  projectUsers,
  usersFilter,
  memoizeUsersSelector,
};

// const func = (a, b) => {
//   return a + b;
// };

// func(3, 4); //7
// func(3, 4); //7
// func(3, 4); //7
// func(3, 4); //7
// func(3, 4); //7
// func(3, 4); //7
// func(3, 4); //7

// const functios = {
//   func: {
//     arguments: [value1, value2],
//     result: value1 + value2,
//     memoize(value1, value2) {
//      const  results = {
//         value1: 4,
//         value2: 3,
//         result: 7
//       }
//      const  results2 = {
//         value1: 5,
//         value2: 7,
//         result: 7
//       }

//     },
//   },
// };
