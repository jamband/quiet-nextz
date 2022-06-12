type Props = {
  size?: `${number}em`;
};

export const IconChevronDoubleRight: React.FC<Props> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || "1em"}
    height="1em"
    fill="currentColor"
    viewBox="0 0 16 16"
    style={{ display: "inline-block", verticalAlign: "-0.125em" }}
  >
    <path
      fillRule="evenodd"
      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
    />
    <path
      fillRule="evenodd"
      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);
