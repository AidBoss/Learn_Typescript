// Hàm callback (acc, curr) => acc + curr được thực thi trên từng phần tử của mảng.
// acc (viết tắt của "accumulator") là biến tích lũy, giữ giá trị đã được tích lũy qua các lần lặp trước.
// curr (viết tắt của "current") là phần tử hiện tại của mảng trong mỗi lần lặp.
// Giá trị khởi tạo 0:
// 0 là giá trị ban đầu của acc. Đây là giá trị từ đó phép tính tổng bắt đầu.
const totalSum = (arr: number[]) => {
  return arr.reduce((acc, current) => acc + current, 0);
};
// lần đầu tiên acc sẽ bằng giá trị khởi tạo 0;
const numbers: number[] = [1, 2, 3, 4, 5];
// tức là let acc:number =0 , curent sẽ là giá trị đầu tiên của mảng curent:number = 1
// nó tương đương với việc triển khai hàm foreach
let sums: number = 0;
numbers.forEach((el) => {
  sums += el;
});
console.log(sums); // Output: 15
// reduce(): Tốt nhất khi cần tích lũy và trả về một giá trị duy nhất từ mảng.
//dùng reduce để chuyển đổi một mảng các đối tượng thành một đối tượng duy nhất.
type Person = {
  id: number;
  name: string;
};

const people: Person[] = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Doe" },
];
const peopleById = people.reduce<Record<number, Person>>((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

console.log(peopleById);
/* Output:
{
  1: { id: 1, name: "John" },
  2: { id: 2, name: "Jane" },
  3: { id: 3, name: "Doe" }
}
*/
