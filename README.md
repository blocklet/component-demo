# Component Demo Blocklet

Combining multiple blocklets together

## Run and debug in local

```shell
yarn global add @blocklet/cli
git clone git@github.com:blocklet/component-demo.git
cd component-demo
cp .env.bac .env
yarn
blocklet server init -f --mode debug
blocklet server start
blocklet dev
```

## License

The code is licensed under the Apache 2.0 license found in the
[LICENSE](LICENSE) file.
