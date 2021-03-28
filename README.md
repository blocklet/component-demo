# Component Demo Blocklet

Combining multiple blocklets together

## Run and debug in local

```shell
yarn global add @abtnode/cli
git clone git@github.com:blocklet/component-demo.git
cd auth-demo
cp .env.bac .env
yarn
abtnode init -f --mode debug
abtnode start
blocklet dev
```

## License

The code is licensed under the Apache 2.0 license found in the
[LICENSE](LICENSE) file.
