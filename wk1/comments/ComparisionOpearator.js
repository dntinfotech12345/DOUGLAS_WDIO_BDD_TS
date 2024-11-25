

// Coparision operator:
/*
1. == (checks only the value)
2. === (checks only the value + type)
3. !=
4. !==
5. >
6. >=
7. <
8. <=
    @return boolean

  /* rules

  1. In most cases, if the two operands are not of the same type.
  2. javascript attempts to convert then to an appropriate type for the comparision.
  3. This behaviour generally results in comparing the operands numerically.
  */

  // Use case 1:- Strict equality (===, !==)

  let a = "1";
  let b= 1;

  console.log(a==b); // true

  console.log(a===b); // false

