// Book From: Mastering JavaScript Functional Programming, Federico Kereki (2023)

// HOFs: Altering functions behavior
import { once } from "./altered/once";

const shout = (a: string) => console.log("shout1: ", a);

const onceShout = once(shout);

onceShout("This must show in console");
onceShout("I'm hidden from console");

const shout2 = (a: string) => console.log("shout2: ", a);

import { onceAndAfter } from "./altered/onceAndAfter";

const onceAndAfterShout = onceAndAfter(shout, shout2);

onceAndAfterShout("1");
onceAndAfterShout("2");
onceAndAfterShout("2");

import { alternate } from "./altered/alternate";

const alternateShout = alternate(
  () => shout("A"),
  () => shout2("B")
);

alternateShout();
alternateShout();
alternateShout();
alternateShout();

// HOFs wrappers

import { addLogging } from "./wrapped/logging";

let increment = (a: number) => a + 1;
increment = addLogging(increment);
increment(1);

import { addTiming } from "./wrapped/timing";

increment = (a: number) => a + 1;
increment = addTiming(increment);
increment(1);

// Memoized functions

import { fibonacci } from "./fibonacci";
const func = (...args: any[]) => console.log(JSON.stringify(args));
console.log(func([1, 2, 3, 4], 2, 3, 4, 5));
