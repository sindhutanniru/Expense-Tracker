import NavBar from "../components/NavBar";
function MoneyReceived() {
  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  const received = transactions.filter((t:any) => t.type === "income");
  return (
    <div>
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-600">
          Money Received
        </h1>
        {received.length === 0 ? (
          <p>No money received yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border shadow rounded">
              <thead className="bg-green-200">
                <tr>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Amount</th>
                  <th className="p-2 border">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {received.map((t:any) => (
                  <tr key={t.id} className="text-center">
                    <td className="p-2 border">{t.text}</td>
                    <td className="p-2 border text-green-600 font-semibold">
                      ₹{t.amount}
                    </td>
                    <td className="p-2 border">{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
export default MoneyReceived;