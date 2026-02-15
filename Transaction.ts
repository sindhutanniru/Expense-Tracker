export interface Transaction {
  id: number;
  text: string;
  amount: number;
  type: "income" | "expense";
  date: string;
}