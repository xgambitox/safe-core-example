import { ethers } from "ethers";
import EthersAdapter from "@gnosis.pm/safe-ethers-lib";
import Safe from "@gnosis.pm/safe-core-sdk";
import SafeServiceClient from "@gnosis.pm/safe-service-client";

const rpcUrl = "";
const safeAddress = "";
const account = "";
const txServiceUrl = "https://safe-transaction.gnosis.io";

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const signer = provider.getSigner(account);
const ethAdapter = new EthersAdapter({ ethers, signer });
const safeSdk = await Safe.create({ ethAdapter, safeAddress });
const safeService = new SafeServiceClient({ txServiceUrl, ethAdapter });
