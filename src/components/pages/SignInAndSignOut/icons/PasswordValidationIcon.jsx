import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function PasswordValidationIcon({
  passwdLen = 0,
  regexCheckSpecialChar = false,
  regexCheckUpperChar = false,
  maxLen = false,
}) {
  let icon = faX;

  let color = "red";

  if (passwdLen >= 5) {
    icon = faCheck;
    color = "green";
  }

  if (regexCheckSpecialChar) {
    icon = faCheck;
    color = "green";
  }

  if (regexCheckUpperChar) {
    icon = faCheck;
    color = "green";
  }

  if (maxLen) {
    icon = faCheck;
    color = "green";
  }

  return (
    <span className="mr-2">
      <FontAwesomeIcon icon={icon} size="sm" style={{ color }} />
    </span>
  );
}
