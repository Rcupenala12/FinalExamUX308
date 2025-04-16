import React from 'react';
import { colour_mix, largest_product, day_of_the_week, pay_raise, is_leap } from './functions';

export function ColourMixTest() {
    return (
        <div>
            <h2>Colour Mix Tests</h2>
            <p>red + blue = {colour_mix("red", "blue")}</p>
            <p>green + red = {colour_mix("green", "red")}</p>
            <p>green + blue = {colour_mix("green", "blue")}</p>
        </div>
    );
}

export function LargestProductTest() {
    return (
        <div>
            <h2>Largest Product Tests</h2>
            <p>-8, 12, 20 → {largest_product(-8, 12, 20)}</p>
            <p>5, 10, 15 → {largest_product(5, 10, 15)}</p>
            <p>1.2, 2.5, 3.6 → {largest_product(1.2, 2.5, 3.6)}</p>
        </div>
    );
}

export function DayOfWeekTest() {
    return (
        <div>
            <h2>Day of the Week Tests</h2>
            <p>1 → {day_of_the_week(1)}</p>
            <p>5 → {day_of_the_week(5)}</p>
            <p>8 → {day_of_the_week(8)}</p>
        </div>
    );
}

export function PayRaiseTest() {
    return (
        <div>
            <h2>Pay Raise Tests</h2>
            <p>F, 2, 25000 → {pay_raise('F', 2, 25000).toFixed(2)}</p>
            <p>P, 11, 30000 → {pay_raise('P', 11, 30000).toFixed(2)}</p>
            <p>F, 6, 40000 → {pay_raise('F', 6, 40000).toFixed(2)}</p>
        </div>
    );
}

export function LeapYearTest() {
    return (
        <div>
            <h2>Leap Year Tests</h2>
            <p>1999 → {is_leap(1999) ? "Yes" : "No"}</p>
            <p>2000 → {is_leap(2000) ? "Yes" : "No"}</p>
            <p>1900 → {is_leap(1900) ? "Yes" : "No"}</p>
        </div>
    );
}
