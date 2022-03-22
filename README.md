[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/donate?business=VWW3BHW4AWHUY&item_name=Desenvolvimento+de+Software&currency_code=BRL)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B21084%2Fgithub.com%2Fcanove%2Fwhaticket.svg?type=shield)](https://app.fossa.com/projects/custom%2B21084%2Fgithub.com%2Fcanove%2Fwhaticket?ref=badge_shield)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=canove_whaticket&metric=alert_status)](https://sonarcloud.io/dashboard?id=canove_whaticket)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=canove_whaticket&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=canove_whaticket)
[![Discord Chat](https://img.shields.io/discord/784109818247774249.svg?logo=discord)](https://discord.gg/Dp2tTZRYHg)

# WhaTicket

**NOTE**: The new version of whatsapp-web.js required Node 14. Upgrade your installations to keep using it.

A _very simple_ Ticket System based on WhatsApp messages.

Backend uses [whatsapp-web.js](https://github.com/pedroslopez/whatsapp-web.js) to receive and send WhatsApp messages, create tickets from them and store all in a MySQL database.

Frontend is a full-featured multi-user _chat app_ bootstrapped with react-create-app and Material UI, that comunicates with backend using REST API and Websockets. It allows you to interact with contacts, tickets, send and receive WhatsApp messages.

**NOTE**: I can't guarantee you will not be blocked by using this method, although it has worked for me. WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe.

## How it works?

On every new message received in an associated WhatsApp, a new Ticket is created. Then, this ticket can be reached in a _queue_ on _Tickets_ page, where you can assign ticket to your yourself by _aceppting_ it, respond ticket message and eventually _resolve_ it.

Subsequent messages from same contact will be related to first **open/pending** ticket found.

If a contact sent a new message in less than 2 hours interval, and there is no ticket from this contact with **pending/open** status, the newest **closed** ticket will be reopen, instead of creating a new one.

