Wazuh - Challenge - Automation with Cypress.
Steps to execute the automated test:
1) To run the project it’s necessary to have previously installed node js and cypress in the machine that is going to be used to execute the test.

2) This test is designed to test Kibana UI so it’s needed to run in a “master” agent with Kibana previously installed and functioning.

3) The master machine needs to have at least one agent registered.

4)To run satisfactorily the assertions data.json file needs to be modified.
	a) agent:”your’s agent name”
	b) ip:”your’s agent IP address”
	c) group:”your’s agent group name”
5) If you are using a different hostname than the wazuh server has for default (127.0.0.1), config.json file must be changed it.
	a)localhost: “your’s localhost address”/app/wazuh#overview/
		i)Clarification: The path must be the same as the previous step.
6) If you are using a different user name and password to access to kibana than the default, config.json file should be modified. The user that you are going to use to login to kibana must have an admin role.
	a) user:”your’s username”
	b) pass:”your’s password”
7) Warning: The test can fail if you rerun the test execution, this is because the test has to handle a screen that appears the first time the apps it’s loading. So if the test is re-run, this screen does not appear and the step that validates this screen is going to fail.

