This is an implementation of a posible solution for the ComparaOnline interview-coding-test.

To check the solution is working properly, there are a few steps you should do:

1) Build the docker image containing the project already setup.
> docker build -t "car-insurance-products" .

2) Run the app tests and check the coverage.
> docker run car-insurance-products /bin/bash -c "npm test"

3) run the script to simulate the products 30 days after.
> docker run car-insurance-products /bin/bash -c "npm run after-30-days"