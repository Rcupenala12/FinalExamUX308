export function colour_mix(rgb_colour1, rgb_colour2) {
    const valid = ['red', 'blue', 'green'];
    if (!valid.includes(rgb_colour1) || !valid.includes(rgb_colour2)) return "Error";

    const mix = [rgb_colour1, rgb_colour2].sort().join('');
    const combinations = {
        'blueblue': 'blue',
        'greenblue': 'aqua',
        'greengreen': 'green',
        'greenred': 'yellow',
        'redblue': 'fuchsia',
        'redred': 'red'
    };
    return combinations[mix] || "Error";
}

export function largest_product(val1, val2, val3) {
    let values = [val1, val2, val3].sort((a, b) => b - a);
    return values[0] * values[1];
}

export function day_of_the_week(day_num) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (day_num < 1 || day_num > 7) return "Error";
    return days[day_num - 1];
}

export function pay_raise(status, years, salary) {
    if (status === 'F') {
        if (years >= 10) return salary * 1.05;
        if (years < 4) return salary * 1.015;
    } else if (status === 'P') {
        if (years > 10) return salary * 1.03;
        if (years < 4) return salary * 1.01;
    }
    return salary * 1.02;
}

export function is_leap(year) {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}
