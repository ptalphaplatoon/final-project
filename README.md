## Django API
Backend command to start server:
```console
$ cd covid_api
$ python -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
if you are having issues with psycopg2, run this command instead:
$ env LDFLAGS="-I/usr/local/opt/openssl/include -L/usr/local/opt/openssl/lib" pip install psycopg2
$ python manage.py runserver
```
## React App
Frontend command to start server:
```console
$ npm install
```
Run the following test before committing changes: 
```console
$ npm run test
```