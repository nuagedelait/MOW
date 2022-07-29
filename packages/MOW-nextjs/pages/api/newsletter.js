import * as SibApiV3Sdk from '@sendinblue/client';

const apiInstance = new SibApiV3Sdk.ContactsApi();
let apiKey = apiInstance.authentications['apiKey'];
apiKey.apiKey = process.env.SDKEY;


export default async (req, res) => {

    const { email } = JSON.parse(req.body)
  
    if (!email || !email.length) {
      return res.status(400).json({
        error: "Forgot to add your email?",
      })
    }
  
    try {
      let createContact = new SibApiV3Sdk.CreateContact();
      createContact.email = email;
      createContact.listIds = [3];  

      
      apiInstance.createContact(createContact).then(function(data) {
        return res.status(201).json({ error: null,message:data.body})
      }, function(error) {
        res.status(400).json({
          error: error.response.body.message,
          }) 
      });
    } catch (error) {
      return res.status(500).json({
        error: `Oops, something went wrong... Send me an email at  oliver@madeofwanderlust.com and I'll manually add you to the list.`,
      }) 
    }
  }