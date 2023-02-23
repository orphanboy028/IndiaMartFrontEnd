export default function Layout({ children }) {
  return (
    <>
      <div>
        <h1>Header Section</h1>
      </div>

      <div>{children}</div>

      <div>
        <h1>Footer section</h1>
      </div>
    </>
  );
}
