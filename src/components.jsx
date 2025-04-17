import React from 'react';
import { colour_mix, largest_product, day_of_the_week, pay_raise, is_leap } from './functions.js';

export function ColourMixComponent() {
  return (
    <div>
      <h2>Colour Mix Tests</h2>
      <p>Test 1: {colour_mix("green", "red")}</p>
      <p>Test 2: {colour_mix("blue", "blue")}</p>
      <p>Test 3: {colour_mix("red", "blue")}</p>
    </div>
  );
}

export function LargestProductComponent() {
  return (
    <div>
      <h2>Largest Product Tests</h2>
      <p>Test 1: {largest_product(-8, 12, 20)}</p>
      <p>Test 2: {largest_product(5, 10, 2)}</p>
      <p>Test 3: {largest_product(3, 3, 3)}</p>
    </div>
  );
}

export function DayOfTheWeekComponent() {
  return (
    <div>
      <h2>Day of the Week Tests</h2>
      <p>Test 1: {day_of_the_week(1)}</p>
      <p>Test 2: {day_of_the_week(5)}</p>
      <p>Test 3: {day_of_the_week(7)}</p>
      <p>Test 4 (Invalid): {day_of_the_week(10)}</p>
    </div>
  );
}

export function PayRaiseComponent() {
  return (
    <div>
      <h2>Pay Raise Tests</h2>
      <p>Test 1: {pay_raise('F', 2, 25000)}</p>
      <p>Test 2: {pay_raise('F', 11, 60000)}</p>
      <p>Test 3: {pay_raise('P', 3, 32000)}</p>
      <p>Test 4: {pay_raise('P', 15, 45000)}</p>
    </div>
  );
}

export function LeapYearComponent() {
  return (
    <div>
      <h2>Leap Year Tests</h2>
      <p>Test 1 (1999): {is_leap(1999) ? "True" : "False"}</p>
      <p>Test 2 (2000): {is_leap(2000) ? "True" : "False"}</p>
      <p>Test 3 (1900): {is_leap(1900) ? "True" : "False"}</p>
      <p>Test 4 (2024): {is_leap(2024) ? "True" : "False"}</p>
    </div>
  );
}


