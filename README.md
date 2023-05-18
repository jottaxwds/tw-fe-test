## TW Frontend coding test

In this coding test you are requested to perform two tasks.

### Task one ( Vanilla JavaScript )

Given an array of numbers and a number of columns you have to build a table to
show them on the same order as they are in the array. 
For instance, cell one contains first number on the array, second cell contains second number on the array, and so on.

#### Acceptance criteria 

- Each cell contains a number included on the array
- The width of all the cells will match the biggest array number length 
- Cell content is aligned to the right.

#### Constraints
- A.length > 0
- A.length >= K
- String(A[N]).length >= 1
- typeof A[N] === 'number' // true

``` 
Example input:
A = [12, 345, 6, 789, 0, 123, 45678]  
K = 3

Expected output:
+-----+-----+-----+
|   12|  345|    6|
+-----+-----+-----+
|  789|    0|  123|
+-----+-----+-----+
|45678|
+-----+
```


### Task two ( React )

Given a [Meal's API](https://www.themealdb.com/api.php) you have to build an app to show the meals. If it helps, you may want to use the resources offered under the `assets` folder, not mandatory though.

#### Acceptance criteria
- Show a random meal at the top
- Show a form to perform a meal search
  - The search may be filtered by category, area or ingredient 
  - Filters cannot be applied all at once, just one on every search
- When the user clicks on a meal it shows a detailed view of it in a
new page
  - The user may go back from the detailed meal view to the home page
  - When the user does return to the home page it shows what it was shown before
navigating to the detail view
- **Nice to have**: Include testing, preferably with @testing-library.

#### Constraints
- Must include TypeScript
- Must be coded using JSX, preferably with React eventhough Preact is allowed.
- Must use reusable semantic components
- Must include CSS, any CSSinJS / CSSModules library is allowed. Frameworks like Tailwind are not allowed.
- CRA projects are allowed
- NextJS / Remix like frameworks are not allowed.


## Test output
We expect the following output
- A Pull Request where there is a folder for each task. Preferably, named `taskOne` and `taskTwo`
- A Pull Request description or a README.md like file with a minimum description of what you have done, preferably with the decisions you made along the development.
- A minimum of two well-formatted commits, one by task.
