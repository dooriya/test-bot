import { AdaptiveCardResponse } from "@microsoft/teamsfx";
import { AdaptiveCardInvokeResponse, AdaptiveCardInvokeValue, InvokeResponse, TeamsActivityHandler, TurnContext } from "botbuilder";

// An empty teams activity handler.
// You can add your customization code here to extend your bot logic if needed.
export class TeamsBot extends TeamsActivityHandler {
  constructor() {
    super();
  }
}
