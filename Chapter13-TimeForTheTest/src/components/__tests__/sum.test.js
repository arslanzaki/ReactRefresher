import { sum } from "../sum";

test("check sum of 2 positive numbers", () => {
  expect(sum(1, 6)).toBe(7);
});
