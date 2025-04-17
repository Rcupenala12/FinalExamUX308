export function colour_mix(c1, c2) {
    const valid = ['red', 'green', 'blue'];
    if (!valid.includes(c1) || !valid.includes(c2)) return 'Error';
  
    if (c1 === c2) return c1;
  
    const mix = [c1, c2].sort().join('-');
    switch (mix) {
      case 'blue-green': return 'aqua';
      case 'blue-red': return 'fuchsia';
      case 'green-red': return 'yellow';
      default: return 'Error';
    }
  }
  
  // 2. Largest Product
  export function largest_product(val1, val2, val3) {
    const nums = [val1, val2, val3].sort((a, b) => b - a);
    return nums[0] * nums[1];
  }
  
  // 3. Day of the Week
  export function day_of_the_week(day_num) {
    const days = {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday"
    };
    return days[day_num] || "Error";
  }
  
  // 4. Pay Raise
  export function pay_raise(status, years, salary) {
    let raise = 0;
  
    if (status === 'F') {
      if (years >= 10) raise = 0.05;
      else if (years < 4) raise = 0.015;
      else raise = 0.02;
    } else if (status === 'P') {
      if (years > 10) raise = 0.03;
      else if (years < 4) raise = 0.01;
      else raise = 0.02;
    }
  
    return parseFloat((salary * (1 + raise)).toFixed(2));
  }
  
  // 5. Leap Year
  export function is_leap(year) {
    if (year % 4 !== 0) return false;
    else if (year % 100 !== 0) return true;
    else if (year % 400 === 0) return true;
    else return false;
  }
  
  
  
