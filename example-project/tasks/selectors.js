import { createSelector } from 'reselect';


export function getTasks(state) {
  return state.tasks;
}

export function getTaskList(state) {
  return getTasks(state).list;
}

export function getTaskFilter(state) {
  return getTasks(state).filter;
}

export function getDeletedTask(state) {
  return getTasks(state).deleted;
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleTasks = createSelector(
  getTaskList,
  getTaskFilter,
  (tasks, filter) => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);

      case 'completed':
        return tasks.filter(task => task.completed);

      default:
        return tasks;
    }
  }
);
