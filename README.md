# fsae2021-22
This is an ongoing project for Nevada Electric Racing set to be finished by June 2022 for the Formula SAE Electric Competition in Brooklyn, MI.

View the current status here: https://jbrea22.github.io/fsae2021-22/

Axios is used to connect to the IP of our data logger and fetch CAN bus data (in JSON format). Specific data (speed, battery temp, etc.) is mapped and displayed in gauges. The data logger constantly updates CAN bus data automatically. This program uses setInterval() to loop every 100 milliseconds, which means the gauges update in real time without overloading our Raspberry Pi. AMS, BSPD, and IMD failures are detected and displayed as warning lights.

