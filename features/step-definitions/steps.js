const { Given, When, Then } = require('@wdio/cucumber-framework');


Given("I am on the homepage", async () => {
    await browser.url(`https://www.newegg.com`);
});


When("I close the promo banner if it appears", async () => {

    try {
        await $('[class="modal-Website-img"]').toBeDisplayed();
        await $('[class="close"]').click();
    } 
    catch (error) {
        console.log("Promo banner did not appear");
    }
});


When("I enter the word {string} in the search bar", async (keyword) => {
    const search_bar = await $('input[type="search"]');
    await search_bar.setValue(keyword);
});


When("I click the search button", async () => {
    const searchButton = await $('[class="ico ico-search"]');
    await searchButton.click();
    await browser.pause(3000)
});


Then("I should see at least one item appears", async () => {
    
    const item= await $('[class="item-cell"]');
    await item.waitForDisplayed({ timeout: 7000 });
    expect(item).toBeDisplayed;
});


When("I open 'Today's Best Deals' tab", async () => {
    await $('[id="trendingBanner_720202"]').click();
 });



When("I click the logo of Internet shop", async () => {
    await $('[class="header2021-logo"]').click();
});


Then("I should be redirected back to the homepage", async () => {
    const url = await browser.getUrl();
    await expect(url).toEqual("https://www.newegg.com/");
});


