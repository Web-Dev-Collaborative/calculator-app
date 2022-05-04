import { ACTIONS } from '../../hooks/useCalc';

export default function OperationButton({ sign, theme, dispatch, operation }) {
  const btnTheme =
    theme === 'one'
      ? 'border-one-key-tertiary--shadow bg-one-key-tertiary'
      : theme === 'two'
      ? 'border-two-key-tertiary--shadow bg-two-key-tertiary'
      : 'border-three-key-tertiary--shadow bg-three-key-tertiary';

  const btnText =
    theme === 'one'
      ? 'text-one-text-primary'
      : theme === 'two'
      ? 'text-two-text-primary'
      : 'text-three-text-primary';

  return (
    <button
      type="button"
      className={`button ${btnText} ${btnTheme}`}
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operation } })
      }
    >
      {sign || operation}
    </button>
  );
}
