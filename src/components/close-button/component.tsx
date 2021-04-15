import { Button } from "~/components/button";
import type { _Props } from "./types";

export const Component: React.VFC<_Props> = (props) => (
  <Button
    className={props.className}
    aria-label="Close"
    onClick={props.onClick}
    data-bs-dismiss={props.dismiss}
  />
);