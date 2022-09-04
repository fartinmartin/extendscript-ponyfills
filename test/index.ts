import { map } from "../src";

const array = [1, 2, 3];
const result = map<number, number>(array, (item) => item * 2);
alert(result);
