# Install Chrome to your PC using PowerShell ([getchro.me](http://getchro.me))

This function serves a PowerShell script that installs Google Chrome when requested via PowerShell. It is deployed on Scaleway Functions on [this link](https://getchromeq7gnjdsy-getchrome.functions.fnc.fr-par.scw.cloud) (there's also a [redirect](http://getchro.me)).

## Usage

Open PowerShell and insert this command:
```powershell
iex $(irm getchro.me)
```

## Note

This was created just as a small fun project where I dove into serverless for the first time on my [Twitch stream](https://twitch.tv/effeKtSVK). There might be long loading times due to Scaleway's Functions feature being in a beta. I might move it to a different hosting later.
