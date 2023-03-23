/// <reference types="Cypress" />

import {registerpage} from "../page_object/registerPage"
import {faker} from '@faker-js/faker'
describe('Register page', () => {

    it.only ('register successfully',()=> { 
        cy.visit("https://gallery-app.vivifyideas.com/register")
        var password = faker.internet.password();
        registerpage.firstNameInputField.type(faker.name.firstName());
        registerpage.lastNameInputField.type(faker.name.lastName());
        registerpage.emailInputField.type(faker.internet.email())
        registerpage.passwordInputField.type(password);
        registerpage.conf_passwordInputField.type(password);
        registerpage.termsCheckbox.click ()
       registerpage.submittBtn.click ()
    });

    it ('try to register with empty first name input field',()=> {
        cy.visit("https://gallery-app.vivifyideas.com/register") 
        registerpage.firstNameInputField.clear
        registerpage.lastNameInputField.type(faker.name.lastName());
        registerpage.emailInputField.type(faker.internet.email());
        registerpage.passwordInputField.type(password);
        registerpage.conf_passwordInputField.type(password);
        registerpage.termsCheckbox.click ()
        registerpage.submittBtn.click ()
    });

    it('try to register with empty last name input field', () => {
        cy.visit("https://gallery-app.vivifyideas.com/register")
        var password = faker.internet.password();
        registerpage.firstNameInputField.type(faker.name.firstName());
        registerpage.lastNameInputField.clear
        registerpage.emailInputField.type("tatijanapeckovski@gmail.com");
        registerpage.passwordInputField.type(password);
        registerpage.conf_passwordInputField.type(password);
        registerpage.termsCheckbox.click ()
        registerpage.submittBtn.click ()
    });

    it ('try to register with empty email input field',()=> { 
        cy.visit("https://gallery-app.vivifyideas.com/register")
        var password = faker.internet.password();
        registerpage.firstNameInputField.type(faker.name.firstName());
        registerpage.lastNameInputField.type(faker.name.lastName);
        registerpage.emailInputField.clear
        registerpage.passwordInputField.type(password);
        registerpage.conf_passwordInputField.type(password);
        registerpage.termsCheckbox.click ()
        registerpage.submittBtn.click ()
    });

    it ('try to register with empty password input field',()=> { 
        cy.visit("https://gallery-app.vivifyideas.com/register")
        registerpage.firstNameInputField.type("Tatijana");
        registerpage.lastNameInputField.type(faker.name.lastName);
        registerpage.emailInputField.type("tatijanapeckovski@gmail.com");
        registerpage.passwordInputField.clear
        registerpage.conf_passwordInputField.type(faker.internet.password);
        registerpage.termsCheckbox.click ()
        registerpage.submittBtn.click ()
    });

    it ('try to register with empty password-confimation input field',()=> { 
        cy.visit("https://gallery-app.vivifyideas.com/register")
        registerpage.firstNameInputField.type("Tatijana");
        registerpage.lastNameInputField.type(faker.name.lastName);
        registerpage.emailInputField.type("tatijanapeckovski@gmail.com");
        registerpage.passwordInputField.type(faker.internet.password)
        registerpage.conf_passwordInputField.clear;
        registerpage.termsCheckbox.click ()
        registerpage.submittBtn.click ()

});

it ('try to register while terms and conditions are not accepted',()=> { 
    cy.visit("https://gallery-app.vivifyideas.com/register")
    var password = faker.internet.password();
    registerpage.firstNameInputField.type("Tatijana");
    registerpage.lastNameInputField.type(faker.name.lastName);
    registerpage.emailInputField.type("tatijanapeckovski@gmail.com");
    registerpage.passwordInputField.type(password);
    registerpage.conf_passwordInputField.type(password);
    registerpage.termsCheckbox.clear 
    registerpage.submittBtn.click ()
});

it ('try to register with confirm password not being same as password',()=> { 
    cy.visit("https://gallery-app.vivifyideas.com/register")

    registerpage.firstNameInputField.type(faker.internet.userName);
    registerpage.lastNameInputField.type(faker.name.lastName);
    registerpage.emailInputField.type("tatijanapeckovski@gmail.com");
    registerpage.passwordInputField.type(faker.internet.password);
    registerpage.conf_passwordInputField.type(faker.internet.password);
    registerpage.termsCheckbox.click ()
    registerpage.submittBtn.click ()
});

it ('try to register while all input fields are empty',()=> { 
    cy.visit("https://gallery-app.vivifyideas.com/register")
    registerpage.firstNameInputField.clear;
    registerpage.lastNameInputField.clear;
    registerpage.emailInputField.clear;
    registerpage.passwordInputField.clear;
    registerpage.conf_passwordInputField.clear;
    registerpage.termsCheckbox.click ()
    registerpage.submittBtn.click ()
});

})












