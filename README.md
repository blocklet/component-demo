# Component Demo Blocklet

Combining multiple blocklets together

## Install on my ABT Node

[![Install on my ABT Node](https://raw.githubusercontent.com/blocklet/development-guide/main/assets/install_on_abtnode.svg)](https://install.arcblock.io/?action=blocklet-install&meta_url=https%3A%2F%2Fgithub.com%2Fblocklet%2Fcomponent-demo%2Freleases%2Fdownload%2Fv1.0.7%2Fblocklet.json)

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
