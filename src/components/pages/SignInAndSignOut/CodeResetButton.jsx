/* eslint-disable jsx-a11y/control-has-associated-label */
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ResetButton({ handleCodeReset, isWaitingForReset }) {
  return (
    <span
      className={`  ${
        isWaitingForReset ? "opacity-0" : "opacity-100 cursor-pointer0"
      }`}
    >
      <button
        type="button"
        onClick={handleCodeReset}
        disabled={isWaitingForReset}
      >
        <FontAwesomeIcon icon={faRotate} size="2x" />
      </button>
    </span>
  );
}
