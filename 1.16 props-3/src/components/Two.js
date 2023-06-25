function Two({ id, title, amount }) {
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div>{id}</div>
      </div>
      <div className="expense-item h2">amount = {amount}</div>
    </div>
  );
}
export default Two;
