# JavaScript Callbacks

A `callback` is a function that's passed into another function and called at an appropriate time; like when a particular service or script or data finishes loading.

Callbacks can be used for `asynchronous programming`. That is, in case your program has a long loading piece of code running, instead of freezing up the whole program waiting for it to finish, asynchronous programming allows you to put this in a callback function allowing your program to run as normal. The callback function will notify when the long running code finally finishes and gives out the result.

Callbacks notify you on the completion of long running services in your program without affecting your app performance. Infact it helps make your app responsive as there are no long running codes/services blocking it.

However like the code in the index.js file above, many and nested callback functions can be very problematic to read and debug. Hence why modern asynchronous programs don't use callbacks but instead use the next better option `promises`
