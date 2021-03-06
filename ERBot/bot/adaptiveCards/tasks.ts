export const tasksCard = (quantity: number) => {
  return {
    "type": "AdaptiveCard",
    "body": [
      {
        "type": "TextBlock",
        "size": "large",
        "weight": "Bolder",
        "text": "dd"
      },
      {
        "type": "TextBlock",
        "text": "Congratulations! Your ER bot is running. Please insert the number of tasks to be evaluated.",
        "wrap": true
      },
      {
        "type": "Input.Number",
        "min": 1,
        "max": 15,
        "id": "tasksQuantity",
        "placeholder": "Enter a number",
        "isRequired": true,
        "errorMessage": "Please enter a number between 1 and 15"
      }
    ],
    "actions": [
      {
        "type": "Action.Submit",
        "title": "OK"
      }
    ],
    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.4"
  }
}
  