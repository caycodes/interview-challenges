## Mini Blockworks Instructions


Welcome to Mini Blockworks where you can learn all about Bitcoin, Ethereum, and more!

To get started:

run "npm install"
then "npm run miniBlockworks" 

Navigate to localhost:3000

Enjoy the easy, quick, and intuitive layout of Mini Blockworks and gain knowledge on these assets!

Thank you for your time :)

![Mini Blockworks](/react-hook-form/public/images/readMe.png "Mini Blockworks")

## React Hook Form Challenge

Use "react-hook-form" to build a form with custom validations and performance in mind.

### Implementation specs:

* Create a global React context named assets and initialize it with an array of crypto assets
  `[{ title: "Bitcoin", "symbol": "BTC", "price": 22777.21, "description": "Bitcoin is the first distributed consensus-based, censorship-resistant, permissionless, peer-to-peer payment settlement network with a provably scarce, programmable, native currency.", "category": "payment" }, { title: "Ethereum", "symbol": "ETH", "price": 1566.66, "description": "Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether.", "category": "infrastructure" }]`
* Update the current code of the repository so that the list of blog posts shows a list of crypto assets from your assets context
* Create a form that would show if you click on one of the assets
* The form should include the following fields:
  * Title: text input
  * Symbol: text input
  * Description: textarea
  * Price: number input, read only
  * category: dropdown with the following options: payment/financial/infrastructure
* Prefill the form with the asset information from your context object (according to the asset that is opened) 
* Make sure that the form only re-renders the corresponding (input/select) component you are editing, and not the entire form
* The form should allow users to update any of the non-read-only fields
  * Create a submit button that can submit the form 
  * Upon successful submission:
    * Update your global context array with the updated entry
    * Redirect back to the list

### Bonus points

* Validate the fields when submitting the form using the following rules:
  * title: max length: 255, min length 3, required.
  * symbol: max length: 8, min length: 2, required.
  * description: max length: 200, required.
  * category: required. Only allow the enum values: payment/financial/infrastructure.
* Show error messages if the validation failed.
* Always load the current price of the asset by using a crypto data provider of your choice
* Style the form using Tailwind CSS
