

<p align="center">
  <img src="https://github.com/shihaanws/filternfind/blob/master/public/logo.png" alt="Alt text" />
</p>

<p align="center">
Precision Search for Your Ideal Product!</p>



This is a responsive [Next.js](https://nextjs.org) application with Redux Toolkit that displays a list of items with functionality for multi-criteria filtering, sorting, and search. It includes options to filter by category and price range, sort by name or price, and dynamically search by keyword.



## Features

- **Display Items:** Shows item details like name, category, price, and date added.
- **Multi-Criteria Filtering:** Filter items by category and price range.
- **Sorting Options:** Sort items by name (alphabetically) or by price (ascending/descending).
- **Keyword Search:** Filter items based on the name field.
- **Responsive Design:** The layout adjusts across screen sizes for an optimal user experience.

## Tech Stack

- **Next.js**: React-based framework for server-side rendering and building static web applications.
- **Redux Toolkit**: For state management, providing efficient handling of state, filtering, sorting, and search criteria.
- **Tailwind CSS**: CSS framework for styling and creating responsive designs.
- **DaisyUI**: Component library for Tailwind CSS.


## Setup Instruction

First, install dependencies:

```bash
npm install
```

Next, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Explanation of Approach

### Filtering, Sorting, and Searching Logic

The core logic for managing filtering, sorting, and search state is implemented using **Redux Toolkit**. The `itemsSlice.js` file in `redux/` contains:

- **Filters**: Manages the search term, category, and price range filters.
- **Sorting Options**: Allows sorting by name or price, in ascending or descending order.
- **Selectors**: Selectors are used to dynamically filter, search, and sort items based on the current state, ensuring only relevant items are shown as criteria change.

#### State Management

The `items` reducer manages the items data, applying filters and sorting based on the user’s current selections, ensuring smooth and efficient updates to the displayed list.


### Redux State and Filtering Logic

- **Redux Toolkit Slice**: The `itemsSlice.js` file in `redux/` defines the initial state, along with actions for updating filters, sorting, and search criteria. It also contains selector logic to transform data according to the active filters and sorting options.

- **Data Transformation**: The `selectItems` selector applies all filtering, sorting, and search criteria, returning only the items that match the active criteria. This approach enables seamless and efficient updates as filters are changed, allowing for an intuitive and dynamic user experience.




### Reusable Component Structure

The application is structured with a focus on **reusable components** to ensure that the UI remains modular, scalable, and easy to maintain. This approach enables us to reuse components across different parts of the application while reducing redundancy in the codebase.

#### Component Breakdown


2. **Filter Components**:
   - **KeywordFilter**: Manages keyword search functionality. It accepts props for the current search term and an `onChange` event to update the Redux state.
   - **CategoryFilter**: A dropdown to filter items by category, with a flexible design that allows for easy expansion if more categories are added.
   - **PriceFilter**: A range slider or two-input component for setting minimum and maximum price values, making it adaptable for various pricing ranges or formats.


4. **List and Display Components**:
   - **ItemList**: Receives the filtered and sorted list of items as props and maps them to display each item.
  
5. **Layout Components**:
   - **Header**: A static component for the page header, which can include branding, navigation, or additional controls.
   - **HeroContent**: An introductory section that may include content about the item list, filters, and app purpose.

#### Benefits of a Reusable Component Structure

- **Scalability**: Components are modular and can be easily extended or customized for future features, such as additional filter types or new display options.
- **Consistency**: Reusable components maintain a consistent style and behavior across the application.
- **Maintainability**: Isolated components allow for easier debugging and testing, as each component handles a specific task.
- **Reduced Redundancy**: By avoiding duplicate code, we improve readability and minimize the risk of inconsistencies.

This approach enables a flexible and scalable architecture, making it easier to expand functionality or adapt the application to new requirements with minimal structural changes.


### Responsiveness

**Responsive Design with Tailwind CSS**: The layout is made responsive by using Tailwind CSS classes. For example, `flex-col md:flex-row` is applied to arrange elements vertically on smaller screens and horizontally on medium and larger screens. This approach ensures that the interface adapts gracefully to various screen sizes, providing an optimal user experience.










