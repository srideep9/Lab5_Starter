# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Name: Srideep Dornala

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not use a unit test to test the message feature of a messaging application because that feature involves several different functionalities within the app like writing a message, and then sending the message, and probably more moving parts. Unit tests are meant to test singular functionalities, and a full feature isn't a single functionality.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test to test this feature because it is a much smaller functionality and does not have any moving parts. It can be isolated from things like the network and tested unlike the "message" feature.