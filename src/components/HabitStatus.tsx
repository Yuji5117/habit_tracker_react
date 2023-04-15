import { changeHabitStatus } from "../actions/habitsAction";
import { createHabitStatus } from "../api/createHabitStatus";
import { updateHabitStatus } from "../api/updateHabitStatus";

interface HabitStatusProps {
  habitId: number;
  isCompleted: boolean;
  targetedDate: string;
  dispatch: any;
  habitStatusId: number | null;
}

const HabitStatus = ({
  habitId,
  isCompleted,
  targetedDate,
  dispatch,
  habitStatusId,
}: HabitStatusProps) => {
  if (habitStatusId) {
    return (
      <input
        type="checkbox"
        value={targetedDate}
        checked={isCompleted}
        onChange={async () => {
          const res = await updateHabitStatus(
            habitId,
            habitStatusId,
            !isCompleted
          );

          dispatch(changeHabitStatus(res.data));
        }}
      />
    );
  }

  return (
    <input
      type="checkbox"
      value={targetedDate}
      checked={isCompleted}
      onChange={async () => {
        const res = await createHabitStatus(
          habitId,
          !isCompleted,
          new Date(targetedDate)
        );

        dispatch(changeHabitStatus(res.data));
      }}
    />
  );
};

export default HabitStatus;
