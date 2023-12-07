import { Wallet } from './wallet';

export const initKarlsenFramework = async () => {
  // console.log("Karlsen - framework: init");
  await Wallet.initRuntime();
  // console.log("Karlsen - framework: ready");
};

