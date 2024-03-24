#!/usr/bin/python3
"""
Fetches https://alu-intranet.hbtn.io/status and http://0.0.0.0:5050/status using urllib.
Displays the body of the response in the specified format.
"""
import urllib.request
import urllib.error

if __name__ == '__main__':
    urls = ['https://alu-intranet.hbtn.io/status', 'http://0.0.0.0:5050/status']
    
    for url in urls:
        try:
            with urllib.request.urlopen(url) as response:
                content = response.read()
                utf8_content = content.decode('utf-8')

                print("Body response:")
                print("\t- type: {}".format(type(content)))
                print("\t- content: {}".format(utf8_content))
        except urllib.error.URLError as e:
            print("Error:", e.reason)

