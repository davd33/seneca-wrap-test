Seneca wrap test
===

Test wrap on multiple services.

# Test 1

Using wrap on several services does not work as I would
like.

The wrapped code is not called when acting on `role:math,cmd:sum`.

# Run

You'll need fuge installed:
```bash
npm i -g fuge
```

Start the services:
```bash
npm start
```

Then in fuge's shell:
```
start math
start wrap
start caller
```
