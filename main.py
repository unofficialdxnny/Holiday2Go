import requests

# def send_simple_message():
#     return requests.post(
#           "https://api.mailgun.net/v3/sandbox7c2ad1b969264dc09b0cc12668ef1061.mailgun.org/messages",
#           auth=("api", "cd8dcbb673059c080117e0e9a0c3cc06-6d8d428c-8d077eaf"),
#           data={"from": "Mailgun Sandbox <postmaster@sandbox7c2ad1b969264dc09b0cc12668ef1061.mailgun.org>",
#             "to": "<ahmeddanial324@gmail.com>",
#             "subject": "Hello Danial Ahmed",
#             "text": "Congratulations Danial Ahmed, you just sent an email with Mailgun!  You are truly awesome!"})


# send_simple_message()


def send_simple_message():
	return requests.post(
		"https://api.mailgun.net/v3/sandbox7c2ad1b969264dc09b0cc12668ef1061.mailgun.org/messages",
		auth=("api", "cd8dcbb673059c080117e0e9a0c3cc06-6d8d428c-8d077eaf"),
		data={"from": "Dan <mailgun@sandbox7c2ad1b969264dc09b0cc12668ef1061.mailgun.org>",
			"to": ["ahmeddanial324@gmail.com"],
			"subject": "Hello",
			"text": "Testing some Mailgun awesomeness!"})


send_simple_message()

