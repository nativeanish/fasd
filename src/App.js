import { ArweaveWebWallet } from "arweave-wallet-connector"
import { useState } from "react"
const state = { url: 'arweave.app' }
const wallet = new ArweaveWebWallet({ /* ... */ }, { state })

function App () {
        wallet.setState(useState(wallet.state))
    return (
        <div>
            <p onClick={() => wallet.connect()}>Connect</p>
            <p>{wallet.address}</p>
        </div>
    )
}
export default App