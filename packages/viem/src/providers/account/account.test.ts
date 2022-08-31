import { expect, test } from 'vitest'

import { walletProvider } from '../../../test/utils'

import { accountProvider } from './account'

test('creates signer', async () => {
  expect(
    accountProvider(walletProvider!, {
      address: '0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac',
    }),
  ).toMatchInlineSnapshot(`
    {
      "address": "0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac",
      "key": "account",
      "name": "Account 0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac",
      "pollingInterval": 4000,
      "request": [Function],
      "type": "accountProvider",
      "uniqueId": "account.external.0xa5cc3c03994db5b0d9a5eedd10cabab0813678ac",
    }
  `)
})