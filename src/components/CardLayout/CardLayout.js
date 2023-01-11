import "./CardLayout.css";

function CardLayout({
  className,
  children,
  header,
  headerStyle,
  contentStyle,
}) {
  return (
    <>
      <div className={`${className} cardLayoutRoot`}>
        <div className={`${headerStyle} headerRoot`}>{header}</div>
        <div className={`${contentStyle}`}>{children}</div>
      </div>
    </>
  );
}

export default CardLayout;
