# Products Listing

Given an API to fetch a list of 10 products, display the products on the UI and implement a search feature to filter through the products.

# User Stories

    1.Add an `h1` tag in the document that says `MoonshotX Products`

    2.Fetch products list from the below API and display the products on the page
    https://dummyjson.com/products?limit=10

    3.Given to you are two components - `<Solution />` and `<Products />`. The Products component should take in a products prop that is the array of products fetched from the API.

    4. Implement a fuzzy search where a user can search with the product title, description, or price and still get search result.

    5.Format the price with commas if it exceeds thousands mark. Follow international standards.

    6.If no text is present in the search bar, all the products should be displayed on the page.

    7.Given an empty `truncateText` function - truncate the text of the description of the product to 30 letters. Truncating is nothing but appending ... at the end of the text if it exceeds a certain amount. DO NOT change the function definition of given function.

# Important

For the test cases to run and pass - keep the following things in mind

    1.Give a `data-testid` attribute of `product-card` to all the product items.

    2.Give a `data-testid` attribute of `search` to the search input.

    3.Give a `data-testid` attribute of `products` to the container of all the products.

    4.Do not change the function definition of the truncateText function, otherwise the test cases will fail.