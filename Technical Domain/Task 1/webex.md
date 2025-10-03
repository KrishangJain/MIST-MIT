## Web - Server

### HTML - Source code

Solution: checked the source code for the page, scrolled to the rightmost end of the screen and found the password. 

Flag: nZ^&@q5&sjJHev0

### HTTP - IP restriction bypass

Solution: used burpsuite to intercept requests, sent a modified request with 'X-Forwarded-For' which gives us the password.

Flag: Ip_$po0Fing

### HTTP - Open redirect

Solution: used burp suite to modify response to the request, replaced the redirect to facebook with the url and hash of instagram instead. forwarded the request back, and clicked on the button to get the password. 

Flag: e6f8a530811d5a479812d7b82fc1a5c5

### HTTP - User-agent

Solution: used burp suite to send the request to repeater and replaced user-agent with admin, response to the request contained the password

Flag: rr$Li9%L34qd1AAe27

### HTTP - Directory indexing

Solution: checked the source code for the page, found instructions to include '/admin/pass.html' in the url. got rickrolled so checked '/admin/' for the directory, which had a folder named backup which had admin.txt inside which had the password.

Flag: LINUX