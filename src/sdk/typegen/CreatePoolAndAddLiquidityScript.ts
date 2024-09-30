/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.8
*/

import {
  Account,
  BigNumberish,
  BN,
  decompressBytecode,
  Script,
  StrSlice,
} from 'fuels';

import type { Enum } from "./common";

export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetInput = { id: AssetIdInput, amount: BigNumberish };
export type AssetOutput = { id: AssetIdOutput, amount: BN };
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;

export type CreatePoolAndAddLiquidityScriptInputs = [token_0_contract_id: ContractIdInput, token_0_sub_id: string, token_1_contract_id: ContractIdInput, token_1_sub_id: string, is_stable: boolean, amount_0_desired: BigNumberish, amount_1_desired: BigNumberish, recipient: IdentityInput, deadline: BigNumberish];
export type CreatePoolAndAddLiquidityScriptOutput = AssetOutput;

export type CreatePoolAndAddLiquidityScriptConfigurables = Partial<{
  AMM_CONTRACT_ID: ContractIdInput;
}>;

const abi = {
  "programType": "script",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "b256",
      "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
      "type": "bool",
      "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 0
    },
    {
      "type": "str",
      "concreteTypeId": "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a"
    },
    {
      "type": "struct interfaces::data_structures::Asset",
      "concreteTypeId": "affa437f314a241a60e97d006b83a963a5eaf0e0185484335e9ed03cd078d7f8",
      "metadataTypeId": 1
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 4
    },
    {
      "type": "u32",
      "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 0,
      "components": [
        {
          "name": "Address",
          "typeId": 2
        },
        {
          "name": "ContractId",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct interfaces::data_structures::Asset",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "id",
          "typeId": 3
        },
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "token_0_contract_id",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        },
        {
          "name": "token_0_sub_id",
          "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        },
        {
          "name": "token_1_contract_id",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        },
        {
          "name": "token_1_sub_id",
          "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        },
        {
          "name": "is_stable",
          "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
        },
        {
          "name": "amount_0_desired",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "amount_1_desired",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "recipient",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        },
        {
          "name": "deadline",
          "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
        }
      ],
      "name": "main",
      "output": "affa437f314a241a60e97d006b83a963a5eaf0e0185484335e9ed03cd078d7f8",
      "attributes": null
    }
  ],
  "loggedTypes": [
    {
      "logId": "10098701174489624218",
      "concreteTypeId": "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a"
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "AMM_CONTRACT_ID",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "offset": 8680
    }
  ]
};

const bytecode = decompressBytecode('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');

export class CreatePoolAndAddLiquidityScript extends Script<CreatePoolAndAddLiquidityScriptInputs, CreatePoolAndAddLiquidityScriptOutput> {

  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(wallet: Account) {
    super(bytecode, abi, wallet);
  }
}
