/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
			=== First Line ===

	  === console.log(++a + +b++ + +c++ - +a++); ===

1. [++a] [+]:
	A. [++a]:
		- Value: 11.
		- Explain: Pre Increment.
	B. [+]
		- Explain: Add Operator.

2. [+] [b++] [+]:
	A. [+]
		- Explain: Type Coerecion (Unary Plus).
	B.[b++]
		- Value : 20.
		- Explain: Post Increment.
	C. [+]
			  - Explain : Add Operator.

3. [+] [c++] [-]:
	   A. [+]:
			  - Explain: Type Coerecion (Unary Plus).
	   B. [c++]:
			  - Value : 80.
			  - Explain : Post Increment.
	   C. [-]
			  - Explain: Sub Operator.

4. [+] [a++]:
	   A. [+]:
			  - Explain: Type Coerecion (Unary Plus).
	   B. [a++]:
			  - value: 11.
			  - Explain: Post Increment.

			=== First Line ===
*/

/*
			=== Second Line ===
	=== console.log(++a + -b + +c++ - -a++ + +a); ===

	   1. [++a] [+]:
			  A. [a++]:
					- Value: 13.
					- Explain: Pre Increment.
			  B. [+]:
					- Explain: Add Operator.
	   2. [-] [b] [+]:-
			  A. [-]:
					- Explain: Unary Negation.
		B. [b]:
					- Value: -21.
			  C. [+]:
					- Explain: Add Operator
		   3. [+] [c++] [-]:
			  A. [+]:
					- Explain: Unary Plus.
			  B. [c++]:
					- Value: 81.
					- Explain: Post Increment.
			  C. [-]:
					- Explain: Sub Operator.
	   4. [-] [a++] [+]:
			  A. [-]:
					- Explain: Unary Negation.
			  B. [a++]:
					- Value: -13.
					- Explain: Post Increment
			  C. [+]:
					- Explain: Add Operator.
	   5. [+] [a]:
			  A. [+]:
					- Explain: Unary Plus.
			  B. [a]:
					- Value: 14
			=== Second Line ===
*/

/*
					=== Third Line ===
	=== console.log(--c + +b + --a * +b++ - +b * a + --a - +true); ===

	1. [--c] [+]:
		A. [--c]:
			- Value: 81.
			- Explain: Pre Decrement.
		  B. [+]:
					- Explain: Add Operator.
	2. [+b] [+]:
			  A. [+b]:
					- Value: 21.
					- Explain: Unary Plus.
			  B. [+]:
					- Explain: Add Operator.
	3. [--a] [*]:
			  A. [--A]:
					- Value: 13.
					- Explain: Pre Decrement.
			  B. [+]:
					- Explain: Multiplication Operator.
	4. [+] [b++] [-]:
			  A. [+]:
					- Explain: Unary Plus.
			  B. [b++]:
					- Value: 21.
					- Explain: Post Increment.
			  C. [-]:
					- Explain: Sub Operator.
	5. [+] [b] [*]:
			  A. [+]:
					- Explain: Unary Plus.
			  B. [b]:
					- Value: 22.
			  C. [*]:
					- Explain: Multiplication Operator.
	6. [a] [+]:
			  A. [a]:
					- Value: 13.
			  B. [+]:
					- Explain: Add Operator.
	7. [--a] [-]:
			  A. [--a]:
					- Value: 12.
					- Explain: Pre Decrement.
			  B. [-]:
					- Explain: Sub Operator.
	8. [-] [true]:
			  A. [+]:
					- Explain: Unary Plus.
			  B. [true]:
					- Value: +1.

					=== Third Line ===
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(++g * ++e + -d + ++f); // 173
