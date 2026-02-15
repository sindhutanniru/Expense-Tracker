import NavBar from "../components/NavBar";
function MoneySent() {
  const transactions = JSON.parse(localStorage.getItem("transactions") || "[]");
  const sent = transactions.filter((t:any) => t.type === "expense");
  return (
    <div>
      <NavBar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-red-600">
          Money Sent 
        </h1>
        {sent.length === 0 ? (
          <p>No money sent yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border shadow rounded">
              <thead className="bg-red-200">
                <tr>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Amount</th>
                  <th className="p-2 border">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {sent.map((t:any) => (
                  <tr key={t.id} className="text-center">
                    <td className="p-2 border">{t.text}</td>
                    <td className="p-2 border text-red-600 font-semibold">
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
export default MoneySent;